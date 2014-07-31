var nigelDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer nigel"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
};

nigelDancer.prototype = Object.create(Dancer.prototype);

nigelDancer.prototype.constructor = nigelDancer;

nigelDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
};
