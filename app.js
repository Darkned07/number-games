const againBtn = document.getElementById("again-btn");
const showAnswer = document.getElementById("show-answer");
const guessNumberInput = document.getElementById("guess-number");
const checkBtn = document.getElementById("check-btn");
const showStatus = document.getElementById("show-status");
const showTotal = document.getElementById("show-total");
const showRecord = document.getElementById("show-record");

showTotal.textContent = 20;
showRecord.textContent = 0;

const randomNumber = Math.trunc(Math.random() * 20);

checkBtn.addEventListener("click", (e) => {
  guessNumberInput.textContent = "";
  const userNumber = guessNumberInput.value;
  if (userNumber > randomNumber) {
    showStatus.textContent = "To Big";
    showAnswer.textContent = "?";
    document.body.classList.remove("bg-success");
    showTotal.textContent -= 1;
    showRecord.textContent = 0;
  } else if (userNumber < randomNumber) {
    showStatus.textContent = "To Lower";
    showAnswer.textContent = "?";
    document.body.classList.remove("bg-success");
    showTotal.textContent -= 1;
    showRecord.textContent = 0;
  } else {
    showStatus.textContent = "You win";
    showAnswer.textContent = randomNumber;
    document.body.classList.add("bg-success");
    showRecord.textContent = showTotal.textContent;
    showTotal.textContent = 0;
  }

  if (userNumber < 0) {
    showStatus.textContent = "siz 0dan kichkina son kiritdingiz";
  } else if (userNumber > 20) {
    showStatus.textContent = "siz 20dan katta son kiritdingiz";
  }
});

againBtn.addEventListener("click", (e) => {
  showTotal.textContent = 20;
  showRecord.textContent = 0;
  showStatus.textContent = "start game";
  document.body.classList.remove("bg-success");
  showAnswer.textContent = "?";
});
