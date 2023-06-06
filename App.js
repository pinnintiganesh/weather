
import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';
function App() {
  const [location, setLocation] = useState("N/A");
  const [temp, setTemp] = useState(0.0);
  const findweather = (location) => {
    Axios.get(`http://api.weatherapi.com/v1/current.json?key=84d1979f0bf64fd1b27111947230606&q=${location}&aqi=yes`).then((res) => {
      setLocation(res.data.location.name);
      setTemp(res.data.current.temp_c);
    }
    ).catch((error) => {
      <div className='App'>Error</div>
    });
  }
  return (
    <div className="App">
      <input placeholder='enter location' onChange={(e) => { setLocation(e.target.value) }} />
      <br></br>
      <br></br>
      <button onClick={() => findweather(location)} className='btn btn-lg btn-primary'>Find</button>
      <br></br>
      <br></br>
      <h1>Location:  {location}</h1>
      <br></br>
      <br></br>
      <h1>Temperature:  {temp} 'C</h1>
    </div>
  );
}

export default App;
