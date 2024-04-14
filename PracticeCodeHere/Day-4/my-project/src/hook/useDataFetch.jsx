import React, { useState } from 'react'
import axios from 'axios';

 async function UseData() {
    //states
    const [loading , setLoading] = useState(false);

      const apiHandler = async()=>{
        setLoading(true)
        const url = 'https://randomuser.me/api/';
        const getConvertData = axios.get(url);
        setLoading(false)
    }
   
  return {loading , apiHandler}
}

export default UseData