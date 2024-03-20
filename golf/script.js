function navAnimation(){
    gsap.to("#nav",{
        backgroundColor:"#000",
        height:'100px',
        duration:0.5,
        scrollTrigger:{
            trigger:"#nav",
            scroller:"body",
            start:"top -10px",
            end:"top -11px",
            scrub:1
    
            
        }
    })
}
navAnimation()

function mainAnimation(){
    gsap.to("#main",{
        backgroundColor:"#000",
        scrollTrigger:{
            trigger:"#main",
            scroller:"body",
            start:"top -25%",
            end:"top -80%",
            scrub:2
        }
    })
}
mainAnimation()

function mouseAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#cursor",{
            x:dets.x,
            y:dets.y

        })
    })

    document.addEventListener("mousemove",function(dets){
        gsap.to("#cursor-blur",{
            x:dets.x-150,
            y:dets.y-150,
        })
    })

}
mouseAnimation()


// var navh4=document.querySelectorAll("#nav h4")
// navh4.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         cursor.style.scale=2
//         cursor.style.border="0.5px solid #fff"
//         cursor.style.backgroundColor="transparent"
//     })
// })
// navh4.forEach(function(elem){
// elem.addEventListener("mouseleave",function(){
//     cursor.style.scale=0
//     cursor.style.border="0.5px solid #fff"
//     cursor.style.backgroundColor="transparent"
// })

// })



gsap.from("#aboutus img",".about-us-text",{
        y:50,
        duration:2,
        opacity:0,
        stagger:0.4,
        scrollTrigger:{
            trigger:"#aboutus",
            scroller:"body",    
            markers:true,
            start:"top 60%",
            end:"top 33%",
            scrub:2
        }
})



gsap.from(".cards",{
        scale:0.8,

        duration:1,
        opacity:0,
        stagger:0.4,
        scrollTrigger:{
            trigger:".cards",
            scroller:"body",    
            markers:true,
            start:"top 60%",
            end:"top 33%",
            scrub:2
        }
}) 


gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})


gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }

})