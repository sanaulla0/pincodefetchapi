
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import  './Pincode.css';
const Pincode = () => {
  const { state } = useLocation();
  const { pincode } = state;

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const url = `https://api.postalpincode.in/pincode/${pincode}`;
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [pincode]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.Status === 'Error') {
    return <div>No data found for this pincode.</div>;
  }

  const { PostOffice } = data[0];
      console.log("data",PostOffice)
  return (
    <div>
      <h1>pincode:{PostOffice[0].Pincode}</h1>
      <h4>Message:Number of pincodes found:{PostOffice.length}</h4>
      <input type="search" className='input' placeholder='search'/>
      <div >
      {PostOffice.map((office) => (
      
        <div key={office.Name} className="border" >
          
          <div>Name:{office.Name}</div>
          <div>Delivery status:{office.DeliveryStatus}</div>
          <div>District:{office.District}</div>
          <div>Division:{office.State}</div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Pincode;









