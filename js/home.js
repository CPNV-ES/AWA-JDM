
// init controller
var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

//TweenMax.set("#car1-content", {opacity:0});
TweenMax.set("#car2-content", {opacity:0});
TweenMax.set("#car3-content", {opacity:0});
TweenMax.set("#car4-content", {opacity:0});     


var car1 = new TimelineLite();
var $titre = $(".car-content");
mySplitText = new SplitText($titre, {type:"words"});
TweenLite.set($titre, {perspective:400});
mySplitText.split({type:"words"});




// Build scenes
 
//Main wallpaper
 new ScrollMagic.Scene({triggerElement: "#home"})
   .setTween("#home > div", {y: "80%", ease: Linear.easeNone})
   .addTo(controller);


 //Car 1
 new ScrollMagic.Scene({triggerElement: "#car1"})
    .setTween("#car2 > div", {y: "80%", ease: Linear.easeNone})
    .on('start', function(){
        $(mySplitText.words).each(function(index,el){
            car1.from($(el), .5, {opacity:0, force3D:true}, .5+index * 0.05);
            car1.from($(el), .5, {scale:index % 2 == 0  ? 0 : 4, ease:Back.easeOut}, .5+index * 0.05);
        });
   })
   .addTo(controller);

 //Car 2
 new ScrollMagic.Scene({triggerElement: "#car2"})
   .setTween("#car2 > div", {y: "80%", ease: Linear.easeNone})
   .addTo(controller);

 //Car 3
 new ScrollMagic.Scene({triggerElement: "#car3"})
   .setTween("#car3 > div", {y: "80%", ease: Linear.easeNone})
   .addTo(controller);

 //Car 4
 new ScrollMagic.Scene({triggerElement: "#car4"})
   .setTween("#car4 > div", {y: "80%", ease: Linear.easeNone})
   .addTo(controller);
