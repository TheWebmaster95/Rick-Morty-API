fetch('https://rickandmortyapi.com/api/character') // To get all characters to pull through use /characters
.then(response => response.json())
.then(characters => {
    renderCharacters(characters.results) // displays characters within results array on the webpage
    // console.log(characters.results) // grabs characters from the results array and display to the console
});

const cardsContainer = document.querySelector('#cards-container'); // creating a place to render the characters into which is the cards-container


// Creating a function with the characters data for each character a div will be created which will contain the characters image, name, type of species and a button to like the character

function renderCharacters(characters) {
    characters.forEach(character => {
      const div = document.createElement('div'); // Creates div
      const image = document.createElement('img'); // Creates image
      const name = document.createElement('h3'); // h3 containing characters name
      const species = document.createElement('h3'); // h3 containing type of species 
      const like = document.createElement('button'); // creating like button
     
     
     
     
     
     
     // adding classes to the div so they can be styled using CSS
      div.classList = 'card'
      image.classList = 'card-img'
      like.classList = 'empty'


// Grabbing data from api
      image.src = character.image // getting the character image from the api and assigning it  to character.image
      name.innerText = `Name: ${character.name}` // getting the name from the api and assigning it to character.name. Using inner text so that the text displays next to the characters name.
      species.innerText =`Species: ${character.species}` // getting the species from the api and assigning it to character.species. Using inner text so that the text displays next to the characters species.
      like.textContent = 'like' 




// Appending characters into div element and div classes

      div.appendChild(image) // append image
      div.appendChild(name)  // append name
      div.appendChild(species)  // append species
      div.appendChild(like)  // append like button
      cardsContainer.appendChild(div)  // append carts container div where the cards will be located
    });
  };



  // Cache for api 


  // Opening cache if exists if not create one by calling cache.open name

  caches.open('my-cache').then((cache) => {
    console.log('Cache opened:', cache);
  });


  // Adding to the cache which will make a network request and store the response

  caches.open('my-cache').then((cache) => {
    cache.add('https://rickandmortyapi.com/api/character'); // Caches the response from /api/data
  });


// Fetching Cached Resources - This returns with a response if data from cache is found if not will set to undefined  if not there
  caches.open('my-cache').then((cache) => {
    cache.match('/api/data').then((response) => {
      if (response) {
        response.json().then((data) => console.log(data));
      } else {
        console.log('No cached response');
      }
    });
  });
 


