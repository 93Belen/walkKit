
// Get coodinates of location input. Forecast API needs coodinates.
export const getCoordinates = async() => {
    let cityName = document.getElementById('location-input').value;

    //Check if its a 2 words name
    let checkIfTwordsName = cityName.split(' ');
    if(checkIfTwordsName.length > 1){
        cityName = checkIfTwordsName[0] + '+' + checkIfTwordsName[1]
    }

    // API
    const endpoint = `https://walkkit-production.up.railway.app/apicall/${cityName}`;

    // Fetch API
    try{
        const response = await fetch(endpoint);
        if(response.ok){
            const jsonResponse = await response.json();

            // Return latitude and longitude in an object
            const lat = jsonResponse[0].lat;
            const lon = jsonResponse[0].lon;
            console.log(lat, lon);
            return {
                lat: lat,
                lon: lon
            }
        }
        throw new Error('Resquest failed!')
    }
    catch(error){
        console.log(error)
    }
}

