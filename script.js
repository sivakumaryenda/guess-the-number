let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = "?";
let score = 20;
let highScore = 0;

document.querySelector(".click").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (guess >= 1 && guess <= 20) {
    if (!guess) {
      document.querySelector(".message").textContent = "⛔ No Number";
    } else if (guess === secretNumber) {
      document.querySelector(".message").textContent =
        "🎉 Hurray! Correct Number";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".number").style.width = "100px";
      document.querySelector("body").style.backgroundColor = "#60b347";

      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    } else if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector(".message").textContent = "🛬 Too Low";
        score--;
        document.querySelector(".score").textContent = score;
      
      } else {
        document.querySelector(".message").textContent =
          "Better Luck Next Time 💥";
        document.querySelector(".score").textContent = 0;
      }
    } else if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector(".message").textContent = "✈️ Too High";
        score--;
        document.querySelector(".score").textContent = score;
       
      } else {
        document.querySelector(".message").textContent =
          "Better Luck Next Time 💥";
        document.querySelector(".score").textContent = 0;
      }
    }
  } else {
    document.querySelector(".message").textContent = "Choose between 1 to 20";
  }
});
document.querySelector(".retry").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = "20";
  document.querySelector("body").style.backgroundColor = "rgb(98, 94, 212)";
  document.querySelector(".message").textContent = "Start the Game!";
  document.querySelector(".guess").value = "";
});
