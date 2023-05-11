import React from 'react'

export const FormFields = ({ formFields, formErrors, handleInputChange, validateField }) => {
    return (
        <>
            <div className="personal">
                <h2><span>1</span>Personal Info</h2>
                <div className="form-group">
                    <div className="name">
                        <label htmlFor="name" className='required'>Name:</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formFields.name}
                            onChange={handleInputChange}
                            onBlur={() => validateField('name')}
                            className={formErrors.name ? 'error' : ''}
                        />
                        {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                    </div>
                    <div className="surname">
                        <label htmlFor="surname" className='required'>Surname:</label>
                        <input
                            type="text"
                            name="surname"
                            id="surname"
                            value={formFields.surname}
                            onChange={handleInputChange}
                            onBlur={() => validateField('surname')}
                            className={formErrors.surname ? 'error' : ''}
                        />
                        {formErrors.surname && <span className="error-message">{formErrors.surname}</span>}
                    </div>
                </div>
                <div className="form-group">
                    <div className="phone">
                        <label htmlFor="phone" className='required'>Phone Number:</label>
                        <input
                            type="number"
                            name="phone"
                            id="phone"
                            value={formFields.phone}
                            onChange={handleInputChange}
                            onBlur={() => validateField('phone')}
                            className={formErrors.phone ? 'error' : ''}
                        />
                        {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
                    </div>
                </div>
                <div className="form-group">
                    <div className="email">
                        <label htmlFor="email" className='required'>Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formFields.email}
                            onChange={handleInputChange}
                            onBlur={() => validateField('email')}
                            className={formErrors.email ? 'error' : ''}
                        />
                        {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                    </div>
                </div>
                <div className="form-group">
                    <div className="email-2">
                        <label htmlFor="email_2" className='required'>Repeat the Email:</label>
                        <input
                            type="email"
                            name="email_2"
                            id="email_2"
                            value={formFields.email_2}
                            onChange={handleInputChange}
                            onBlur={() => validateField('email_2')}
                            className={formErrors.email_2 ? 'error' : ''}
                        />
                        {formErrors.email_2 && <span className="error-message">{formErrors.email_2}</span>}
                    </div>
                </div>
            </div>
            <div className="billing">
                <h2><span>2</span>Billing Info</h2>
                <div className="form-group">
                    <div className="card">
                        <label htmlFor="card" className='required'>Card Number:</label>
                        <input
                            id="card"
                            type="tel"
                            inputMode="numeric"
                            readOnly
                            pattern="[0-9\s]{13,19}"
                            autoComplete="cc-number"
                            maxLength="19"
                            placeholder="1234 1234 1234 1234"
                            value={formFields.card}
                            onChange={handleInputChange}
                            onBlur={() => validateField('card')}
                            className={formErrors.card ? 'error' : ''}
                        />
                        {formErrors.card && <span className="error-message">{formErrors.card}</span>}
                    </div>
                </div>
                <div className="form-group">
                    <div className="date">
                        <label htmlFor="date" className='required'>Expiration Date:</label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            readOnly
                            value={formFields.date}
                            onChange={handleInputChange}
                            onBlur={() => validateField('date')}
                            className={formErrors.date ? 'error' : ''}
                        />
                        {formErrors.date && <span className="error-message">{formErrors.date}</span>}
                    </div>
                    <div className="number">
                        <label htmlFor="number" className='required'>Security Number:</label>
                        <input
                            type="number"
                            name="number"
                            id="number"
                            max="999"
                            inputMode="numeric"
                            pattern="[0-9]{3}"
                            placeholder="123"
                            readOnly
                            value={formFields.number}
                            onChange={handleInputChange}
                            onBlur={() => validateField('number')}
                            className={formErrors.number ? 'error' : ''}
                        />
                        {formErrors.number && <span className="error-message">{formErrors.number}</span>}   
                    </div>
                </div>
            </div>
        </>
    )
}
