import React,{useState} from 'react';
import './Home.css';
import {useHistory} from 'react-router-dom';

function Home() {

  const history = useHistory();
  const k=2;

  const gotoBMI = () =>{
    history.push('/bmi');
  }

  const gotoBMR = () =>{
    history.push('/bmr');
  }

  const gotoFAT = () =>{
    history.push('/fat');
  }

  let imgSrc;
  if(k<1){
    imgSrc=null;
  }
  else{
    imgSrc=require('./assetss/chuchu1.png');
  }

  return (
    <>
     <div className="App">
       <div className="title">
         <h1><center><u>Fitness Tracker</u></center></h1>
       </div>
       <hr/>

       <br/>
       <br/>
        <div className="hold">
          <div className="bmi">
          <h3>1. Track your Body Mass Index easily.</h3>
            <button type="button" className="bttn" onClick={gotoBMI}>BMI</button>
          </div>
          <br/>
          <br/>
          <div className="bmr">
            <h3>2. Track your Basal Metabolic Rate.</h3>
            <button type="button" className="bttn" onClick={gotoBMR}>BMR</button>
          </div>
          <br/>
          <br/>
          <div className="bmi">
            <h3>3. Track your Body Fat Percentage.</h3>
            <button type="button" className="bttn" onClick={gotoFAT}>FAT</button>
          </div>
        </div>
        
        <br/>
        <div className='imgg-container'>
            <img src={imgSrc} alt=''></img>
        </div>

       <div className="bottom">
          <footer className="end">
          <h2>Made with <span style={{color:"red"}}>&hearts;</span> by Shibom</h2>
          </footer>
       </div>
     </div>
    </>

  )
}

export default Home;