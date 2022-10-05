let exchangeRates = {
    "_comment": "1 : 1 bsp: 1EUR : 0.97USD; 1USD : 1.02EUR",
    "eur": {
        "eur": 1,
        "usd": 0.972874,
        "yen": 139.28399
    },
    "usd": {
        "eur": 1.0278828,
        "usd": 1,
        "yen": 143.1815
    },
    "yen": {
        "eur": 0.0071795762,
        "usd": 0.006983683,
        "yen": 1
    }
}

async function getExchangeRates() {
    async function euro() {
        const response = await fetch('https://v6.exchangerate-api.com/v6/9bea4f045cfb400a90cb72d9/latest/EUR');
        const data = await response.json();
        const rates = data.conversion_rates;
        exchangeRates.eur.eur = rates['EUR'];
        exchangeRates.eur.usd = rates['USD'];
        exchangeRates.eur.yen = rates['JPY'];
    }

    async function usd() {
        const response = await fetch('https://v6.exchangerate-api.com/v6/9bea4f045cfb400a90cb72d9/latest/USD');
        const data = await response.json();
        const rates = data.conversion_rates;
        exchangeRates.usd.eur = rates['EUR'];
        exchangeRates.usd.usd = rates['USD'];
        exchangeRates.usd.yen = rates['JPY'];
    }

    async function jpy() {
        const response = await fetch('https://v6.exchangerate-api.com/v6/9bea4f045cfb400a90cb72d9/latest/JPY');
        const data = await response.json();
        const rates = data.conversion_rates;
        exchangeRates.yen.eur = rates['EUR'];
        exchangeRates.yen.usd = rates['USD'];
        exchangeRates.yen.yen = rates['JPY'];
    }

    await euro();
    await usd();
    await jpy();

    const date = new Date();
    let minutes = (date.getMinutes()).toString();
    if (minutes.length == 1) { minutes = '0' + minutes; }

    document.getElementById('exchangeRates').innerHTML = `Wechselkurse vom ${date.getDate()}.${date.getMonth()}.${date.getFullYear()} ${date.getHours()}:${minutes} Uhr`
}