let mode=document.querySelector("#btn");
let curMode="light" //dark
mode.addEventListener("click",()=>{
  if(curMode=="light"){
    curMode="dark"
    body.querySelector(body).style.backgroundColor="black";
  } else{
    curMode="light"
    body.style.backgroundColor="white"
  }
  console.log(curMode);
  
})
