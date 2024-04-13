import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import './chart.css'
import call from '../url';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

function Chart() {

    const {id} = useParams()

  const [chart,setChart] = useState([])

  const [days, setDays]=useState(1)

  const fetchUrl = `/coins/${id}/market_chart?vs_currency=usd&days=${days}`;

  const fetchData = async () => {
    try {
      const {data} = await call.get(fetchUrl)
      setChart(data.prices)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchData()
  },[id, days])


  const myData = {
    labels: chart.map((value)=>{
     const date = new Date(value[0])
     const time = 
     date.getHours()> 12 
     ? `${date.getHours() -12} : ${date.getMinutes()} PM` 
     : `${date.getHours()} : ${date.getMinutes()} AM`
      return days===1 ? time : date.toLocaleDateString() 
    }), 
    datasets:[
        {
            label: ` Price in Past Days ${days} in usd `,
            data: chart.map((value)=>value[1]),
            borderColor: 'orange',
            borderWidth: '3' 
        }
    ]
    
  }


  return (
    <>
        <div>
        <Line data={myData} options={{
          elements:{
              point:{
                  radius:1, 
              }
          }
        }} style={{marginTop:"5rem", width:"60rem"}} />
  
        <div className='btn' style={{marginTop:"30px"}}>
               <button onClick={()=>setDays(1)} >24 hours</button>
               <button onClick={()=>setDays(30)}>1 Month</button>
               <button onClick={()=>setDays(365)}>1 Year</button>
             </div>
        </div>
    </>
  )
}

export default Chart