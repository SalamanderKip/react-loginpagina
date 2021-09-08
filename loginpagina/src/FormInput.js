
import React from 'react';

class FormInput extends React.Component {
  render() {
    return (
      <div className="input-wrapper">
        <input type={ this.props.type } placeholder={ this.props.placeholder } id={ this.props.id } onChange={this.props.onChange}></input>
        <label htmlFor={ this.props.id }>{ this.props.labelname }</label> 
        <span className="tooltiptext"> </span>
      </div>
    );
  }
}

export default FormInput

