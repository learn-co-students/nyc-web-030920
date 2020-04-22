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
  }
]


console.log('My favorite movies')

// add What About Bob? to our movies list

// √get the ul somehow
// √build an li and other html for the movie
// √attach it to the DOM in the ul

const movieList = document.querySelector("ul")

const bob = document.createElement("li")
bob.className = "movie"

bob.innerHTML = `
  <h3>What About Bob?</h3>
  <img alt=""
      src="https://www.movieartarena.com/imgs/wab.jpg" />
  <h4>Year: </h4>
  <p>1991</p>
  <h4>Score: <span>0</span> </h4>
  <button class="up-vote">Up Vote</button>
  <button>Down Vote</button>
  <button class="delete">&times;</button>
`

movieList.append(bob)


// add a listener to Jaws' delete button that removes the the Jaws li from the DOM

// √get the button from the DOM
// √add click listener to the button
// √remove that button's li on click

// const jawsDeleteBtn = document.getElementsByClassName("delete")[0]

// jawsDeleteBtn.addEventListener('click', function(event){
  
//   const li = event.target.parentNode
//   li.remove()
// })

// √get all the delete buttons
// √loop through them
// √add click listener to each button
// √remove that button's li on click

const deleteButtons = document.querySelectorAll(".delete")

deleteButtons.forEach(function(button){
  button.addEventListener('click', function(event){
    const li = event.target.parentNode
    li.remove()
  })
})

// √get all the up-vote buttons
// √loop through them
// √add click listeners to each one
// √increment number in span

const upVoteButtons = document.querySelectorAll(".up-vote")

upVoteButtons.forEach(function(button){
  button.addEventListener("click", function(event){
    const parentLi = event.target.parentNode
    const span = parentLi.querySelector('span')

    let currentScore = parseInt(span.textContent)
    const newScore = currentScore + 1
    
    span.textContent = newScore
  })
})