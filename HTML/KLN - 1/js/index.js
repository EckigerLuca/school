async function getCat() {
    let catImg = document.getElementById("catImg");
    let catImgSrc = document.getElementById("catImgSrc");

    const response = await fetch('http://aws.random.cat/meow');

    const data = (await response.json()).file;

    catImg.src = data;
    catImgSrc.href = data;
}

async function getDog() {
    let dogImg = document.getElementById("dogImg");
    let dogImgSrc = document.getElementById("dogImgSrc");

    const response = await fetch('https://random.dog/woof.json');

    const data = (await response.json()).url;

    dogImg.src = data;
    dogImgSrc.href = data;
}

async function getDuck() {
    let duckImg = document.getElementById("duckImg");
    let duckImgSrc = document.getElementById("duckImgSrc");

    const response = await fetch('https://random-d.uk/api/random?format=json');

    const data = (await response.json()).url;

    duckImg.src = data;
    duckImgSrc.href = data;
}

window.addEventListener('load', async() => {
    getCat();
    getDog();
    getDuck();
});