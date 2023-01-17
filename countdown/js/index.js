// Launch date: 10/09/2023
const launchDate = new Date('09/10/2023')

// Catching the elements that change
const days = document.querySelector('#days-number')
const hours = document.querySelector('#hours-number')
const minutes = document.querySelector('#minutes-number')
const seconds = document.querySelector('#seconds-number')

// Functions to calculate the time
function getDays(time){
  return Math.floor(time/(1000*60*60*24))
}

function getHours(time){
  return Math.floor(time/(1000*60*60))
}

function getMinutes(time){
  return Math.floor(time/(1000*60))
}

function getSeconds(time){
  return Math.floor(time/(1000))
}

function convertTimeToMilliseconds(time,option){
  switch(option){
    case 'day':
      return time*1000*60*60*24
    
    case 'hour':
      return time*1000*60*60

    case 'minute':
      return time*1000*60
    
    case 'second':
      return time*1000
    
    default:
      console.log('Option not detect, choice between: {day, hour, minute, second}')
      return;
  }
}

function getTime() {
  const dateObj = {
    day: 0,
    hour: 0,
    minute: 0,
    second: 0
  }

  const now = new Date()
  
  let timeLeft = Number(launchDate.getTime() - now.getTime())

  if(timeLeft>=1000*60*60*24){
    dateObj.day = getDays(timeLeft);
    timeLeft -= convertTimeToMilliseconds(dateObj.day, 'day');
  }
  if(timeLeft>=1000*60*60){
    dateObj.hour = getHours(timeLeft);
    timeLeft -= convertTimeToMilliseconds(dateObj.hour, 'hour');
  }
  if(timeLeft>=1000*60){
    dateObj.minute = getMinutes(timeLeft)
    timeLeft -= convertTimeToMilliseconds(dateObj.minute, 'minute')
  }
  if(timeLeft>=1000){
    dateObj.second = getSeconds(timeLeft);
    timeLeft -= convertTimeToMilliseconds(dateObj.second, 'second')
  }

  return dateObj
}

// Function to display the calculated time on page
function displayTime() {
  const timeToDate = getTime()

  days.textContent = timeToDate.day.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: true,
  })
  hours.textContent = timeToDate.hour.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: true,
  })
  minutes.textContent = timeToDate.minute.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: true,
  })
  seconds.textContent = timeToDate.second.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: true,
  })
}

// SetInterval function to updated the elements
setInterval(() => {
  displayTime()
}, 1000)