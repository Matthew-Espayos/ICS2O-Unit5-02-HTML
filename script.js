// The code below will make the "Hello, Matthew Espayos!" turn to #2F2F2F and it will be larger than it's original size. 
document.getElementById("p1").style.color = "#2F2F2F";
document.getElementById("p1").style.fontSize = "larger";
// The code below will display the background color to #D6E3F8. 
document.getElementById("background").style.backgroundColor = "#D6E3F8";
// The code below will give the button properties
document.getElementById("myButton").addEventListener("click", myFunction);
function myFunction() {
  alert ("Hello, world!");
}