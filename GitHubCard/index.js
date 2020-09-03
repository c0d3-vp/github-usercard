/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from 'axios';

axios
  .get('https://api.github.com/users/c0d3-vp')
  // .get('')
  .then(({data}) => {
    cardMaker(data);
  })
  .catch(function (error) {
    // handle error
    console.log('FOUND AN ERROR', error);
  });


const cards = document.querySelector('.cards')
// axios.get('https://api.github.com/users/c0d3-vp')
// .then(response => {
//   console.log(response.data);
//   const myCard = cardMaker(response.data);
//   console.log(myCard);
//   cards.appendChild(myCard)
// })
// .catch(err => {
//   console.log(err)
// })
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/


/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

followersArray.forEach(followers => {
  let mainURL = 'http://api.github.com/users/'
  let followerURL = mainURL.concat(followers)
  axios.get(followerURL)
  .then(response => {
    console.log(response.data)
    const myCard = cardMaker(response.data)
    console.log(myCard)
    cards.appendChild(myCard)
})
.catch(error => {
  // handle error
  console.log('FOUND AN ERROR', error); 
  })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function cardMaker(obj) {
  const card = document.createElement('div')
  const userImg = document.createElement('img')
  const cardInfo = document.createElement('div')
  const name = document.createElement('h3')
  const userName = document.createElement('p')
  const userLocation = document.createElement('p')
  const profile = document.createElement('p')
  const githubAddress = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const userBio = document.createElement('p')
  
  card.appendChild(userImg)
  card.appendChild(cardInfo)
  cardInfo.appendChild(name)
  cardInfo.appendChild(userLocation)
  cardInfo.appendChild(profile)
  profile.appendChild(githubAddress)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(userBio)

  card.classList.add('card')
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  userName.classList.add('username')

  userImg.src = obj.avatar_url
  name.textContent = `${obj.name}`
  userName.textContent = `${obj.login}`
  userLocation.textContent = `Location: ${obj.location}`
  profile.textContent = 'Profile'
  githubAddress.href = obj.html_url
  githubAddress.textContent = `${obj.html_url}`
  followers.textContent = `Followers: ${obj.followers}`
  following.textContent = `Following: ${obj.following}`
  userBio.textContent = `Bio: ${obj.bio}`

  cards.appendChild(card)

}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
