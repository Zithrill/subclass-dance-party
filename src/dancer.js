// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // var dancer = {};

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;

  // dancer.step = function(){
  //   // the basic dancer doesn't do anything interesting at all on each step,
  //   // it just schedules the next step
  //   setTimeout(dancer.step, timeBetweenSteps);
  // };
  //
  this.step();

  // dancer.setPosition = function(top, left){

  // };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

  // return dancer;
};

Dancer.prototype.step = function () {
  var context = this;
  console.log('stepping');
  setInterval(context.step, context._timeBetweenSteps);
  // setTimeout(function() {
  //   this.step();
  // }, this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
// Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    // var styleSettings = {
    //   top: top,
    //   left: left
    // };

    var styleSettings = this.$node.css({
      top: top,
      left: left
    });

    // dancer.$node.css(styleSettings);
};
