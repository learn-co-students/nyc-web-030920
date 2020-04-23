console.log('My favorite movies')
const movies = [
  {
    title: 'The Goonies',
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/515DYf99zfL.jpg',
    year: 1985,
    score: 0
  },
  { 
    title: 'Free Willy',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Free_willy.jpg/220px-Free_willy.jpg',
    year: 1993,
    score: 0  
  },
  { 
    title: 'Top Gun',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg',
    year: 1986,
    score: 0  
  },
  { 
    title: 'Mean Girls',
    imageUrl: 'https://img01.mgo-images.com/image/thumbnail?id=1MV270609a1c6c89af5538a6d63cea71ed4&ql=70&sizes=310x465',
    year: 2004,
    score: 0  
  },
  { 
    title: 'Parasite',
    imageUrl: 'https://mymodernmet.com/wp/wp-content/uploads/2020/02/parasite-film-tribute-1.jpg',
    year: 2019,
    score: 0  
  },
  {
    title: "What About Bob?",
    year: 1991,
    score: 0,
    imageUrl: "https://www.movieartarena.com/imgs/wab.jpg"
  },
  {
    title: "The Matrix",
    year: 1999,
    score: 0,
    imageUrl: "https://imgc.allpostersimages.com/img/print/u-g-F4S5W20.jpg?w=550&h=550&p=0"
  },
  {
    title: "Jaws",
    year: 1984,
    score: 0,
    imageUrl: "https://resizing.flixster.com/h8e7W7cVaQhuLdSvABDkJk6r5sc=/206x305/v1.bTsxMTE2NjE5OTtqOzE4MzU0OzEyMDA7ODAwOzEyMDA"
  },
]
const movieList = document.querySelector("ul")


document.addEventListener("DOMContentLoaded", function(event){

  movies.forEach(function(movieObj){
    const movieLi = createMovieLi(movieObj)
    movieList.append(movieLi)
  })

  // √create a button
  // √add the button to the DOM
  // √add a click listener to the button that displays a new movie form and removes the button
  // √listen for a submit event
  // √get data out of the form
  // add a new movie li to the DOM with that data

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
  } else if(event.target.dataset.purpose === 'delete'){
    const li = event.target.parentNode
    li.remove()
  }
})

// const bob = document.createElement("li")
// bob.className = "movie"

// bob.innerHTML = `
//   <h3>What About Bob?</h3>
//   <img alt=""
//       src="" />
//   <h4>Year: </h4>
//   <p>1991</p>
//   <h4>Score: <span>0</span> </h4>
//   <button class="up-vote">Up Vote</button>
//   <button>Down Vote</button>
//   <button class="delete">&times;</button>
// `


/*-----------------------------------------*/

// const deleteButtons = document.querySelectorAll(".delete")

// deleteButtons.forEach(function(button){
//   button.addEventListener('click', function(event){
    // const li = event.target.parentNode
    // li.remove()
//   })
// })

/*-----------------------------------------*/

// const upVoteButtons = document.querySelectorAll(".up-vote")

// upVoteButtons.forEach(function(button){
//   button.addEventListener("click", function(event){
    // const parentLi = event.target.parentNode
    // const span = parentLi.querySelector('span')

    // let currentScore = parseInt(span.textContent)
    // const newScore = currentScore + 1
    
    // span.textContent = newScore
//   })
// })

/*-----------------------------------------*/




// const bobMovie = {
//   title: "What About Bob?",
//   year: 1991,
//   score: 0,
//   imageUrl: "https://www.movieartarena.com/imgs/wab.jpg"
// }


// create a li for the movie
// add the appropriate HTML to the li
// append it to the DOM


// const bobLi = createMovieLi(bobMovie)
// movieList.append(bobLi)

// √iterate through the movies array
// create an li for each movie
// append each movie object to the DOM as an li

