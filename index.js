var stateArray =['Massachusetts', 'New Jersey', 'Washington', 'Wyoming']
localStorage.setItem(stateArray, JSON.stringify(stateArray))
window.streak = 0;


var clickForState = $('.newstate');
clickForState.on('click', newState)

function newState() {
  //var stateArray =['Massachusetts', 'New Jersey', 'Washington', 'Wyoming']
  window.state = stateArray[Math.floor(Math.random() * stateArray.length)]
  //console.log(state)

  localStorage.getItem(stateArray)

  var header = $('h1');
  header.text(state);

  var statesAndCapitals = {

    'Massachusetts' : 'Boston',
    'New Jersey' : 'Trenton',
    'Washington' : 'Olympia',
    'Wyoming' : 'Cheyenne'

  }
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
