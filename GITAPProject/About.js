let nav1 = document.querySelector(".nav1")
  window.addEventListener("scroll",function(){
    
    if(window.scrollY > 200){
       nav1.style.opacity = "0.7"
       
    }
    
    else{
      nav1.style.opacity = "1"
    }
  })

nav1.addEventListener("mouseover",function(){
    nav1.style.opacity = "1"
})

let left1 = document.querySelector(".left1");
let right1 = document.querySelector(".right1");
function getCrypto (){
  let xhr = new XMLHttpRequest();
  xhr.open('get',"https://api2.binance.com/api/v3/ticker/24hr");
  xhr.send();

  xhr.onload = ()=>{
    let arr =JSON.parse(xhr.response)
    console.log(arr)
    let arr1 =[]
    for(let i=0; i<arr.length; i++){
        let nm = arr[i].symbol.split("")
        let last = ""
        for(let j = nm.length-4; j<nm.length;j++){
             last+= nm[j]
        }
        if(last =="USDT"){
            // console.log(arr[i].symbol)
            arr1.push(arr[i])
            // main.textContent+=arr[i].symbol+"    "
        }



    }
    console.log(arr1) 
    let crypto1 =  arr1[function1(arr1.length)]
    let crypto2 =  arr1[function1(arr1.length)]
    console.log(crypto1,crypto2)
    let crypto1nm = crypto1.symbol.split("")
    let crypto2nm = crypto2.symbol.split("")
    let crypto1name = naming(crypto1nm)
    let crypto2name = naming(crypto2nm)

    function naming (cryptonm){
        let cryptoname = ""
        for(let k = 0 ; k < cryptonm.length-4 ; k++){
        cryptoname+=cryptonm[k]


       }
    return cryptoname}
    console.log(crypto1name,crypto2name)
    left1.textContent+= crypto1name
    left1.style.color = "yellow"
    right1.textContent+= crypto2name
    right1.style.color = "yellow"
     
  }
  const function1 = (arrLen)=>{
    let coin1 = Math.floor((Math.random()*arrLen))
    return coin1 
    
   
   
   }

}
left1.style.color= "white"
right1.style.color= "white"



getCrypto();


