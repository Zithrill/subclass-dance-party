$(document).ready(function() {
  
  //Default animation
  var dancer = $(".dancer");
  var currentClass;
  var index = 0;
  var classes = ['first', 'second', 'third', 'fourth'];

  function onAnimationEnd()
  {
    dancer.removeClass(currentClass);
    next();
  }
  
  function next()
  {
    if(index == classes.length) {
        index = 0;
    }
    
    currentClass = classes[index++];
    dancer.addClass(currentClass);
  }

    dancer.on('webkitAnimationEnd', onAnimationEnd);
    next();
    //

    //Collision detection and reaction
    var hub = [];
    setInterval(function() {
      for(var i = 0; i < dancer.length; i++) {
        
      }
    },100);
});