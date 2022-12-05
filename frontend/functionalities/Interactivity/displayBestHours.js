// Display best hours to walk dog


// COMMENT "EXPORT" FOR UNIT TESTING
/*export*/ export const displayBestHours = (bestHours) => {
    // Clock icon goes before each hour displayed
    let clockIcon = `<svg aria-hidden='true' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7.5" cy="7.5" r="7" stroke="black"/>
    <line x1="7.5" y1="3" x2="7.5" y2="8" stroke="black"/>
    <line x1="12" y1="8.5" x2="7" y2="8.5" stroke="black"/>
    </svg>`
    // 
    let hours = formatHours(bestHours);
    //console.log(hours);
    // Loop throw best hours
    for(let i = 0; i < hours.length; i++){
        // Get day of forecast
        let day = document.getElementById(`day${i}`)
        // If there is already a result displayed: remove it
        while(day.lastChild.className !== 'header-day-prediction'){
            day.removeChild(day.lastChild);
        }
        // Create div that contains p with clock icon and hour    
        let div = document.createElement('div');
        div.ariaLabel = 'Best hours to walk your dog'
        div.className = 'hour-suggestion';
        // Loop throw the hours in current day and display them
        for(const hour of hours[i]){
            let p = document.createElement('p');
            p.innerHTML = `${clockIcon} ${hour}`;
            div.appendChild(p);
        }
        // Add forecast to day
        day.appendChild(div);

    }
}



// Format hours with descriptive text
const formatHours = bestHours => {
    // Format whole week
    let formatedHours = [];

    // Loop throw days of result
    for(const day of bestHours){
        // Store good hours of current day
        let hours = [];
        // Loop throw hours
        for(const hour in day){
            // If hour === true => it means is a good time to walk dog
            if(day[hour]){
                // First element is the week day
                if(hour !== 'day'){
                    // Get just hour, not minutes. Transform from 03:00:00 to 03
                    let formatedHour = hour.split(':');
                    hours.push(Number(formatedHour[0]))
                }
            }
        }

        // Format current day
        let formated = [];
        // If there is not good time
        if(hours.length === 0){
            formated.push('Bad weather all day');
        }
        // If there is only one good time
        else if(hours.length === 1){
            formated.push('Around ' + hours[0]);
        }
        // If there is more than one good time
        else {
            // Array of arrays: groups hours with intervals of 3 hours (API returns forecast in 3 hours chunks)
            let consecutiveHoursArr = [[hours[0]]];
            // Index of inner array where I need to push hour
            let innerArrayIndex = 0;
            // Index of hour i'm checking
            let hoursIndex = 1;
            // Loop throw hours
            while(hoursIndex < hours.length){
                // If interval is 3 hours
                if(hours[hoursIndex] - hours[hoursIndex - 1] === 3){
                    // Push hour in same inner array
                    consecutiveHoursArr[innerArrayIndex].push(hours[hoursIndex]);
                    // Go to next hour
                    hoursIndex++
                        }
                // If interval is more than 3 hours
                else {
                    // Push a different inner array
                    consecutiveHoursArr.push([hours[hoursIndex]]);
                    // Add one to inner array index so the next hour is group in this new chunk if needed
                     innerArrayIndex++
                    // Go to next hour
                    hoursIndex++
                }
            }

                    
            // Loop throw consecutiveHoursArr to format them as text
            for(const innerArray of consecutiveHoursArr){
                // If inner array contains more than one hour
                if(innerArray.length > 1){
                    // If first good hours is at 12am or 3am
                    // Push last consecutive hour in text format
                    if(innerArray[0] === 0 || innerArray[0] === 3){
                        formated.push(`Before ${innerArray[innerArray.length -1]}`)
                    }
                    // If first good hours is 6 or later than 6
                    // Push first and last element of inner array in text format
                    else {
                        formated.push(`From ${innerArray[0]} to ${innerArray[innerArray.length - 1]}`);
                    }
                }
                // If inner array contains only one hour
                else {
                    // Push hour in text format
                    formated.push(`At ${innerArray[0]}`)
                }
            }
            
            // If there is good weather all day, change from 'Before 21', to 'Good Weather all day'
            if(formated.length === 1 && formated[0] === 'Before 21'){
                formated[0] = 'Go walk any time! Good weather all day!'
            }
            // If first good time is 'Before 3', delete it -> Nobody is gonna go walk at that time
            if(formated[0] === 'Before 3'){
                formated.shift();
            }
        }
        // Push to array with all day's forecast formated with descriptive text
        formatedHours.push(formated);
    }
    // Return array with all days
    return formatedHours;
}


// UNCOMMENT FOR UNIT TESTING:
//module.exports = formatHours;