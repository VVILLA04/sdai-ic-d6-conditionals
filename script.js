// all code for this lab to be completed in this file
const currentTemperature = 62; 

if (currentTemperature > 55) {
    console.log("It is not freezing...yet")
} else {
    console.log("Bro, it's freezing!")
}

let myAge = 28
let yourAge = 43

//same age
if (myAge === yourAge) {
    console.log("Bae & I are the same age")
//older
} else if (myAge > yourAge) {
    console.log("I am older than Bae")
//younger
} else if (myAge < yourAge) {
    console.log("Bae is older than me")
} else {
    console.log("Wrong info entered...check again")
}

//isLoggedIn Conditional Challenge
let isLoggedIn = false // rep being logged in

if (isLoggedIn) {
    console.log("Welcome back!") //am logged in
} else {
    console.log("Please log in") //not logged in
}