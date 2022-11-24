window.addEventListener('load', async() => {
    // tierbilder
    getCat();
    getDog();
    getDuck();
	getFox();
	getShibe();
	getRaccoon();

    //dreisatz
    getExchangeRates();
    einheitChange();
    basispreis();
    mehrfachpreis()
    currencyChange();

	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
	const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
});