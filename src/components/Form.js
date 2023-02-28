import React, { useContext, useState } from 'react';
import { Store } from '../Store';

export default function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const registerHandler = async (e) => {
    e.preventDefault();
    localStorage.setItem(
      'userInfo',
      JSON.stringify({ name: name, email: email })
    );
    ctxDispatch({ type: 'SIGN_IN', payload: { name: name, email: email } });
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
