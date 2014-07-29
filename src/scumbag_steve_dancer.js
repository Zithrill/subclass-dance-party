var ScumbagSteveDancer = function(top, left, timeBetweenSteps){
  if(timeBetweenSteps > 1000) {
    this._timeBetweenSteps = 1000;
  }

  Dancer.call(this, top, left, timeBetweenSteps);
};

ScumbagSteveDancer.prototype = Object.create(Dancer.prototype);
ScumbagSteveDancer.prototype.constructor = ScumbagSteveDancer;

ScumbagSteveDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  this.$node.toggle();
  };
