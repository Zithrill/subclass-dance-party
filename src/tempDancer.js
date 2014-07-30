var TEMPDancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer nigel"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
};

TEMPDancer.prototype = Object.create(Dancer.prototype);

TEMPDancer.prototype.constructor = TEMPDancer;

TEMPDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  // this.$node.toggle();
};
