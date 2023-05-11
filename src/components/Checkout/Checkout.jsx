import React, { useState } from 'react';
import { FormFields } from './FormFields/FormFields';
import { Summary } from './Summary/Summary';

const Checkout = () => {
  const [formFields, setFormFields] = useState({
    name: '',
    surname: '',
    phone: '',
    email: '',
    email_2: '',
    card: '1234 1234 1234 1234',
    date: '2030-12-31',
    number: '123',
  });

  const [formErrors, setFormErrors] = useState({
    name: null,
    surname: null,
    phone: null,
    email: null,
    email_2: null,
    card: null,
    date: null,
    number: null,
  });

  const handleInputChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  const validateField = (fieldName) => {
    const value = formFields[fieldName];
    let errorMessage = null;

    if (!value.trim()) {
      errorMessage = 'Este campo es requerido';
    } else if (fieldName === 'email') {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(value)) {
        errorMessage = 'Correo electrónico inválido';
      }
    } else if (fieldName === 'email2' && value !== formFields['email']) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(value)) {
        errorMessage = 'El correo electrónico no coincide.';
      }
    } else if (fieldName === 'phone') {
      const regex = /^\d{9,}$/;
      if (!regex.test(value)) {
        errorMessage = 'El formato de número de teléfono es erróneo.';
      }
    }
    
    setFormErrors({
      ...formErrors,
      [fieldName]: errorMessage,
    });
  };

  const hasErrors = () => {
    return Object.values(formErrors).some(error => error !== null);
  };
  
  return (
    <div className='container' id='checkout'>
      <div className="data">
        <h1>
          Fill the checkout form
        </h1>
        <form>
          <FormFields 
            formFields={formFields} 
            formErrors={formErrors}
            handleInputChange={handleInputChange}
            validateField={validateField}
          />
        </form>
      </div>
      <div className="summary">
        <Summary />
        <button
          disabled={hasErrors()}
          className='submit-checkout'
        >
          PAY ORDER
        </button>
      </div>
    </div>
  )
}

export default Checkout;
