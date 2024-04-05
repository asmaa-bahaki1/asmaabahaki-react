import React from "react"; 
import './Bentaygas.css'; 
import { Link } from 'react-router-dom';
import logo from './logo.png';
import bentaygar1 from './bentaygar1.png';
import bentaygar from './bentaygar.png';
import grey from './grey.png';
import red from './red.png';
import blue from './blue.png';
import capture from './capture.png';
import { FacebookShareButton } from 'react-share';

function Bentayga_r() { 
    return(
        <div>
    <div class="wavv">
    <Link to='/'>
     <span>V</span>
     <span>O</span>
     <span>I</span>
     <span>N</span>
     <span>O</span>
     <span>P</span>
     </Link>
    </div>     
     <div className="jj">
     <Link to='/'><img src={logo}></img></Link>
     </div>     
     <div className="hp">
     <Link to='/'><h1>Home</h1></Link>
        <h1>›</h1>
        <Link to='/Bentley'><h1>Bentley</h1></Link>
        <h1>›</h1>
        <Link to='/Bentaygas'><h1>Bentayga s</h1></Link>
        <h1>›</h1>
        <h1>Bentayga s red</h1>
     </div>
        <div className="main-wrapper">
            <div className="container">
                <div className="product-grid">
                    <div className="product">
                        <div className="product-img">
                        <img src={bentaygar} alt="front product image"></img>
                        <img src={bentaygar1} alt="front product image" class="rear-img"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="yn">
            <h1>BENTAYGA S</h1>
            <div className="yn3"> 
            <FacebookShareButton url='https://www.facebook.com/'>
               <img src={capture}></img>
               </FacebookShareButton>  
           </div> 
            <div className="yn1">
            <h1>Color :</h1>
            <div className="yn2">
            <Link to='/Bentaygab'>
                  <img src={blue}></img>
                  </Link>
            <Link to='/Bentaygar'>
                    <img src={red}></img>
                    </Link>
            <Link to='/Bentaygag'>
                    <img src={grey}></img>
                    </Link>
               </div>
               
            </div>
        </div> 
     </div>
     )
     };
     export default Bentayga_r; 