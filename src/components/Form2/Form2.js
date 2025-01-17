import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Form2 = () => {

  const [value, setValue] = useState('Будьте любезны, напишите сочинение о вашем любимом DOM-элементе.');
  
  const handleChange = (event) => {        
    setValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Сочинение отправлено: ' + value);    
  };

  const handleFocus = (event) => {
    if( value === 'Будьте любезны, напишите сочинение о вашем любимом DOM-элементе.'){
      setValue('');
    }        
  };

  return(
    <div className='border'>
      <form onSubmit={handleSubmit}>
      <p>Component Form2</p>
      <label>Сочинение:</label>
      <textarea value={value} onChange={handleChange} onFocus={handleFocus}/>
      <input type='submit' value='Sumbit message to alert'/>
      </form>
      <hr></hr>
    </div>
    
  );
};

Form2.propTypes = {};

Form2.defaultProps = {};

export default Form2;
