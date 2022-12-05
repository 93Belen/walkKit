const formatHours = require('../functionalities/Interactivity/displayBestHours');

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
const resultFormatHours = [
    [
        'Go walk any time! Good weather all day!'
    ],
    [
        'Before 6'
    ],
    [
        'Around 9'
    ],
    [
        'From 18 to 21'
    ],
    [
        'Before 12',
        'At 21'
    ],
    [
        'Bad weather all day'
    ]
]
test('Format hours returns correct array', () => {
    expect(formatHours(resultGetBestHours)).toEqual(resultFormatHours);
})