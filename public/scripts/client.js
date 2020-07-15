/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



//function takes in a tweet object and returns a tweet <article> HTML structure 

const createTweetElement = function (singleTweet) {
  const tweetItem = `
  <article>
  <header>
    <div id="tweetHeader" >
    <div><span> <img src="${singleTweet.user.avatars}"/> </span>  <span>${singleTweet.user.name}</span></div>
    <div ><span id = "handle"> ${singleTweet.user.handle} </span> </div>
    </div>
  <p>${singleTweet.content.text}</p>
  <hr/>  
  </header>  
  <footer>
    <div>
      <span> ${singleTweet['created_at']} </span>
    </div> 
    <div><span class="iconify" data-icon="bi:flag-fill" data-inline="false"></span>  <span class="iconify" data-icon="entypo:retweet" data-inline="false"> </span>  <span class="iconify" data-icon="bi:suit-heart-fill" data-inline="false" </span></div> 
  </footer>
</article>   
 `
  return tweetItem;
}

//Array of tweet objects

const tweetDataArray = [{
  user: {
    name: "Descartes",
    avatars: "https://i.imgur.com/nlhLi3I.png",
    handle: "@rd"
  },
  content: {
    text: "Je pense , donc je suis"
  },
  created_at: 1461113959088
},
{
  user: {
    name: "Newton",
    avatars: "https://i.imgur.com/73hZDYK.png",
    handle: "@SirIsaac"
  },
  content: {
    text: "If I have seen further it is by standing on the shoulders of giants"
  },
  created_at: 1461116232227
}
];

const renderTweets = function (tweetDataArray) {
  // loops through tweets
  tweetDataArray.forEach((singleTweet) => {
    // calls createTweetElement for each tweet
    let createdTweet = createTweetElement(singleTweet)
    // console.log(createdTweet)
    // takes return value and appends it to the tweets container
    $('.container').append(createdTweet);
  })
}


$(document).ready(function () {
  renderTweets(tweetDataArray);

  // $('#tweet-text').on('submit', (event) => {
  //   console.log(event)
  //console.log(evt.target.searchParam.value);
  // const searchParameter = evt.target.searchParam.value;
  // searchItem(searchParameter);
  // })
  $('#posttweet').on('submit', (event) => {
    // prevent the default form submission behaviour
    event.preventDefault();
    console.log(event);
  })
});

