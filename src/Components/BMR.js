import React,{useState} from 'react';
import { toaster } from 'evergreen-ui';
import '../App.css';

function BMR() {

  document.tite='BMR Calculator';

  const [weight,setWeight]=useState('');
  const [height,setHeight]=useState('');
  const [gender,setGender]=useState('');
  const [age,setAge]=useState('');
  const [message,setMessage]=useState('');
  const [calories,setCalories]=useState('0');
  const [click,setClick]=useState(false);

  let CalcBmr = (e) => {
    //prevent submitting empty
    e.preventDefault();
    setClick(true);
    
    let bmr=0;
    if(!(weight>0 && weight<=700) || !(height>0 && height<=700) || !(gender ==='Male' || gender ==='Female') || !(age>0 && age<=150)) {
      toaster.danger('Please enter a valid weight, height and gender!');
    }
    else if((weight>0 && weight<=700) && (height>0 && height<=700) && (gender ==='Male' || gender ==='Female') && (age>0 && age<=150)){
      toaster.success('BMR calculated successfully!');
      if(gender === 'Male'){
        bmr=88.362 + (13.397*weight) + (4.799*height) - (5.677*age);
        setCalories(bmr.toFixed(2));
      }
      else if(gender === 'Female'){
        bmr= 444.593 + (9.247 *weight) + (3.098*height) -(4.330*age);
        setCalories(bmr.toFixed(2));
      }
    }

    if(bmr>0 && bmr <1000){
      setMessage('"I believe that if you eat well, you work even better" - Ferran Adria.');
    }
    else if(bmr>=1000 && bmr<1500){
      setMessage('"Remember when your body is hungry, it wants nutrients not calories."');
    }
    else if(bmr>=1500 && bmr<2000){
      setMessage('"If you are not eating the right foods in the right amounts, all the exercise in the world wont combat the calorie intake" - Jennifer Hudson.');   
    }
    else if(bmr>=2000 && bmr<2500){
      setMessage('"Let food be thy medicine and medicine be thy food" - Hippocrates.');        
    }
    else if(bmr>=2500 && bmr<3000){
      setMessage('"People who love to eat are always the best people" - Julia Child.');  
    }
    else if(bmr>=3000 && bmr<3500){
      setMessage('"One cannot think well, love well, sleep well, if one has not dined well" - Virginia Woolf.');
    }
    else if(bmr>=3500 && bmr<4000){
      setMessage('"You are what you eat so dont be fast,cheap, easy or fake."');
    }
    else if(bmr>=4000 && bmr<4500){
      setMessage('"You do not need a silver fork to eat good food" - Paul Prudhomme.');
    }
    else if(bmr>4500){
      setMessage('"When diet is wrong,medicine is of no use.When diet is correct,medicine is of no need."');
    }
  }

    var imgSrc;
    if(calories >100 && calories <=1000){
      imgSrc=require('../Components/assetss/food.png');
    }
    else if(calories >1000 && calories<=1500){
      imgSrc=require('../Components/assetss/food1.png');
    }
    else if(calories >1500 && calories<=2000){
      imgSrc=require('../Components/assetss/food2.png');
    }
    else if(calories >2000 && calories<=2500){
      imgSrc=require('../Components/assetss/food3.png');
    }
    else if(calories >2500 && calories<=3000){
      imgSrc=require('../Components/assetss/food4.png');
    }
    else if(calories >3000 && calories<=3500){
      imgSrc=require('../Components/assetss/food5.png');
    }
    else if(calories >3500 && calories<=4000){
      imgSrc=require('../Components/assetss/food6.png');
    }
    else if(calories >4000 && calories<=4500){
      imgSrc=require('../Components/assetss/food7.png');
    }
    else{
      imgSrc=require('../Components/assetss/food8.png');
    }

    let reload = () => {
      setWeight('');
      setHeight('');
      setGender('');
      setAge('');
      setMessage('');
      setCalories('0');
      setClick(false);
    }

  return (
    <div className="app">
      <div className="container">
          <h2 className="center"><u>BMR Calculator</u></h2>
          <form onSubmit={CalcBmr}>
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
            {
              click===true && 
                <div className='center'>
                  <h3>Your Calories intake is : {calories} /day</h3>
                  <p>{message}</p>
                </div>  
            }
            {
              click===true &&
              <div className='img-container'>
                 <img src={imgSrc} alt=''></img>
              </div>
            }
  

            <br/>
            <footer className='footer'>
            <h4>Made with <span style={{color:"red"}}>&hearts;</span> by Shibom</h4>
            </footer>
       </div>
    </div>
  );
}

export default BMR;
