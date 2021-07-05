let weather = {
    "apiKey": "e314e8030b2159c0fff5919b834d4dd4",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
         + city 
         + "&units=metric&appid=" 
         + this.apiKey)

        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);

        document.querySelector(".city").innerText = "Weather in " + name; 
        document.querySelector(".icon").src= "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Speed: " + speed + " km/h";

    },
    search: function () {
        this.fetchWeather(document.querySelector("#search-bar").value)
    }
};

const submit = document.querySelector('.search');
const getCity = document.querySelector('#search-bar');
const form = document.querySelector('form');
const submitBtn = document.querySelector('#submitCity');


form.addEventListener('submit', function(event) {
    event.preventDefault();
});

submitBtn.addEventListener('click', function() {
    localStorage.setItem('city', JSON.stringify( getCity.value));
});

const localStorageContent = localStorage.getItem('city');

let citys;
if(localStorageContent === null) {
    citys = [];
} else {
    citys = localStorageContent;
}



// assign search-bar with click listener to save input
// var btnSave = document.querySelector("#btnSave");

// btnSave.addEventListener('click', function(event){
//     event.preventDefault();

//     var searchBar = document.querySelector("#search-bar").value;

//     localStorage.setItem('search-bar', searchBar);
// });

// const inputKey = document.querySelector('search-bar').value;
// const inputValue = (document.getElementsByClassName('search-bar').value);
// const btnSave = document.getElementsByClassName("btnSave");

// console.log(inputKey);

// btnSave.onClick = function() {
//     const key = inputKey.value;
//     const value = inputValue.value;

//     console.log(key);
//     console.log(value);

//     if (key && value) {
//         localStorage.setItem(key, value);
//     }

// }


// 5 day forecast
let forecast = {
    "apiKey": "e314e8030b2159c0fff5919b834d4dd4",
    fetchForecast: function (city) {
        fetch("http://api.openweathermap.org/data/2.5/forecast?q="
         + city 
         + "&units=metric&appid=" 
         + this.apiKey)

        .then((response) => response.json())
        .then((data) => console.log(data))
        .then((data) => this.displayForecast(data));
    },

    displayForecast: function(data) {
        const name = data;
        // const { icon, description } = data.list[0].weather.description;
        const  {humidity, temp}  = data.list[0].main;
        const  speed  = data.Array[0].wind.speed;
        console.log(name,temp,humidity,speed);

        document.querySelector(".city").innerText = "Weather in " + name; 
        document.querySelector(".icon").src= "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Speed: " + speed + " km/h";

    },
    search: function () {
        this.fetchForecast(document.querySelector("#search-bar").value)
    }
};



// search for city with search button
document.querySelector(".search #submitCity").addEventListener("click", function(){
    weather.search();
    forecast.search();
});
// search for city with Enter button
document.querySelector("#search-bar").addEventListener("keyup", function(event){
    if (event.key == "Enter") {
    weather.search();
    forecast.search();
    }
});