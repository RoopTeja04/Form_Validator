import React, { useState } from 'react';
import './App.css';
import ClearIcon from '@mui/icons-material/Clear';
import Navbar from './Navbar';

function App() {
  const [inputs, setInputs] = useState({
    firstname: '',
    lastname: '',
    email: '',
    number: '',
  });
  const [sucess, setSucess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("First Name:", inputs.firstname);
    console.log("Last Name:", inputs.lastname);
    console.log("E-Mail:", inputs.email);
    console.log("Mobile Number:", Number(inputs.number));
    setSucess(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({
      ...inputs, [name]: value
    }));
  };

  const handleClose = () => {
    setSucess(false);
  };

  return (
    <>
      <div className='App'>
        <Navbar />
        <form className='Form' onSubmit={handleSubmit}>
          <div className='input'>
            <div className='input-s'>
              <input
                className="text"
                type='text'
                name='firstname'
                onChange={handleChange}
                required
                spellCheck="false"
              />
              <label>Enter Your First Name</label>
            </div>
            <div className='input-s'>
              <input
                className="text"
                type='text'
                name='lastname'
                onChange={handleChange}
                required
                spellCheck="false"
              />
              <label>Enter Your Last Name</label>
            </div>
          </div>
          <div className='input-field'>
            <input
              className="text"
              type="email"
              name="email"
              onChange={handleChange}
              required />
            <label>Enter Your Email</label>
          </div>
          <div className='input-field'>
            <input
              className="text"
              type="tel"
              name="number"
              onChange={handleChange}
              required />
            <label>Enter Your Number</label>
          </div>
          <button className="submit-btn">Submit</button>
        </form>
        {sucess && 
          <div className='success'>
            <p className='sucess-message'>Your Data is Saved Successfully</p>
            <button className='close' onClick={handleClose}>
              <ClearIcon />
            </button>
          </div>
        }
      </div>
    </>
  );
}

export default App;