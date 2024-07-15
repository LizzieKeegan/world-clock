console.log(
  "you can do it liz, you are becoming the person that you want to be, dont give up <3"
);

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

updateTime();
setInterval(updateTime, 1000);
