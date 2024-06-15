const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");
      const weatherIcon = document.querySelector(".weather-icon");

      const apiKey = "1d551e4a92d0aaff31ffc02c90b09ea3";

      async function checkWeather(url) {
        try {
          const response = await fetch(url);

          if (response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
          } else {
            let data = await response.json();
            console.log(data);

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = `${Math.round(
              data.main.temp
            )}°C`;
            document.querySelector(
              ".humidity"
            ).innerHTML = `${data.main.humidity}%`;
            document.querySelector(
              ".wind"
            ).innerHTML = `${data.wind.speed} Km/h`;

            if (data.weather[0].main == "Clouds") {
              weatherIcon.src = "image/clouds.png";
            } else if (data.weather[0].main == "Clear") {
              weatherIcon.src = "image/clear.png";
            } else if (data.weather[0].main == "Rain") {
              weatherIcon.src = "image/rain.png";
            } else if (data.weather[0].main == "Drizzle") {
              weatherIcon.src = "image/drizzle.png";
            } else if (data.weather[0].main == "Mist") {
              weatherIcon.src = "image/mist.png";
            }
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
          }
        } catch (error) {
          console.log("error occur and its details is :", error);
        }
      }
      searchBtn.addEventListener("click", () => {
        const city = searchBox.value.toLowerCase();
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        checkWeather(apiUrl);
      });