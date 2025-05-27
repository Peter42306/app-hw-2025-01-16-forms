import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Form5 = () =>{

  const [inputNumber, setInputNumber] = useState('');
  const [calculatedNumber1, setCalculatedNumber1] = useState('');
  const [calculatedNumber2, setCalculatedNumber2] = useState('');
  const [decimalPlaces, setDecimalPlaces] = useState('1');
  const [previousCalculations, setPreviousCalculations] = useState([]);

  const handleSubmit = (event) => {
    
    //alert('handleSumbit called');
    console.log('handleSubmit called');
    event.preventDefault();

    setPreviousCalculations(prevCalculations => [
      ...prevCalculations, {
        inputNumber: inputNumber,
        calculatedNumber1: calculatedNumber1,
        calculatedNumber2: calculatedNumber2,
        decimalPlaces: decimalPlaces
      }
    ]);

    setInputNumber('');
    setCalculatedNumber1('');
    setCalculatedNumber2('');
    
  };

  const handleChangeInputNumber = (event) => {
    const newValue = event.target.value;
    setInputNumber(newValue);





    const calculatedNumber1 = (newValue * 0.5).toFixed(parseInt(decimalPlaces));    
    const calculatedNumber2 = (newValue * 0.05).toFixed(parseInt(decimalPlaces));

    setCalculatedNumber1(calculatedNumber1);    
    setCalculatedNumber2(calculatedNumber2);

    console.log(`inputNaumber: ${newValue}`);
    console.log(`inputNaumber1: ${calculatedNumber1}`);
    console.log(`inputNaumber2: ${calculatedNumber2}`);
  };

  const handleChangeDecimalPlaces = (event) => {
    const newValue = event.target.value;
    setDecimalPlaces(newValue);
  };

  return(
    <div className='border width-custom'>
      <p>Calculator for fixed values</p>
      
      <form onSubmit={handleSubmit}>
        
        <label>Enter value X:</label><br/>

        <input
          type='number'
          value={inputNumber}
          onChange={handleChangeInputNumber}
        /><br/>
        <button type='submit'>Submit to array</button>               

      </form>

      <hr/>

      <div>
        <label>Decimal places: </label>

        <input
          type='radio'
          value='0'
          id='0'
          checked={decimalPlaces === '0'}
          onChange={handleChangeDecimalPlaces}
        />
        <label htmlFor='0'>0</label>

        <input
          type='radio'
          value='1'
          id='1'
          checked={decimalPlaces === '1'}
          onChange={handleChangeDecimalPlaces}
        />
        <label htmlFor='1'>1</label>

        <input
          type='radio'
          value='2'
          id='2'
          checked={decimalPlaces === '2'}
          onChange={handleChangeDecimalPlaces}
        />
        <label htmlFor='2'>2</label>

        <input
          type='radio'
          value='3'
          id='3'
          checked={decimalPlaces === '3'}
          onChange={handleChangeDecimalPlaces}
        />
        <label htmlFor='3'>3</label>

        <input
          type='radio'
          value='4'
          id='4'
          checked={decimalPlaces === '4'}
          onChange={handleChangeDecimalPlaces}
        />
        <label htmlFor='4'>4</label>
      </div>     

      <hr/>

      <div>
        <label>X * 0.5  = {calculatedNumber1}</label>
      </div>      

      <div>
        <label>X * 0.05  = {calculatedNumber2}</label>
      </div>      

      <hr/>

      <p>History:</p>

      <div>
        <ol>
          {previousCalculations.slice().reverse().map((calculation, index) => (
            <li key={index}>
              Input Number: {calculation.inputNumber}<br/>
              Result 1: {calculation.inputNumber} * 0.5 = {calculation.calculatedNumber1}<br/>
              Result 2: {calculation.inputNumber} * 0.05 = {calculation.calculatedNumber2} <br/>
              Decimal Places: {calculation.decimalPlaces}
              <hr/>
            </li>
          ))}
        </ol>
      </div>

    </div>
  )
};

Form5.propTypes = {};

Form5.defaultProps = {};

export default Form5;
