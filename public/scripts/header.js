let searchButton = document.getElementById("search-button");
let buttonsDiv = document.getElementById("buttons-div");
let disneyLogo = document.getElementById("disney-logo");
let searchArea = document.getElementById("search-area");

searchButton.addEventListener("click", ()=>{
    buttonsDiv.style.display = "none";
    disneyLogo.style.display = "none";
    searchArea.style.display = "flex";
})