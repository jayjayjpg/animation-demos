(function(){
  console.log("animation started....");
  var num,
      myScreen = document.getElementsByClassName("animated-frame")
      tl = new TimelineMax({repeat: -1, repeatDelay: 0});

  // adding the frames to the Timeline
  // initialise with first screen without any delay
  tl.add( TweenMax.set(myScreen, {css: {backgroundImage: "url('img/dancedemoex.001.png')"}}) );
  // add other frames to timeline with delay in between
  for (var i = 2; i < 11; i += 1){
    num = "";
    if (i < 10){
      num = "0";
    }
    num += i;
    console.log("num " + i + ": " + num);
    // TweenMax.set(myScreen, {css: {backgroundImage: "url('img/dancedemoex.0" + num + ".png')"}, delay: i * 0.5 - 0.5});
    tl.add( TweenMax.set(myScreen, {css: {backgroundImage: "url('img/dancedemoex.0" + num + ".png')"}, delay: 0.4}) );
  }

  // start the Timeline
  tl.play();
  //thumbCinema.repeat(3); 

})();