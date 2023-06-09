import React, { useContext, useState } from 'react';
import { FormFields } from './FormFields/FormFields';
import { Summary } from './Summary/Summary';
import Swal from 'sweetalert2'
import { db } from '../../firebase/config';
import { CartContext } from '../../contexts/CartContext';

const Checkout = () => {
  const [formFields, setFormFields] = useState({
    firstname: '',
    surname: '',
    phone: '',
    email: '',
    email_2: '',
    card: '1234 1234 1234 1234',
    date: '2030-12-31',
    number: '123',
  });

  const [formErrors, setFormErrors] = useState({
    firstname: null,
    surname: null,
    phone: null,
    email: null,
    email_2: null,
    card: null,
    date: null,
    number: null,
  });

  const validateField = (fieldName) => {
    const value = formFields[fieldName];
    let errorMessage = null;

    if (!value.trim()) {
      errorMessage = 'This field is required.';
    } else if (fieldName === 'email') {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(value)) {
        errorMessage = 'Invalid email address.';
      }
    } else if (fieldName === 'email_2') {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(value) || value !== formFields['email']) {
        errorMessage = 'The email address doesn\'t match.';
      }
    } else if (fieldName === 'phone') {
      const regex = /^\d{9,}$/;
      if (!regex.test(value)) {
        errorMessage = 'The format is not valid (+9 numbers).';
      }
    }

    setFormErrors({
      ...formErrors,
      [fieldName]: errorMessage,
    });
  };

  const { setCart, getCart, totalPriceIVA } = useContext(CartContext)
  if(getCart().length === 0) window.location.replace("/");
  const validateCheckout = (e) => {
    e.preventDefault();

    if(!hasErrors()) {
      const {firstname, surname, phone, email} = formFields;
      const order = {
        buyer: {
          email,
          firstname,
          surname,
          phone,
        },
        payed: true,
        items: getCart(),
        total_price: totalPriceIVA(),
        date: new Date().toLocaleString('es-ES'),
      }
      
      db().collection('orders').add(order)
        .then((res) => {
          Swal.fire({
            icon: 'success',
            title: 'Order created successfully!',
            text: `Save your order ticker number: ${res.id}`,
            willClose: () => {
              setCart([])
              localStorage.removeItem("cart")
              window.location.replace('/')
            }
          })
        })
  
      // carrito.forEach((item) => {
      //   const docRef = db().collection('products').doc(item.id)
  
      //   docRef.get()
      //     .then((doc) => {
      //       docRef.update({
      //         stock: doc.data().stock - item.counter
      //       })
      //     })
      // })
    }
  }

  const hasErrors = () => {
    const {firstname, surname, phone, email, email_2, card, date, number} = formFields;
    if(!firstname || !surname || !phone || !email || !email_2 || !card || !date || !number){
      return true;
    }
    return Object.values(formErrors).some(error => error !== null);
  };
  
  return (
    <form method="post" onSubmit={(e) => validateCheckout(e)}>
      <div className='container' id='checkout'>
        <div className="data">
          <h1>
            Fill the checkout form
          </h1>
            <FormFields 
              formFields={formFields} 
              setFormFields={setFormFields}
              formErrors={formErrors}
              validateField={validateField}
            />
        </div>
        <div className="summary">
          <Summary />
          <button
            type='submit'
            disabled={hasErrors()}
            className='submit-checkout'
          >
            PAY ORDER
          </button>
        </div>
      </div>
    </form>
  )
}

export default Checkout;
