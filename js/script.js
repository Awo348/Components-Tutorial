// three simples ways to work with javascript in our browser

// using the alert method
// alert('Welcome to my first javascript code')

// using the console
console.log("it works, i can write on the console!!!")

// ES5
// Dom -- document object model
// document --keyword
console.log(document)

// selecting an html element by ID
document.getElementById('rightchild')

// variable -- is just a simple name
var rightdiv = document.getElementById('rightchild')
console.log(rightdiv)

// outputing in our html elements
rightdiv.innerHTML = "This works just cool"

// changing an HTML element background --Dom manipulation
// rightdiv.style.background = "blue"

// function --- holds block of javascript code - ES5
function Popsomething() {
    // write our desired block of codes
    alert('i am poping something')
}

// how to call a function
// Popsomething()

function clickedorange() {
    alert('Orange div is clicked')
}


// our background changer code ---

// function changebgtoorange() {
//     rightdiv.style.background = "#FFA800"
// }

// function changebgtotomato() {
//     rightdiv.style.background = "tomato"
// }

// function toskyblue() {
//     rightdiv.style.background = "skyblue"
// }

// building our background changer app with 3 lines of code
function changebg(desiredcolor) {
    rightdiv.style.background = desiredcolor
}




// creating a function with parameters
function printsomething(something) {
    console.log(something)
}

// how to call functions and pass arguements to them
printsomething('where is my  agbado')

printsomething("say  my name")

printsomething("call me zaddy")



// mobile menue app

var menuholder = document.querySelector('.menubar-Holder')
console.log(menuholder)

// adding a classname to our html element

// menuholder.classList.add('purplemenubar')

function menuhandler() {
    menuholder.classList.toggle('purplemenubar')
}