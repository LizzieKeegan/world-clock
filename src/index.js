function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");

  let losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesDateElement.innerHTML = losAngelesTime.format("dddd MMMM D YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "HH[:]mm[:]ss [<small>]A[</small>]"
  );

  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");

  let sydneyTime = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyTime.format("dddd MMMM D YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "HH[:]mm[:]ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>
              ${cityName}
            </h2>
            <div class="date" id="date">${cityTime.format(
              "dddd MMMM D YYYY"
            )}</div>
          </div>
          <div class="time" id="time">${cityTime.format("HH[:]mm[:]ss")}
            <small>${cityTime.format("A")}</small>
          </div>
        </div>
        <a href="/" class="allCities">All cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
