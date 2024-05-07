crs=document.querySelector(".cursor");
crsBlur=document.querySelector(".cursor-blur");
document.addEventListener("mousemove",function(dets){
crs.style.left = dets.x + "px";
crs.style.top= dets.y + "px";
crsBlur.style.left = dets.x - 250 + "px";
crsBlur.style.top = dets.y - 250 + "px";
})
headelement=document.querySelectorAll('nav h4');
headelement.forEach(function(elem) {
  elem.addEventListener("mouseenter",function(){
    crs.style.backgroundColor="transparent";
    crs.style.border="1px solid white";
    crs.style.scale= 1.5;
  })
  elem.addEventListener("mouseleave",function(){
    crs.style.backgroundColor="#95c11e";
    crs.style.border="0px solid #95c11e;";
    crs.style.scale=1;
  })
});
footerElement=document.querySelectorAll('.foot h2');
footerElement.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    crs.style.backgroundColor="transparent";
    crs.style.border="1px solid white";
    crs.style.scale= 1.5;
  })
  elem.addEventListener("mouseleave",function(){
    crs.style.backgroundColor="#95c11e";
    crs.style.border="0px solid #95c11e;";
    crs.style.scale=1;
  })
});
gsap.to("nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
      trigger: "nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });
  
gsap.to("main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
  });
  gsap.from(".aboutus img, .aboutin", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".aboutus",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 3,
    },
  });
  gsap.from(".card", {
    scale: 0.8,
    // opacity:0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      // markers:false,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });
  gsap.from(".left-image", {
    y: -30,
    x: -40,
    scrollTrigger: {
     trigger: ".left-image",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
  gsap.from(".right-image", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: ".rightimage",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });
