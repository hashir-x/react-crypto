import React, { useState, useEffect } from 'react'
import Header from '../component/Header'
import '../component/Coin.css'
import call from '../url'
import Loader from '../component/Loader'
import { useNavigate } from 'react-router-dom'

function Home() {

  
  const fetchUrl = '/coins/markets?vs_currency=usd'

  const [coin,setCoin] = useState([])

  const [loading,setLoading] = useState(true)

  const [search,setSearch] = useState('')

  const [sortOrder, setSortOrder] = useState('asc');

  const [priceOrder,setPriceOrder] = useState('asc')

  const fetchData = async ()=> {
    try {
      const {data} = await call.get(fetchUrl)
      setCoin(data)
      setLoading(false)
    } catch (error) {
      console.log(error);
    }  
  }

  useEffect(()=>{
      fetchData()
  },[])

  const handleSearchChange = (value) => {
    setSearch(value);
  };

  const handlePriceChange = () => {
    setPriceOrder( priceOrder === 'asc' ? 'des' : 'asc')
  }

  const priceData = coin.slice().sort((a, b) => {
    if (priceOrder === 'asc') {
      return a.current_price - b.current_price;
    } else {
      return b.current_price - a.current_price;
    }
  });
  
  const handleSortChange = () => {
    setSortOrder( sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedData = coin.slice().sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.price_change_percentage_24h - b.price_change_percentage_24h;
    } else {
      return b.price_change_percentage_24h - a.price_change_percentage_24h;
    }
  });



  return (
    <>
    {
        loading ? <Loader/> : <> <Header onSearchChange={handleSearchChange}/>
        <div style={{width:'100%',display:"flex",justifyContent:"center"}}>
        <table style={{width:"80%"}}>
            <thead className='table_heading'>
                <tr>
                    <th>#</th>
                    <th>Coin</th>
                    <th onClick={handlePriceChange}>price</th>
                    <th onClick={handleSortChange}>24h</th>
                    <th>24 volume</th>
                    <th>Market Cap</th>
                </tr>
            </thead>
            <tbody>
                { 
                    sortedData?.filter((value)=>{
                        if(value === ''){
                            return value;
                        }else if(value.name.toLowerCase().includes(search.toLowerCase())){
                            return value;
                        }
                    }).map((item,i)=>(
                            <CoinList item={item} i={i} id={item.id}/>
                    ))
                    
                }

                { 
                    priceData?.filter((value)=>{
                        if(value === ''){
                            return value;
                        }else if(value.name.toLowerCase().includes(search.toLowerCase())){
                            return value;
                        }
                    }).map((item,i)=>(
                            <CoinList item={item} i={i} id={item.id}/>
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

const CoinList = ({item,i,id}) => {

    const profit = item.price_change_percentage_24h > 0 

    const price = item.current_price;

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/${id}`)
    }
    

    return(
            <tr key={i} className='table_data' onClick={handleClick}>
                <td>{i+1}</td>
                <td>
                    <div className='coin'>
                        <img className='coin_icon' src={item?.image} alt="" />
                        <span className='coin_name'>{item?.name}</span>
                        <span className='coin_symbol'>{item?.symbol}</span>
                    </div>
                </td>
                <td>&#36;{price > 1001 ? (item?.current_price).toLocaleString() : item?.current_price}</td>
                <td style={profit ? {color:'green'} : {color:"red"}}>{profit ? "\u25B2" + (item?.price_change_percentage_24h).toFixed(2) : "\u25BC" + Math.abs(item?.price_change_percentage_24h).toFixed(2)}</td>
                <td>&#36;{Number(item?.total_volume).toLocaleString()}</td>
                <td>&#36;{Number(item?.fully_diluted_valuation).toLocaleString()}</td>                
            </tr>
    )
}

export default Home