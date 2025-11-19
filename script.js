const questions = [
  {
    question: "Qual vitamina é essencial para a saúde dos olhos?",
    options: ["Vitamina C", "Vitamina A", "Vitamina D", "Vitamina K"],
    correct: 1,
  },
  {
    question: "Qual destes alimentos é uma fonte rica de proteínas?",
    options: ["Maçã", "Arroz", "Ovo", "Azeite"],
    correct: 2,
  },
  {
    question: "O cálcio é fundamental para fortalecer:",
    options: ["Músculos", "Ossos e Dentes", "Pele", "Cabelo"],
    correct: 1,
  },
  {
    question: "Qual nutriente é a principal fonte de energia do corpo?",
    options: ["Proteínas", "Gorduras", "Carboidratos", "Vitaminas"],
    correct: 2,
  },
  {
    question: "Qual fruta é conhecida por ter muita Vitamina C?",
    options: ["Banana", "Laranja", "Abacate", "Uva"],
    correct: 1,
  },
  {
    question: "Beber água ajuda a:",
    options: [
      "Engordar",
      "Hidratar o corpo",
      "Aumentar o colesterol",
      "Diminuir a altura",
    ],
    correct: 1,
  },
  {
    question: "Qual destes é considerado uma 'gordura boa'?",
    options: ["Batata Frita", "Abacate", "Bacon", "Refrigerante"],
    correct: 1,
  },
  {
    question: "O ferro é importante para prevenir:",
    options: ["Anemia", "Gripe", "Cáries", "Dor de cabeça"],
    correct: 0,
  },
  {
    question: "Qual alimento é rico em fibras?",
    options: ["Aveia", "Leite", "Queijo", "Carne"],
    correct: 0,
  },
  {
    question: "O excesso de açúcar pode causar:",
    options: [
      "Músculos fortes",
      "Diabetes e cáries",
      "Melhora na visão",
      "Crescimento rápido",
    ],
    correct: 1,
  },
];

const difficultySettings = {
  easy: {
    lives: 5,
    winCondition: 3,
    duration: 20,
  },
  normal: {
    lives: 3,
    winCondition: 4,
    duration: 15,
  },
  hard: {
    lives: 2,
    winCondition: 5,
    duration: 10,
  },
};

let currentState = {
  score: 0,
  lives: difficultySettings.normal.lives,
  winCondition: difficultySettings.normal.winCondition,
  gameDuration: difficultySettings.normal.duration,
  currentQuestionIndex: 0,
  timer: difficultySettings.normal.duration,
  timerInterval: null,
  isAnswered: false,
  correctAnswers: 0,
};

// DOM Elements
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const gameOverScreen = document.getElementById("game-over-screen");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

const scoreEl = document.getElementById("score");
const livesContainer = document.querySelector(".lives-container");
const timerBar = document.getElementById("timer-bar");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

const finalScoreEl = document.getElementById("final-score-value");
const finalMessageEl = document.getElementById("final-message");
const resultIconEl = document.getElementById("result-icon");

// Start Screen Info
const livesInfo = document.getElementById("lives-info");
const durationInfo = document.getElementById("duration-info");
const objectiveInfo = document.getElementById("objective-info");
const difficultyRadios = document.querySelectorAll('input[name="difficulty"]');

// Event Listeners
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);
difficultyRadios.forEach((radio) =>
  radio.addEventListener("change", updateStartScreenInfo),
);

// Initial Setup
updateStartScreenInfo();

function updateStartScreenInfo() {
  const selectedDifficulty = document.querySelector(
    'input[name="difficulty"]:checked',
  ).value;
  const settings = difficultySettings[selectedDifficulty];

  livesInfo.textContent = `${settings.lives} Vidas`;
  durationInfo.textContent = `${settings.duration}s por questão`;
  objectiveInfo.textContent = `Acerte ${settings.winCondition}`;
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

function startGame() {
  const selectedDifficulty = document.querySelector(
    'input[name="difficulty"]:checked',
  ).value;
  const settings = difficultySettings[selectedDifficulty];

  // Reset State
  currentState = {
    score: 0,
    lives: settings.lives,
    winCondition: settings.winCondition,
    gameDuration: settings.duration,
    currentQuestionIndex: 0,
    timer: settings.duration,
    timerInterval: null,
    isAnswered: false,
    correctAnswers: 0,
  };

  shuffle(questions);

  // Reset UI
  updateLivesUI();
  scoreEl.textContent = "0";

  // Switch Screens
  startScreen.classList.remove("active");
  startScreen.classList.add("hidden");
  gameOverScreen.classList.remove("active");
  gameOverScreen.classList.add("hidden");

  gameScreen.classList.remove("hidden");
  setTimeout(() => {
    gameScreen.classList.add("active");
  }, 50);

  loadQuestion();
}

function loadQuestion() {
  if (currentState.currentQuestionIndex >= questions.length) {
    endGame(true); // Won by finishing all questions
    return;
  }

  const q = questions[currentState.currentQuestionIndex];
  questionText.textContent = q.question;

  optionsContainer.innerHTML = "";
  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(index, btn);
    optionsContainer.appendChild(btn);
  });

  currentState.isAnswered = false;
  startTimer();
}

