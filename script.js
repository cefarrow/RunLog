const btn = document.querySelector('button');
if (btn) {
  btn.onclick = function() {
    btn.classList.toggle('dipped');
  };
}

/* function validateForm() {
  let date = document.forms['runLog']['date'].value;
  let distance = document.forms['runLog']['distance'].value;
  let duration = document.forms['runLog']['duration'].value;
  let pace = document.forms['runLog']['pace'].value;
  let power = document.forms['runLog']['power'].value;
  let elevation = document.forms['runLog']['elevation'].value;
  let rpe = document.forms['runLog']['rpe'].value;
  let strava = document.forms['runLog']['strava-link'].value;
  if (date == '' || distance == '' || duration == '' || pace == '' || power == '' || elevation == '' || rpe == '' || strava == '') {
    alert('All fields must be filled out.');
    return false;
  }
}
*/
let date = document.forms['runLog']['date'].value;
let distance = document.forms['runLog']['distance'].value;
let duration = document.forms['runLog']['duration'].value;
let pace = document.forms['runLog']['pace'].value;
let power = document.forms['runLog']['power'].value;
let elevation = document.forms['runLog']['elevation'].value;
let rpe = document.forms['runLog']['rpe'].value;
let strava = document.forms['runLog']['strava-link'].value;
const dataArray = [date,distance,duration,pace,power,elevation,rpe,strava];
var isEmpty = dataArray.every(isNull);
function isNull(input, index, array) {
  return input != '';
}
function validateClick() {
  if isNull == false {
    alert("All fields must be filled out.")
    return false;
  };
}

button.onclick = validateClick();
