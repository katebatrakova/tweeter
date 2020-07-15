/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//function takes in a tweet object and returns a tweet <article> HTML structure 

const createTweetElement = function (tweetData) {
  // console.log("DATA IS INSIDE");
  // console.log(tweetData.user.name)
  // console.log(tweetData.user.avatars)
  // console.log(tweetData.user.handle)
  // console.log(tweetData.content.text)
  // console.log(tweetData['created_at'])
  const item = `
  <article>
  <header>
    <div id="tweetHeader" >
    <div><span> <img src="${tweetData.user.avatars}"/> </span>  <span>${tweetData.user.name}</span></div>
    <div ><span id = "handle"> ${tweetData.user.handle} </span> </div>
    </div>
  <p>${tweetData.content.text}</p>
  <hr/>  
  </header>  
  <footer>
    <div>
      <span> ${tweetData['created_at']} </span>
    </div> 
    <div><span class="iconify" data-icon="bi:flag-fill" data-inline="false"></span>  <span class="iconify" data-icon="entypo:retweet" data-inline="false"> </span>  <span class="iconify" data-icon="bi:suit-heart-fill" data-inline="false" </span></div> 
  </footer>
</article>   
 `
  return item;
}

// // Temporary test code

const tweetData =
{
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png"
    ,
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

//save the function's output (tweet article) to a variable
const $tweet = createTweetElement(tweetData);

// add the tweet article to .container

$(document).ready(function () {
  $('.container').append($tweet);
});
