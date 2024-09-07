// let btn = document.querySelector("#btn");

// // Handle double-click event
// btn.ondblclick = () => {  
//   console.log("Button was double-clicked");
// }

// // Handle mouseover event
// btn.onmouseover = (e) => {
//   console.log("Cursor placed on button..");
//   console.log(e.type);    // Logs the type of event, e.g., "mouseover"
//   console.log(e.target);  // Logs the element the event is related to
// }


let btn=document.querySelector("#btn");
btn.addEventListener("click",()=>{
  console.log(("Button is clicked.."));
});

let btn1=document.querySelector("#btn");
btn1.addEventListener("click",()=>{
  console.log(("Button is clicked.."));
});

let btn2=document.querySelector("#btn");
btn2.addEventListener("click",()=>{
  console.log(("Button is clicked.."));
});

let btn3=document.querySelector("#btn");
const handle=()=>{
  console.log("Button is clicked..");
}
btn3.addEventListener("click",handle);
btn3.removeEventListener("click",handle);
