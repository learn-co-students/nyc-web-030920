# Plant Match Forms Lab!
This is a super helpful application for new plant parents and those trying to start their green thumb. Not sure if you're into a plant? Users can view plants in cards, click on them to view more information and search by their common name. In the more advanced version of the application, they can also search based on what pets they have to make sure their plants are safe for their pets. This lab will help you practice building *fully controlled forms*.

*Important Note*: You are *NOT* expected to work on the `SearchForm` component. That one is specifically for advanced deliverables. You may return to Snotify to work on the forms (search and filter). 

Look out for `TODO`s in comments. Use the Core Deliverables listed below to guide you and find the `TODO`s if you're feeling stuck.

![alt text][core_image]

[core_image]: ./public/PlantCore.gif "Core Deliverables"

## Skills and Concepts to Practice
- Building fully controlled forms
- Identifying where state should live and passing state values around as props
- Diagraming and understanding a component hierarchy
- Continued practice with event handlers
- Practicing inverse data flow

## Setup
After cloning down the project:
- Run `git checkout -b yourname` in your terminal to create your own branch
- Run `npm install` in your terminal
- Run `npm start` and your react application will start on port `3000`. The data you need is imported from `data.js` and looks as follows:
```
[{
"Scientific_Name": "Aphelandra squarrosa",
"Common_Name": "Zebra Plant",
"img_name": "zebra_plant.png",
"Sunlight": "Part shade to full shade",
"Moisture": "Medium",
"Soil_Indicator": "Never dry",
"Plant_Spread": "4.00 to 5.00 feet",
"Plant_Height": "4.00 to 6.00 feet",
"Indoor_Spread": "1.00 to 1.75 feet",
"Indoor_Height": "1.00 to 2.00 feet",
"Toxic_Dogs": false,
"Toxic_Cats": false,
"Plant_Habit": "Herb/Forb/Shrub",
"Type": "Broadleaf evergreen",
"indoor_flowering": true,
"hanging": false,
"Bloom_Period": "Late Summer to Fall",
"Humidity": "High",
"Air_Purifying": "Unknown",
"Ph_Soil": "Acidic",
"Bloom_Description": "Yellow"
},
{
"Scientific_Name": "Calathea zebrina",
"Common_Name": "Calathea Zebra Plant",
"img_name": "calathea_zebra_plant.png",
"Sunlight": "Part shade to full shade",
"Moisture": "Medium",
"Soil_Indicator": "Never dry",
"Plant_Spread": "1.00 to 2.00 feet",
"Plant_Height": "1.00 to 3.00 feet",
"Indoor_Spread": "1.00 to 2.00 feet",
"Indoor_Height": "1.00 to 3.00 feet",
"Toxic_Dogs": false,
"Toxic_Cats": false,
"Plant_Habit": "Herb/Forb",
"Type": "Herbaceous perennial",
"indoor_flowering": "Rarely",
"hanging": false,
"Bloom_Period": "Mid Spring",
"Humidity": "High",
"Air_Purifying": "Unknown",
"Ph_Soil": "Unknown",
"Bloom_Description": "White/Purple"
}]
```
- Remember to `git add .` then `git commit -m "helpful message"` and `git push` when you're done or before lecture. 


## What You Already Have
### Components
- `App` 
- `Navbar` 
- `Login` 
- `HomeView` 
- `MatchContainer` 
- `PlantCard` 
- `SearchForm`: do *not* work on this component until after the core deliverables. 


### Additional Files
- `data.js` stores the data for our app. It's being imported in `HomeView`.  


## Deliverables 
### Core Deliverables
While taking on each of the core deliverables, remember the essential elements of creating a controlled form. While you can make a form work in React without it being controlled, this is the right way to do it and something we're checking for. 
- When the user clicks on `Login` they're shown the `Login` component and the form it contains. Make `Login` a fully controlled form. When it submits, it should redirect the user to the plants view. There's some code to help you with the redirect.
- On the plants view, when a user types into the search bar, the plants should be filtered. Consider where state should live for this controlled form and how to complete that filter. 

### Advanced Deliverables
If you get through all of the Core Deliverables, try your hand at the Advanced ones. 
- Add behavior so when a user logs in, it replaces the username in `App` state to the submitted username and updates the greeting.
- Uncomment the `SearchForm` component in `HomeView` and look at the additional options it has. Make this search form handle all of its inputs as controlled form elements and have them control what plants are rendered. It's up to you to decide where state should live. It *might not* be most ideal for it to live on `SearchForm`.


## Want some extra fun? 
- Return to the `Snotify` project and complete the search and filter behavior in that application. 


## Resources
- [Styled Components](https://styled-components.com/)

