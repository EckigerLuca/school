function imageChange() {
	let img = document.getElementById("image");

	if (img.src.includes("bild1")) {
		img.src = "./images/bild2.gif";
	} else if (img.src.includes("bild2")) {
		img.src = "./images/bild1.jpg";
	}
}