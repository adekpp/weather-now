import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBinoculars, faWater, faWind } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Input from "./components/Input";
import Weather from "./components/Weather";
import Error from "./components/Error";
import Header from "./components/Header";
import { useState } from 'react';
import Footer from "./components/Footer";
import { Loader } from "./components/Loader";

library.add(fas, fab, faGithub, faLinkedin, faBinoculars, faWater, faWind);


function App() {

  const [data, setData] = useState([]);
  const [err, setErr] = useState(false)
  const [isLoading, setIsLoading] = useState(null)
  const [transition, setTransition] = useState(false);
  const api_key = process.env.REACT_APP_WEATHER_APP

  

  function getData(query){

  setIsLoading(true)

  fetch(`https://rocky-cove-65547.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${api_key}`,
  {headers : { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
   }})
   .then((response) => {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  })
  .then((result) => {setData(result); setTransition(true); setIsLoading(false)} )
  
  .catch((error) => {
    setErr(true);
    setIsLoading(false)
    
  });
  setErr(false);
  setTransition(false)
  setData([])
  setIsLoading(false)
}
return (
  <div className="app">
 <Footer/> 
  <Header />
  <Input query={getData}/>

  {err === true && <Error error={err} />}
  {isLoading && <Loader/>}
  { data != 0 && <Weather data={data} transition={transition} /> }
 
  </div>)

}

export default App;
