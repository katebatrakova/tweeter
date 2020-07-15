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

const renderTweets = function (tweetDataArray) {
  // loops through tweets
  // $('.container').empty(); 
  tweetDataArray.forEach((singleTweet) => {
    // calls createTweetElement for each tweet
    let createdTweet = createTweetElement(singleTweet)
    // console.log(createdTweet)
    // takes return value and appends it to the tweets container
    $('.container').append(createdTweet);
  })
}


$(document).ready(function () {
  $('#posttweet').on('submit', (event) => {
    // prevent the default form submission behaviour
    event.preventDefault();
    console.log('Submit button clicked');
    const tweetDataBase = 'http://localhost:8080/tweets';
    const data = $('#posttweet').serialize()
    const inputData = event.currentTarget[0].value;

    if (inputData.length === 0) {
      alert('Sorry, the text area cannot be empty')
    }

    if (inputData.length > 140) {
      alert('Sorry, your tweet exceeds 140 characters')
    }

    $.ajax({
      url: tweetDataBase,
      method: 'POST',
      data: data
    })
      .then((response) => {
        console.log(response, 'response')
      })
  });

  const loadTweets = function () {
    const tweetDataBase = 'http://localhost:8080/tweets';
    const data = $('#posttweet');
    const inputData = event.currentTarget[0].value;
    if (inputData.length <= 140) {
      $.ajax({
        url: tweetDataBase,
        method: 'GET',
        dataType: 'JSON'
      })
        .then((response) => {
          console.log(response, 'response')
          renderTweets(response);
        })
    }
  }

  $('#posttweet').on('submit', (event) => {
    loadTweets();
  })
})



