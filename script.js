// The code below will make the "Hello, Matthew Espayos!" turn to #2f2f2f and it will be larger than it's original size.
document.getElementById('p1').style.color = '#2f2f2f'
document.getElementById('p1').style.fontSize = 'larger'
// The code below will display the background color to #d6e3f8.
document.getElementById('background').style.backgroundColor = '#d6e3f8'
// The code below will give the button properties.
document.getElementById('mybutton').addEventListener('click', myFunction)
function myFunction () {
  alert('Hello, world!')
}
// The code below will change the fontm color, and size of "Hello, Matthew Espayos!"
document.getElementById('press').addEventListener('click', changemessage)
function changemessage () {
  document.getElementById('p1').style.color = '#9D8189'
  document.getElementById('p1').style.fontSize = '200%'
  document.getElementById('p1').style.fontFamily = 'Helvetica'
}
// The code below will revert all changes made
document.getElementById('revert').addEventListener('click', revertmessage)
function revertmessage () {
  alert('The page will go back to normal')
  document.getElementById('p1').style.color = '#2f2f2f'
  document.getElementById('p1').style.fontSize = 'larger'
}
