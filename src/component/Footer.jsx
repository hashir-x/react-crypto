import React from 'react'
import { SiCoinmarketcap} from "react-icons/si";
import './Footer.css'

function Footer() {
  return (
    <>
    <hr />
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",marginBottom:"1rem"}}>
            <div className="footer">
                <div className="page-details">
                    <div style={{display:'flex',justifyContent:"center",width:"100%",padding:"2rem",flexDirection:'column'}}>
                        <h2 style={{display:'flex',alignItems:"center",marginBottom:"1rem"}} >
                            <SiCoinmarketcap size={30}/><span className='head'>CoinMap</span> 
                        </h2>
                        <p className='para'>CoinMap is your digital compass in the expansive landscape of cryptocurrency trading. Seamlessly blending innovative technology with user-centric design, CoinMap empowers traders of all levels to explore, navigate, and conquer the dynamic crypto markets.</p>
                    </div>
                </div>
               <div>
                    <div className="resources">
                        <h4>Resources</h4>
                        <p>Perpetuals</p>
                        <p>Crypto News</p>
                        <p>Bitcoin Treasury</p>
                        <p>Crypto Heatmap</p>
                        <p>Crypto API</p>
                    </div>
                    <div className="resources">
                        <h4>Donations</h4>
                        <p>Bitcoin</p>
                        <p>Ethereum</p>
                    </div>
               </div>
                <div className="resources">
                    <h4>Support</h4>
                    <p>Request Form</p>
                    <p>Advertising</p>
                    <p>Candy Rewards Listing</p>
                    <p>Help Center</p>
                    <p>Bug Bounty</p>
                    <p>FAQ</p>
                </div>
                <div className="resources">
                    <h4>About</h4>
                    <p>About Us</p>
                    <p>Careers</p>
                    <p>Company Blog</p>
                    <p>Branding Guide</p>
                    <p>Methodology</p>
                    <p>Disclaimer</p>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Ad Policy</p>
                    <p>Cookie Preferences</p>
                </div>
                <div className="resources">
                    <h4>Community</h4>
                    <p>X/Twitter</p>
                    <p>Telegram Chat</p>
                    <p>Instagram</p>
                    <p>Reddit</p>
                    <p>Discord</p>
                    <p>Facebook</p>
                </div>
            </div>
        </div>
        <hr />
        <div style={{display:'flex',width:'100%',justifyContent:"center",alignItems:"center",height:"5rem"}}>
            <div>
            &#169;2024 CoinMap, Inc. All rights reserved.
            </div>
        </div>
    </>
  )
}

export default Footer