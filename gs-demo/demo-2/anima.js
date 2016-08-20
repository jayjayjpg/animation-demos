(function(){
  console.log("animation started....");
  var num = 0,
      myScreen = document.getElementsByClassName("animated-frame")
      tl = new TimelineMax({repeat: -1, repeatDelay: 0});

  // adding the frames to the Timeline
  // initialise with first screen without any delay
  tl.add( TweenMax.set(myScreen, {css: {backgroundPosition: "center" + "0"}}) );
  // add other frames to timeline with delay in between
  for (var i = 0; i < 6; i += 1){
    num += i;
    console.log("num " + i);
    // TweenMax.set(myScreen, {css: {backgroundImage: "url('img/dancedemoex.0" + num + ".png')"}, delay: i * 0.5 - 0.5});
    tl.add( TweenMax.set(myScreen, {css: {backgroundPosition: "center " + -i * 400 + "px"}, delay: 0.4}) );
  }

  // start the Timeline
  tl.play();
  //thumbCinema.repeat(3); 

})();