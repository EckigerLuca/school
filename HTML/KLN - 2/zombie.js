import {
	setCustomProperty,
	incrementCustomProperty,
	getCustomProperty,
} from "./updateCustomProperty.js";

const SPEED = 0.05;
const ZOMBIE_INTERVAL_MIN = 500;
const ZOMBIE_INTERVAL_MAX = 2000;
const worldElem = document.querySelector("[data-world]");

let nextZombieTime;
export function setupZombie() {
	nextZombieTime = ZOMBIE_INTERVAL_MIN;
	document.querySelectorAll("[data-zombie]").forEach((zombie) => {
		zombie.remove();
	});
}

export function updateZombie(delta, speedScale) {
	document.querySelectorAll("[data-zombie]").forEach((zombie) => {
		incrementCustomProperty(zombie, "--left", delta * speedScale * SPEED * -1);
		if (getCustomProperty(zombie, "--left") <= -100) {
			zombie.remove();
		}
	});

	if (nextZombieTime <= 0) {
		createZombie();
		nextZombieTime =
			randomNumberBetween(ZOMBIE_INTERVAL_MIN, ZOMBIE_INTERVAL_MAX) /
			speedScale;
	}
	nextZombieTime -= delta;
}

export function getZombieRects() {
	return [...document.querySelectorAll("[data-zombie]")].map((zombie) => {
		return zombie.getBoundingClientRect();
	});
}

function createZombie() {
	const zombie = document.createElement("img");
	zombie.dataset.zombie = true;
	zombie.src = "imgs/zombie.png";
	zombie.classList.add("zombie");
	setCustomProperty(zombie, "--left", 100);
	worldElem.append(zombie);
}

function randomNumberBetween(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
