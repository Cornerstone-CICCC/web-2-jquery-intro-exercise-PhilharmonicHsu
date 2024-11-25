$(function() {
  // Exercise 1
  $('#toggleButton').on('click', function() {
    const myParagraph = $('#myParagraph');

    if (myParagraph.is(':visible')) {
      myParagraph.hide();
    } else {
      myParagraph.show();
    }
  })

  // Exercise 2
  $('#colorButton').on('click', function() {
    const colorDiv = $('#colorDiv');

    colorDiv.css('background-color', 'yellow');
  })

  // Exercise 3
  $('#addClassButton').on('click', function() {
    const classDiv = $('#classDiv');
    classDiv.addClass('newClass');
  })

  $('#removeClassButton').on('click', function() {
    const classDiv = $('#classDiv');
    classDiv.removeClass('newClass');
  })

  // Exercise 4
  $('#fadeInButton').on('click', function() {
    $('#fadeDiv').fadeIn(1000);
  })

  $('#fadeOutButton').on('click', function() {
    $('#fadeDiv').fadeOut(1000);
  })

  // Exercise 5
  $('#slideUpButton').on('click', function() {
    $('#slideDiv').slideUp(1000);
  })

  $('#slideDownButton').on('click', function() {
    $('#slideDiv').slideDown(1000);
  })
})