/* 

1. Create a Movie class that can instantiate a new movie with the following properties:

  - title
  - year
  - imageUrl
  - score

2. Create a instance method for the Movie class called `prettyPrint` that returns a string formatted like this:

  - "Title: The Matrix, Year: 1999, Score: 9"

*/

class Movie {
  constructor(movieObj){
    this.id = movieObj.id
    this.title = movieObj.title
    this.year = movieObj.year
    this.imageUrl = movieObj.imageUrl
    this.score = movieObj.score
  }

   prettyPrint(){
      return `Title: ${this.title}, Year: ${this.year}, Score: ${this.score}`
  }

  createLi(){
    const li = document.createElement("li")
    li.className = "movie"
    li.dataset.id = this.id

    li.innerHTML = `
      <h3>${this.title}</h3>
      <img alt="" src="${this.imageUrl}" />
      <h4>Year: </h4>
      <p>${this.year}</p>
      <h4>Score: <span>${this.score}</span> </h4>
      <button class="up-vote">Up Vote</button>
      <button>Down Vote</button>
      <button data-purpose="delete">&times;</button>
    `
    
    return li
  }
  
  render(el){
    const li = this.createLi()
    el.append(li)
  }
}

let matrix = new Movie('The Matrix',1999, 9, "matrixposter.com")
