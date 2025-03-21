function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
// for the completeds task .. decrement 1 from
// the innertext and set the value
function taskCompleted(id1, id2, id3) {
  const element = document.getElementById(id1).innerText;
  const convertedElement = parseInt(element);
  if (convertedElement > 0) {
    convertedElement--;
    document.getElementById(id1).innerText = convertedElement;
  }
  const secondElement = document.getElementById(id2).innerText;
  const convertedSecondElement = parseInt(secondElement);
  convertedSecondElement++;
  document.getElementById(id2).innerText = convertedSecondElement;
  document.getElementById(id3).classList.add("disabled");
}
// fucntion addd element in the activity log
function addActivity() {}
//function for body background change
function changeBg() {}
