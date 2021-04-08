

let input = document.getElementById('input');

let pic = "http://openweathermap.org/img/wn/10d@2x.png";

async function getWeather(){ 
    

    let city = input.value;

    const finalUrl = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&units=metric&APPID=47fb45d86a1d1752af7cb5d1dc0f9918' );

    const results = await finalUrl.json();

   document.getElementById('city').innerText = results.name;

    console.log(results);

    document.getElementById('description').innerText =  results.weather[0].description;
  
    document.getElementById('temp').innerText = 'temperature    ' + JSON.stringify(results.main.temp) + ' C';

    document.getElementById('feels').innerText = 'feels like    ' + JSON.stringify(results.main.feels_like) + ' C';

    document.getElementById('hi').innerText = 'hi of    ' + JSON.stringify(results.main.temp_max) + ' C';

    document.getElementById('low').innerText = 'low of    ' + JSON.stringify(results.main.temp_min) + ' C';

    document.getElementById('wind').innerText = 'wind speed    ' + JSON.stringify(results.wind.speed) + ' km';

    document.getElementById('container').style.backgroundImage =  " URL('" + results.weather[0].icon + ".png')";

    document.getElementById('icon').src = 'http://openweathermap.org/img/wn/'+results.weather[0].icon +'@2x.png'; 
}


document.getElementById('search').onclick = () => getWeather();



window.addEventListener('keydown' ,function(e){

    if(e.keyCode == 13){
        getWeather(); 
    }
})




