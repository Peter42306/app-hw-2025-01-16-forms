import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Form1 = () =>{
  const [value, setValue] = useState('');
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    alert('A name was submitted: ' + value);
    event.preventDefault();
  };



  return(
    <div className='border'>
      <form onSubmit={handleSubmit}>
      <p>Component Form1</p>
      <label>Name:</label>
      <input type='text' value={value} onChange={handleChange}/>
      <input type='submit' value="Submit from input"></input>
      <button type='submit'>Submit from button</button>
      
    </form>
    <hr></hr>
    </div>
    
  );
};

Form1.propTypes = {};

Form1.defaultProps = {};

export default Form1;
