import { getWeather } from './functionalities/APIs/getWeather.js';
import { displayIcon} from './functionalities/Interactivity/displayIcon.js';
import { getBestHours } from './functionalities/Interactivity/getBestHours.js';
import { displayBestHours } from './functionalities/Interactivity/displayBestHours.js';

import express from 'express';

const app = express();
app.listen(process.env.PORT);

// All functions are called and result is displayed when clicking form button
const displayForecast = async(e) => {
        e.preventDefault();
        // Get weather forecast
        let responseWeather = await getWeather();
        console.log(responseWeather);
        // Display icons that represents weather
        displayIcon(responseWeather);
        // Calculate best times to walk dog based on forecast
        let bestHours = getBestHours(responseWeather);
        // Display best times to walk dog
        displayBestHours(bestHours);
        // Make results visible
        let forecast = document.getElementById('weather-prediction');
        forecast.style.visibility = 'visible';

}



// Event
let button = document.getElementById('submit-button');
button.addEventListener('click', displayForecast);



