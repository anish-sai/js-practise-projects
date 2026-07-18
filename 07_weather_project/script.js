
const search = document.getElementById('weatherButton')
const input = document.getElementById('cityInput')


search.addEventListener('click', async () => {
    const city = input.value;

    if (city === "")
        return;

    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=2846715328674ef7ae685447262306&q=${city}&aqi=no`);
    const data = await response.json();

    console.log(data)

    const p = document.querySelector('p')
    p.textContent = `Temperature of ${city} is ${data.current.temp_c} and weather forecast is ${data.current.condition.text}`
})