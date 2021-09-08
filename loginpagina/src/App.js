function App() {
  return (
    <Dummy text="Log in bij naam">
      <FormInput type="text" placeholder="name"/>
      <FormInput type="password" placeholder="password"/>
    </Dummy>
  );
}

function Dummy(props) {
  return (
    <div className='main'>
    <h1>{ props.text }</h1>
      { props.children }
    <a>Inloggen</a>
    </div>
  );
}
function FormInput(props) {
  return (
    <input type={ props.type } placeholder={ props.placeholder }></input> 
  );
}
export default App;
