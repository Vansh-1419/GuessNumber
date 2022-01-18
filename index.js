"use script";
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 3;
let highscore = 0;
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = `⛔️No Number`;
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = `Congartulations!🎉`;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".highscore").textContent = score * 10;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = `📈Too High`;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(
        ".message"
      ).textContent = `🤬You Lost.. the Secret Number was ${secretNumber}`;
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff1100a1";
    }
  } else if (secretNumber > guess) {
    if (score > 1) {
      document.querySelector(".message").textContent = `📉Too low`;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(
        ".message"
      ).textContent = `🤬You Lost.. the Secret Number was ${secretNumber}`;
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff1100a1";
    }
  }
});
document.querySelector(".again").addEventListener("click", () => {
  location.reload();
});
