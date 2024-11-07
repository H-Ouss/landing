let points = 0;

function ajouterPoints() {
    const bottleCount = parseInt(document.getElementById("bottle-count").value);
    if (bottleCount > 0) {
        const earnedPoints = bottleCount * 5; // 5 points par bouteille
        points += earnedPoints;
        document.getElementById("points-count").innerText = points;
        document.getElementById("earned-points").innerText = earnedPoints;
        ouvrirPopup();
    } else {
        alert("Veuillez entrer un nombre valide de bouteilles.");
    }
}

function ouvrirPopup() {
    document.getElementById("points-popup").classList.remove("hidden");
}

function fermerPopup() {
    document.getElementById("points-popup").classList.add("hidden");
}
