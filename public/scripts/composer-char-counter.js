// file is solely responsible for this character counter//

//runs a callback when the DOM is ready to be manipulated with jQuery
$(document).ready(function () {
  const textArea = $('#tweet-text');

  textArea.on('keyup', function (event) {
    //this refers to the element on which the event triggered
    let inputLength = this.value.length;

    // traverse up the DOM tree to find a parent
    const parent = $(event.target).closest('form');
    //go down to get the count and update its value 
    let dynamicCounter = parent.find('.counter')[0].textContent = 140 - inputLength;
    //reset the counter after submitting
    $('#submitbtn').click(function () {
      $('.counter').text('140');
    })
    console.log(dynamicCounter, 'dynamicCounter')
    // target the counter
    if (dynamicCounter < 0) {
      $(".counter").css("color", "#FF0000	");
      $('#submitbtn').click(function () {
        //do not reset the counter upon submission
        $('.counter').text(dynamicCounter);
      })
    } else {
      $(".counter").css("color", "#545149");
    }

  });



});
