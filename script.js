var st=gsap.timeline();

function animation(){
    st.from("#page1 #nav",{
        x:"-40vw",
        duration:3,
        opacity:0,
    })
    st.from("#content h1",{
        x:"-40vw",
        duration:3,
        stagger:1,
        opacity:0
    })
    st.from("#content h2",{
        y:"10vw",
        duration:2,
        opacity:0
    })
    st.from("#page1 #image",{
        x:"10vw",
        duration:2,
        opacity:0
    })
    TweenMax.to("#page1 #image",{
         rotation:20,
         duration: 3,
         repeat:-1,
         yoyo:true,
    })
  TweenMax.to("#page7 #imag",{
       rotation:20,
       duration: 3,
       repeat:-1,
       yoyo:true,
  })
  st.from("#page8 #right1",{
    x:"10vw",
    duration:2,
    opacity:0
})
TweenMax.to("#page8 #right1",{
     rotation:20,
     duration: 3,
     repeat:-1,
     yoyo:true,
})
  
}
  animation();

function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}
   locomotive();

function magnet(){
    Shery.makeMagnet("#page2 h1", {
    });
    Shery.makeMagnet("#page2 #image", {
  });
  Shery.makeMagnet("#page2 #paragraph", {
  });
  Shery.makeMagnet(".detail p", {
  });
}
 magnet();

 gsap.from("#top h1",{
    x:"-40vw",
    duration:3,
    opacity:0,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        scrub:3,
        start:"top 50%",
        end:"top 0",
    }
 })
 gsap.from("#blocks .services",{
    y:"40vw",
    duration:3,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        scrub:3,
        start:"top 50%",
        end:"top 0",
    }
 })

 let para=document.querySelectorAll("#top p");

 para.forEach(function(getArray){
    let text="";
    let letter=getArray.textContent.split("");
    letter.forEach(function(anotherArray){
      text+=`<span>${anotherArray}</span>`
    })
    getArray.innerHTML=text;
 })
 gsap.to("p span",{
    color:"#a33997",
    duration:4,
    stagger:4,
    scrollTrigger:{
      trigger:"#page3",
      scroller:"#main",
      scrub:3,
      start:"top 40%",
      end:"top -20%",
    }
 })
 gsap.from("#page4 #content",{
      opacity:0,
      duration:3,
      scrollTrigger:{
        trigger:"#page4",
        scroller:"#main",
        scrub:3,
        start:"top 40%",
        end:"top -20%",
      }
 })
 gsap.from("#page4 #imge",{
  opacity:0,
  duration:3,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    scrub:3,
    start:"top 40%",
    end:"top -20%",
  }
})
gsap.from("#page5 #content1",{
  opacity:0,
  duration:3,
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#main",
    scrub:3,
    start:"top 40%",
    end:"top -20%",
  }
})
gsap.from("#page5 #imge1",{
opacity:0,
duration:3,
scrollTrigger:{
trigger:"#page5",
scroller:"#main",
scrub:3,
start:"top 40%",
end:"top -20%",
}
})
gsap.from("#page6 h4",{
  x:"-20vw",
  duration:3,
  opacity:0,
  scrollTrigger:{
    trigger:"#page6",
    scroller:"#main",
    scrub:3,
    start:"top 40%",
    end:"top -10%",
    }

})
gsap.from("#left h5",{
  y:"-20vw",
  duration:3,
  opacity:0,
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    scrub:3,
    start:"top 30%",
    end:"top -5%",
    }
})
gsap.from("#page7 #right1",{
  opacity:0,
  duration:3,
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    scrub:3,
    start:"top 30%",
    end:"top -60%",
  }
})
gsap.from("#left1 h3",{
   x:"-40vw",
  opacity:0,
  duration:3,
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    scrub:3,
    start:"top 30%",
    end:"top -60%",
  }
})
gsap.from("#left1 p",{
 opacity:0,
 duration:5,
 scrollTrigger:{
   trigger:"#page8",
   scroller:"#main",
   scrub:3,
   start:"top 30%",
   end:"top 0",
 }
})
gsap.from("#left1 #icon",{
  y:"20vw",
  opacity:0,
  duration:5,
  scrollTrigger:{
    trigger:"#page8",
    scroller:"#main",
    scrub:3,
    start:"top 30%",
    end:"top 0",
  }
 })




