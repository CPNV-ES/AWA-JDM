
var informationCol = document.getElementsByClassName("information-col");
gsap.to(informationCol, {background: "linear-gradient(180deg, rgba(56,56,56,1) 0%, rgba(56,56,56,1) 46%, rgba(0,0,0,1) 100%)", duration:20})
gsap.set('#aiguille',{rotation:150, transformOrigin:"5% 10%"})


var tl = gsap.timeline();
tl.to('#aiguille', 0.2, {rotation:-30, transformOrigin:"5% 10%", ease:Back.easeOut, repeat:8, yoyo:true});
tl.to('#aiguille', 0.2, {rotation:150, transformOrigin:"5% 10%", ease:Back.easeOut});

var tl2 = gsap.timeline();
tl2.to('.abspath', 0.5, {fill: "#fff829",repeat:3});
tl2.set('.abspath',{fill: "grey"})

var tl3 = gsap.timeline();
tl3.to('#light-svg',{fill: "#6392ff",delay: 2})
tl3.to('#light-svg',{fill: "grey",delay: 5})
console.log(document.getElementById(".light-svg"))