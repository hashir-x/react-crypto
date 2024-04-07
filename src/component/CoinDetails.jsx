import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import call from '../url'
import Loader from './Loader'

function CoinDetails() {

  const [loading,setLoading] = useState(true)

  const {id} = useParams()

  const [coinDetail,setCoinDetail] = useState([])

  const fetchData = async () =>{
    try {
      const {data} = await call.get(`/coins/${id}`)
      setCoinDetail(data)
      console.log(data);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <>
      {
        loading ? <Loader/> : <>
          
        </>
      }
    </>
  )
}

export default CoinDetails