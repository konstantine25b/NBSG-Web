let nav1 = document.querySelector(".nav1")
let nav1item2 =document.querySelector(".nav1item2")
const list = document.querySelector(".list")

const aboutnbsg = document.querySelector(".aboutnbsg")
const aboutreab = document.querySelector(".aboutreab")
const aboutfit = document.querySelector(".aboutfit")
const aboutvr = document.querySelector(".aboutvr")
const x= document.querySelector(".x")

  window.addEventListener("scroll",function(){
    
    if(window.scrollY >= 120){
       nav1.style.opacity = "1"
       nav1item2.style.marginTop = "0px"
       nav1item2.style.boxShadow = "none"
       nav1item2.style.transitionDuration = "0.5s"
       nav1.style.height= "85px"
       
    }
    
    else{
      nav1.style.opacity = "1"
      nav1item2.style.transitionDuration = "0.5s"
      nav1item2.style.marginTop = "0px"
      nav1item2.style.boxShadow = "rgba(0, 0, 0, 0.35) 0px 5px 15px;"
      nav1.style.height= "85px"

    }

  })

nav1.addEventListener("mouseover",function(){
    nav1.style.opacity = "1"
})



// nav1item2.addEventListener("click",function(){
  
//     window.scroll({
//       top: 250,
      
//       behavior: 'smooth'
//     });
  
// })
let count = 0
nav1item2.addEventListener("click",function(){
  
  if(count==0){
    count++
    list.style.visibility = "visible"
    list.style.transitionDuration = "0.5s"
    list.style.opacity="0.8"
    list.style.marginTop = "15px"
  }
  else {
    list.style.opacity="0"
    list.style.visibility = "hidden"
    count--
    list.style.transitionDuration = "0.5s"
    list.style.marginTop = "-75px"
  }
  

})
x.addEventListener("click",function(){
  
  list.style.opacity="0"
 
  list.style.transitionDuration = "0.5s"
    list.style.visibility = "hidden"
    count--
  
  

})

aboutnbsg.addEventListener("click",function(){
  
    window.scroll({
      top: 220,
      
      behavior: 'smooth'
    });
  
})
aboutreab.addEventListener("click",function(){
  
  window.scroll({
    top: 1320,
    
    behavior: 'smooth'
  });

})
aboutfit.addEventListener("click",function(){
  
  window.scroll({
    top: 2020,
    
    behavior: 'smooth'
  });

})
aboutvr.addEventListener("click",function(){
  
  window.scroll({
    top: 2670,
    
    behavior: 'smooth'
  });

})


