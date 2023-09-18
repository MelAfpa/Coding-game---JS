// alert("js ok");

let yellowLine = document.getElementById("yellowLine");
// console.log("yellowLine");
let yellow = document.getElementById("yellow");

let test = document.getElementById("test");
// console.log("test");

let txtImg = document.getElementById("txtImg");
// console.log("txtImg");


test.addEventListener("mousedown", addFilter);

function addFilter(){
    console.log("addFilter");
    txtImg.style.display = "inline-block";
    yellowLine.style.height = "15px";
    yellow.innerHTML = "90% FINI";
    yellow.style.fontSize = "0.8em";
    yellow.style.paddingLeft = "10px";
}