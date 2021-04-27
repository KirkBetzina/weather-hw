import Button from './components.js/Button'
import {useState} from 'react'
import './App.css';
import Form from './components.js/Form';
import Forecast from './components.js/Forecast';

function App() {


const apiKey = '9a6b001eb5169aa5a56d72a11c85e727'

const [weather, setWeather] = useState()
const getWeather = async () => {
  const response = await fetch (`api.openweathermap.org/data/2.5/weather?zip={zip code},{us}&appid={API key}`)
  const data = await response.json();
  setWeather(data)
}








  return (
    <div className="App">
      <Button getWeather={getWeather} />
      <Form />
      <Forecast Forecast={weather}/>
    </div>
  );
}

export default App;
