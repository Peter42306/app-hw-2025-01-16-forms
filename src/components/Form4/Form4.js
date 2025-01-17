import React, { useState } from 'react';
import PropTypes from 'prop-types';


const Form4 = () => {

  const [userId, setUserId] = useState('');
  const [isUserIdValid, setUserIdIsValid] = useState(false);

  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [name, setName] = useState('');
  const [isNameValid, setIsNameValid] = useState(false);

  const [address, setAddress] = useState('');
  const [isAddressValid, setIsAddressValid] = useState(false);

  const [country, setCountry] = useState('');
  const [isCountryValid, setIsCountryValid] = useState(false);

  const [zipCode, setZipCode] = useState('');
  const [isZipCodeValid, setIsZipCodeValid] = useState(false);

  const [eMail, setEMail] = useState('');
  const [isEMailValid, setIsEMailValid] = useState(false);

  const [users, setUsers] = useState([]);

  /////////////////////////////////////////////
  
  const handleSubmit = (event) => {

    event.preventDefault();

    if(!isUserIdValid){
      alert('User id is not valid. It should be 5-7 characters long');
      return;
    }

    if(!isPasswordValid){
      alert('Password is not valid. It should be 7-12 characters long');
      return;
    }

    if(!isNameValid){
      alert('Name is not valid');
      return;
    }

    if(!isAddressValid){
      alert('Address is not valid');
      return;
    }

    if(!isCountryValid){
      alert('Country is not valid');
    }

    if(!isZipCodeValid){
      alert('ZIP Code is not valid');
    }

    if(!isEMailValid){
      alert('E-mail is not valid');
    }

    if(!userId || !password || !name || !address || !country || !zipCode || !eMail){
      alert('All inputs must be filled');
      return;
    }

    setUsers(prevUsers => [
      ...prevUsers, {
        id: userId, 
        password: password, 
        name: name, 
        address: address,
        country: country,
        zipCode: zipCode,
        eMail: eMail,
      }
    ]);

    setUserId('');
    setPassword('');
    setName('');
    setAddress('');
    setCountry('');
    setZipCode('');
    setEMail('');
  };

  /////////////////////////////////////////////

  const handleChangeUserId = (event) => {
    const newValue = event.target.value;

    if(newValue==='' || /^\d*$/.test(newValue)){
      setUserId(newValue);
      const isValidLength = newValue.length >= 5 && newValue.length <= 7;
      setUserIdIsValid(isValidLength);
    }
  };

  const handleChangePassword = (event) => {    
    const newValue = event.target.value;    
    if(newValue==='' || /^[A-Za-z0-9]+$/.test(newValue)){
      setPassword(newValue);
      const isValidLength = newValue.length >= 7 && newValue.length <= 12;
      setIsPasswordValid(isValidLength);
    }    
  };

  const handleChangeName = (event) => {    
    const newValue = event.target.value;
    if(newValue==='' || /^[a-zA-Z\s]+$/.test(newValue)){
      setName(newValue);
      const isValidLength = newValue.length >= 2 && newValue.length <= 40;
      setIsNameValid(isValidLength);
    }    
  };

  const handleChangeAddress = (event) => {    
    const newValue = event.target.value;
    if(newValue==='' || /^[a-zA-Z0-9\s]+$/.test(newValue)){
      setAddress(newValue);
      const isValidLength = newValue.length >= 2 && newValue.length <= 100;
      setIsAddressValid(isValidLength);
    }    
  };

  const handleChangeCountry = (event) => {
    const newValue = event.target.value;
    setCountry(newValue);
    setIsCountryValid(newValue !== "");
  };

  const handleChangeZipCode = (event) => {    
    const newValue = event.target.value;
    if(newValue==='' || /^[A-Z0-9\s-]+$/.test(newValue)){
      setZipCode(newValue);
      const isValidLength = newValue.length >= 5 && newValue.length <= 7;
      setIsZipCodeValid(isValidLength);
    }
  };

  const handleChangeEMail = (event) => {
    const newValue = event.target.value;
    const isValidEMailName = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(newValue);    
    setEMail(newValue);
    const isValidLength = newValue.length >= 5 && newValue.length <= 50;
    setIsEMailValid(isValidEMailName && isValidLength);    
  };




  /////////////////////////////////////////////

  return(
    <div className='border width-custom' >
      <p>Component Form4</p>
      
      <form onSubmit={handleSubmit}>

        <div className='user-input-block'>
          <label className='label'>User id [5 to 7 charecters]:</label>
          <input 
            type='text'            
            value={userId}
            onChange={handleChangeUserId}
            className={`${
              userId === ''
              ? 'input-border-default'
              : isUserIdValid 
                ? 'input-border-valid' 
                : 'input-border-not-valid'
              }`}
          />
        </div>

        <div className='user-input-block'>
          <label className='label'>Password [7 to 12 charecters]:</label>
          <input 
            type='text'
            value={password}
            onChange={handleChangePassword}
            className={`${
              password === ''
              ? 'input-border-default' 
              : isPasswordValid 
                ? 'input-border-valid' 
                : 'input-border-not-valid'
              }`}
          />
        </div>

        <div className='user-input-block'>
          <label className='label'>Name [Alphabates characters]:</label>
          <input 
            type='text'
            value={name}
            onChange={handleChangeName}
            className={`${
              name === ''
              ? 'input-border-default' 
              : isNameValid 
                ? 'input-border-valid' 
                : 'input-border-not-valid'
              }`}
          />
        </div>

        <div className='user-input-block'>
          <label className='label'>Address [alphanumeric characters]:</label>
          <input 
            type='text'
            value={address}
            onChange={handleChangeAddress}
            className={`${
              address === ''
              ? 'input-border-default' 
              : isAddressValid 
                ? 'input-border-valid' 
                : 'input-border-not-valid'
              }`}
          />
        </div>

        <div className='user-input-block'>
          <label className='label'>Country [Must select country]:</label>
          <select 
            value={country} 
            onChange={handleChangeCountry}
            className={`${
              country === ''
              ? 'input-border-default'
              : isCountryValid
                ? 'input-border-valid' 
                : 'input-border-not-valid'
              }`}
            >
              <option value=''>Please select a country</option>
              <option value='Algeria'>Algeria</option>
              <option value='Egypt'>Egypt</option>
              <option value='Ethiopia'>Ethiopia</option>
              <option value='Ghana'>Ghana</option>
              <option value='Morocco'>Morocco</option>
              <option value='Nigeria'>Nigeria</option>
              <option value='Uganda'>Uganda</option>
          </select>
        </div>
        
        <div className='user-input-block'>
          <label className='label'>ZIP Code [alphanumeric characters]:</label>
          <input 
            type='text'
            value={zipCode}
            onChange={handleChangeZipCode}
            className={`${
              zipCode === ''
              ? 'input-border-default' 
              : isZipCodeValid
                ? 'input-border-valid' 
                : 'input-border-not-valid'
              }`}
          />
        </div>

        <div className='user-input-block'>
          <label className='label'>Email [Valid email]:</label>
          <input 
            type='text'
            value={eMail}
            onChange={handleChangeEMail}
            className={`${
              eMail === ''
              ? 'input-border-default' 
              : isEMailValid
                ? 'input-border-valid' 
                : 'input-border-not-valid'
              }`}
          />
        </div>
        
        <div className='button'>
          <button type='submit'>Submit data</button>
        </div>  
      </form>

      <div>
        {/* <p>Users entered:</p>        
        {users.map((user, index) => (
          <p key={index}>Id: {user.id}, Password: {user.password}, Name: {user.name}</p>
        ))} */}
        <ol>
        {users.map((user, index) => (
          <li key={index}>
            Id: {user.id}, 
            Password: {user.password}, 
            Name: {user.name}, 
            Address: {user.address},
            Country: {user.country},
            ZIP Code: {user.zipCode},
            Email: {user.eMail},
          </li>          
        ))}
        </ol>
      </div>

          

    </div>
  );
};

Form4.propTypes = {};

Form4.defaultProps = {};

export default Form4;
