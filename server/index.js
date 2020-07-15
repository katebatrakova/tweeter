"use strict";

// Basic express setup:

const PORT = 8080;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
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


