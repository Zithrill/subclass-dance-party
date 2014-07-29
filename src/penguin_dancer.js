var PenguinDancer = function(top, left, timeBetweenSteps){
  if(timeBetweenSteps > 1000) {
    this._timeBetweenSteps = 1000;
  }

  Dancer.call(this, top, left, timeBetweenSteps);
};

PenguinDancer.prototype = Object.create(Dancer.prototype);
PenguinDancer.prototype.constructor = PenguinDancer;

PenguinDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  this.$node.toggle();
  };
