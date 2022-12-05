const getBestHours = require('../functionalities/Interactivity/getBestHours');



const fakeAPIAnswer = {
    // Monday: Clear and good temp => Good all day
    Monday: [
        {day: "2022-09-23"},
        {   
        time: "00:00:00", 
        weather: "Clear", 
        main: {
            feelsLike: 287.95,
            humidity: 66,
            temp: 288.62,
            tempMax: 288.62,
            tempMin: 288.62
        }, 
        windSpeed: 2.73
        },
        {time: "03:00:00",
        weather: "Clear", 
        main: {
            feelsLike: 287.95,
            humidity: 66,
            temp: 288.62,
            tempMax: 288.62,
            tempMin: 288.62
        }, 
        windSpeed: 2.73
        },
        {time: "06:00:00", 
        weather: "Clear", 
        main: {
            feelsLike: 287.95,
            humidity: 66,
            temp: 288.62,
            tempMax: 288.62,
            tempMin: 288.62
        }, 
        windSpeed: 2.73
        },
        {time: "09:00:00", 
        weather: "Clear", 
        main: {
            feelsLike: 287.95,
            humidity: 66,
            temp: 288.62,
            tempMax: 288.62,
            tempMin: 288.62
        }, 
        windSpeed: 2.73
        },
        {time: "12:00:00", 
        weather: "Clear", 
        main: {
            feelsLike: 287.95,
            humidity: 66,
            temp: 288.62,
            tempMax: 288.62,
            tempMin: 288.62
        }, 
        windSpeed: 2.73
        },
        {time: "15:00:00", 
        weather: "Clear", 
        main: {
            feelsLike: 287.95,
            humidity: 66,
            temp: 288.62,
            tempMax: 288.62,
            tempMin: 288.62
        }, 
        windSpeed: 2.73
        },
        {time: "18:00:00", 
        weather: "Clear", 
        main: {
            feelsLike: 287.95,
            humidity: 66,
            temp: 288.62,
            tempMax: 288.62,
            tempMin: 288.62
        }, 
        windSpeed: 2.73
        },
        {time: "21:00:00", 
        weather: "Clear", 
        main: {
            feelsLike: 287.95,
            humidity: 66,
            temp: 288.62,
            tempMax: 288.62,
            tempMin: 288.62
        }, 
        windSpeed: 2.73
        }],
    // Tuesday: Clouds all day, good temp in the morning, too hot from 9am.
    Tuesday: [
        {day: "2022-09-23"},
        {   
        time: "00:00:00", 
        weather: "Clouds", 
        main: {
            feelsLike: 287.95,
            humidity: 66,
            temp: 288.62,
            tempMax: 288.62,
            tempMin: 288.62
        }, 
        windSpeed: 2.73
        },
        {time: "03:00:00",
        weather: "Clouds", 
        main: {
            feelsLike: 287.95,
            humidity: 66,
            temp: 288.62,
            tempMax: 288.62,
            tempMin: 288.62
        }, 
        windSpeed: 2.73
        },
        {time: "06:00:00", 
        weather: "Clouds", 
        main: {
            feelsLike: 287.95,
            humidity: 66,
            temp: 288.62,
            tempMax: 288.62,
            tempMin: 288.62
        }, 
        windSpeed: 2.73
        },
        {time: "09:00:00", 
        weather: "Clouds", 
        main: {
            feelsLike: 299.95,
            humidity: 66,
            temp: 288.62,
            tempMax: 288.62,
            tempMin: 288.62
        }, 
        windSpeed: 2.73
        },
        {time: "12:00:00", 
        weather: "Clouds", 
        main: {
            feelsLike: 299.95,
            humidity: 66,
            temp: 288.62,
            tempMax: 288.62,
            tempMin: 288.62
        }, 
        windSpeed: 2.73
        },
        {time: "15:00:00", 
        weather: "Clouds", 
        main: {
            feelsLike: 299.95,
            humidity: 66,
            temp: 288.62,
            tempMax: 288.62,
            tempMin: 288.62
        }, 
        windSpeed: 2.73
        },
        {time: "18:00:00", 
        weather: "Clouds", 
        main: {
            feelsLike: 299.95,
            humidity: 66,
            temp: 288.62,
            tempMax: 288.62,
            tempMin: 288.62
        }, 
        windSpeed: 2.73
        },
        {time: "21:00:00", 
        weather: "Clouds", 
        main: {
            feelsLike: 299.95,
            humidity: 66,
            temp: 288.62,
            tempMax: 288.62,
            tempMin: 288.62
        }, 
        windSpeed: 2.73
        }],
    // Wednesday: Too much humidity up to 6pm. Rains from 12pm
    Wednesday: [
            {day: "2022-09-23"},
            {   
            time: "00:00:00", 
            weather: "Clouds", 
            main: {
                feelsLike: 287.95,
                humidity: 80,
                temp: 288.62,
                tempMax: 288.62,
                tempMin: 288.62
            }, 
            windSpeed: 2.73
            },
            {time: "03:00:00",
            weather: "Clouds", 
            main: {
                feelsLike: 287.95,
                humidity: 80,
                temp: 288.62,
                tempMax: 288.62,
                tempMin: 288.62
            }, 
            windSpeed: 2.73
            },
            {time: "06:00:00", 
            weather: "Clouds", 
            main: {
                feelsLike: 287.95,
                humidity: 80,
                temp: 288.62,
                tempMax: 288.62,
                tempMin: 288.62
            }, 
            windSpeed: 2.73
            },
            {time: "09:00:00", 
            weather: "Clouds", 
            main: {
                feelsLike: 287.95,
                humidity: 66,
                temp: 288.62,
                tempMax: 288.62,
                tempMin: 288.62
            }, 
            windSpeed: 2.73
            },
            {time: "12:00:00", 
            weather: "Rain", 
            main: {
                feelsLike: 280.95,
                humidity: 66,
                temp: 288.62,
                tempMax: 288.62,
                tempMin: 288.62
            }, 
            windSpeed: 2.73
            },
            {time: "15:00:00", 
            weather: "Rain", 
            main: {
                feelsLike: 287.95,
                humidity: 66,
                temp: 288.62,
                tempMax: 288.62,
                tempMin: 288.62
            }, 
            windSpeed: 2.73
            },
            {time: "18:00:00", 
            weather: "Rain", 
            main: {
                feelsLike: 287.95,
                humidity: 66,
                temp: 288.62,
                tempMax: 288.62,
                tempMin: 288.62
            }, 
            windSpeed: 2.73
            },
            {time: "21:00:00", 
            weather: "Rain", 
            main: {
                feelsLike: 287.95,
                humidity: 66,
                temp: 288.62,
                tempMax: 288.62,
                tempMin: 288.62
            }, 
            windSpeed: 2.73
        }],
    // Thrusday: Rain in the morning, clear and good temp after 6pm
    Thursday: [
                {day: "2022-09-23"},
                {   
                time: "00:00:00", 
                weather: "Rain", 
                main: {
                    feelsLike: 287.95,
                    humidity: 66,
                    temp: 288.62,
                    tempMax: 288.62,
                    tempMin: 288.62
                }, 
                windSpeed: 2.73
                },
                {time: "03:00:00",
                weather: "Rain", 
                main: {
                    feelsLike: 287.95,
                    humidity: 66,
                    temp: 288.62,
                    tempMax: 288.62,
                    tempMin: 288.62
                }, 
                windSpeed: 2.73
                },
                {time: "06:00:00", 
                weather: "Rain", 
                main: {
                    feelsLike: 287.95,
                    humidity: 66,
                    temp: 288.62,
                    tempMax: 288.62,
                    tempMin: 288.62
                }, 
                windSpeed: 2.73
                },
                {time: "09:00:00", 
                weather: "Rain", 
                main: {
                    feelsLike: 287.95,
                    humidity: 66,
                    temp: 288.62,
                    tempMax: 288.62,
                    tempMin: 288.62
                }, 
                windSpeed: 2.73
                },
                {time: "12:00:00", 
                weather: "Rain", 
                main: {
                    feelsLike: 287.95,
                    humidity: 66,
                    temp: 288.62,
                    tempMax: 288.62,
                    tempMin: 288.62
                }, 
                windSpeed: 2.73
                },
                {time: "15:00:00", 
                weather: "Rain", 
                main: {
                    feelsLike: 287.95,
                    humidity: 66,
                    temp: 288.62,
                    tempMax: 288.62,
                    tempMin: 288.62
                }, 
                windSpeed: 2.73
                },
                {time: "18:00:00", 
                weather: "Clear", 
                main: {
                    feelsLike: 287.95,
                    humidity: 66,
                    temp: 288.62,
                    tempMax: 288.62,
                    tempMin: 288.62
                }, 
                windSpeed: 2.73
                },
                {time: "21:00:00", 
                weather: "Clear", 
                main: {
                    feelsLike: 287.95,
                    humidity: 66,
                    temp: 288.62,
                    tempMax: 288.62,
                    tempMin: 288.62
                }, 
                windSpeed: 2.73
        }],
    // Friday: Clear all day, too hot from 3pm to 6pm
    Friday: [
                    {day: "2022-09-23"},
                    {   
                    time: "00:00:00", 
                    weather: "Clear", 
                    main: {
                        feelsLike: 287.95,
                        humidity: 66,
                        temp: 288.62,
                        tempMax: 288.62,
                        tempMin: 288.62
                    }, 
                    windSpeed: 2.73
                    },
                    {time: "03:00:00",
                    weather: "Clear", 
                    main: {
                        feelsLike: 287.95,
                        humidity: 66,
                        temp: 288.62,
                        tempMax: 288.62,
                        tempMin: 288.62
                    }, 
                    windSpeed: 2.73
                    },
                    {time: "06:00:00", 
                    weather: "Clear", 
                    main: {
                        feelsLike: 287.95,
                        humidity: 66,
                        temp: 288.62,
                        tempMax: 288.62,
                        tempMin: 288.62
                    }, 
                    windSpeed: 2.73
                    },
                    {time: "09:00:00", 
                    weather: "Clear", 
                    main: {
                        feelsLike: 287.95,
                        humidity: 66,
                        temp: 288.62,
                        tempMax: 288.62,
                        tempMin: 288.62
                    }, 
                    windSpeed: 2.73
                    },
                    {time: "12:00:00", 
                    weather: "Clear", 
                    main: {
                        feelsLike: 287.95,
                        humidity: 66,
                        temp: 288.62,
                        tempMax: 288.62,
                        tempMin: 288.62
                    }, 
                    windSpeed: 2.73
                    },
                    {time: "15:00:00", 
                    weather: "Clear", 
                    main: {
                        feelsLike: 299.95,
                        humidity: 66,
                        temp: 288.62,
                        tempMax: 288.62,
                        tempMin: 288.62
                    }, 
                    windSpeed: 2.73
                    },
                    {time: "18:00:00", 
                    weather: "Clear", 
                    main: {
                        feelsLike: 299.95,
                        humidity: 66,
                        temp: 288.62,
                        tempMax: 288.62,
                        tempMin: 288.62
                    }, 
                    windSpeed: 2.73
                    },
                    {time: "21:00:00", 
                    weather: "Clear", 
                    main: {
                        feelsLike: 280.95,
                        humidity: 66,
                        temp: 288.62,
                        tempMax: 288.62,
                        tempMin: 288.62
                    }, 
                    windSpeed: 2.73
        }],
    // Satuday: Rain in the morning and too hot => Bad weather all day
    Saturday: [
                        {day: "2022-09-23"},
                        {   
                        time: "00:00:00", 
                        weather: "Rain", 
                        main: {
                            feelsLike: 287.95,
                            humidity: 66,
                            temp: 288.62,
                            tempMax: 288.62,
                            tempMin: 288.62
                        }, 
                        windSpeed: 2.73
                        },
                        {time: "03:00:00",
                        weather: "Rain", 
                        main: {
                            feelsLike: 287.95,
                            humidity: 66,
                            temp: 288.62,
                            tempMax: 288.62,
                            tempMin: 288.62
                        }, 
                        windSpeed: 2.73
                        },
                        {time: "06:00:00", 
                        weather: "Clouds", 
                        main: {
                            feelsLike: 299.95,
                            humidity: 66,
                            temp: 288.62,
                            tempMax: 288.62,
                            tempMin: 288.62
                        }, 
                        windSpeed: 2.73
                        },
                        {time: "09:00:00", 
                        weather: "Clouds", 
                        main: {
                            feelsLike: 299.95,
                            humidity: 66,
                            temp: 288.62,
                            tempMax: 288.62,
                            tempMin: 288.62
                        }, 
                        windSpeed: 2.73
                        },
                        {time: "12:00:00", 
                        weather: "Clouds", 
                        main: {
                            feelsLike: 299.95,
                            humidity: 66,
                            temp: 288.62,
                            tempMax: 288.62,
                            tempMin: 288.62
                        }, 
                        windSpeed: 2.73
                        },
                        {time: "15:00:00", 
                        weather: "Clouds", 
                        main: {
                            feelsLike: 299.95,
                            humidity: 66,
                            temp: 288.62,
                            tempMax: 288.62,
                            tempMin: 288.62
                        }, 
                        windSpeed: 2.73
                        },
                        {time: "18:00:00", 
                        weather: "Clouds", 
                        main: {
                            feelsLike: 299.95,
                            humidity: 66,
                            temp: 288.62,
                            tempMax: 288.62,
                            tempMin: 288.62
                        }, 
                        windSpeed: 2.73
                        },
                        {time: "21:00:00", 
                        weather: "Clouds", 
                        main: {
                            feelsLike: 299.95,
                            humidity: 66,
                            temp: 288.62,
                            tempMax: 288.62,
                            tempMin: 288.62
                        }, 
                        windSpeed: 2.73
        }],
}
const resultGetBestHours = [
    {
        ['00:00:00']: true,
        ['03:00:00']: true,
        ['06:00:00']: true,
        ['09:00:00']: true,
        ['12:00:00']: true,
        ['15:00:00']: true,
        ['18:00:00']: true,
        ['21:00:00']: true,
        ["day"]: "Monday"

    },
    {
        ['00:00:00']: true,
        ['03:00:00']: true,
        ['06:00:00']: true,
        ['09:00:00']: false,
        ['12:00:00']: false,
        ['15:00:00']: false,
        ['18:00:00']: false,
        ['21:00:00']: false,
        ["day"]: "Tuesday"
    },
    {
        ['00:00:00']: false,
        ['03:00:00']: false,
        ['06:00:00']: false,
        ['09:00:00']: true,
        ['12:00:00']: false,
        ['15:00:00']: false,
        ['18:00:00']: false,
        ['21:00:00']: false,
        ["day"]: "Wednesday"
    },
    {
        ['00:00:00']: false,
        ['03:00:00']: false,
        ['06:00:00']: false,
        ['09:00:00']: false,
        ['12:00:00']: false,
        ['15:00:00']: false,
        ['18:00:00']: true,
        ['21:00:00']: true,
        ["day"]: "Thursday"
    },
    {
        ['00:00:00']: true,
        ['03:00:00']: true,
        ['06:00:00']: true,
        ['09:00:00']: true,
        ['12:00:00']: true,
        ['15:00:00']: false,
        ['18:00:00']: false,
        ['21:00:00']: true,
        ["day"]: "Friday"
    },
    {
        ['00:00:00']: false,
        ['03:00:00']: false,
        ['06:00:00']: false,
        ['09:00:00']: false,
        ['12:00:00']: false,
        ['15:00:00']: false,
        ['18:00:00']: false,
        ['21:00:00']: false,
        ["day"]: "Saturday"
    }
];

test('getBestHours returns the right response', ()=> {
    expect(getBestHours(fakeAPIAnswer)).toEqual(resultGetBestHours);
})