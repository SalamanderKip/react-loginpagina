import React from 'react';
import LoginForm from './LoginForm';
import FormInput from './FormInput';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: '',
        buttonEnabled: false,
      };
  
      this.handleUserNameChange = this.handleUserNameChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleUserNameChange(event) {
      const username = event.target.value;
      this.setState({ username: username });
      this.setState({ buttonEnabled: this.shouldEnableLoginButton(username, this.state.password) });
    }

    handlePasswordChange(event) {
      const password = event.target.value;
      this.setState({ password: event.target.value});
      this.setState({ buttonEnabled: this.shouldEnableLoginButton(password, this.state.username) });
    }

    shouldEnableLoginButton(value1, value2) {
      return (value1?.length > 0 && value2?.length > 0) ?? false;
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.username);
      event.preventDefault();
    }
 
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <LoginForm text="Login at SalamanderKip.nl" onLogin="">
            <FormInput type="text" placeholder="username" className="tooltip" id="username" labelname="username" value={this.state.value} onChange={this.handleUserNameChange}/>
            <FormInput type="password" placeholder="password" className="tooltip" id="password" labelname="password" value={this.state.value} onChange={this.handlePasswordChange}/>
            <button disabled={ this.state.buttonEnabled ? "" :"disabled"  } className="login-button" href="#" onClick={this.handleSubmit}>Login</button>
          </LoginForm>
        </form>
      );
    }
  }

  export default App



// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputvalue: ''
//     };
//   }

//     handleChange(event){
//       alert(event.target.value);
//       // event.preventDefault();

//     }
//   render() {
//     return (
//       //...
//       <input value={this.state.value} onChange={evt => this.updateInputValue(evt)}/>
//       //...
//     );
//   }

//   updateInputValue(evt) {
//     this.setState({
//       inputValue: evt.target.value
//     });
//   }
// }
