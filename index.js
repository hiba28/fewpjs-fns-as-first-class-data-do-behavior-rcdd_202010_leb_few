/* Given Code, don't edit */

document.querySelector("button").addEventListener("submit", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  let arr = string.split(" ")
  let hour = parseInt(arr[0])
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
function displayMessage(string) {
  document.getElementById("greeting").innerText = greet();
}
