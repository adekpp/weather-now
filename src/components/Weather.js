import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./Weather.css";
import { CSSTransition } from 'react-transition-group';
import sunrise from '../imgs/sun.svg';


const Weather = ({data, transition}) => {

    
    let unix_sunrise = data.sys.sunrise;
    let dateSunrise = new Date(unix_sunrise * 1000);
    let hoursSunrise = dateSunrise.getHours();
    let minutesSunrise = "0" + dateSunrise.getMinutes();
    let sunriseTime = hoursSunrise + ':' + minutesSunrise.substr(-2)

    
    let unix_sunset = data.sys.sunset
    let dateSunset = new Date(unix_sunset * 1000);
    let hoursSunset = dateSunset.getHours();
    let minutesSunset = "0" + dateSunset.getMinutes();
    let SunriseTime = hoursSunset + ':' + minutesSunset.substr(-2)

    let icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    let vis = data.visibility / 1000
    let visibility = Math.round(vis * 10) / 10
    return (

    <CSSTransition in={transition} timeout={3000} classNames="my-node">
        <div>
            <div className="flex flex-col mt-5 justify-center bg-white mx-auto shadow-lg w-5/6 md:w-5/12">
            <div className='mx-auto'><img src={icon} alt={data.weather[0].description}/></div>
            <div className=" mx-auto">
                
                <span className='pt-1 text-md font-bold md:text-2xl'>{data.name}, <span className='font-thin'>{data.sys.country}</span> <span className='font-thin ml-2'>{Math.round(data.main.temp)} &#8451;</span></span>
            </div>

            <div className='mx-auto text-lg flex flex-col'>

                <h5>Feels like: <span className='font-thin md:text-2xl'>{Math.round(data.main.feels_like)} &#8451;</span></h5>

                
                <h5 className='text-center font-semibold'>{data.main.pressure} hPa</h5>
                <h5 className='text-center font-thin'>{data.weather[0].description}</h5>
                

            </div>

            <div className='flex flex-col w-full place-items-center py-8'>
                <div className='flex flex-col  gap-3 flex-nowrap md:text-xl'>
                    <div className='flex justify-between w-full gap-4'><p><FontAwesomeIcon className='mr-2' icon={['fas', 'wind']} />Wind:</p> <p className='font-semibold'>{Math.round(data.wind.speed)} m/s</p></div>
                    <div className='flex flex-row justify-between w-full gap-4'><p><FontAwesomeIcon className='mr-2' icon={['fas', 'water']} />Humidity:</p> <p className='font-semibold'>{data.main.humidity} %</p></div>
                    <div className='flex flex-row justify-between w-full gap-4'><p><FontAwesomeIcon className='mr-2' icon={['fas', 'binoculars']} />Visibility:</p> <p className='font-semibold'>{visibility} km</p></div>
                </div>
                <div className='flex flex-row justify-center w-full gap-4 mt-3 md:text-xl'><p><img className='inline h-7 mr-2' src={sunrise} alt="sun" />Sunrise: <span className='font-semibold'>{sunriseTime}</span> Sunset: <span className='font-semibold'>{SunriseTime}</span></p></div>

            </div>


    </div>
    </div>
    
  </CSSTransition>
    )
}

export default Weather


