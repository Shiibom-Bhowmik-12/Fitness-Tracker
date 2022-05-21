import React,{useState} from 'react';
import { toaster } from 'evergreen-ui';
import '../App.css';

function FAT() {
  const [weight,setWeight]=useState('');
  const [height,setHeight]=useState('');
  const [gender,setGender]=useState('');
  const [age,setAge]=useState('');
  const [report,setReport]=useState('');
  const [percentage,setPercentage]=useState('');


  const CalcFat = (e) => {
    e.preventDefault();
    
    if(weight === '' || height === '' || gender === '' ||age === '') {
      toaster.danger('Please enter all the details!');
    }
    else{
      toaster.success('BFP calculated successfully!');
      let bmi = ((weight/height)/height)*10000;
      let bfp=0;
      if(gender==='Male' && (age>0 && age<=18)){
        bfp=(1.51*bmi)-(0.70*age)-2.2;
      }
      else if(gender==='Female' && (age>0 && age<=18)){
        bfp=(1.51*bmi)-(0.70*age)-1.4;
      }
      else if(gender==='Male' && age>18){
        bfp=(1.20*bmi)+(0.23*age)-16.2;
      }
      else if(gender==='Female' && age>18){
        bfp=(1.20*bmi)+(0.23*age)-5.4;
      }

      setPercentage(bfp.toFixed(1));
    }

    if((gender==="Female" && (percentage>=10 && percentage<=13))){
      setReport('Your Body Fat Category is - "Essential fat"');
    }
    else if((gender==="Male" && (percentage>=2 && percentage<=5))){
      setReport('Your Body Fat Category is - "Essential fat"');
    }
    else if((gender==="Female" && (percentage>=14 && percentage<=20))){
      setReport('Your Body Fat Category is - "Athletes"');
    }
    else if((gender==="Male" && (percentage>=6 && percentage<=13))){
      setReport('Your Body Fat Category is - "Athletes"');
    }
    else if((gender==="Female" && (percentage>=21 && percentage<=24))){
      setReport('Your Body Fat Category is - "Fitness"');
    }
    else if((gender==="Male" && (percentage>=14 && percentage<=17))){
      setReport('Your Body Fat Category is - "Fitness"');
    }
    else if((gender==="Female" && (percentage>=25 && percentage<=31))){
      setReport('Your Body Fat Category is - "Average"');
    }
    else if((gender==="Male" && (percentage>=18 && percentage<=24))){
      setReport('Your Body Fat Category is - "Average"');
    }
    else if((gender==="Female" && percentage>=32)){
      setReport('Your Body Fat Category is - "Obese"');
    }
    else if((gender==="Male" && percentage>24)){
      setReport('Your Body Fat Category is - "Obese"');
    }
  }

  let imgSrc;
  if(percentage<1){
    imgSrc = null;
  }
  else{
    imgSrc = require('../Components/assetss/bfp4.png');
  }

  let reload = () => {
    setWeight('');
    setHeight('');
    setGender('');
    setAge('');
    setReport('');
    setPercentage('');
    imgSrc=null;
  }

  return (
    <div className="app">
          <div className="container">
              <h2 className="center"><u>BFP Calculator</u></h2>
              <form onSubmit={CalcFat}>
                  <div>
                    <label>Weight (kg) : </label>
                    <input type="text" placeholder="Enter your weight" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
                  </div>
                  <div>
                    <label>Height (cm) : </label>
                    <input type="text" placeholder="Enter your height" value={height} onChange={(e)=>setHeight(e.target.value)}/>
                  </div>
                  <div>
                    <label>Gender (Male/Female) : </label>
                    <input type="text" placeholder="Enter your gender" value={gender} onChange={(e)=>setGender(e.target.value)}/>
                  </div>
                  <div>
                    <label>Age (years) : </label>
                    <input type="text" placeholder="Enter your age" value={age} onChange={(e)=>setAge(e.target.value)}/>
                  </div>
                  <div>
                  <button className='btn' type='submit'>Submit</button>
                  </div>
              </form>

                <button className='btn btn-outline' onClick={reload} type='reload'>Reset</button>
                  <div className='center'>
                      <h3>Your Body Fat Percentage is : {percentage} %</h3>
                      <p>{report}</p>
                  </div>
                  <div className='img-container'>
                    <img src={imgSrc} alt=''></img>
                  </div>
                <footer className='footer'>
                    <h4>Made with <span style={{color:"red"}}>&hearts;</span> by Shibom</h4>
                </footer>
          </div>
        </div>
    )
  }

export default FAT;