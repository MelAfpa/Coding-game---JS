// ------------------------- PROGRAMME PRINCIPAL -------------------------
showSuggestions();

// ------------------------- FONCTIONS -------------------------

function showSuggestions(){
    // alert("function ok");
        // Récupération de la balise parent
    let section_suggestion = document.getElementById("allGames");

    // Création des éléments enfants
    let categoryTitle = document.createElement("h1");

    let topGames = document.createElement("div");
    let leftGame = document.createElement("div");

    let addingTxt = document.createElement("div");
    let txtImg = document.createElement("span");
    let hoverTitle = document.createElement("p");
    let xpImg = document.createElement("img");
    let xp = document.createElement("p");
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
    let imgPuzzle = puzzle.get("1").nom;

    // Ajout des id/class
    allGames.setAttribute("id", "allGames");

     categoryTitle.setAttribute("id", "categoryTitle");
     topGames.setAttribute("id", "topGames");
     leftGame.setAttribute("id", "leftGame");

     addingTxt.setAttribute("id", "addingTxt");
     txtImg.setAttribute("id", "txtImg");
     hoverTitle.setAttribute("class", "hoverTitle");
     // Modification de l'images
     xpImg.setAttribute("id", "xpImg");
     xpImg.src = "uploads/xp.png";
     xpImg.alt = "logo xp";
     xp.setAttribute("class", "xp");
     userHover.setAttribute("class", "userHover fa-solid fa-user");
     nbUsers.setAttribute("class", "nbUsers");
    
    // Modification de l'images
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
     categoryTitle.innerHTML = "suggestions";
     titlePuzzle.innerHTML = "Conditions, Boucles, Tableaux";
     hoverTitle.innerHTML = "Temperatures";
     xp.innerHTML = "+50 XP";
     nbUsers.innerHTML = "Terminé par 248 896 CodinGamers";

     allGames.append(categoryTitle);
     allGames.appendChild(topGames);
     topGames.appendChild(leftGame);
     leftGame.appendChild(addingTxt);

     addingTxt.appendChild(txtImg);
     txtImg.appendChild(hoverTitle);
     txtImg.appendChild(xpImg);
     txtImg.appendChild(xp);
     txtImg.appendChild(userHover);
     txtImg.appendChild(nbUsers);
     addingTxt.appendChild(gameImg);
     addingTxt.appendChild(yellowLine);
     yellowLine.appendChild(yellow);
     yellowLine.appendChild(grey);

     leftGame.appendChild(bottomPuzzle);
     bottomPuzzle.appendChild(titlePuzzle);
     bottomPuzzle.appendChild(stars);
     stars.appendChild(colorStar);
     stars.appendChild(colorStar2);
     stars.appendChild(colorStar3);
     stars.appendChild(noColor);

     stars.appendChild(noColor2);


     addingTxt.addEventListener("mouseover", addFilter);

}



function addFilter(){
    let yellowLine = document.getElementById("yellowLine");
    let yellow = document.getElementById("yellow");
    let txtImg = document.getElementById("txtImg");

    txtImg.style.display = "flex";
    txtImg.style.flexDirection = "column";
    txtImg.style.alignItems = "start";
    yellowLine.style.height = "15px";
    yellow.innerHTML = "90% FINI";
    yellow.style.fontSize = "0.8em";
    yellow.style.paddingLeft = "10px";
}

// function addImg(){
//     for
// }