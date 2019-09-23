import React, { Component } from 'react';

export class Seccess extends Component {
  render() {
    return (
      <div style={styles.layout}>
        <h1>Thank You</h1>
        <p>Sign in and start journey with us</p>
        <button onClick={this.continue} style={styles.btn}>
          Sign In
        </button>
      </div>
    );
  }
}

// Styles
const styles = {
  layout: {
    height: '100%',
    background: 'linear-gradient(to right, #ff4b2b, #ff416c)',
    color: '#fff',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: '0 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  btn: {
    fontSize: '12px',
    fontWeight: 'bold',
    padding: '12px 45px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    border: '1px solid #fff',
    borderRadius: '20px',
    backgroundColor: 'transparent',
    color: '#fff',
    cursor: 'pointer'
  }
};

export default Seccess;
