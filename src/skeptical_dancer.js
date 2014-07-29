var SkepticalDancer = function(top, left, timeBetweenSteps){
  if(timeBetweenSteps > 1000) {
    this._timeBetweenSteps = 1000;
  }

  Dancer.call(this, top, left, timeBetweenSteps);
};

SkepticalDancer.prototype = Object.create(Dancer.prototype);
SkepticalDancer.prototype.constructor = SkepticalDancer;

SkepticalDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  this.$node.toggle();
  };
