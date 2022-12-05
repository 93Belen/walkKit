const weekWeather = require('../functionalities/Interactivity/displayIcon');

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
const responseWeekWeather = [
    ['Monday','clear'], 
    ['Tuesday', 'clouds'], 
    ['Wednesday', 'rain'], 
    ['Thursday', 'rain'], 
    ['Friday', 'clear'], 
    ['Saturday', 'clouds']
];
const secondFakeAPIAnswer = {
    // Monday: Snow
    Monday: [
        {day: "2022-09-23"},
        {   
        time: "00:00:00", 
        weather: "Snow", 
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
        weather: "Snow", 
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
        weather: "Snow", 
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
        weather: "Snow", 
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
        weather: "Snow", 
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
        weather: "Snow", 
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
    // Tuesday: Storm
    Tuesday: [
        {day: "2022-09-23"},
        {   
        time: "00:00:00", 
        weather: "Storm", 
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
        weather: "Storm", 
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
        weather: "Storm", 
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
        weather: "Storm", 
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
        weather: "Storm", 
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
        weather: "Storm", 
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
        weather: "Storm", 
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
    // Wednesday: Storm -> Extreme
    Wednesday: [
            {day: "2022-09-23"},
            {   
            time: "00:00:00", 
            weather: "Extreme", 
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
            weather: "Extreme", 
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
            weather: "Extreme", 
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
            weather: "Extreme", 
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
            weather: "Extreme", 
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
            weather: "Extreme", 
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
    // Thrusday: Tornado
    Thursday: [
                {day: "2022-09-23"},
                {   
                time: "00:00:00", 
                weather: "Tornado", 
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
                weather: "Tornado", 
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
                weather: "Tornado", 
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
                weather: "Tornado", 
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
                weather: "Tornado", 
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
                weather: "Tornado", 
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
    // Friday: Tornado -> Appears just once
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
                    weather: "Tornado", 
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
    // Satuday: Partly sunny
    Saturday: [
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
const secondResponseWeekWeather = [
    ['Monday','snow'], 
    ['Tuesday', 'storm'], 
    ['Wednesday', 'storm'], 
    ['Thursday', 'tornado'], 
    ['Friday', 'tornado'], 
    ['Saturday', 'partlySunny']
];
test('weekWeather return correct asnwer', ()=> {
    expect(weekWeather(fakeAPIAnswer)).toEqual(responseWeekWeather);
    expect(weekWeather(secondFakeAPIAnswer)).toEqual(secondResponseWeekWeather);
})