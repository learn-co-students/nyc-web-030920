// let neikko = {
//   name: "Neikko",
//   favoriteToy: "rope",
//   speak: function(){
//     return `Woof woof! My name is ${this.name}`
//   }
// }

// let perky = {
//   name: "Perky",
//   favoriteToy: "poop",
//   speak: function(){
//     return `Woof woof!!!! My name is ${this.name}`
//   }
// }

class Dog{
  constructor(name, favoriteToy){
    this.name = name
    this.favoriteToy = favoriteToy
  }

  speak(){
    return `Woof woof! My name is ${this.name}`
  }

  static eat(){
    return "I'm eating!! Tasty"
  }
}

let neikko = new Dog("neikko", "rope")
let perky = new Dog("Perky", "horse poo")
