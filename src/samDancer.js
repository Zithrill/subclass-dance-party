var samDancer = function(top, left, timeBetweenSteps){
this.$node = $('<span class="dancer sam rot"></span>');
Dancer.call(this, top, left, timeBetweenSteps);
};

samDancer.prototype = Object.create(Dancer.prototype);

samDancer.prototype.constructor = samDancer;

samDancer.prototype.step = function(){

};



