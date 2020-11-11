
// init controller
var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

// Build scenes
 
//Main wallpaper
new ScrollMagic.Scene({triggerElement: "#home"})
  .setTween("#home > div", {y: "80%", ease: Linear.easeNone})
  .addTo(controller);


//Car 1  
new ScrollMagic.Scene({triggerElement: "#car1"})
  .setTween("#car1 > div", {y: "80%", ease: Linear.easeNone})
  .addTo(controller);

// Car 1 content
new ScrollMagic.Scene({triggerElement: "#car1-content", triggerHook: 1, duration: "200%", offset: 680})
.setClassToggle("#car1-content", "visible")  
.addTo(controller);

//Car 2
new ScrollMagic.Scene({triggerElement: "#car2"})
  .setTween("#car2 > div", {y: "80%", ease: Linear.easeNone})
  .addTo(controller);

// Car 2 content
new ScrollMagic.Scene({triggerElement: "#car2-content", triggerHook: 1, duration: "200%", offset: 650})
.setClassToggle("#car2-content", "visible") 
.addTo(controller);

//Car 3
new ScrollMagic.Scene({triggerElement: "#car3"})
  .setTween("#car3 > div", {y: "80%", ease: Linear.easeNone})
  .addTo(controller);

// Car 3 content
new ScrollMagic.Scene({triggerElement: "#car3-content", triggerHook: 1, duration: "200%", offset: 750})
.setClassToggle("#car3-content", "visible") 
.addTo(controller);

//Car 4
new ScrollMagic.Scene({triggerElement: "#car4"})
  .setTween("#car4 > div", {y: "80%", ease: Linear.easeNone})
  .addTo(controller);

// Car 4 content
new ScrollMagic.Scene({triggerElement: "#car4-content", triggerHook: 1, duration: "200%", offset: 650})
.setClassToggle("#car4-content", "visible") 
.addTo(controller);