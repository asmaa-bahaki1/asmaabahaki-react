import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'; 
import toyota from './toyota.png';
import bentley from './bentley.png';
import citroen from './citroen.png';
import kia from './kia.png';
import landrover from './landrover.png';
import rover from './rover.png';
import suzuki from './suzuki.png';
import lexus from './lexus.png';
import './Home.css';

function Home() {
  return (
    <div>     
      <div class="wavi">
     <span>V</span>
     <span>O</span>
     <span>I</span>
     <span>N</span>
     <span>O</span>
     <span>P</span>
    </div>     
     <div className="jij">
     <img src={logo}></img>  
     </div>
 
       <div className="car">
        <h1>VOINOP CAR</h1>
        <p>DISCOVER THE CAR THAT IS RIGHT FOR YOU</p>
       </div>
        <div className="marque">
     <h1>LES MARQUES</h1>
        </div>  
     <div className="marques">
      <img src={toyota}></img>
       <Link to='/Bentley'><img src={bentley}></img></Link> 
       <img src={citroen}></img>
       <img src={kia}></img>
       <img src={landrover}></img>
       <img src={rover}></img>
       <img src={suzuki}></img>
       <img src={lexus}></img>
     </div>    
     
     <div className="namarques"> 
     <h1>TOYOTA</h1>  
     <h1>BENTLEY</h1> 
     <h1>CITROEN</h1> 
     <h1>KIA</h1>
     <h1>LAND ROVER</h1>  
     <h1>ROVER</h1> 
     <h1>SUZUKI</h1> 
     <h1>LEXUS</h1>
      </div>
   
     </div> 
  )
}
export default Home;
