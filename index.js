setInterval(setClock, 1000);

const secondHand = document.getElementsByClassName('second')[0];
const minuteHand = document.getElementsByClassName('minute')[0];
const hourHand = document.getElementsByClassName('hour')[0];
 
function setClock() {
  const currentDate = new Date();
  const seconds = currentDate.getSeconds() / 60;
  const minutes = (seconds+currentDate.getMinutes()) / 60;
  const hours = ((minutes + convertTo12Hour(currentDate.getHours())) / 12);

  setRotation(secondHand, seconds);
  setRotation(minuteHand, minutes);
  setRotation(hourHand, hours);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360);
}

function convertTo12Hour(hour24) {
  return ((hour24 + 11) % 12 + 1);
}

setClock();