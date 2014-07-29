var BlinkyDancer = function(top, left, timeBetweenSteps){
  if(timeBetweenSteps > 1000) {
    this._timeBetweenSteps = 1000;
  }

  Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  this.$node.toggle();
  };

