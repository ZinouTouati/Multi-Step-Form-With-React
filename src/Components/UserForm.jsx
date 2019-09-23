import React, { Component } from 'react';

// Import Components
import Welcom from './Welcom';
import FormUserDetails from './FormUserDetails';
import FormPorsonalDetails from './FormPorsonalDetails';
import Confirm from './Confirm';
import Seccess from './Seccess';

export class UserForm extends Component {
  // Create State
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    occupation: '',
    country: '',
    city: '',
    bio: ''
  };

  // Proced To Next Step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go Back To Prev Step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle Field Change
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { step } = this.state;
    // this.state.firstName, ...
    const {
      firstName,
      lastName,
      email,
      password,
      occupation,
      country,
      city,
      bio
    } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      password,
      occupation,
      country,
      city,
      bio
    };
    // console.log(values);

    switch (step) {
      case 1:
        return <Welcom nextStep={this.nextStep} />;
      case 2:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <FormPorsonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 5:
        return <Seccess />;
    }
  }
}

export default UserForm;
