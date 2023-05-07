import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const Checkout = () => {
    // Add a new document in collection "cities"
    // db.collection("orders").add({
    //     name: "Los Angeles",
    //     state: "CA",
    //     country: "USA"
    // })
    // .then(() => {
    //     console.log("Document successfully written!");
    // })
    // .catch((error) => {
    //     console.error("Error writing document: ", error);
    // });

  const { getCart, totalPrice } = useContext(CartContext)

  return (
    <div className='container' id='checkout'>
      <div className="data">
        <h1>
          Fill the checkout form
        </h1>
        <div className="personal">
          <h2><span>1</span>Personal Info</h2>
          <div className="form-group">
            <div className="name">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="surname">
              <label htmlFor="surname">Surname:</label>
              <input type="text" name="surname" id="surname" />
            </div>
          </div>
          <div className="form-group">
            <div className="phone">
              <label htmlFor="phone">Phone Number:</label>
              <input type="number" name="phone" id="phone" />
            </div>
          </div>
          <div className="form-group">
            <div className="email">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" />
            </div>
          </div>
          <div className="form-group">
            <div className="email-2">
              <label htmlFor="email_2">Repeat the Email:</label>
              <input type="email" name="email_2" id="email_2" />
            </div>
          </div>
        </div>
        <div className="billing">
          <h2><span>2</span>Billing Info</h2>
          <div className="form-group">
            <div className="card">
              <label htmlFor="card">Card Number:</label>
              <input id="card" type="tel" inputMode="numeric" readOnly pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength="19" placeholder="1234 1234 1234 1234" value="1234 1234 1234 1234"/>
            </div>
          </div>
          <div className="form-group">
            <div className="date">
              <label htmlFor="date">Expiration Date:</label>
              <input type="date" name="date" id="date" readOnly placeholder='30/12/2030'/>
            </div>
            <div className="number">
              <label htmlFor="number">Security Number: *</label>
              <input type="number" name="number" id="number" max="999" inputMode="numeric" pattern="[0-9]{3}" placeholder="123" readOnly value="123"/>
            </div>
          </div>
        </div>
      </div>
      <div className="summary">
        <h2>Your order</h2>
        {getCart().map(item => (
          <div className="item" key={item.id}>
            <span>{`${item.title} x${item.quantity}`}</span>
            <span>{((item.sale_price || item.price) * item.quantity).toFixed(2)}€</span>
          </div>
        ))}
        <div className="total">
          <h2>Total:</h2>
          <h3>{totalPrice().toFixed(2)}€</h3>
        </div>
        <button>PAY ORDER</button>
      </div>
    </div>
  )
}

export default Checkout
