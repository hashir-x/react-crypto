import React, { useState, useEffect } from 'react'
import Header from '../component/Header'
import '../component/Coin.css'
import call from '../url'
import Loader from '../component/Loader'
import { Link } from 'react-router-dom'

function Home() {

  
  const fetchUrl = '/coins/markets?vs_currency=usd'

  const [coin,setCoin] = useState()

  const [loading,setLoading] = useState(true)

  const fetchData = async ()=> {
      const {data} = await call.get(fetchUrl)
      setCoin(data)
      setLoading(false)
  }

  useEffect(()=>{
      fetchData()
  },[])

  const setColor = (number) => number > 0 ? 'green' : 'red';

  const setArrow = (number) => number > 0 ? '\u25B2':'\u25BC';

  return (
    <>
    {
        loading ? <Loader/> : <> <Header/>
        <div style={{width:'100%',display:"flex",justifyContent:"center"}}>
        <table style={{width:"80%"}}>
            <thead className='table_heading'>
                <tr>
                    <th>#</th>
                    <th>Coin</th>
                    <th>price</th>
                    <th>24h</th>
                    <th>24 volume</th>
                    <th>Market Cap</th>
                </tr>
            </thead>
            <tbody>
                {
                    coin?.map((item,index)=>(
                            <tr className='table_data'>
                                <td>{index+1}</td>
                                <td>
                                    <div className='coin'>
                                        <img className='coin_icon' src={item?.image} alt="" />
                                        <span className='coin_name'>{item?.name}</span>
                                        <span className='coin_symbol'>{item?.symbol}</span>
                                    </div>
                                </td>
                                <td>&#36;{Number(item?.current_price).toLocaleString()}</td>
    
                                <td style={{color:setColor(item?.price_change_percentage_24h)}}>{setArrow(item?.price_change_percentage_24h)}{Math.abs(item?.price_change_percentage_24h).toFixed(2)}&nbsp;&#x25;</td>
    
                                <td>&#36;{Number(item?.total_volume).toLocaleString()}</td>
    
                                <td>&#36;{Number(item?.fully_diluted_valuation).toLocaleString()}</td>                
                            </tr>
                    ))
                    
                }
            </tbody>
        </table>
      </div>
        </>
    }
     
    
    </>
  )
}

export default Home