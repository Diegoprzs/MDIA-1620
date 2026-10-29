
let ash = {
    name: "Ash",
    nickName: "Ash Ketchum",
    favSnack: "Apples",
    age: 8,
    monthlyRent: 500,
    isHorseInside: true,
    isFast: true,
    lateFee: 1.6
}

let grass = {
    name: "Grass",
    nickName: "Pot",
    favSnack: "Grass",
    monthlyRent: 650,
    age: 6,
    isHorseInside: false,
    isFast: true,
    lateFee: 1.8
}

let pass = {
    name: "Pass",
    nickName: "Jay",
    favSnack: "Bananas",
    monthlyRent: 350,
    age: 5,
    isHorseInside: true,
    isFast: false,
    lateFee: 1.5
}


let horses = [ash, grass, pass]


let cookie = {
    name: "Cookie",
    nickName: "Cookie Gobbler",
    favSnack: "Cookies",
    monthlyRent: 100,
    age: 2,
    isHorseInside: false,
    isFast: true,
    lateFee: .5
}


horses.push(cookie)


ash.isHungry = false
grass.isHungry = true
pass.isHungry = true
cookie.isHungry = true


let totalStalls = 10


function logStallsAvailable(totalStalls, numberOfHorses){
    console.log("There's room for " + (totalStalls - numberOfHorses) + " horses.")
}

logStallsAvailable(10, horses.length)


function logLateRent(horse){
    console.log("We owe " + horse.monthlyRent * horse.lateFee + " for " + horse.name + " rent.")
}


logLateRent(cookie)


function getNickName(horse){
    return horse.nickName
}

console.log(getNickName(pass))