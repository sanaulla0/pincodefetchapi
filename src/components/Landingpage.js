import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import "./Landing.css";
const Landingpage = ({ onPincodeChange }) => {

  const [pin, setPin] = useState('');
  const navigate = useNavigate();

  const handleChange = (e)=>{
    setPin(e.target.value);
  }

  const handleClick = () => {
    if (pin) {
     onPincodeChange(pin);
     navigate('/Pincode', { state: { pincode: pin } });
    }
  }

  return (
    <div>
      <h1>Enter Pincode</h1>
      <input className='input' type='text' placeholder="enter pincode" onChange={handleChange} />
      <br />
      <button type='submit' className='btn' onClick={handleClick}>LookUp</button>
    </div>
  )
}

export default Landingpage;
