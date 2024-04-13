import React, { useState, useEffect } from 'react'
import call from '../url'
import { MdOutlineRocketLaunch } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Gainer() {

  const [coins,setCoins] = useState([])

  const fetchUrl = '/coins/markets?vs_currency=usd'


  const fetchData = async ()=> {
    try {
      const {data} = await call.get(fetchUrl)
      setCoins(data)
    } catch (error) {
      console.log(error);
    }  
  }

  const TopC = coins.sort((a,b)=>{
    return b.price_change_percentage_24h - a.price_change_percentage_24h
  })

  useEffect(()=>{
      fetchData()
  },[])

  return (
    <>
      <div style={{border:"#e5e7eb solid 0.5px",padding:"0.8rem",borderRadius:"15px"}}>
            <div style={{marginBottom:"1rem",display:"flex",alignItems:'center'}}>
                <MdOutlineRocketLaunch color='orange'/>
                <span style={{marginLeft:"5px"}}>Top Gainers</span>
            </div>
           {
           TopC.slice(0,3)?.map((coin,i)=>(
                <TopCoin coin={coin} i={i} id={coin.id} />
           ))
           }
        </div>
    </>
  )
}

const TopCoin = ({coin,i,id}) => {

  const price = coin.current_price;

    const profit = coin.price_change_percentage_24h > 0;

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/${id}`)
    }

  return (
    <div key={i} onClick={handleClick} style={{display:"flex",justifyContent:"space-between",marginBottom:"0.75rem"}}>
    <div style={{display:'flex',alignItems:"center"}}>
        <img style={{ width: '25px', marginRight: '10px',borderRadius:"50%" }} src={coin?.image} alt="logo" />
        <span>{coin?.name}</span>
    </div>
    <div style={{display:"flex",gap:"5px"}}>

        <span>&#36;{price > 10 ? ((coin?.current_price).toFixed(2)) : (coin?.current_price).toFixed(4)}</span>
        
        <span style={profit ? {color:"green"} : {color:"red"}}>{profit ? '\u25B2' + coin?.price_change_percentage_24h.toFixed(2) : '\u25BC' + Math.abs(coin?.price_change_percentage_24h).toFixed(2)}</span>
    </div>
    </div>
  )
}

export default Gainer