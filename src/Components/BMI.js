import React,{useState} from 'react';
import '../App.css';
import { toaster } from 'evergreen-ui';


function BMI() {

  document.title = 'BMI Calculator';
  
  const [weight,setWeight]=useState('');
  const [height,setHeight]=useState('');
  const [bmi,setBmi]=useState('0.0');
  const [message, setMessage] = useState('');
  const [click,setClick]=useState(false);


  const calcBmi = (e) =>{
    e.preventDefault();

    if (!(weight>0 && weight<=700) || !(height>0 && height<=700)) {
      toaster.danger('Please enter a valid weight and height!');
    }
    else if((weight>0 && weight<=700) && (height>0 && height<=700)){
      setClick(true);
      toaster.success('BMI calculated successfully!');
      let bmi = ((weight/height)/height)*10000;
      setBmi(bmi.toFixed(1));

      if (bmi < 19) {
        setMessage('You are underweight, eat healthy meal and gain some weight.');
      }else if(bmi >=19 && bmi <25){
        setMessage('You have normal weight, keep up the good work!');
      } else if (bmi >= 25 && bmi <30) {
        setMessage('You are over-weight, you need to focus on your health.');
      } else if (bmi >= 30 && bmi <35) {
        setMessage('You are obesed, you need to workout to maintain your health.');
      }
      else{
        setMessage('You are extremely obesed, Jesus please save this child AMEN!');
      }
    }
  }

  let imgSrc;

  if (bmi < 1) {
    imgSrc = null;
  } 
  else {
    if(bmi >1 && bmi<19){
      imgSrc = require('../Components/assetss/underweight.png')
    }
     else if(bmi>=19 && bmi<25) {
      imgSrc = require('../Components/assetss/normal.png')
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = require('../Components/assetss/healthy.png')
    } else if (bmi >= 30 && bmi <35) {
      imgSrc = require('../Components/assetss/overweight.png')
    }
    else{
      imgSrc = require('../Components/assetss/extreme_obese.png')
    }
  }

  let reload = () => {
    setWeight('');
    setHeight('');
    setMessage('');
    setBmi('0.0');
    setClick(false);
    imgSrc=null;
  }

  return (
    <div className="app">
    <div className='container'>
      <h2 className='center'><u>BMI Calculator</u></h2>
      <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg) :</label>
            <input value={weight} placeholder="Enter your weight" onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (cm) :</label>
            <input  value={height} placeholder="Enter your height" onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
          </div>
        </form>
        <button className='btn btn-outline' onClick={reload} type='reload'>Reset</button>
        {
           click===true &&
           <div className='center'>
            <h3>Your BMI is : {bmi}</h3>
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

export default BMI;
