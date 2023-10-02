// ------------------------- PROGRAMME PRINCIPAL -------------------------
showSuggestions();
// easyPuzzle();

// ------------------------- FONCTIONS -------------------------

function createPuzzle(identifiant){
        // Récupération de la balise parent
    let allGames = document.getElementById("allGames");
    let topGames = document.getElementById("topGames");

    // Création des éléments enfants
    // let categoryTitle = document.createElement("h1");

    let leftGame = document.createElement("div");

    let addingTxt = document.createElement("div");
    let txtImg = document.createElement("span");
    let hoverTitle = document.createElement("p");
    let divXp = document.createElement("div");
    let xpImg = document.createElement("img");
    let xp = document.createElement("p");
    
    let divUsers = document.createElement("div");
    let userHover = document.createElement("i");
    let nbUsers = document.createElement("p");

    let gameImg = document.createElement("img");

    let yellowLine = document.createElement("div");
    let yellow = document.createElement("div");
    let grey = document.createElement("div");

    let bottomPuzzle = document.createElement("div");
    let titlePuzzle = document.createElement("p");
    let stars = document.createElement("span");
    let colorStar = document.createElement("i");
    let colorStar2 = document.createElement("i");
    let colorStar3 = document.createElement("i");
    let noColor = document.createElement("i");
    let noColor2 = document.createElement("i");
    let imgPuzzle = document.createElement("img");

    // let idPuzzle = puzzle.get(identifiant);

    // Ajout des id/class
    allGames.setAttribute("id", "allGames");

    //  categoryTitle.setAttribute("id", "categoryTitle");
    //  topGames.setAttribute("id", "topGames");
     leftGame.setAttribute("id", "leftGame");

     addingTxt.setAttribute("id", "addingTxt");
     txtImg.setAttribute("id", "txtImg");
     hoverTitle.setAttribute("class", "hoverTitle");
     divXp.setAttribute("class", "divXp");
     divUsers.setAttribute("class", "divUsers");

     // Modification de l'images
     xpImg.setAttribute("id", "xpImg");
     xpImg.src = "uploads/xp.png";
     xpImg.alt = "logo xp";
     xp.setAttribute("class", "xp");
     userHover.setAttribute("class", "userHover fa-solid fa-user");
     nbUsers.setAttribute("class", "nbUsers");
    
    // Modification de l'images
     imgPuzzle = puzzle.get(identifiant).nom;
     gameImg.setAttribute("id", "gameImg");
     gameImg.src = "uploads/"+ imgPuzzle +".png";
     console.log(imgPuzzle);
     gameImg.alt = "image du premier puzzle";

     yellowLine.setAttribute("id", "yellowLine");
     yellow.setAttribute("id", "yellow");
     grey.setAttribute("id", "grey");

     bottomPuzzle.setAttribute("id", "bottomPuzzle");
     titlePuzzle.setAttribute("id", "titlePuzzle");
     stars.setAttribute("id", "stars");
     colorStar.setAttribute("class", "fa-solid fa-star fa-xs");
     colorStar.setAttribute("id", "colorStar");
     colorStar2.setAttribute("class", "fa-solid fa-star fa-xs");
     colorStar2.setAttribute("id", "colorStar");
     colorStar3.setAttribute("class", "fa-solid fa-star fa-xs");
     colorStar3.setAttribute("id", "colorStar");
     noColor.setAttribute("class", "fa-solid fa-star fa-xs");
     noColor.setAttribute("id", "noColor");
     noColor2.setAttribute("class", "fa-solid fa-star fa-xs");
     noColor2.setAttribute("id", "noColor");


     // Ajout des titres
     categoryTitle.innerHTML = puzzle.get(identifiant).category;
     titlePuzzle.innerHTML = puzzle.get(identifiant).titre;
     hoverTitle.innerHTML = puzzle.get(identifiant).nom;
     xp.innerHTML = puzzle.get(identifiant).xp + " XP";
     nbUsers.innerHTML = "Terminé par "+ puzzle.get(identifiant).nbUsers +" CodinGamers";

     allGames.appendChild(categoryTitle);
     allGames.appendChild(topGames);
     topGames.appendChild(leftGame);
     leftGame.appendChild(addingTxt);

     addingTxt.appendChild(txtImg);
     txtImg.appendChild(hoverTitle);
     txtImg.append(divXp);
     divXp.appendChild(xpImg);
     divXp.appendChild(xp);
     txtImg.appendChild(divUsers)
     divUsers.appendChild(userHover);
     divUsers.appendChild(nbUsers);
     addingTxt.appendChild(gameImg);
     addingTxt.appendChild(yellowLine);
     yellowLine.appendChild(yellow);
     yellowLine.appendChild(grey);

     leftGame.appendChild(bottomPuzzle);
     bottomPuzzle.appendChild(titlePuzzle);
     bottomPuzzle.appendChild(stars);
     stars.appendChild(colorStar);
    //  stars.appendChild(colorStar);
    //  stars.appendChild(colorStar);
    //  stars.appendChild(colorStar);
    //  stars.appendChild(colorStar);

     stars.appendChild(colorStar2);
     stars.appendChild(colorStar3);
     stars.appendChild(noColor);

     stars.appendChild(noColor2);

     if(puzzle.get(identifiant).progress === "0"){
        console.log("if");
        yellow.style.width = "0%";
        grey.style.width = "100%";
     } 

    //  if(puzzle.get(identifiant).stars === "3"){
    //     console.log("if");
    //     colorStar.style.color = "white";
    //  }

    //  for(let i = 0; n = puzzle.get(identifiant).stars; i++){
    //     colorStar.style.color = "#ffd200";
    //  }


     addingTxt.addEventListener("mouseover", addFilter);
    //  addingTxt.addEventListener("mouseout", delete addFilter);

}

function showSuggestions(){
    console.log('showSuggestions');

    for (var [identPuzzle, idPuzzle] of puzzle.entries()) {
        if (idPuzzle.category === "suggestions") {
            createPuzzle(identPuzzle);
        }
    }

}

// function easyPuzzle(){
//     let easy = document.getElementById("easy");
//     let div = document.createElement("div");
//     let categoryTitle = document.createElement("h1");
//     let categorySubtitle = document.createElement("p");
//     let percent = document.createElement("p");

//     easy.setAttribute("id", "easy");
//     categoryTitle.setAttribute("id", "categoryTitle");
//     categorySubtitle.setAttribute("id", "categorySubtitle");
//     percent.setAttribute("id", "percent");

//     easy.appendChild(div);
//     div.appendChild(categoryTitle);
//     div.appendChild(categorySubtitle);
//     div.appendChild(percent);


// }


function addFilter(){
    let yellowLine = document.getElementById("yellowLine");
    let yellow = document.getElementById("yellow");
    let txtImg = document.getElementById("txtImg");

    txtImg.style.display = "block";
    yellowLine.style.height = "15px";
    // yellow.innerHTML = puzzle.get(identifiant).progress + "% FINI";
    yellow.innerHTML = "90% FINI";
    yellow.style.fontSize = "0.8em";
    yellow.style.paddingLeft = "10px";
}

