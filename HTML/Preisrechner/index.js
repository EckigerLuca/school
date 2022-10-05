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

function currencyCalculator(oldCurrency, newCurrency, oldPrice) {
    let newPrice;

    // euro
    if (oldCurrency == "&#8364;") {
        switch (newCurrency) {
            // euro
            case "&#8364;": {
                newPrice = oldPrice;
                break;
            }

            // dollar
            case "&#36;": {
                newPrice = (oldPrice * exchangeRates.eur.usd).toFixed(2);
                break;
            }

            // yen
            case "&#165;": {
                newPrice = (oldPrice * exchangeRates.eur.yen).toFixed(2);
                break;
            }
        }
    }

    // dollar
    if (oldCurrency == "&#36;") {
        switch (newCurrency) {
            // euro
            case "&#8364;": {
                newPrice = (oldPrice * exchangeRates.usd.eur).toFixed(2);
                break;
            }

            // dollar
            case "&#36;": {
                newPrice = oldPrice;
                break;
            }

            // yen
            case "&#165;": {
                newPrice = (oldPrice * exchangeRates.usd.yen).toFixed(2);
                break;
            }
        }
    }

    // yen
    if (oldCurrency == "&#165;") {
        switch (newCurrency) {
            // euro
            case "&#8364;": {
                newPrice = (oldPrice * exchangeRates.yen.eur).toFixed(2);
                break;
            }

            // dollar
            case "&#36;": {
                newPrice = (oldPrice * exchangeRates.yen.usd).toFixed(2);
                break;
            }

            // yen
            case "&#165;": {
                newPrice = oldPrice;
                break;
            }
        }
    }
    return newPrice;
}

function currencyChange() {
    const currencys = document.getElementsByName("currency");
    let currency = document.getElementsByClassName("currency");

    let oldCurrency;
    let newCurrency;

    for (i = 0; i < 3; i++) {
        if (currencys[i].checked) {
            for (j = 0; j < 3; j++) {
                oldCurrency = currency[j].innerHTML;
                newCurrency = currencys[i].value;
                currency[j].innerHTML = currencys[i].value;
            }
        }
    }

    if (oldCurrency == "€") { oldCurrency = "&#8364;" }
    if (oldCurrency == "$") { oldCurrency = "&#36;" }
    if (oldCurrency == "¥") { oldCurrency = "&#165;" }

    if (newCurrency == "€") { newCurrency = "&#8364;" }
    if (newCurrency == "$") { newCurrency = "&#36;" }
    if (newCurrency == "¥") { newCurrency = "&#165;" }

    exchange(oldCurrency ? oldCurrency : "&#8364;", newCurrency);

}

function exchange(oldCurrency, newCurrency) {
    let customPrice = document.getElementById("menge2").value;

    let newPrice = currencyCalculator(oldCurrency, newCurrency, customPrice)

    document.getElementById("menge2").value = newPrice;

    basispreis();
    mehrfachpreis();
}

window.addEventListener('load', (event) => {
    getExchangeRates();
    einheitChange();
    basispreis();
    mehrfachpreis()
    currencyChange();
});