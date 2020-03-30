const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const locationPara = document.querySelector('#locationPara');
const forecastPara = document.querySelector('#forecastPara');

weatherForm.addEventListener('submit', event => {
  event.preventDefault();
  const address = search.value;
  locationPara.textContent = 'Loading...';
  forecastPara.textContent = '';

  fetch(`http://localhost:3000/weather?address=${address}`).then(response => {
    response.json().then(data => {
      if (data.error) {
        locationPara.textContent = data.error;
      } else {
        locationPara.textContent = data.location;
        forecastPara.textContent = data.forecast;
      }
    });
  });
});
