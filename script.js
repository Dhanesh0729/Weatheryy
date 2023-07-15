const apikey="ed4ff4e6473cf8f6f42c9c2cb199cebf";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weathericon");

async function checkweather(city){
    const response = await fetch(apiurl + city +`&appid=${apikey}`);

    if(response.status == 404){
        alert("City not found");}

    var data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
    if(data.weather[0].main == "Clear"){
        weathericon.src = "weather icons/clear.png";
    }else if (data.weather[0].main == "Clouds"){
        weathericon.src = "weather icons/clouds.png";
    }else if(data.weather[0].main == "Rain"){
        weathericon.src = "weather icons/rain.png";
    }else if(data.weather[0].main == "Snow"){
        weathericon.src = "weather icons/snow.png";
    }else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "weather icons/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        weathericon.src = "weather icons/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "block";

}

searchbtn.addEventListener("click", () =>{
    checkweather(searchbox.value);
});

