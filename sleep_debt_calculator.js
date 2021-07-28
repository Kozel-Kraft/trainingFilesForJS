//Programa que determina el ideal de horas que debe dormir una persona.

// Determinar cuántas horas duermes cada semana
//Here you load the amont of hours you sleep perday
function getSleepHours(day){
  switch(day){
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 5;
      break;
    case 'saturday':
      return 5;
      break;
    case 'sunday':
      return 5;
      break;
  }
}

/// Function that sums the total of hours you sleep a day
function getActualSleepHours(){
  return getSleepHours('monday')+getSleepHours('tuesday')+ getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday');
}

///Function that calculates how much hours you should sleep a day, it depends on you of course.
function getIdealSleepHours(){
  var idealHours=7;
  return idealHours*7;
}

// This function extracts.
function calculateSleepDebt(arg1,arg2){
  return arg1-arg2;
}

yourHours = getActualSleepHours();
idealHours = getIdealSleepHours();
if(yourHours==idealHours){
  console.log("perfect");
}else if(yourHours>idealHours){
console.log("You're sleeping too much");
console.log(`You should sleep: ${calculateSleepDebt(yourHours,idealHours)} hours less`)
}else if(yourHours< idealHours){
  console.log("Sleep more, my son");
  console.log(`You should sleep: ${calculateSleepDebt(idealHours,yourHours)} hours more`)
}
