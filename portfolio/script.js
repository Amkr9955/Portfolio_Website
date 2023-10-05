function revealToSpan(){
    document.querySelectorAll(".reveal")
.forEach(function(elem){
  
  var parent=document.createElement("span");
  var child=document.createElement("span");
  
  parent.classList.add("parent");
  child.classList.add("child");
  
  child.innerHTML=elem.innerHTML;
  parent.appendChild(child);
 
  elem.innerHTML="";
  elem.appendChild(parent);

});
}
revealToSpan();

function loaderAnimation(){
    var tl=gsap.timeline();

tl
.from(".child span",{
    x:100,
    duration:1,
    
    stagger:.2,
    ease:Power3.easeInOut
})
.to(".parent .child",{
    y:"-100%",
    duration:0.8,
   
    ease:Circ.easeInOut
})
.to("#loader",{
    height: 0,
    duration:0.8,
   
    ease:Circ.easeInOut
})
.to("#green",{
    height: "100%",
    top:0,
    duration:0.8,
    delay:-0.8,
   
    ease:Circ.easeInOut
})
.to("#green",{
    height: "0%",
    delay:-0.6,
    duration:0.8,
    
   
    ease:Circ.easeInOut
})
.to("#black",{
    height: "100%",
    top:0,
    duration:0.8,
    delay:-0.8,
    
   
    ease:Circ.easeInOut
})
.to("#black",{
    height: "0%",
    
    duration:0.8,
    delay:-0.5,
    
   
    ease:Circ.easeInOut
})

.from("#home .page1",{
    opacity:0,
    delay:-0.3,
    duration:0.8,
    ease:Circ.easeInOut
})




.from("#row2 span",{
    opacity:0,
    
    duration:.5,
    delay:0.5,
    ease:Circ.easeInOut
}
)

}
loaderAnimation();

var crsr=document.querySelector(".cursor");
var home=document.querySelector("#home");
home.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+10+"px";
    crsr.style.top=dets.y+10+"px";
})

var tl=gsap.timeline({
    scrollTrigger:{
        trigger:"#row1 h1",
        scroller:"body",
        // markers:true,
        start:"top 20%",
        end:"top 0",
        scrub:3,
        stagger:2,

    }
})
tl.to("#row1",{
    x:-100,
    
   
},"anim")
tl.to("#row2 h1",{
    x:100,
},"anim")
tl.to(".page1 video",{
    width:"65%",
},"anim")


var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        // markers:true,
        start:"top -50%",
        end:"top -60%",
        scrub:3

    }
})
tl2.to("#home",{
    backgroundColor:"#fff",
    ease:Power3.easeInOut
})
tl2.from(".page2 h1 i",{
    opacity:0,
    delay:-0.7,
    duration:1,
    ease:Power3.easeInOut
})
var tl3=gsap.timeline({
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        // markers:true,
        start:"top -5%",
        end:"top -20%",
        scrub:3

    }
})
tl3.to(".page3 img",{
    scale:1,
    duration:2,
    
    ease:Power3.easeInOut

})
var tl4=gsap.timeline({
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        // markers:true,
        start:"top -130%",
        end:"top -140%",
        scrub:3

    }
})
tl4.to("#home",{
    backgroundColor:"#000",
    
})
var boxes=document.querySelectorAll(".box");
boxes.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
    var att=elem.getAttribute("data-image");
    crsr.style.width="375px";
    crsr.style.height="325px";
    crsr.style.borderRadius="0";
    crsr.style.backgroundImage=`url(${att})`;
    crsr.style.transform="translate(-50%,0)";
    
    
   });
   elem.addEventListener("mouseleave",function(){
    
     elem.style.backgroundColor="transparent";
     crsr.style.width = "20px";
        crsr.style.height = "20px";
        crsr.style.borderRadius = "50%";
        crsr.style.backgroundImage = "none";
        
  
   })
})
