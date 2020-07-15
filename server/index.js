"use strict";

// Basic express setup:

const PORT = 8080;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
//Being able to send out the public folder
app.use(express.static("public"));

// The in-memory database of tweets. It's a basic object with an array in it.
const db = require("./lib/in-memory-db");

// The `data-helpers` module provides an interface to the database of tweets.
// This simple interface layer has a big benefit: we could switch out the
// actual database it uses and see little to no changes elsewhere in the code
// (hint hint).
//
// Because it exports a function that expects the `db` as a parameter, we can
// require it and pass the `db` parameter immediately:
const DataHelpers = require("./lib/data-helpers.js")(db);

// The `tweets-routes` module works similarly: we pass it the `DataHelpers` object
// so it can define routes that use it to interact with the data layer.
const tweetsRoutes = require("./routes/tweets")(DataHelpers);

// Mount the tweets routes at the "/tweets" path prefix:
app.use("/tweets", tweetsRoutes);

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});



// ___<!-- LECTURE -->

// Browser Object Model

// console.log('inner Height', window.innerHeight)
// console.log('inner Height', window.innerHeight)

//DOM

// catch a click, target an element that's gonna be clicked, detect the submit of the form event

// const frm = document.querySelector('form');

// // create listenning to an event. register an event.
// frm.addEventListener('submit', function (event) {
//   // prevent the submission of the form
//   event.preventDefault();
//   console.log("Form submitted!");
//   console.log(event.target); //same is (this)
//   //espect this to be the form element
//   //extract the value of the input 
//   // frm.elements.todo - give the input with that name
//   //access the text content . this  - equivalent to frm;
//   const actualTextContent = this.elements.todo.value;
//   //create a new list item
//   const newLi = document.createElement('li');
//   newLi.textContent = actualTextContent + ' ';
//   //target the parent 
//   const todoList = document.querySelector('#todos')
//   //create a buttob and add it to lis element
//   const delButton = document.createElement('button');
//   delButton.textContent = 'X';
//   //add the button to the new list
//   newLi.appendChild(delButton);
//   //add event liostener to delet btn
//   delButton.addEventListener('click', function (even) {
//     //remove child from ul
//     todoList.removeChild(newLi); //or this.parentElement;
//   })
//   //  append 
//   todoList.appendChild(newLi);
//   // reset  the text contect of the input test \
//   this.elements.todo = "";
// });

// // _____
// const petsArr = {
//   name:
//     type:
//   age:
// }

// const createArticle = ((aninamlObj) => {
//   const article = `
//   // html goes inside, insert inside

//     < h2 > ${ animalObj.name}</h2>
//       ${ animalObj.type}
//   ${ animalObj.age}

//   `
//   return article;
// })


// const renderArticles = animalsArr => {

//   for (let animaObj of animals) {
//     $('#pets-container').append(createArticle(petsArr[animaObj]));

//   }
// }

// //ensuring that DOM is fully loaded before manipulating it
// $(document).ready(function () {
//   //append the articles to the section page
//   $('#pets-container').append(createArticle(petsArr));
//   renderArticles(petsArr);
// })




// LECTURE AJAX 


// const tweetDataBase = [
//   {
//     user: {
//       name: "Descartes",
//       avatars: "https://i.imgur.com/nlhLi3I.png",
//       handle: "@rd"
//     },
//     content: {
//       text: "Je pense , donc je suis"
//     },
//     created_at: 1461113959088
//   },
//   {
//     user: {
//       name: "Newton",
//       avatars: "https://i.imgur.com/73hZDYK.png",
//       handle: "@SirIsaac"
//     },
//     content: {
//       text: "If I have seen further it is by standing on the shoulders of giants"
//     },
//     created_at: 1461116232227
//   }
// ]

// const createItem = (data) => {
//   // console.log(data[1].content.text, ' ---content of the tweet');
//   // console.log(data[1].user.name, ' ---- name');
//   // console.log(data[1].user.avatars, ' ---- avatar');
//   // console.log(data[1].user.handle, ' ---- handle');
//   // $(#container).append(item)
//   const tweet =
//     `<article>
//       <header>
//         <div id="tweetHeader" >
//         <div> <img src ='${data[1].user.avatars}> <span>${data[1].user.name}</span></div>
//         <div ><span id = "handle"> ${data[1].user.handle} </span> </div>
//         </div>
//       <p>${data[1].content.text}</p>
//       <hr>  
//       </header> 

//       <footer>
//         <div>
//           <span> 10 days ago </span>
//       </div> 
//       <div><span class="iconify" data-icon="bi:flag-fill" data-inline="false"></span>  <span class="iconify" data-icon="entypo:retweet" data-inline="false"> </span>  <span class="iconify" data-icon="bi:suit-heart-fill" data-inline="false"> </span></div> 
//       </footer>
//           </article>`
//   return tweet;
// }

// const searchItem = (string) => {
//   const api = 'http://api.tvmaze.com/searcg/shows?q='
//   const apiWithParam = api + string;
//   $.ajax({
//     url: apiWithParam,
//     method: 'GET',
//   })
//     .then((response) => {
//     // remove all children with jqueary , repopulate 
//     // run empty()(every time) before appending
//     $(tweetHeader).empty()
//     console.log('AJAX call came back with response')
//     //once we get the info we use the createItem dunction to append multiple items we found
//     response.forEach((element) => {
//       console.log(element);
//       let tempItem = createItem(element)
//       $('#tweetHeader').append(searchItem(element))
//     });
//   })
// }

// // $('#tweetHeader').append(tweet)

// // createItem(tweetDataBase);

// //add action when smb click on TWEET and extract the info from text area
// $('#posttweet').on('submit'), (event) => {
//   event.preventDefault() //stop refreshing
//   console.log('Hello from ')
//   console.log(event.target.searchParam.value)
// }


