let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);
const earlyRunner = true;
let runnerAge = 20;

if (runnerAge>18 && raceNumber <=1000)
    {raceNumber += 1000};
if (runnerAge>18 && earlyRunner)
  {
    console.log('You will race at 9:30am');}
    else if( runnerAge>18 && !earlyRunner){
      console.log('they will race at 11:00 am');
  }
else if (runnerAge<18){
  console.log('they will race at 12:30 pm');
}
else {
  console.log('Go to see the registration desk');
}


console.log(raceNumber);

