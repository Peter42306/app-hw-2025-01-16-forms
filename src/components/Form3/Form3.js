import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Form3 = () => {
  const [value, setValue] = useState('choose');

  const handleChange = (event) => {    
    const newValue = event.target.value;
    console.log('handleChange called: ' + value);
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log('handleSubmit called: ' + value);
    event.preventDefault();
  };

  return(
    <div className='border'>
      <p>Component Form3</p>
      <form onSubmit={handleSubmit}>
        <label>Choose your fruit:</label>
        <select value={value} onChange={handleChange}>
          <option>Choose your fruit</option>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <input type='submit' value="Submit the selected value"/>
      </form>      
    </div>
  );
};

Form3.propTypes = {};

Form3.defaultProps = {};

export default Form3;
