async function getCat() {
    let catImg = document.getElementById("catImg");
    let catImgSrc = document.getElementById("catImgSrc");

	async function getImg() {
        const response = await fetch('https://safe-crag-02173.herokuapp.com/http://aws.random.cat/meow');
		
        return (await response.json()).file;
    }

	let data = await getImg();

	const videoFormats = ['mp4', 'webm', 'mkv', 'avi', 'mov']

	while (videoFormats.some(sub => String(data).includes(sub))) {
		console.log('vid');
	}

    catImg.src = data;
    catImgSrc.href = data;
}

async function getDog() {
    let dogImg = document.getElementById("dogImg");
    let dogImgSrc = document.getElementById("dogImgSrc");

    async function getImg() {
        const response = await fetch('https://safe-crag-02173.herokuapp.com/https://random.dog/woof.json');
		
        return (await response.json()).url;
    }

	let data = await getImg();

	const videoFormats = ['mp4', 'webm', 'mkv', 'avi', 'mov']

	while (videoFormats.some(sub => String(data).includes(sub))) {
		data = await getImg();
	}

    dogImg.src = data;
    dogImgSrc.href = data;
}

async function getDuck() {
    let duckImg = document.getElementById("duckImg");
    let duckImgSrc = document.getElementById("duckImgSrc");

    async function getImg() {
        const response = await fetch('https://safe-crag-02173.herokuapp.com/https://random-d.uk/api/random?format=json');
		
        return (await response.json()).url;
    }

	let data = await getImg();

	const videoFormats = ['mp4', 'webm', 'mkv', 'avi', 'mov']

	while (videoFormats.some(sub => String(data).includes(sub))) {
		data = await getImg();
	}

    duckImg.src = data;
    duckImgSrc.href = data;
}

async function getFox() {
    let foxImg = document.getElementById("foxImg");
    let foxImgSrc = document.getElementById("foxImgSrc");

    async function getImg() {
        const response = await fetch('https://safe-crag-02173.herokuapp.com/https://randomfox.ca/floof/');
		
        return (await response.json()).image;
    }

	let data = await getImg();

	const videoFormats = ['mp4', 'webm', 'mkv', 'avi', 'mov']

	while (videoFormats.some(sub => String(data).includes(sub))) {
		data = await getImg();
	}

    foxImg.src = data;
    foxImgSrc.href = data;
}

async function getShibe() {
    let shibeImg = document.getElementById("shibeImg");
    let shibeImgSrc = document.getElementById("shibeImgSrc");

    async function getImg() {
        const response = await fetch('https://safe-crag-02173.herokuapp.com/https://shibe.online/api/shibes?httpsUrls=true');
		
        return (await response.json())[0];
    }

	let data = await getImg();

	const videoFormats = ['mp4', 'webm', 'mkv', 'avi', 'mov']

	while (videoFormats.some(sub => String(data).includes(sub))) {
		data = await getImg();
	}

    shibeImg.src = data;
    shibeImgSrc.href = data;
}

async function getRaccoon() {
    let raccoonImg = document.getElementById("raccoonImg");
    let raccoonImgSrc = document.getElementById("raccoonImgSrc");

    async function getImg() {
        const response = await fetch('https://safe-crag-02173.herokuapp.com/https://api.eckigerluca.com/raccoon');
		
        return (await response.json()).image;
    }

	let data = await getImg();

	const videoFormats = ['mp4', 'webm', 'mkv', 'avi', 'mov']

	while (videoFormats.some(sub => String(data).includes(sub))) {
		data = await getImg();
	}

    raccoonImg.src = data;
    raccoonImgSrc.href = data;
}

window.addEventListener('load', async() => {
    getCat();
    getDog();
    getDuck();
	getFox();
	getShibe();
	getRaccoon();
});