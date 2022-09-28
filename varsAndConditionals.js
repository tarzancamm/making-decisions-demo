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


