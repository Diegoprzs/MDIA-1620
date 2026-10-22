
const STABLENAME = "CECOT Stables"
let welcomeMessage = "Welcome to " + STABLENAME + "! We are happy to have you here."


let ash = {
    name: "Ash",
    age: 8,
    favoriteSnack: "Apples",
    costToBoard: 500,
    lateFee: 500 * 1.6
}

let grass = {
    name: "Grass",
    age: 6,
    favoriteSnack: "Grass",
    costToBoard: 650,
    lateFee: 650 * 1.8
}

let pass = {
    name: "Pass",
    age: 5,
    favoriteSnack: "Bananas",
    costToBoard: 350,
    lateFee: 350 * 1.5
}

let latePaymentMessage = "Please pay the late fee of $" + [ash.lateFee] + " for " + [ash.name] + ".";