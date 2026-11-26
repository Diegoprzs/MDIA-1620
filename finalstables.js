// Welcome to the CECOT Stable! //



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

logStallsAvailable(totalStalls, horses.length)


function logLateRent(horse){
    console.log("We owe " + horse.monthlyRent * horse.lateFee + " for " + horse.name + " rent.")
}


logLateRent(cookie)


function getNickName(horse){
    return horse.nickName
}

console.log(getNickName(pass))


//------------------------- Bonus -------------------------//

// toggleLocation moves a horse inside if it's outside, and outside if it's inside
for (let horse of horses){
    horse.toggleLocation = function(){
        this.isHorseInside = !this.isHorseInside
    }
}


//------------------------- Day to day operations (Stables 3) -------------------------//


function findHorseThatLikes(treat){
    for (let horse of horses){
        if (horse.favSnack === treat){
            console.log(horse.name + " loves " + treat + "! .")
            break
        } else {
            console.log(horse.name + " sniffs the " + treat + " and turns away.")
        }
    }
}

console.log("--- Who wants a treat? ---")
findHorseThatLikes("Bananas")


//---------------Unique function-----------------//
function raceDay(horse){
    if (horse.isFast){
        console.log(horse.name + " zooms around the track!")
    } else {
        console.log(horse.name + " isn't much of a racer and goes for a nice slow stroll instead.")
    }
}

console.log("--- Race day ---")
for (let horse of horses){
    raceDay(horse)
}


//-----------Horse movement functions-----------------//

function moveHorses(isGettingDark, horsesToMove){
    for (let horse of horsesToMove){
        if (isGettingDark){
            if (horse.isHorseInside === false){
                horse.toggleLocation()
                console.log("It's getting dark! " + horse.name + " goes back inside for the night.")
            }
        } else {
            if (horse.isHorseInside === true){
                horse.toggleLocation()
                console.log(horse.name + " has been moved outside to spend time in the sun.")
            }
        }
    }
}

console.log("--- Morning! ---")
moveHorses(false, [ash])
moveHorses(false, [pass, grass])


//------------------------- Feeding horses -------------------------//
function feedHorses(horsesToFeed){
    for (let horse of horsesToFeed){
        if (!horse.isHorseInside){
            horse.toggleLocation()
            console.log(horse.name + " hears the feed bucket and runs inside!")
        }
    }

    for (let horse of horsesToFeed){
        if (horse.isHungry){
            console.log(horse.name + " happily gobbles up some " + horse.favSnack + ".")
        } else {
            console.log(horse.name + " wasn't very hungry, but still eats some " + horse.favSnack + ".")
        }
        horse.isHungry = false
    }
}

console.log("--- Food! ---")
feedHorses(horses)


console.log("--- Afternoon ---")
moveHorses(false, [grass, cookie])


console.log("--- Bedtime! ---")
moveHorses(true, [ash, grass, pass, cookie])




