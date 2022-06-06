import {React, useState, useContext, useEffect} from 'react'

function Timer() {

  const [values, setValues]=useState({
    hours: 0,
    minutes: 0, 
    seconds: 0,
  });

  const [isActive, setActive] = useState(false);
  const [isPaused, setPaused] = useState(true);
  
  const handleTimerChange = (e) =>{
      const { name, value } = e.target;

      setValues({
        ...values,
        [name]: value,
      });
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    setActive(true);
    setPaused(false);
  }

  useEffect(() => {
  let interval = null

  if(!isActive || values.seconds ===0){
      setActive(false);
      setPaused(true);
      
      return () => clearInterval(interval);
    }  

    if(isActive && isPaused===false){
    interval = setInterval(() => {
      setValues(values => ({...values, seconds: values.seconds - 1}));
  
    }, 1000);
  }
  return () => clearInterval(interval);
  
  }, [isActive, isPaused, values]);


  return (
    <div className='clockContainer'>
       <form onSubmit={handleSubmit}>  
          <label>Hours:
            <input
              name="hours"
              type="number" 
              value={values.hours}
              onChange={handleTimerChange}
            />
          </label>
  
          <label>Minutes:
            <input 
              name="minutes"
              type="number" 
              value={values.minutes} 
              onChange={handleTimerChange}
            />
            </label>
            
          <label>Seconds:
            <input 
              name="seconds"
              type="number" 
              value={values.seconds} 
              onChange={handleTimerChange}
            />
            </label>

      <button type="submit">Start</button>
      {values.seconds}
    </form>
    </div>
  )
}

export default Timer