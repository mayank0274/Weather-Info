	weather("gohana");

	  var weatherImg = document.getElementById('weatherImg');
	  var cityname = document.getElementById('city');
	  var btn = document.getElementById('btn');
	  var search = document.getElementById("search");
	  
	  btn.addEventListener("click",()=>{
	    weather(search.value);
	  })
	  
	  
	  function weather(city){
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=68309d00bb90598bff9fa551dead516b&units=metric`).then((res) => res.json()).then((data) =>{
var temp = document.getElementById("temperature");
	  
	
temp.innerHTML = `${data.main.temp} °C`;
	 
	  var icons = data.weather[0].icon;
	  cityname.innerHTML =data.name;
	 weatherImg.src =`https://openweathermap.org/img/wn/${icons}@2x.png`;
	 
	 const {temp_min,temp_max,pressure, humidity,feels_like} = data.main;
	 
	 
	 document.getElementById('humidity').innerHTML = ` : ${humidity} % `;
	 
	 document.getElementById('feel_temp').innerHTML = ` : ${feels_like} °C `;
	 
	 document.getElementById('Pressure').innerHTML = ` : ${pressure} hPa `;
	 
	 document.getElementById('status').innerHTML =data.weather[0]. description;
	 
	 document.getElementById('wind').innerHTML = ` : ${data.wind.speed} m/s ` ;
	}).catch(()=>{

Toastify({
  text: "Place not found!!! Try Again with another city",
  duration: 1500,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "red",
    padding:"17px",
    fontSize:"2rem",
  },
  onClick: function(){} // Callback after click
}).showToast();
	})
	
}