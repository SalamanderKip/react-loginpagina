import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react'
import  NameForm from './Form'

function App() {
  return (
    <Dummy text="Log in bij SalamanderKip.nl">
      <FormInput type="text" placeholder="username" class="tooltip" id="username" labelname="username"/>
      <FormInput type="password" placeholder="password" class="tooltip" id="password" labelname="password"/>
    </Dummy>
  );
}

function Dummy(props) {
  return (
    <div className='main'>
    <h1>{ props.text }</h1>
      { props.children }
    <a className="login-button" href="#">Inloggen</a>
    </div>
  );
}

function FormInput(props) {
  return (
    <div class="input-wrapper">
      <input type={ props.type } placeholder={ props.placeholder } id={ props.id }></input>
      <label for={ props.id }>{ props.labelname }</label> 
      <span class="tooltiptext"> </span>
    </div>
  );
}

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


export default App;
