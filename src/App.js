import React,{useState} from 'react';
import Landingpage from './components/Landingpage';
import {Routes , Route} from 'react-router-dom';
import './App.css';
import Pincode from './components/Pincode';

function App() {
  const [pincode, setPincode] = useState('');

  const handlePincodeChange = (value) => {
    setPincode(value);
  };
  return (
    <div className='App' >
        <Routes>
          <Route  path='/' element={<Landingpage onPincodeChange={handlePincodeChange} />}          />
           <Route path='Pincode' element={<Pincode pincode={pincode} />} />
         
        </Routes>
    </div>
  );
}

export default App;
