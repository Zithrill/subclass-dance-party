var ScumbagStacyDancer = function(top, left, timeBetweenSteps){
  if(timeBetweenSteps > 1000) {
    this._timeBetweenSteps = 1000;
  }

  Dancer.call(this, top, left, timeBetweenSteps);
};

ScumbagStacyDancer.prototype = Object.create(Dancer.prototype);
ScumbagStacyDancer.prototype.constructor = ScumbagStacyDancer;

ScumbagStacyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);

  this.$node.toggle();
  };
