import {
	incrementCustomProperty,
	setCustomProperty,
	getCustomProperty,
} from "./updateCustomProperty.js";

const villagerElem = document.querySelector("[data-villager]");
const JUMP_SPEED = 0.41;
const GRAVITY = 0.0019;
const VILLAGER_FRAME_COUNT = 2;
const FRAME_TIME = 100;

let isJumping;
let villagerFrame;
let currentFrameTime;
let yVelocity;
export function setupVillager() {
	isJumping = false;
	villagerFrame = 0;
	currentFrameTime = 0;
	yVelocity = 0;
	setCustomProperty(villagerElem, "--bottom", 13);
	document.removeEventListener("keydown", onJump);
	document.addEventListener("keydown", onJump);
}

export function updateVillager(delta, speedScale) {
	handleRun(delta, speedScale);
	handleJump(delta);
}

export function getVillagerRect() {
	return villagerElem.getBoundingClientRect();
}

export function setVillagerLose() {
	villagerElem.src = "imgs/villager-dead.png";
}

function handleRun(delta, speedScale) {
	if (isJumping) {
		villagerElem.src = `imgs/villager.png`;
		return;
	}

	if (currentFrameTime >= FRAME_TIME) {
		villagerFrame = (villagerFrame + 1) % VILLAGER_FRAME_COUNT;
		villagerElem.src = `imgs/villager-run-${villagerFrame}.png`;
		currentFrameTime -= FRAME_TIME;
	}
	currentFrameTime += delta * speedScale;
}

function handleJump(delta) {
	if (!isJumping) return;

	incrementCustomProperty(villagerElem, "--bottom", yVelocity * delta);

	if (getCustomProperty(villagerElem, "--bottom") <= 13) {
		setCustomProperty(villagerElem, "--bottom", 13);
		isJumping = false;
	}

	yVelocity -= GRAVITY * delta;
}

function onJump(e) {
	if ((e.code !== "Space" && e.code !== "ArrowUp") || isJumping) return;

	yVelocity = JUMP_SPEED;
	isJumping = true;
}
