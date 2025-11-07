
const getWeather = () => {
    const cityInput = document.getElementById('searchCity');
    const city = cityInput.value;
    const apiKey = '5224059f5ef8acb9fa2ff22a38ead46d';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        
       const weatherInfo = document.getElementById('weatherInfo');
       const cityName = document.getElementById('cityName'); 
        
       const description = data.weather[0].description;
       const temperature = data.main.temp;
       const humidity = data.main.humidity;
       const windSpeed = data.wind.speed; 

       cityName.innerText = data.name;
       cityInput.value = "";

       weatherInfo.innerHTML = `
            <h3> ${description} </h3>
            <h1 style="font-size: 60px; margin: 10px 0px;"> ${temperature} &#8451 </h1>
            <h3> Humidity : ${humidity}% </h3>
            <h3> Wind Speed : ${windSpeed} m/s </h3>
       `;
    })


}