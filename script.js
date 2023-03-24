var currentCharacter = null;
var gameActive = false;
var interval = null;
var intervalTime = 10;
var score = 0;

function hideAll() {
    document.querySelectorAll(".screen").forEach(index => {
        index.hidden = true;
    });
}
window.addEventListener("load", () => {
    hideAll();
    document.querySelector(".welcome").hidden = false;
});

document.querySelector(".startBtn").addEventListener("click", () => {
    hideAll();
    document.querySelector(".game").hidden = false;
    gameActive = true;
    newKey();
});

function newKey() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
    currentCharacter = randomCharacter;
    document.querySelector(".letter").innerHTML = currentCharacter;
    interval = setTimeout(lose, intervalTime * 1000);
    intervalTime = intervalTime - 0.1;
}

document.addEventListener("keypress", (e) => {
    if (gameActive == false) return false;
    if (/[a-z]/.test(e.key)) {
        if (e.key == currentCharacter) {
            clearTimeout(interval);
            newKey();
            score = score + 1;
        } else {
            lose();
        }
    }
});

function lose() {
    hideAll();
    document.querySelector(".lose").hidden = false;
    document.querySelector(".score").innerHTML = score;
    gameActive = false;
}