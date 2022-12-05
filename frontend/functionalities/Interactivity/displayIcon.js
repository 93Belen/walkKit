// COMMENT IMPOR FOR UNIT TESTING:
import { icons } from "../../icons.js";


// Decide weather icon needed in each day
// COMENT "EXPORT" FOR UNIT TESTING
/*export*/ export const weekWeather = (weatherObj) => {
    // Array with most repeated weather in each day
    let weatherTypeforEachDay = [];
    for(const day in weatherObj){
        // Posibles outcomes
        let clear = 0;
        let clouds = 0;
        let rain = 0;
        let storm = 0;
        let tornado = 0;
        let snow = 0;

        // What weather type appears de most
        for(let i = 1; i < weatherObj[day].length; i++){
            switch(weatherObj[day][i].weather){
                case 'Clear':
                    clear++
                break;
                case 'Clouds':
                    clouds++
                break;
                case 'Rain':
                    rain++
                break;
                case 'Tornado':
                    tornado++
                    break;
                case 'Huricane':
                    tornado++
                    break;
                case 'Extreme':
                    storm++
                    break;
                case 'Storm':
                    storm++;
                    break;
                case 'Snow':
                    snow++
                    break;
            }
        }
        // Get most repeated weather tpye in result
        let result;
        // Get most repeated icon name
        if(tornado){
            result = 'tornado'
        }
        else if(clear > clouds && clear > rain && clear > storm && clear > tornado && clear > snow && clear > storm){
            result = 'clear'
        }
        else if(clouds > clear && clouds > rain && clouds > storm && clouds > tornado && clouds > snow && clouds > storm){
            result = 'clouds'
        }
        else if(clouds = clear && clouds > rain && clouds > storm && clouds > tornado && clouds > snow && clouds > storm){
            result = 'partlySunny'
        }
        else if(rain > clear && rain > clouds && rain > storm && rain > tornado && rain > snow && rain> storm){
            result = 'rain'
        }
        else if(storm > clear && storm > clouds && storm > rain && storm > tornado && storm > snow){
            result = 'storm'
        }
        else if(snow > clear && snow > clouds && snow > storm && snow > rain && snow > tornado && snow > storm){
            result = 'snow'
        }
        else {
            result = 'clouds'
        }
        // Add to array with all days
        weatherTypeforEachDay.push([day, result]);
    }
    //console.log(weatherTypeforEachDay);
    return weatherTypeforEachDay;
}

// Display Icon
// COMENT "EXPORT" FOR UNIT TESTING:
/*export*/ export const displayIcon = (responseWeather) => {
    // Call function to get Array with all icons needed
    let iconNames = weekWeather(responseWeather);
    // Loop throw icons
    for(let i = 0; i < iconNames.length; i++){
        // Create div that contains icon and h3 that contains day of the week
        let div = document.createElement('figure');
        let h3 = document.createElement('h3');
        div.innerHTML = icons[iconNames[i][1]];
        h3.innerHTML = iconNames[i][0];
        // Get header
        let header = document.getElementById(`day${i}`).childNodes[1];
        // If there is already a result displayed: delete it
        while(header.hasChildNodes()){
            header.removeChild(header.firstChild);
        }
        // Add Icon and Week day to header
        header.appendChild(div);
        header.appendChild(h3);

        // Change background of div
        if(iconNames[i][1] === 'clouds'){
            header.style.background = '#F2D189'
        }
        else if(iconNames[i][1] === 'clear'){
            header.style.background = '#82B0D1';
        }
        else if(iconNames[i][1] === 'rain'){
            header.style.background = '#F2D189';
        }
        else if(iconNames[i][1] === 'storm' || iconNames[i][1] === 'tornado'){
            header.style.background = '#85C28B';
        }
        else if(iconNames[i][1] === 'partlySunny'){
            header.style.background = '#85C28B';
        }

    }
}


// UNCOMENT FOR UNIT TESTING:
//module.exports = weekWeather;