// alert("js ok");

let yellowLine = document.getElementById("yellowLine");
console.log("yellowLine");

let test = document.getElementById("test");
console.log("test");

let txtImg = document.getElementById("txtImg");
console.log("txtImg");


test.addEventListener("mousedown", addFilter);

function addFilter(){
    console.log("addFilter");
    txtImg.style.display = "flex";
    yellowLine.style.height = "15px";
}