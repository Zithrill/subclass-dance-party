var makeNewPosition = function(){
// Get viewport dimensions (remove the dimension of the div)
  var h = $(window).height() - 50;
  var w = $(window).width() - 50;

  var nh = Math.floor(Math.random() * h);
  var nw = Math.floor(Math.random() * w);

  return [nh,nw];
};

//SELECTING ELEMS PROPERLY??
var calcSpeed = function (prev, next) {
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);

  var greatest = x > y ? x : y;

  var speedModifier = 0.1;

  var speed = Math.ceil(greatest/speedModifier);

  return speed;
};

var animateDiv = function (elem, pos){
  var newq;
  if(!pos) {
    newq = makeNewPosition();
  } else {
    newq = pos;
  }

  var oldq = $(elem).offset();
  var speed = calcSpeed([oldq.top, oldq.left], newq);

  $(elem).animate({ top: newq[0], left: newq[1] }, speed, function(){
    animateDiv(elem);
  });
};

var getPositions = function( elem ) {
  var pos, width, height;
  pos = $( elem ).position();
  width = $( elem ).width();
  height = $( elem ).height();
  return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
};
var comparePositions = function ( p1, p2 ) {
  var r1, r2;
  r1 = p1[0] < p2[0] ? p1 : p2;
  r2 = p1[0] < p2[0] ? p2 : p1;
  return r1[1] > r2[0] || r1[0] === r2[0];
};

var collider = function() {
//Collision detection & handling
  setInterval(function() {
    $dancer = $('.dancer');
    for (var i = 0; i < $dancer.length; i++) {
      var offsetI = $dancer.offset($dancer[i]);
      var currentPosI = [offsetI.top, offsetI.left];

      animateDiv($dancer[i], currentPosI);

      for (var j = 0; j < $dancer.length; j++) {
        var offsetJ = $dancer.offset($dancer[j]);
        var currentPosJ = [offsetJ.top, offsetJ.left];
        if(i !== j) {
          var position1 = getPositions($dancer[i]);
          var position2 = getPositions($dancer[j]);
          if(comparePositions(position1, position2)){
            $dancer.addClass(i,'spinNow');
            $dancer.addClass(j,'spinNow');
            setTimeout(function() {
              $dancer.removeClass(i, 'spinNow');
              $dancer.removeClass(j, 'spinNow');
            },1500);

          }
        }
      }
    }
  },25);
};
$(document).ready(function() {
  var $dancer = $('.dancer');
  collider();
});
