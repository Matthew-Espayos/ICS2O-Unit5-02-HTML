// The code below will make the "Hello, Matthew Espayos!" turn to #2f2f2f and it will be larger than it's original size.
document.getElementById('p1').style.color = '#2f2f2f'
document.getElementById('p1').style.fontSize = 'larger'
// The code below will display the background color to #d6e3f8.
document.getElementById('background').style.backgroundColor = '#d6e3f8'
// The code below will give the button properties.
document.getElementById('myButton').addEventListener('click', myFunction)
function myFunction () {
  alert('Hello, world!')
}
