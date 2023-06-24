// Build a weather application that retrieves real-time weather data from any weather API and displays it on the screen. The app should provide a search feature through which users can search for a location by city name or zip code and display the current temperature, humidity, wind speed and other relevant weather data.
import React, { useState } from 'react'



const WeatherApp = () => {
    const [data ,setData] = useState([])
    const [searchparams ,setsearchparams] = useState('')

console.log(data)
        const FetchData = async(e)=>{
            let apikey = 'af960a06c33f4a38a2c75024230106';

              e.preventDefault();
            try {
                let res = await fetch('https://api.weatherapi.com/v1/current.json' ,{
                    params:{
                        key:apikey,
                        q:searchparams, 
                    },
               
            })
            console.log(res)
            setData(res)
            } catch (error) {
                setData(error.message)
            }
            
        }
    
  return (
    <div>
        <h1>WeatherApp</h1>
        <div>
            <form action="" onSubmit={FetchData}>
                <input type="search" placeholder='enter your city name or zipcode' onChange={(e)=>setsearchparams(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>
        <div className="display-data">
        {/* {
            data?.map((item,i)=>{
                return(
                    <div key={i}>
                    <p>Location :{item.location.region}</p>
                    <p>country :{item.location.country}</p>
                    <p>time :{item.location.localtime}</p>
                    <p>logitude :{item.location.lon}</p>

                    <p>Temperature :{item.current.temp_c} degree Celsius</p>
                    <div>
                        <img src={item.current.condition.icon} alt="img_icon" />
                    </div>

                    <p>wind speed in kph :{item.wind_kph}</p>
                    <p>wind direction in kph :{item.wind_dir}</p>


                    </div>
                )
            })
        } */}
            

        </div>
    </div>
  )
}

export default WeatherApp