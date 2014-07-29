var JUMPYDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="jumpyDancer"></span>');
  this._timeBetweenSteps = 5000;


  Dancer.call(this, top, left, timeBetweenSteps);
};

JUMPYDancer.prototype = Object.create(Dancer.prototype);

JUMPYDancer.prototype.constructor = JUMPYDancer;

JUMPYDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  if(this.$node.display === "none"){
    this.$node.fadeIn(100);
  }
  else{
    this.$node.fadeOut(500);
  }

};
