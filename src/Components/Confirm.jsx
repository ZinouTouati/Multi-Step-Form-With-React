import React, { Component } from 'react';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values } = this.props;
    // console.log(values);
    return (
      <div style={styles.div}>
        <h1>Confirm</h1>
        <span>please confirm your details</span>
        <ul style={styles.ul}>
          <li style={styles.li}>{values.firstName}</li>
          <li style={styles.li}>{values.lastName}</li>
          <li style={styles.li}>{values.email}</li>
          <li style={styles.li}>{values.occupation}</li>
          <li style={styles.li}>{values.country}</li>
          <li style={styles.li}>{values.city}</li>
          <li style={styles.li}>{values.bio}</li>
        </ul>
        <button onClick={this.continue} className='btn btn-1'>
          continue
        </button>
        <button onClick={this.back} className='btn btn-2'>
          back
        </button>
      </div>
    );
  }
}

// Styles
const styles = {
  div: {
    height: '100%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '20px 50px'
  },
  ul: {
    backgroundColor: '#eee',
    padding: '0'
  },
  li: {
    padding: '12px 0px',
    margin: '8px 0'
  }
};

export default Confirm;
