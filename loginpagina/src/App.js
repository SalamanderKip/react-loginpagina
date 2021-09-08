import { useState } from 'react'
import { useState, useEffect } from 'react'

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
export default App;
