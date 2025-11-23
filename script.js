const questions = [
  {
    question: "Qual vitamina é essencial para a absorção de cálcio?",
    options: ["Vitamina A", "Vitamina D", "Vitamina E", "Vitamina K"],
    correct: 1
  },
  {
    question: "A deficiência de ferro pode causar qual condição?",
    options: ["Hipertensão", "Anemia", "Osteoporose", "Diabetes"],
    correct: 1
  },
  {
    question: "Qual mineral é fundamental para a função da tireoide?",
    options: ["Zinco", "Selênio", "Iodo", "Cálcio"],
    correct: 2
  },
  {
    question: "A vitamina C atua principalmente como:",
    options: ["Antioxidante", "Analgésico", "Hormônio", "Enzima"],
    correct: 0
  },
  {
    question: "Qual mineral ajuda na contração muscular?",
    options: ["Magnésio", "Ferro", "Sódio", "Iodo"],
    correct: 2
  },
  {
    question: "A deficiência de vitamina B12 pode causar:",
    options: ["Queda de cabelo", "Dormência e fadiga", "Aumento de peso", "Desidratação"],
    correct: 1
  },
  {
    question: "Qual vitamina é produzida na pele pela exposição ao sol?",
    options: ["Vitamina D", "Vitamina K", "Vitamina B6", "Vitamina C"],
    correct: 0
  },
  {
    question: "O potássio é importante para:",
    options: ["Coagulação do sangue", "Equilíbrio dos fluidos e função muscular", "Produção de hormônios", "Visão"],
    correct: 1
  },
  {
    question: "Qual vitamina é essencial para a coagulação sanguínea?",
    options: ["Vitamina K", "Vitamina A", "Vitamina C", "Vitamina B1"],
    correct: 0
  },
  {
    question: "O cálcio é importante principalmente para:",
    options: ["Visão", "Ossos e dentes", "Sistema imune", "Digestão"],
    correct: 1
  },
  {
    question: "Qual mineral é necessário para o transporte de oxigênio no sangue?",
    options: ["Zinco", "Ferro", "Cobre", "Selênio"],
    correct: 1
  },
  {
    question: "A falta de vitamina C pode causar:",
    options: ["Raquitismo", "Escorbuto", "Anemia", "Diabetes"],
    correct: 1
  },
  {
    question: "Qual vitamina está diretamente ligada à saúde da pele?",
    options: ["Vitamina E", "Vitamina B12", "Vitamina K", "Vitamina D"],
    correct: 0
  },
  {
    question: "O magnésio participa principalmente de:",
    options: ["Contração muscular", "Crescimento dos cabelos", "Cicatrização de feridas", "Metabolismo energético"],
    correct: 3
  },
  {
    question: "O zinco está envolvido em:",
    options: ["Visão noturna", "Cicatrização e imunidade", "Formação óssea", "Coagulação"],
    correct: 1
  },
  {
    question: "Qual vitamina é essencial para gestantes devido ao risco de má formação fetal?",
    options: ["Vitamina C", "Vitamina B9 (ácido fólico)", "Vitamina K", "Vitamina E"],
    correct: 1
  },
  {
    question: "O excesso de sódio está relacionado a:",
    options: ["Anemia", "Hipertensão", "Cegueira", "Diabetes"],
    correct: 1
  },
  {
    question: "O selênio atua principalmente como:",
    options: ["Fonte de energia", "Antioxidante", "Coagulante", "Estimulante de apetite"],
    correct: 1
  },
  {
    question: "Qual vitamina está diretamente ligada à visão?",
    options: ["Vitamina A", "Vitamina B1", "Vitamina D", "Vitamina K"],
    correct: 0
  },
  {
    question: "A vitamina B1 (tiamina) é importante para:",
    options: ["Metabolismo energético", "Cicatrização", "Saúde dos olhos", "Coagulação"],
    correct: 0
  },
  {
    question: "Qual mineral é fundamental para o funcionamento dos músculos e nervos?",
    options: ["Cálcio", "Magnésio", "Selênio", "Ferro"],
    correct: 1
  },
  {
    question: "A deficiência de vitamina D pode causar:",
    options: ["Raquitismo", "Cáries", "Gripe", "Desidratação"],
    correct: 0
  },
  {
    question: "Qual alimento é uma boa fonte de vitamina C?",
    options: ["Cenoura", "Tomate", "Laranja", "Ovo"],
    correct: 2
  },
  {
    question: "O cobre participa da formação de:",
    options: ["Insulina", "Hemoglobina", "Colágeno", "Ácidos graxos"],
    correct: 1
  },
  {
    question: "A vitamina E tem função principalmente:",
    options: ["Antioxidante", "Digestiva", "Coagulante", "Imunológica"],
    correct: 0
  },
  {
    question: "O manganês atua em:",
    options: ["Crescimento ósseo", "Metabolismo de carboidratos", "Produção de leite materno", "Digestão de gorduras"],
    correct: 0
  },
  {
    question: "O fósforo é essencial para a produção de:",
    options: ["Vitamina C", "ATP (energia)", "Hormônios", "Proteínas"],
    correct: 1
  },
  {
    question: "A carência de vitamina K pode causar:",
    options: ["Sangramentos", "Queda de cabelo", "Perda de apetite", "Insônia"],
    correct: 0
  },
  {
    question: "Qual vitamina do complexo B ajuda no humor e no cérebro?",
    options: ["B6", "B7", "B12", "B1"],
    correct: 0
  },
  {
    question: "O iodo é essencial para a produção de:",
    options: ["Hormônios tireoidianos", "Insulina", "Vitamina K", "Hemoglobina"],
    correct: 0
  },
  {
    question: "A biotina (B7) está ligada à saúde de:",
    options: ["Coração", "Cabelo e unhas", "Pulmões", "Intestino"],
    correct: 1
  },
  {
    question: "O flúor ajuda a prevenir:",
    options: ["Cáries", "Anemia", "Insônia", "Gripe"],
    correct: 0
  },
  {
    question: "Em qual vitamina a deficiência pode causar anemia megaloblástica?",
    options: ["Vitamina K", "Vitamina B12", "Vitamina E", "Vitamina D"],
    correct: 1
  },
  {
    question: "O excesso de ferro pode levar a:",
    options: ["Hipertensão", "Hemocromatose", "Hipotensão", "Obesidade"],
    correct: 1
  },
  {
    question: "Qual vitamina é lipossolúvel?",
    options: ["Vitamina C", "Vitamina B9", "Vitamina E", "Vitamina B1"],
    correct: 2
  },
  {
    question: "Qual mineral ajuda na formação de colágeno?",
    options: ["Zinco", "Cálcio", "Cobre", "Sódio"],
    correct: 2
  },
  {
    question: "A vitamina B3 (niacina) é importante para:",
    options: ["Metabolismo energético", "Coagulação", "Saúde ocular", "Crescimento ósseo"],
    correct: 0
  },
  {
    question: "O potássio ajuda a regular:",
    options: ["Glicemia", "Pressão arterial", "Visão", "Respiração"],
    correct: 1
  },
  {
    question: "A vitamina D auxilia diretamente na absorção de:",
    options: ["Magnésio", "Ferro", "Cálcio", "Zinco"],
    correct: 2
  },
  {
    question: "A riboflavina (B2) participa da produção de:",
    options: ["Leite", "Energia", "Insulina", "Mucina"],
    correct: 1
  },
  {
    question: "Qual vitamina auxilia na formação de glóbulos vermelhos?",
    options: ["Vitamina B12", "Vitamina K", "Vitamina E", "Vitamina C"],
    correct: 0
  },
  {
    question: "O selênio ajuda na proteção contra:",
    options: ["Radicais livres", "Gripe", "Hipotensão", "Desidratação"],
    correct: 0
  },
  {
    question: "Qual vitamina previne o raquitismo?",
    options: ["Vitamina D", "Vitamina C", "Vitamina A", "Vitamina K"],
    correct: 0
  },
  {
    question: "O sódio está presente principalmente em:",
    options: ["Frutas", "Legumes", "Sal de cozinha", "Carnes"],
    correct: 2
  },
  {
    question: "A vitamina A é abundante em alimentos de cor:",
    options: ["Vermelha", "Amarela e alaranjada", "Roxa", "Verde-escura"],
    correct: 1
  },
  {
    question: "A falta de magnésio pode causar:",
    options: ["Cãibras", "Aumento de peso", "Cáries", "Queda de cabelo"],
    correct: 0
  },
  {
    question: "Qual mineral é essencial para o sistema imune?",
    options: ["Zinco", "Cálcio", "Fósforo", "Ferro"],
    correct: 0
  },
  {
    question: "A vitamina B6 participa da síntese de:",
    options: ["Hormônios e neurotransmissores", "Insulina", "Colágeno", "Linfócitos"],
    correct: 0
  },
  {
    question: "O fósforo trabalha em conjunto com qual outro mineral?",
    options: ["Ferro", "Magnésio", "Cálcio", "Zinco"],
    correct: 2
  },
  {
    question: "A vitamina E ajuda a proteger as células contra:",
    options: ["Radicais livres", "Bactérias", "Parasitas", "Mudanças de pH"],
    correct: 0
  }
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
