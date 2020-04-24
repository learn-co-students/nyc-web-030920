console.log('My favorite movies')
const movieList = document.querySelector("ul")
const requestHeaders = {
  "accept": "application/json",
  "content-type": "application/json"
}


document.addEventListener("DOMContentLoaded", function(event){

  // get movies from database
  // render each of those movies on the DOM

  fetch("http://localhost:3000/movies")
  .then(response => response.json())
  .then(movies => {
    movies.forEach(function(movieObj){
      const movieLi = createMovieLi(movieObj)
      movieList.append(movieLi)
    })
  })
  
  const movieButton = document.createElement("button")
  movieButton.textContent = "Add Movie"
  movieButton.dataset.purpose = "add-movie"

  const welcomeImage = document.getElementById("welcome-image")
  welcomeImage.insertAdjacentElement('afterend', movieButton)

  movieButton.addEventListener('click', function(event){
    const movieForm = document.createElement("form")
    movieForm.innerHTML = `
      <label>Title: </label>
      <input type="text" name="title">
      <br>
      <label>Image URL: </label>
      <input type="text" name="imageUrl">
      <br>
      <label>Year: </label>
      <input type="text" name="year">
      <br>
      <input type="submit">
    `

    document.body.replaceChild(movieForm, movieButton)

    movieForm.addEventListener("submit", function(event){
      event.preventDefault()

      const form = event.target

      const title = form.title.value
      const imageUrl = form.imageUrl.value
      const year = form.year.value
      const score = 0

      const newMovie = { title,  imageUrl, score, year }

      movieList.append(createMovieLi(newMovie))

      // make a post request to the db with our new movie data

      fetch("http://localhost:3000/movies", {
        method: "POST",
        headers: requestHeaders,
        body: JSON.stringify(newMovie)
      })
      .then(response => response.json())
      .then(console.log)

      movieForm.reset()
      
      document.body.replaceChild(movieButton, movieForm)
    })
    
  })

})


function createMovieLi(movieObj){
  const li = document.createElement("li")
  li.className = "movie"

  li.innerHTML = `
    <h3>${movieObj.title}</h3>
    <img alt="" src="${movieObj.imageUrl}" />
    <h4>Year: </h4>
    <p>${movieObj.year}</p>
    <h4>Score: <span>${movieObj.score}</span> </h4>
    <button class="up-vote">Up Vote</button>
    <button>Down Vote</button>
    <button data-purpose="delete">&times;</button>
  `
  
  return li
}

movieList.addEventListener('click', function(event){
  if(event.target.className === "up-vote"){
    const parentLi = event.target.parentNode
    const span = parentLi.querySelector('span')

    let currentScore = parseInt(span.textContent)
    const newScore = currentScore + 1

    span.textContent = newScore
    
    // TODO: START HERE ON MONDAY
    // what would we have to do to update the score in the DB?
    
  } else if(event.target.dataset.purpose === 'delete'){
    const li = event.target.parentNode
    li.remove()
  }
})
