function scuberGreetingForFeet(Feet){
  
  // Write your code here!it('gives customers a free sample if the ride is less than or equal to 400 feet', function () {
      if (Feet<=400) {
        return 'This one is on me!';
      }else if (Feet > 400 && Feet <= 2500){
        return 'I will gladly take your thirty bucks.'
      }else {
        return 'No can do.';
      }
}

function ternaryCheckCity(City){
  // Write your code here!
  return City === 'NYC' ? 'Ok, sounds good.': 'No go.'
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case 'generous':
      return 'Thank you so much.';
      break;
      case 'not as generous':
        return 'Thank you.'
        default:
          return 'Bye.'
  } 
}