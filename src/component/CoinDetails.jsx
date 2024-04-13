import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import './details.css'
import Chart from './Chart'
import call from '../url'
import Header from './Header'
import Footer from './Footer'

function CoinDetails() {

  const [loading,setLoading] = useState(true)

  const {id} = useParams()

  const [coinDetail,setCoinDetail] = useState([])

  const fetchData = async () =>{
    try {
      const {data} = await call.get(`/coins/${id}`)
      setCoinDetail(data)
      // console.log(data);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  const shouldShowInput = false;

  const profit = coinDetail?.market_data?.price_change_percentage_24h > 0;

  return (
    <>
      {
        loading ? <Loader/> : <>
          <Header showInput={shouldShowInput}/>
          <div className='coin-details'>
            <div className="coin-description">
              <div>
                {coinDetail?.last_updated}
              </div>
              <div>
                <img style={{width:"150px"}} src={coinDetail?.image?.large} alt="logo" />
              </div>
              <div style={{fontWeight:"bold",fontSize:"18px"}}>
                {coinDetail?.name}
              </div>
              <div style={{fontWeight:'bold'}}>
               ${coinDetail?.market_data?.current_price.usd}
              </div>
              <div style={profit ? {color:"green",fontWeight:'bold',fontSize:"16px"} : {color:"red",fontWeight:'bold',fontSize:"16px"}}>
                {profit ? '\u25B2' + (coinDetail?.market_data?.price_change_percentage_24h).toFixed(2) : '\u25BC' + Math.abs(coinDetail?.market_data?.price_change_percentage_24h).toFixed(2)}
              </div>
              <div style={{fontWeight:"bold"}}>
               #{coinDetail?.market_cap_rank}
              </div>
              <div>
                {coinDetail?.description?.["en"].split('.')[0]}
              </div>
            </div>
            <div className="coin-chart">
              <Chart/>
            </div>
          </div>
        </>
      }
      <Footer/>
    </>
  )
}

export default CoinDetails