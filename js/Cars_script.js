
var cars = document.getElementsByClassName("card");

const hover = gsap.to(cars, {
    scaleX:1, scaleY:0.9, scaleZ:1,
    color: "black",
    duration: 1.5,
    paused: true,
    ease: "ease-in-out"
  });
  
HTMLCollection.prototype.forEach = Array.prototype.forEach;
cars.forEach((element) => {
    gsap.set(element, {autoAlpha: 0})
    gsap.fromTo(element, {x: 1500}, {duration: 2, x: 0})
    gsap.to(element, {autoAlpha: 1 ,duration: 2})

    
})

cars.forEach((element) => {
    element.addEventListener("mouseenter",hover.play())
})

