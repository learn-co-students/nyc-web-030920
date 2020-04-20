// console.log("locked and loaded")


// let stringArray = ["JavaScript", "is pretty", "cool", "I guess."]

// function logger(string){
//   console.log(string)
// }

// stringArray.forEach(logger)

function adder(x){
  return function(y){
    return x + y
  }
}

let addTwo = adder(2)

addTwo(10) // => 12
addTwo(11) // => 13

let addThree = adder(3)

addThree(10) // => 13
addThree(500) // => 503