function startTimer() {
  clearInterval(currentState.timerInterval);
  currentState.timer = currentState.gameDuration;
  updateTimerUI();

  currentState.timerInterval = setInterval(() => {
    currentState.timer -= 0.1;
    updateTimerUI();

    if (currentState.timer <= 0) {
      clearInterval(currentState.timerInterval);
      handleTimeOut();
    }
  }, 100);
}

function updateTimerUI() {
  const percentage = (currentState.timer / currentState.gameDuration) * 100;
  timerBar.style.width = `${percentage}%`;

  if (percentage < 30) {
    timerBar.classList.add("warning");
  } else {
    timerBar.classList.remove("warning");
  }
}

function checkAnswer(selectedIndex, btn) {
  if (currentState.isAnswered) return;
  currentState.isAnswered = true;
  clearInterval(currentState.timerInterval);

  const currentQ = questions[currentState.currentQuestionIndex];
  const isCorrect = selectedIndex === currentQ.correct;

  if (isCorrect) {
    btn.classList.add("correct");
    currentState.score += 100 + Math.ceil(currentState.timer * 10);
    scoreEl.textContent = currentState.score;
    currentState.correctAnswers++;
    setTimeout(nextQuestion, 1000);
  } else {
    btn.classList.add("wrong");
    const options = optionsContainer.children;
    options[currentQ.correct].classList.add("correct");
    loseLife();
  }
}

function handleTimeOut() {
  currentState.isAnswered = true;
  const currentQ = questions[currentState.currentQuestionIndex];
  const options = optionsContainer.children;
  options[currentQ.correct].classList.add("correct");
  loseLife();
}

function loseLife() {
  currentState.lives--;
  updateLivesUI();

  const gameContainer = document.querySelector(".app-container");
  gameContainer.classList.add("shake");
  setTimeout(() => gameContainer.classList.remove("shake"), 500);

  if (currentState.lives <= 0) {
    setTimeout(() => endGame(false), 1500);
  } else {
    setTimeout(nextQuestion, 1500);
  }
}

function updateLivesUI() {
  livesContainer.innerHTML = "";
  for (let i = 0; i < currentState.lives; i++) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = "❤️";
    livesContainer.appendChild(heart);
  }
  for (
    let i = 0;
    i <
    difficultySettings[
      document.querySelector('input[name="difficulty"]:checked').value
    ].lives -
      currentState.lives;
    i++
  ) {
    const heart = document.createElement("span");
    heart.className = "heart lost";
    heart.textContent = "❤️";
    livesContainer.appendChild(heart);
  }
}

function nextQuestion() {
  if (currentState.correctAnswers >= currentState.winCondition) {
    endGame(true); // Won by reaching the objective
    return;
  }
  currentState.currentQuestionIndex++;
  loadQuestion();
}

function endGame(completed) {
  gameScreen.classList.remove("active");
  gameScreen.classList.add("hidden");

  gameOverScreen.classList.remove("hidden");
  setTimeout(() => {
    gameOverScreen.classList.add("active");
  }, 50);

  finalScoreEl.textContent = currentState.score;

  if (completed) {
    resultIconEl.textContent = "🏆";
    document.getElementById("game-over-title").textContent = "Parabéns!";
    if (currentState.correctAnswers >= currentState.winCondition) {
      finalMessageEl.textContent = `Você acertou ${currentState.winCondition} questões e venceu o quiz!`;
    } else {
      finalMessageEl.textContent = "Você completou o quiz de nutrição!";
    }
  } else {
    resultIconEl.textContent = "🍎";
    document.getElementById("game-over-title").textContent = "Fim de Jogo";
    finalMessageEl.textContent =
      "Não desista! Tente novamente para aprender mais.";
  }
}
