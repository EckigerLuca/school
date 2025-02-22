import { updateGround, setupGround } from "./ground.js";
import { updateVillager, setupVillager, getVillagerRect, setVillagerLose } from "./villager.js";
import { updateZombie, setupZombie, getZombieRects } from "./zombie.js";

const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 30;
const SPEED_SCALE_INCREASE = 0.00001;

const worldElem = document.querySelector("[data-world]");
const scoreElem = document.querySelector("[data-score]");
const startScreenElem = document.querySelector("[data-start-screen]");
const gameOverScreenElem = document.querySelector("[data-game-over]");

setPixelToWorldScale();
window.addEventListener("resize", setPixelToWorldScale);
document.addEventListener("keydown", handleStart, { once: true });

let lastTime;
let speedScale;
let score;
function update(time) {
	if (lastTime == null) {
		lastTime = time;
		window.requestAnimationFrame(update);
		return;
	}
	const delta = time - lastTime;

	updateGround(delta, speedScale);
	updateVillager(delta, speedScale);
	updateZombie(delta, speedScale);
	updateSpeedScale(delta);
	updateScore(delta);
	if (checkLose()) return handleLose();

	lastTime = time;
	window.requestAnimationFrame(update);
}

function checkLose() {
	const villagerRect = getVillagerRect();
	return getZombieRects().some((rect) => isCollision(rect, villagerRect));
}

function isCollision(rect1, rect2) {
	return (
		rect1.left < rect2.right &&
		rect1.top < rect2.bottom &&
		rect1.right > rect2.left &&
		rect1.bottom > rect2.top
	);
}

function updateSpeedScale(delta) {
	speedScale += delta * SPEED_SCALE_INCREASE;
}

function updateScore(delta) {
	score += delta * 0.01;
	scoreElem.textContent = Math.floor(score);
}

function handleStart() {
	lastTime = null;
	speedScale = 1;
	score = 0;
	setupGround();
	setupVillager();
	setupZombie();
	startScreenElem.classList.add("hide");
    gameOverScreenElem.classList.add("hide");
	window.requestAnimationFrame(update);
}

function handleLose() {
	setVillagerLose();
	setTimeout(() => {
		document.addEventListener("keydown", handleStart, { once: true });
		gameOverScreenElem.classList.remove("hide");
	}, 100);
}

function setPixelToWorldScale() {
	let worldToPixelScale;
	if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
		worldToPixelScale = window.innerWidth / WORLD_WIDTH;
	} else {
		worldToPixelScale = window.innerHeight / WORLD_HEIGHT;
	}

	worldElem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`;
	worldElem.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`;
}
