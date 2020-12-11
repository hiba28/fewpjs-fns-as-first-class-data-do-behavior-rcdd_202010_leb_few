/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet() {
  let hour = new Date.getHours();
  if(hour <12){
    return "Good Morning";
  }
  else if(hour > 12 && hour <5){
    return "Good Afternoon";
  }
  else if(hour > 5){
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let testContent = "TEST";
  displayMessage(testContent);
  let content = document.getElementById("greeting").innerText;
}
