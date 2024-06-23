// http://api.weatherapi.com/v1/current.json?key=332a719dddcf4d4db70171238241406&q=London&aqi=no

const weather = document.getElementById('renderweather')
const renderDetails = document.getElementById('renderDetails')

document.getElementById('sub').addEventListener('click', async () => {
    const city = document.getElementById('city').value;
    if(city) {
        try{
            const data = await fetch(`http://api.weatherapi.com/v1/current.json?key=332a719dddcf4d4db70171238241406&q=${city}&aqi=no`);
            
            const res = await data.json();
            
            weather.innerHTML +=`
             <img class="weather-icon" src=http://${res.current.condition.icon}>
              <h1 class="temp">${res.current.temp_c}°C </h1>
              <h2 class="city">${res.location.name}</h2>
              <p class="humidity">${res.current.humidity}%</p>
              <p>Humidity</p>
              
            `

            // console.log("Here======>", res);
        }
        catch(error){
            console.error(error);
        }
    } else {
        console.log("Please enter a city name.");
    }
});



