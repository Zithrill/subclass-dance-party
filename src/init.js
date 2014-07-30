$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    animateDiv(dancer.$node);
  });

  var randomDance = function() {

  };

  $(".lineUp").on("click", function(event) {
    // for (var i = 0; i < window.dancers.length; i++) {
    //   window.dancers[i].setPosition('75%');
    // }
    if($('.dancer').hasClass("dancer")){
      $('.dancer').addClass("linedUp");
      $('.dancer').removeClass("dancer");
    } else{
      $('.linedUp').addClass("dancer");
      $('.linedUp').removeClass("linedUp");
    }
  $('.linedUp').stop(true, true);
  $('.linedUp').animate({"position":"fixed",
                        "top":"90%",
                        "right":"50%",
                        "z-index":"10"}, {
                        duration: 4000,
                        height: "easeOutBounce"
    });
  });

  $(".dancer").mouseover(function(){
    var degree = 180;
    var node = $(this);
    node.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
  });

  $(".dancer").click(function(){
    var node = $(this);
    node.animateWithCSS(
      {width: "5em", height: "5em"}, // CSS properties to animate
        2000,                       // Duration in ms
        "cubic-bezier",             // The timing function
        function(){                 // Callback
          node.animateWithCSS(
            {width: "3em", height: "3em"}, // CSS properties to animate
              2000,                       // Duration in ms
              "cubic-bezier");
        }
);
  });
});
