import { getCoordinates } from './getCoordinates.js';


// Get weather forecast
export const getWeather = async() => {
    // Call API to get coordinates
    let coordinate = await getCoordinates();
    // Add coordinates to endpoint. Weather forecast API
    const endpoint = `https://walkkit-production.up.railway.app/apicall/${coordinate.lat}/${coordinate.lon}`;

    try{
        const response = await fetch(endpoint);
        if(response.ok){
            const jsonResponse = await response.json();

            // Organice response in object
            const weatherInfo = {}
             for(const element of jsonResponse.list){
                 // Split date an hour so I can get week day
                 let dateAndHour = element.dt_txt.split(' ')
                 // Just date
                 let date = dateAndHour[0];
                 // Split date and join to fit needed format
                 let dateArr = date.split('-');
                 let day = dateArr.join('/');

                 // Get week day with date in correct format
                 let currentDay = new Date(day);
                 let weekDay = currentDay.toLocaleDateString('en-US', {
                        weekday: 'long',
                })
                // Get time of forecast
                let time = element.dt_txt.split(' ')
                
                // Add info to object
                // If it contains that day, add the rest of forecast hours to it
                if(weatherInfo[weekDay]){
                    weatherInfo[weekDay].push({
                        // forecast hour
                        time: time[1],
                        // type of weather (rain, clear, snow...)
                        weather: element.weather[0].main,
                        // Weather parameters
                        main: {
                            feelsLike: element.main.feels_like,
                            humidity: element.main.humidity,
                            temp: element.main.temp,
                            tempMax: element.main.temp_max,
                            tempMin: element.main.temp_min
                        },
                        windSpeed: element.wind.speed
                    })
                }
                // If the object doesn't contain day, add day and hour forecast
                else {
                    weatherInfo[weekDay] = []
                    weatherInfo[weekDay].push({day: time[0]})
                    weatherInfo[weekDay].push({
                        time: time[1],
                        weather: element.weather[0].main,
                        main: {
                            feelsLike: element.main.feels_like,
                            humidity: element.main.humidity,
                            temp: element.main.temp,
                            tempMax: element.main.temp_max,
                            tempMin: element.main.temp_min
                        },
                        windSpeed: element.wind.speed
                    })
                }
            }
            // Return object with 5 days of forecast. Each one contains and array of 3 hourly forecast
            // console.log(weatherInfo);
            return weatherInfo;
        }
        throw new Error('Resquest failed!')
    }
    catch(error){
        console.log(error)
    }
}