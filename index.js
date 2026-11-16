function formatName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function getGreeting(timeOfDay) {
  if(timeOfDay === 'morning') {
    return 'Good Morning!'
  } if(timeOfDay === 'afternoon') {
    return 'Good Afternoon!'
  } if(timeOfDay === 'evening') {
    return 'Good Evening!'
  }
}

function createGreetings(firstName, lastName, timeOfDay) {
  return `${getGreeting(timeOfDay)}, ${formatName(firstName, lastName)}!`
}