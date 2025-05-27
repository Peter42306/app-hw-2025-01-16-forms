import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { saveAs } from 'file-saver';


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

  const [sex, setSex] = useState('');
  const [isSexValid, setIsSexValid] = useState(false);

  const [languages, setLanguages] = useState([]);
  const [isLanguagesValid, setIsLanguagesValid] = useState(false);

  const [about, setAbout] = useState('');  

  // const [userData, setUserData] = useState({
  //   userId,password,name,address,country,zipCode,eMail,sex,languages,about
    
  // })

  const [users, setUsers] = useState([]);

  /////////////////////////////////////////////

  useEffect(() => {    
    if (users.length > 0) {
      saveToFileJson(users);
    }
  }, [users]);
  
  const handleSubmit = (event) => {

    event.preventDefault();

    if(!isUserIdValid){
      alert('User id is not valid');
      return;
    }

    if(!isPasswordValid){
      alert('Password is not valid');
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
      return;
    }

    if(!isZipCodeValid){
      alert('ZIP Code is not valid');
      return;
    }

    if(!isEMailValid){
      alert('E-mail is not valid');
      return;
    }

    if(!isSexValid){
      alert('Please select sex');
      return;
    }

    if(languages.length === 0){
      alert('Please select language');
      return;
    }

    if(!userId || !password || !name || !address || !country || !zipCode || !eMail || !sex || languages.length === 0){
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
        sex: sex,
        languages: languages,
        about: about
      }
      
    ]);    

    //saveToFileJson();    

    setUserId('');
    setPassword('');
    setName('');
    setAddress('');
    setCountry('');
    setZipCode('');
    setEMail('');
    setSex('');
    setLanguages([]);
    setAbout('');    
    
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

  const handleChangeSex = (event) => {
    const newValue = event.target.value;
    setSex(newValue);
    setIsSexValid(newValue !== '');
  };

  const handleChangeLanguages = (event) => {
    const newValue = event.target.value;
    const isChecked = event.target.checked;

    if(isChecked){
      setLanguages((prevLanguages) => [...prevLanguages, newValue]);
    } else {
      setLanguages((prevLanguages) => prevLanguages.filter((language) => language !==newValue));
    }        
  };

  const handleChangeAbout = (event) => {    
    const newValue = event.target.value;    
    setAbout(newValue);    
  };

  const saveToFileJson = () => {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const date = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');

    console.log('File name + ' + currentDate);
    console.log('File name + ' + year);
    console.log('File name + ' + month);
    console.log('File name + ' + date);
    console.log('File name + ' + hours);
    console.log('File name + ' + minutes);
    console.log('File name + ' + seconds);

    const fileName = `users-${year}-${month}-${date}-${hours}-${minutes}-${seconds}.json`;
    
    const dataToSave = JSON.stringify(users, null, 2);

    const blob = new Blob([dataToSave], {type: 'application/json'});       

    saveAs(blob, fileName);
  };


  /////////////////////////////////////////////

  return(
    <div className='border width-custom' >
      <p>Form Validation Template</p>
      
      <form onSubmit={handleSubmit}>

        <div className='user-input-block'>
          <label className='label'>User ID (5 to 7 digits):</label>
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
          <label className='label'>Password (7 to 12 charecters, letters and numbers):</label>
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
          <label className='label'>Name (letters only):</label>
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
          <label className='label'>Address (letters and numbers):</label>
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
          <label className='label'>Country (select one):</label>
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
          <label className='label'>ZIP Code (letters and numbers):</label>
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
          <label className='label'>Email (valid format):</label>
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

        <div className='user-input-block'>
          <label className='label'>Gender (select one):</label>

          <div>
            <input
              type='radio'
              value="Male"
              id='male'              
              checked={sex === "Male"}
              onChange={handleChangeSex}
            />
            <label htmlFor='male'>Male</label>
            
            <input
              type='radio'
              value="Female"
              id='female'              
              checked={sex === "Female"}
              onChange={handleChangeSex}
            />
            <label htmlFor='female'>Female</label>
          </div>
          
        </div>

        <div className='user-input-block'>
          <label className='label'>Language (optional):</label>

          <div>
            <input
              type='checkbox'
              value="English"
              id='english'              
              checked={languages.includes("English")}
              onChange={handleChangeLanguages}
            />
            <label htmlFor='english'>English</label>

            <input
              type='checkbox'
              value="Spanish"
              id='spanish'              
              checked={languages.includes("Spanish")}
              onChange={handleChangeLanguages}
            />
            <label htmlFor='spanish'>Spanish</label>

            <input
              type='checkbox'
              value="German"
              id='german'              
              checked={languages.includes("German")}
              onChange={handleChangeLanguages}
            />
            <label htmlFor='german'>German</label>

            <input
              type='checkbox'
              value="OtherLanguage"
              id='otherLanguage'              
              checked={languages.includes("OtherLanguage")}
              onChange={handleChangeLanguages}
            />
            <label htmlFor='otherLanguage'>Other language</label>
            
          </div>          
        </div>

        <div className='user-input-block'>
          <label className='label'>About (optional):</label>
          <textarea
            value={about}
            onChange={handleChangeAbout}
            className='input-border-default'
            rows={7}
          />          
        </div>
        
        <div className='button'>
          <button type='submit'>Submit data</button>
        </div>          
      </form>

      <div>        
        <ol>
        {users.slice().reverse().map((user, index) => (
          <li key={index}>
            Id: {user.id},<br/>
            Password: {user.password},<br/>
            Name: {user.name},<br/>
            Address: {user.address},<br/>
            Country: {user.country},<br/>
            ZIP Code: {user.zipCode},<br/>
            Email: {user.eMail},<br/>
            Sex: {user.sex},<br/>
            Languages: {user.languages.join(', ')},<br/>
            About: {user.about}
            <hr></hr>
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
