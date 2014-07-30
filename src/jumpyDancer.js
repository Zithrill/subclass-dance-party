var JUMPYDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer theCage"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
};

JUMPYDancer.prototype = Object.create(Dancer.prototype);

JUMPYDancer.prototype.constructor = JUMPYDancer;

JUMPYDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  if(this.$node.hasClass("fade")){
    this.$node.fadeIn(100);
  }
  else{
    this.$node.fadeOut(500);
  }

};
