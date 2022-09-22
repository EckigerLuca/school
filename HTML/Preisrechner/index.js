function einheitChange() {
    const einheit1 = document.getElementById("einheit1").value;

    const einheit1Span = document.getElementsByClassName("einheit1");

    
    if (einheit1 === "Apfel") {
        einheit1Span[0].innerHTML = "Apfel";
        einheit1Span[1].innerHTML = "Äpfel";
        einheit1Span[2].innerHTML = "Äpfel";
    }
    if (einheit1 === "Birne") {
        einheit1Span[0].innerHTML = "Birne";
        einheit1Span[1].innerHTML = "Birnen";
        einheit1Span[2].innerHTML = "Birnen";
    }
    if (einheit1 === "Kartoffel") {
        einheit1Span[0].innerHTML = "kg. Kartoffeln";
        einheit1Span[1].innerHTML = "kg. Kartoffeln";
        einheit1Span[2].innerHTML = "kg. Kartoffeln";
    }
    if (einheit1 === "Tomate") {
        einheit1Span[0].innerHTML = "kg. Tomate";
        einheit1Span[1].innerHTML = "kg. Tomaten";
        einheit1Span[2].innerHTML = "kg. Tomaten";
    }
}

function basispreis() {
    const menge1 = document.getElementById("menge1").value;
    const menge2 = document.getElementById("menge2").value;

    let basismenge = document.getElementById("basismenge");

    basismenge.innerHTML = (menge2 / menge1).toFixed(2);
}

function mehrfachpreis() {
    const basispreis = document.getElementById("basismenge").innerHTML;
    const menge3 = document.getElementById("menge3").value;

    let menge4 = document.getElementById("menge4");

    let menge5 = document.getElementById("menge5");

    menge4.innerHTML = menge3;

    let customPreis = menge3 * basispreis;

    menge5.innerHTML = customPreis;
}

window.addEventListener('load', (event) => {
    einheitChange();
    basispreis();
    mehrfachpreis()
});