var lesiaDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer lesia"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
};

lesiaDancer.prototype = Object.create(Dancer.prototype);

lesiaDancer.prototype.constructor = lesiaDancer;

lesiaDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
};
