import React from 'react'
import Volume from './Volume'
import Trend from './Trend'
import Gainer from './Gainer'

function Options() {
  return (
    <>
        <div className="top" style={{display:"grid",gridTemplateColumns:'1fr 1fr 1fr',gap:"1rem",marginTop:"3.5rem",marginBottom:"2rem"}}>
            <Trend/>
            <Gainer/>
            <Volume/>
        </div>
    </>
  )
}

export default Options