// Query and log the div element
let div = document.querySelector("div");
console.log(div);

// Get and log the id attribute of the div
let value = div.getAttribute("id");
console.log(value);

// Get and log the class attribute of the first p element
let para = document.querySelector("p");
console.log(para.getAttribute("class"));

// Get and log the name attribute of the first p element
console.log(para.getAttribute("name"));

// Set a new class attribute to the p element and log the new class
para.setAttribute("class", "cool");
console.log(para.getAttribute("class"));

// Change the div styles and content
div.style.backgroundColor = "pink";
div.style.fontFamily = "verdana";
div.innerText = "Hello !!...";
div.style.visibility = "hidden";
console.log(div.textContent);

// Create a new button element and add it after the p element
let button = document.createElement("button");
button.innerText = "Click here";
console.log(button);

// Append the button after the paragraph
para.after(button);

// Create a new heading element and add it to the body
let heading = document.createElement("h1");
heading.innerText = "Hi, I'm a web page";
document.querySelector("body").prepend(heading);

// Style the heading
heading.style.color = "green";
heading.style.textAlign = "center";
heading.style.textShadow = "1px 1px yellow";

// Remove the paragraph element
let par = document.querySelector("p");
par.remove();
