console.log("this is so much fun!")

/************ Simple Function Call ***********************/
window.name = "Winslow"

function sayName(){
  console.log(`Hi, my name is ${this.name}`)
  // console.log(this.name)
}

/************ Bind/Call/Apply ****************************/

let steven = {name: "Steven"}

function sayNameAndLocation(time, place){
  console.log(`Hi, my name is ${this.name}, it is ${time} and I'm in ${place}`)
}

// sayNameAndLocation.call(steven, '10:49', "LIC") // -> accepts arguments in comma separated list
// sayNameAndLocation.apply(steven, ['10:51', 'LIC']) // -> accepts arguments in an array

// sayNameAndLocation.bind(this) // -> returns a bound function, can be used as a callback or set to a variable

/************ Function called on an Object ***************/

const perky = {
  name: "Perky",
  whatIsThis: function(){
    return this
  },
  speak: function(){
    console.log(`Hi, my name is ${this.name}`)
  }
}

perky.speak // -> this is the perky object


/************ Function Called with New Keyword ***********/

class Pokemon {
  constructor(name, type){
    this.name = name
    this.type = type
  }

  fight(){
    console.log(`My name is ${this.name} and I'm fighting`)
  }
}

// function Dog(name, favToy){
//   this.name = name
//   this.favToy = favToy
// }

let pikachu = new Pokemon("Pikachu", "Electric")


/************ Arrow Functions ****************************/

let thisArrow = {
  name: "Arrow",
  sayName: () => {
    console.log(`Hi my name is ${this.name}`)
  }
}
