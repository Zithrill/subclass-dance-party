$(document).ready(function() {
  
  //Default animation
  var dancer = $(".dancer");
  for(var n  = 0; n < dancer.length; n++) {
  	animateDiv(dancer[n]);
  }
  
  setInterval(function() {
    dancer = $('dancer');

    for (var i = 0; i < dancer.length; i++) {
      var currentPosI = [dancer[i].offset.top, dancer[i].offset.left];

      animateDiv(dancer[i], currentPosI);

      for (var j = 0; j < dancer.length; j++) {
        var currentPosJ = [dancer[j].offset.top, dancer[j].offset.left];	

         if(i !== j) {
          var position1 = overlaps.getPositions(dancer[i]);
          var position2 = overlaps.getPositions(dancer[j]);
            
	      if(comparePositions(position1, position2)){
            animateDiv(dancer[i], currentPosI);
            animateDiv(dancer[j], currentPosJ);
	      }
        }
        debugger;
      }
    }
  },25);
  
  function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];        
  }

  //SELECTING ELEMS PROPERLY??
  function animateDiv(elem, pos){
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
  }

  function calcSpeed(prev, next) {    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;
  }

    //Collision detection and reaction
  var overlaps = function () {
    function getPositions( elem ) {
      var pos, width, height;
      pos = $( elem ).position();
      width = $( elem ).width();
      height = $( elem ).height();
      return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
    }

    function comparePositions( p1, p2 ) {
      var r1, r2;
      r1 = p1[0] < p2[0] ? p1 : p2;
      r2 = p1[0] < p2[0] ? p2 : p1;
      return r1[1] > r2[0] || r1[0] === r2[0];
    }

    // return function ( a, b ) {
    //   var pos1 = getPositions( a ),
    //   pos2 = getPositions( b );
    
    //   return comparePositions( pos1[0], pos2[0] ) && comparePositions( pos1[1], pos2[1] );
  }

    //check DOM for new dancers and check for collisions
  
 //end of file 
});