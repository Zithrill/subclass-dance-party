var BlinkyDancer = function(top, left, timeBetweenSteps){
this.$node = $('<span class="dancer sam rot"></span>');
Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);

BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){

};



