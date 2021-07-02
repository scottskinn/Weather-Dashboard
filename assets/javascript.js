let weather = {
    "apiKey": "e314e8030b2159c0fff5919b834d4dd4",
    fetchWeather: function () {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
         + city 
         + "&units=metric&appid=" 
         + apiKey)

        .then((response) => response.json())
        .then((data) => console.log(data));

    },
}







