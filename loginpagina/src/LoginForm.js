import React from 'react';

class LoginForm extends React.Component {
  render() {
    return (
      <div className='main'>
      <h1>{ this.props.text }</h1>
        { this.props.children }            
      </div>
    );
  }
}

export default LoginForm

  