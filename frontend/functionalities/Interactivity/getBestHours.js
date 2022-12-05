
// Returns boolean, is good time to walk dog: true or false.
const isGoodTime = time => {
    // Check weather condition
    if(time.weather !== 'Rain' && time.weather !== 'Extreme' && time.weather !== 'Snow'){
        // If Good. Check temperature
      if(time.main.feelsLike < 299.817 && time.main.feelsLike > 266){
          // If Good. Check humidity
          if(time.main.humidity > 30 && time.main.humidity < 75){
            return true
          }
          else {
            return false;
          }
      }
      else {
          return false
      }
    }
    else {
          return false;
      }
}

// Get best hours to walk dog

// FOR UNIT TESTING DELETE 'EXPORT'
/* export */ export const getBestHours = (responseWeather) => {
    //console.log(responseWeather);
    // Array containing all days with good and bad times
    let result = [];
    // Loop throw days
    for(const day in responseWeather){
        // Object that will contain best times
        let objDay = {
            day: day
        };
        // Loop throw hours in day
        for(let i = 1; i < responseWeather[day].length; i++){
            // Check if its good
            let isGood = isGoodTime(responseWeather[day][i]);
            let time = responseWeather[day][i].time;
            // Add result to object. The key is the time
            objDay[time] = isGood
        }
        // Add day to array with all days
        result.push(objDay);
    }
    return result;
}

// FOR UNIT TESTING UNCOMENT THIS:
//module.exports = getBestHours;