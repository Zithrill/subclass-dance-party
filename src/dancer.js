var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;

  this.step();

  this.setPosition(top, left);
};

Dancer.prototype.step = function () {
  var stepper = this.step.bind(this);
  setTimeout(stepper, this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = this.$node.css({
    top: top,
    left: left
  });
};
