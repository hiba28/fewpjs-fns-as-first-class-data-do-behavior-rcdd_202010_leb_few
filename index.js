/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet() {
  let d = new Date
  let hour = d.getHours();
  let ampm = hour >= 12 ? 'pm' : 'am';
  if(hour < 12 && ampm === "am"){
    return "Good Morning";
  }
  else if(hour > 12 && hour <5 && ampm === "pm"){
    return "Good Afternoon";
  }
  else if(hour > 5 && ampm === "pm"){
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage() {
  document.getElementById("greeting").innerText = greet();
}
