var stateArray =['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine', 'Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota', 'Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
localStorage.setItem(stateArray, JSON.stringify(stateArray))
window.streak = 0;


var clickForState = $('.newstate');
clickForState.on('click', newState)

function newState() {
  //var stateArray =['Massachusetts', 'New Jersey', 'Washington', 'Wyoming']
  window.state = stateArray[Math.floor(Math.random() * stateArray.length)]
  //console.log(state)

  localStorage.getItem(stateArray)

  var header = $('.start');
  header.text(state);

  var statesAndCapitals = {'Alabama' : 'Montgomery', 'Alaska':'Juneau', 'Arizona': 'Phoenix', 'Arkansas': 'Little Rock', 'California': 'Sacramento', 'Colorado': 'Denver', 'Connecticut' : 'Hartford','Delaware': 'Dover','Florida': 'Tallahassee','Georgia' : 'Atlanta','Hawaii': 'Honolulu','Idaho' : 'Boise','Illinois': 'Springfield','Indiana': 'Indianapolis','Iowa': 'Des Moines','Kansas': 'Topeka','Kentucky': 'Frankfort','Louisiana': 'Baton Rouge','Maine': 'Augusta', 'Maryland': 'Annapolis','Massachusetts': 'Boston','Michigan': 'Lansing','Minnesota': 'Saint Paul','Mississippi': 'Jackson','Missouri': 'Jefferson City','Montana': 'Helena','Nebraska': 'Lincoln','Nevada': 'Carson City','New Hampshire': 'Concord','New Jersey': 'Trenton','New Mexico': 'Santa Fe','New York': 'Albany','North Carolina': 'Raleigh','North Dakota': 'Bismarck', 'Ohio': 'Columbus','Oklahoma': 'Oklahoma City','Oregon': 'Salem','Pennsylvania': 'Harrisburg','Rhode Island': 'Providence','South Carolina': 'Columbia','South Dakota': 'Pierre','Tennessee': 'Nashville','Texas': 'Austin','Utah': 'Salt Lake City','Vermont': 'Montpelier','Virginia': 'Richmond','Washington': 'Olympia','West Virginia': 'Charleston','Wisconsin': 'Madison','Wyoming': 'Cheyenne'}
  window.capital = statesAndCapitals[state]
  //console.log(capital)
}

var clickForAnswer = $('.answerButton');
clickForAnswer.on('click', evaluateAnswer)

function evaluateAnswer() {

  //console.log(capital)

  var answer = $('.answer').val();
  //console.log(answer)

  if (answer === capital){
    var response = $('h2');
    response.text(`You got it! The capital of ${state} is ${capital}.`);
    streak += 1;
    $('h3').text(`Streak: ${streak}`)
    console.log(streak)
    console.log(stateArray)
    var index = stateArray.indexOf(state);
      if (index !== -1) {
        stateArray.splice(index, 1);
        }
    console.log(stateArray)
    localStorage.setItem(stateArray, JSON.stringify(stateArray))
      }
    //else if (stateArray === []) {
      //var header = $('h1');
      //header.text('You got them all!!!!!')
      //} //FIGURE OUT WHY THIS DOESN'T WORK
    else { var response = $('h2');
    response.text('Try Again :(')
    streak = 0;
    $('h3').text(`Streak: ${streak}`)
    }

    newState()


}

//next step: Save highest Streak
//next next step: top 10 commonly missed?
//also advance on enter
//I guess you should do some CSS
