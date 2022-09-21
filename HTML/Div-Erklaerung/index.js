function einheitChange() {
    const einheit1 = document.getElementById("einheit1").value;

    const einheit1Span = document.getElementsByClassName("einheit1");

    
    for (let i = 0; i < 3; i++) {
        einheit1Span[i].innerHTML=einheit1;
        
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