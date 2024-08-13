let search = document.querySelector('.search-text')
let content = document.querySelector('.content')
let time = document.querySelector('.time')
let temperature = document.querySelector('.temperature strong')
let  eye = document.querySelector('.eye_value')
let couds = document.querySelector('.couds')
let gio = document.querySelector('.gio_value')
let mattroi = document.querySelector('.mat_troi_value')
console.log(content)
async function changeWeather(){
    const searchValue = search.value.trim()
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&APPID=d92e0b1f1dc6fb6263ccaf996bf5588f`

    let data = await fetch(apiUrl)
    .then(res=> res.json())
    
    content.innerHTML = data?.name
    console.log(data)
    time.innerHTML = new Date().toLocaleString('vi')
    temperature.innerHTML= Math.round(data.main.temp-273.15)
    eye.innerHTML = data.visibility +  ' (m)'
    gio.innerHTML = data.wind.speed + ' (m/s)'
    mattroi.innerHTML = data.clouds.all + ' (%)'
    couds.innerHTML = data.weather[0].main

}

search.addEventListener('keyup', (e) => {
	if (e.keyCode === 13) {
		changeWeather()
	}
})