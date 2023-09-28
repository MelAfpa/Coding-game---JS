

let addingTxt = document.getElementById("addingTxt");

addingTxt.addEventListener("mousedown", addFilter);

function addFilter(){
    let yellowLine = document.getElementById("yellowLine");
    let yellow = document.getElementById("yellow");
    let txtImg = document.getElementById("txtImg");

    txtImg.style.display = "inline-block";
    yellowLine.style.height = "15px";
    yellow.innerHTML = "90% FINI";
    yellow.style.fontSize = "0.8em";
    yellow.style.paddingLeft = "10px";
}


// let puzzle = document.getElementById("navPuzzle");
// let puzzle_sponso = document.getElementById("navPuzzleSponso");

// puzzle.addEventListener("click", addSelection);
// puzzle_sponso.addEventListener("click", addSelection);

// function addSelection(){
//     console.log("addSelection()");
//     puzzle.style.color = "#f2bb13";
//     puzzle.style.borderBottom = "4px #f2bb13 solid";
//     puzzle.style.padding = "23px 0px 23px 0px";
// }

