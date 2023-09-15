const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9dd7b828f8msh36c749759523795p117682jsn4d5c6170ec9a',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


 const getWeather = (city) =>{
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
    .then(response => response.json())
    .then((response) => {
    console.log(response)
    cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = response.temp
    temp2.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
    // min_temp.innerHTML = response.min_temp
    humidity.innerHTML = response.humidity
    humidity2.innerHTML = response.humidity
    // max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
    wind_speed2.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees
    // sunrise.innerHTML = response.sunrise
    // sunset.innerHTML = response.sunset
})
 .catch (err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= kolkata', options)
    .then(response => response.json())
    .then((response) => {
    console.log(response)
    temp3.innerHTML = response.temp
    feels_like3.innerHTML = response.feels_like
    humidity3.innerHTML = response.humidity
    cloud_pct3.innerHTML = response.cloud_pct
    wind_speed3.innerHTML = response.wind_speed
    wind_degrees3.innerHTML = response.wind_degrees
})
 .catch (err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= Hyderabad', options)
    .then(response => response.json())
    .then((response) => {
    console.log(response)
    temp4.innerHTML = response.temp
    feels_like4.innerHTML = response.feels_like
    humidity4.innerHTML = response.humidity
    cloud_pct4.innerHTML = response.cloud_pct
    wind_speed4.innerHTML = response.wind_speed
    wind_degrees4.innerHTML = response.wind_degrees
})
 .catch (err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= kakinada', options)
    .then(response => response.json())
    .then((response) => {
    console.log(response)
    temp5.innerHTML = response.temp
    feels_like5.innerHTML = response.feels_like
    humidity5.innerHTML = response.humidity
    cloud_pct5.innerHTML = response.cloud_pct
    wind_speed5.innerHTML = response.wind_speed
    wind_degrees5.innerHTML = response.wind_degrees
})
 .catch (err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city= Mumbai', options)
    .then(response => response.json())
    .then((response) => {
    console.log(response)
    temp6.innerHTML = response.temp
    feels_like6.innerHTML = response.feels_like
    humidity6.innerHTML = response.humidity
    cloud_pct6.innerHTML = response.cloud_pct
    wind_speed6.innerHTML = response.wind_speed
    wind_degrees6.innerHTML = response.wind_degrees
})
 .catch (err => console.error(err));


 


