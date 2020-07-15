/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



//function takes in a tweet object and returns a tweet <article> HTML structure 

const createTweetElement = function (singleTweet) {
  //handling the date
  let todayDate = new Date();
  todayDate = Date.parse(todayDate)
  let tweetDate = `${singleTweet['created_at']}`
  let diff = todayDate - tweetDate;
  const tweetItem = `
  <article>
  <header>
    <div id="tweetHeader" >
    <div><span> <img src="${singleTweet.user.avatars}"/> </span>  <span>${singleTweet.user.name}</span></div>
    <div ><span id = "handle"> ${singleTweet.user.handle} </span> </div>
    </div>
  <p id='tweetcontent'>${singleTweet.content.text}</p>
  <hr/>  
  </header>  
  <footer>
    <div>
      <span> ${diff} days ago </span>
    </div> 
    <div><span class="iconify" data-icon="bi:flag-fill" data-inline="false"></span>  <span class="iconify" data-icon="entypo:retweet" data-inline="false"> </span>  <span class="iconify" data-icon="bi:suit-heart-fill" data-inline="false" </span></div> 
  </footer>
</article>   
 `
  return tweetItem;
}

const renderTweets = function (tweetDataArray) {
  // loops through tweets
  tweetDataArray.forEach((singleTweet) => {
    // calls createTweetElement for each tweet
    let createdTweet = createTweetElement(singleTweet)
    // console.log(createdTweet)
    // takes return value and appends it to the tweets container
    $('.tweetcontainer').append(createdTweet);
  })
}


$(document).ready(function () {
  $('#posttweet').on('submit', (event) => {
    // prevent the default form submission behaviour
    event.preventDefault();
    console.log('Submit button clicked');
    const tweetDataBase = 'http://localhost:8080/tweets';
    const data = $('#posttweet').serialize()
    let inputData = event.currentTarget[0].value;

    if (inputData.length === 0) {
      alert('Sorry, the text area cannot be empty')
    }

    if (inputData.length > 140) {
      alert('Sorry, your tweet exceeds 140 characters')
    }
    if (inputData.length <= 140) {
      $.ajax({
        url: tweetDataBase,
        method: 'POST',
        data: data
      })
        .then((response) => {
          //clearing the text area after submitting
          $("#posttweet")[0].reset()
          console.log(response, 'response')
          loadTweets();
        })
    }
  });

  const loadTweets = function () {
    const tweetDataBase = 'http://localhost:8080/tweets';
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
})



