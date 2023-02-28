import React, { useState } from 'react';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const registerHandler = async (e) => {
    e.preventDefault();
    alert(name + ' ' + email);
  };

  return (
    <div className="form-container">
      <form className="register-form" onSubmit={registerHandler}>
        <div className="input-field-tags">
          <label>
            Name <div className="required-element"> * </div>{' '}
          </label>{' '}
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="input-fields"
            required
          />
        </div>{' '}
        <div className="input-field-tags">
          <label>
            Email <div className="required-element"> * </div>{' '}
          </label>{' '}
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="input-fields"
            required
          />{' '}
        </div>{' '}
        <button type="submit" className="register-button">
          Submit{' '}
        </button>{' '}
      </form>{' '}
    </div>
  );
}
