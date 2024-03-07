// Sélectionnez les boutons
var ParametreButton = document.getElementById("ParametreButton");
var CategoriesButton = document.getElementById("CategoriesButton");
var AideButton = document.getElementById("AideButton");
var HomeButton = document.getElementById("HomeButton");
var SombreButton = document.getElementById("SombreButton");
var ClairButton = document.getElementById("ClairButton");
var BugButton = document.getElementById("BugButton");
var NewButton = document.getElementById("NewButton");

document.getElementById('retourBtn').addEventListener('click', function() {
    history.back();
  });


// Ajoutez des écouteurs d'événements pour le clic sur les boutons
ParametreButton.addEventListener("click", function() {
    window.location.href = "parametre.html";
});

CategoriesButton.addEventListener("click", function() {
    window.location.href = "categories.html";
});

AideButton.addEventListener("click", function() {
    window.location.href = "aide.html";
});

HomeButton.addEventListener("click", function() {
    window.location.href = "index.html";
});

SombreButton.addEventListener("click", function() {
    // Stockez l'information sur le thème sélectionné dans le localStorage
    localStorage.setItem('theme', 'sombre');
    // Changement de la feuille de style vers mode sombre
    document.getElementById("stylesheet").href = "style1.css";
});

ClairButton.addEventListener("click", function() {
    // Stockez l'information sur le thème sélectionné dans le localStorage
    localStorage.setItem('theme', 'clair');
    // Changement de la feuille de style vers mode clair
    document.getElementById("stylesheet").href = "style2.css";
});

// Vérifiez si un thème est déjà sélectionné dans le localStorage
var theme = localStorage.getItem('theme');
if(theme === 'sombre') {
    document.getElementById("stylesheet").href = "style1.css";
} else if(theme === 'clair') {
    document.getElementById("stylesheet").href = "style2.css";
}


BugButton.addEventListener("click", function() {
    window.location.href = "aide.html";
});

NewButton.addEventListener("click", function() {
    window.location.href = "contact.html";
});


