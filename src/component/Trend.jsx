import React, { useEffect, useState } from 'react'
import call from '../url'
import { FaFire } from "react-icons/fa6";

function Trend() {

    
    const [tren,setTren] = useState([])

    const fetchData =  async () =>{
        try {
            const {data} = await call.get('/search/trending')
            setTren(data.coins.slice(0,3))
            // console.log(data.coins);
        } catch (error) {
            console.log(error);
        }
    }
    

    useEffect(()=>{
        fetchData()
    },[])


  return (
    <>
        <div style={{border:"#e5e7eb solid 0.5px",padding:"0.8rem",borderRadius:"15px"}}>
            <div style={{marginBottom:"1rem",display:"flex",alignItems:'center'}}>
                <FaFire color='orange'/>
                <span style={{marginLeft:"5px"}}>Trending</span>
            </div>
           {
           tren?.map((coin,i)=>(
                <TrendingCoin coin={coin} i={i}/>
           ))
           }
        </div>
    </>
  )
}

const TrendingCoin = ({coin,i}) => {

    const price = coin.item.data.price;

    const profit = coin.item.data.price_change_percentage_24h.inr > 0;

    return(
        <div key={i} style={{display:"flex",justifyContent:"space-between",marginBottom:"0.75rem"}}>
        <div style={{display:'flex',alignItems:"center"}}>
            <img style={{ width: '25px', marginRight: '10px',borderRadius:"50%" }} src={coin?.item.small} alt="logo" />
            <span>{coin?.item.name}</span>
        </div>
        <div style={{display:"flex",gap:"5px"}}>

            <span>&#36;{price > 10 ? ((coin?.item.data.price).toFixed(2).toLocaleString()) : (coin?.item.data.price).toFixed(4)}</span>
            
            <span style={profit ? {color:"green"} : {color:"red"}}>{profit ? '\u25B2' + coin?.item.data.price_change_percentage_24h.inr.toFixed(2) : '\u25BC' + Math.abs(coin?.item.data.price_change_percentage_24h.inr).toFixed(2)}</span>
        </div>
        </div>
    )
}

export default Trend

