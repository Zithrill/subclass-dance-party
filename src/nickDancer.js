var nickDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer theCage"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
};

nickDancer.prototype = Object.create(Dancer.prototype);

nickDancer.prototype.constructor = nickDancer;

nickDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  if(this.$node.hasClass("fade")){
    this.$node.fadeIn(100);
  }
  else{
    this.$node.fadeOut(500);
  }

};
