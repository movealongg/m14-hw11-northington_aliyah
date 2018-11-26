let forecast ={
    "coord": {
        "lon": -86.74,
        "lat": 34.7
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 277.44,
        "pressure": 1017,
        "humidity": 64,
        "temp_min": 276.15,
        "temp_max": 278.15
    },
    "visibility": 16093,
    "wind": {
        "speed": 6.7,
        "deg": 290
    },
    "clouds": {
        "all": 90
    },
    "dt": 1543253700,
    "sys": {
        "type": 1,
        "id": 211,
        "message": 0.0131,
        "country": "US",
        "sunrise": 1543235522,
        "sunset": 1543271809
    },
    "id": 4074277,
    "name": "Huntsville",
    "cod": 200
}

var weatherWrapper = document.getElementById(
'weather');

let currentWeather = document.createTextNode(forecast[1].description);

