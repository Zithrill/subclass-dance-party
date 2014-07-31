var rickDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer rick"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
};

rickDancer.prototype = Object.create(Dancer.prototype);

rickDancer.prototype.constructor = rickDancer;

rickDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
};
