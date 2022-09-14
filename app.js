const express = require('express');
const app = express();

app.get('/9daysweather', async(req,res) =>{
    const URL = 'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en';
    const fetchresp = await fetch(URL);
    const json = await fetchresp.json()
    const Wdata = async (arr) => {
        
        for(var i in json.weatherForecast){
            var weatherData = json.weatherForecast[i];
            arr.push({"date":weatherData.forecastDate, "weather":weatherData.forecastWeather})
        }
        return arr
    };
    const data = await Wdata([])
    res.json(data);
});
app.listen(3000);
