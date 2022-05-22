import React,{useState} from 'react';
import { toaster } from 'evergreen-ui';
import '../App.css';

function FAT() {
  const [weight,setWeight]=useState('');
  const [height,setHeight]=useState('');
  const [gender,setGender]=useState('');
  const [age,setAge]=useState('');
  const [percentage,setPercentage]=useState('');


  const CalcFat = (e) => {
    e.preventDefault();
    
    let bfp=0;
    if(weight === '' || height === '' || gender === '' ||age === '') {
      toaster.danger('Please enter all the details!');
    }
    else{
      toaster.success('BFP calculated successfully!');
      let bmi = ((weight/height)/height)*10000;
      if(gender==='Male' || gender==='Male ')
      {
          if(age>0 && age<=18){
            bfp=(1.51*bmi)-(0.70*age)-2.2;
            setPercentage(bfp.toFixed(1));
          }
          else{
            bfp=(1.20*bmi)+(0.23*age)-16.2;
            setPercentage(bfp.toFixed(1));
          }
      }
      else if(gender==='Female' || gender==='Female '){
        if(age>0 && age<=18){
          bfp=(1.51*bmi)-(0.70*age)-1.4;
          setPercentage(bfp.toFixed(1));
        }
        else{
          bfp=(1.20*bmi)+(0.23*age)-5.4;
          setPercentage(bfp.toFixed(1));
        }
      }
    }
  }


  let msg;
  if(percentage>0 && percentage<=5){
    msg='“To change your body you must first change your mind.”';
  }
  else if(percentage>5 && percentage<=10){
    msg='“Working out is never convenient. But neither is illness, diabetes and obesity!”';
  }
  else if(percentage>10 && percentage<=15){
    msg='“When it burns, is when you’re just getting started. That’s when you get stronger!”';
  }
  else if(percentage>15 && percentage<=20){
    msg='“Think of your workouts as important meetings you’ve scheduled with yourself. Bosses don’t cancel.”';
  }
  else if(percentage>20 && percentage<=25){
    msg='“You must tell yourself, no matter how hard it is, or how hard it gets, I’m going to make it.”';
  }
  else if(percentage>25 && percentage<=30){
    msg='“Results happen over time, not overnight. Work hard, stay consistent and be patient.”';
  }
  else if(percentage>30 && percentage<=35){
    msg='“Motivation is what gets you started. Habit is what keeps you going.”';
  }
  else if(percentage>35 && percentage<=40){
    msg='“Don’t compare yourself to others. Compare yourself to the person from yesterday.”';
  }
  else{
    msg='“Nothing tastes as good as being thin feels.”';
  }  




  let imgSrc;
  if(percentage === ''){
    imgSrc=null;
    msg='';
  }
  else if(percentage>1){
    imgSrc = require('../Components/assetss/bfp4.png');
  }



  let reload = () => {
    setWeight('');
    setHeight('');
    setGender('');
    setAge('');
    setPercentage('');
    imgSrc=null;
    msg='';
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
                      <p>{msg}</p>
                  </div>
                  <br/>
                  <div className='img-container'>
                    <img src={imgSrc} alt=''></img>
                  </div>
                  <br/>
                <footer className='footer'>
                    <h4>Made with <span style={{color:"red"}}>&hearts;</span> by Shibom</h4>
                </footer>
          </div>
        </div>
    )
}

export default FAT;
