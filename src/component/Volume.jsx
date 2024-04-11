import React, { useEffect, useState } from 'react'
import call from '../url'
import { LiaMountainSolid } from "react-icons/lia";

function Volume() {

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
    return b.total_volume - a.total_volume
  })

  useEffect(()=>{
      fetchData()
  },[])

  return (
    <>
        <div style={{border:"#e5e7eb solid 0.5px",padding:"0.8rem",borderRadius:"15px"}}>
            <div style={{marginBottom:"1rem",display:"flex",alignItems:'center'}}>
                <LiaMountainSolid color='orange'/>
                <span style={{marginLeft:"5px"}}>Volume 24h</span>
            </div>
           {
           TopC.slice(0,3)?.map((coin,i)=>(
                <TopVolume coin={coin} i={i}/>
           ))
           }
        </div>
    </>
  )
}

const TopVolume = ({coin,i}) => {
  return(
    <div key={i} style={{display:"flex",justifyContent:"space-between",marginBottom:"0.75rem"}}>
    <div style={{display:'flex',alignItems:"center"}}>
        <img style={{ width: '25px', marginRight: '10px',borderRadius:"50%" }} src={coin?.image} alt="logo" />
        <span>{coin?.name}</span>
    </div> 
      <span>&#36; {coin.total_volume.toLocaleString()}</span>
    </div>
  )
}

export default Volume