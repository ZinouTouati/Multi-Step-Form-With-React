import React, { Component } from 'react';

import './UserForm.css';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <React.Fragment>
        <form className='form'>
          <h1>Create Account</h1>
          <div className='social'>
            <a href='#'>
              <i className='fab fa-facebook-f'></i>
            </a>
            <a href='#'>
              <i className='fab fa-google-plus-g'></i>
            </a>
            <a href='#'>
              <i className='fab fa-linkedin-in'></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input
            type='text'
            name='firstName'
            placeholder='FirstName'
            onChange={handleChange}
            value={values.firstName}
          />
          <input
            type='text'
            name='lastName'
            placeholder='LastName'
            onChange={handleChange}
            value={values.lastName}
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            onChange={handleChange}
            value={values.email}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            onChange={handleChange}
            value={values.password}
          />
          <button onClick={this.continue} className='btn btn-1'>
            continue
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default FormUserDetails;
