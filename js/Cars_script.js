
var cars = document.getElementsByClassName("card");

const hover = gsap.to(cars, {
    scaleX:1, scaleY:0.9, scaleZ:1,
    color: "black",
    duration: 1.5,
    paused: true,
    ease: "ease-in-out"
  });

//Déplacement des card de droite à gauche et change de l'opacité de 0 à 1
HTMLCollection.prototype.forEach = Array.prototype.forEach;
cars.forEach((element) => {
    gsap.set(element, {autoAlpha: 0})
    gsap.fromTo(element, {x: 1500}, {duration: 2, x: 0})
    gsap.to(element, {autoAlpha: 1 ,duration: 2})
    
})
//Changement de la scale des images
cars.forEach((element) => {
    element.addEventListener("mouseenter",hover.play())
})

