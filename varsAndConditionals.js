/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25
let jamieLannisterAttack = 35

if (jonSnowAttack > jamieLannisterAttack) {
    console.log("Jon Snow has better attack than Jamie Lanister.")
} else if (jamieLannisterAttack > jonSnowAttack) {
    console.log("Jamie Lannister has better attack than Jon Snow.")
} else {
    console.log("Jamie Lannister has the same attack as Jon Snow.")
}


let jonSnowHealth = 100
let jonSnowDefense = 0

// Jaime attacks
if (jonSnowHealth <= jamieLannisterAttack) {
    console.log("Jon Snow has been slain.")
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    //jonSnowHealth -= jamieLannisterAttack
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

// Jon picks up a shield to add to his defense
jonSnowDefense += 25

// Jamie attacks again
if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.log("Jon Snow has been slain.")
} else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    //jonSnowHealth -= jamieLannisterAttack
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
}

// Villager throws Jon a health kit worth +50 to health, but health cannot exceed 100
if (jonSnowHealth + 50 >= 100) {
    jonSnowHealth = 100
} else {
    jonSnowHealth += 50
}

console.log('Jon Snow health after the health kit is: ' + jonSnowHealth)

// If coin lands heads then the fight continues. Otherwise Jon can run away.
let coinLandsHeads = true

if (coinLandsHeads) {
    console.log("The fight continues")
} else {
    console.log("John is allowed to run away")
}


// Jaime attacks Jon 5 times
for (let i = 0; i < 5; i++) {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log("Jon's health is now " + jonSnowHealth)
}

// Post-lab assignment 1:
// Write logic in the for loop above that detects if Jon's health gets 0 or less. In which case you will print that Jon is dead and you will stop further loop iterations.

// Post-lab assignment 2:
// Write the for loop - including the loop you wrote in the first assignment - as a while loop.
// It should behave exactly the same

