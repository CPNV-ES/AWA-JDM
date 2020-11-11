gsap.to(".information-col", {background: "linear-gradient(180deg, rgba(56,56,56,1) 0%, rgba(56,56,56,1) 46%, rgba(0,0,0,1) 100%)", duration:10})
gsap.set('#aiguille',{rotation:150, transformOrigin:"5% 10%"})
gsap.set(".carPic", {filter: "blur(10px)"},
)

//Animation rotation aiguille
var tl = gsap.timeline();
tl.to('#aiguille', 0.5, {rotation:-30, transformOrigin:"5% 10%", ease:Back.easeOut, repeat:8, yoyo:true,delay:0.1});
tl.to('#aiguille', 0.5, {rotation:150, transformOrigin:"5% 10%", ease:Back.easeOut});

//Animation logo ABS
var tl2 = gsap.timeline();
tl2.to('.abspath', 0.5, {fill: "#fff829",repeat:8});
tl2.set('.abspath',{fill: "grey"})

//Animation Light/Cadran
var tl3 = gsap.timeline();
tl3.to('#light-svg',{fill: "#6392ff",delay: 1})
tl3.to(".carPic", {filter: "blur(0px)"},
)
tl3.to('#cadran',{fill: "red"})
tl3.to('#light-svg',{fill: "grey",delay: 4})
tl3.to('#cadran',{fill: "grey"})

//Animation Rupteur blue/orange/red 
var tl4 = gsap.timeline({repeat:4});
for (i=1;i<14;i++){
    if(i>0 && i<9){
        tl4.to(`#speed-${i}`,0.007,{fill:"blue"})
    }else if(i>8 && i<11){
        tl4.to(`#speed-${i}`,i/300,{fill:"orange"})
    }else{
        tl4.to(`#speed-${i}`,i/300,{fill:"red"})
    }
}
//Animation Rupteur grey 
var y=1
for (i=13;i>0;i--){
    if(i==13){
        tl4.to(`#speed-${i}`,y/300,{fill:"grey",delay:0.5})
    }else{
        tl4.to(`#speed-${i}`,y/300,{fill:"grey"})
    }
    y++
}
y=1