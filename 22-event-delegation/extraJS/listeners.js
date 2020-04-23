console.log("listening")

// when a user clicks on the welcome image it should display a baby sloth

// √get the image from the DOM 
// √add a click listener to that element
// swap out the src propery of the image to our sloth

let welcomeImage = document.getElementById("welcome-image")

welcomeImage.addEventListener("click", function(event){
  console.log(event.target)
  let image = event.target
  image.src = "https://i.ytimg.com/vi/qYKrqd9VacY/maxresdefault.jpg"
})

