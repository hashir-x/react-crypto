import React, { useEffect, useState } from 'react'
import call from '../url'
import axios from 'axios';

function Coin() {

    const fetchUrl = '/coins/markets?vs_currency=inr'

    const [coin,setCoin] = useState()

    const fetchData = async ()=> {
        const {data} = await call.get(fetchUrl)
        console.log(data[0]);
        setCoin(data)
    }

    useEffect(()=>{
        fetchData()
    },[])

    
// useEffect(()=>{
//         const getCoinsData = async() => {
//             const {data} = await axios.get(`${Baseurl}/coins/markets?vs_currency=inr`)
//             console.log(data);
//         }
//         getCoinsData()
//     },[])
   

  return (
    <>
        {coin?.map(item={
        
    })
        }
    </>
  )
}

export default Coin