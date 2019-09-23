import React, { Component } from 'react';

import './UserForm.css';

export class FormPorsonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <form className='form'>
          <h1>Create Account</h1>
          <div className='social'>
            <a href='#'>
              <i class='fab fa-facebook-f'></i>
            </a>
            <a href='#'>
              <i class='fab fa-google-plus-g'></i>
            </a>
            <a href='#'>
              <i class='fab fa-linkedin-in'></i>
            </a>
          </div>
          <span>input your porsonal details for registration</span>
          <input
            type='text'
            name='occupation'
            placeholder='Occupation'
            onChange={handleChange}
            value={values.occupation}
          />
          <input
            type='text'
            name='country'
            placeholder='Country'
            onChange={handleChange}
            value={values.country}
          />
          <input
            type='text'
            name='city'
            placeholder='City'
            onChange={handleChange}
            value={values.city}
          />
          <input
            type='text'
            name='bio'
            placeholder='Bio'
            onChange={handleChange}
            value={values.bio}
          />
          <button onClick={this.continue} className='btn btn-1'>
            continue
          </button>
          <button onClick={this.back} className='btn btn-2'>
            back
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default FormPorsonalDetails;
