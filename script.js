const quizData = [
    {
      question: "What is the deepest lake on Earth?",
      a: "Lake Malawi",
      b: "Lake Baikal",
      c: "Lake Como",
      d: "Lake Superior",
      correct: "b",
    },
    {
      question: "What is the tallest mountain on Earth?",
      a: "Aconcagua",
      b: "Mont Blanc",
      c: "Kilimanjaro",
      d: "Mount Everest",
      correct: "d",
    },
    {
      question: "What is the highest permanent human settlement on Earth?",
      a: "Lobuche, Nepal",
      b: "La Rinconada, Peru",
      c: "Karzok, India",
      d: "Tuiwa, China",
      correct: "b",
    },
    {
      question: "What is the deepest part of the Earth's oceans?",
      a: "Tonga Trench",
      b: "Kuril-Kamchatka Trench",
      c: "Mariana Trench",
      d: "Phillippine Trench",
      correct: "c",
    },
    {
      question: "What is the newest country on Earth?",
      a: "South Sudan",
      b: "Montenegro",
      c: "Palau",
      d: "East Timor",
      correct: "a",
    },
    {
      question: "What is the lowest land point on Earth?",
      a: "The Dead Sea",
      b: "Death Valley",
      c: "Afar Depression",
      d: "Turfan Depression",
      correct: "a",
    },
    {
      question: "What is the most remote island on Earth?",
      a: "Bouvet Island",
      b: "Tristan da Cunha",
      c: "Easter Island",
      d: "Pitcairn Island",
      correct: "a",
    },
    {
      question: "What is the hottest permanently inhabited place of Earth?",
      a: "Ahvaz,Iran",
      b: "Oodnadatta, Australia",
      c: "Furnace Creek, USA",
      d: "Dallol, Ethiopia",
      correct: "d",
    },
    {
      question: "What is the coldest permanently inhabited place of Earth?",
      a: "Ranfurly, New Zealand",
      b: "Ifrane, Morocco",
      c: "Sarmiento, Argentina",
      d: "Oymyakon, Russia",
      correct: "d",
    },
    {
      question: "What is the largest living animal on Earth",
      a: "Humpback Whale",
      b: "Blue Whale",
      c: "Grey Whale",
      d: "Sperm Whale",
      correct: "b",
    },
  ];
  
  // fisher-yates shuffle code
  
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  const shuffledQuizData = shuffle(quizData);
  
  const quiz = document.getElementById("quiz");
  const answerEls = document.querySelectorAll(".answer");
  const questionEl = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitBtn = document.getElementById("submit");
  const startBtn = document.getElementById("start");
  const intro = document.getElementById("intro");
  
  let currentQuiz = 0;
  let score = 0;
  
  loadQuiz();
  
  startBtn.addEventListener("click", startGame);
  
  function startGame() {
    intro.style.display = "none";
    quiz.style.display = "block";
  }
  
  function loadQuiz() {
    deselectAnswers();
  
    const currentQuizData = quizData[currentQuiz];
  
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }
  
  function deselectAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
  }

  
  
  function getSelected() {
    let answer;
  
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
  
    return answer;
  }
  
  submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
  
      currentQuiz++;
  
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        if (score < 4) {
          quiz.innerHTML = `
          <div class="img-container">
          <img src="assets/bad.webp">
          </div>
          <h2> Oof. You answered ${score} out of ${quizData.length} questions correctly. Better luck next time.</h2>
  
          <button onclick="location.reload ()">Try Again?</button>`;
        } else if (score < 7) {
          quiz.innerHTML = `
          <div class="img-container">
          <img src="assets/ok.webp">
          </div>
          <h2> Not bad. You answered ${score} out of ${quizData.length} questions correctly. Keep practising.</h2>
  
          <button onclick="location.reload ()">Try Again?</button>`;
        } else {
          confetti();
          quiz.innerHTML = `
          <div class="img-container">
          <img src="assets/good.webp">
          </div>
          <h2> Well done! You answered ${score} out of ${quizData.length} questions correctly.</h2>
  
          <button onclick="location.reload ()">Try Again?</button>`;
        }
      }
    }
  });
  
    {
      question: "What is the deepest lake on Earth?",
      a: "Lake Malawi",
      b: "Lake Baikal",
      c: "Lake Como",
      d: "Lake Superior",
      correct: "b",
    },
    {
      question: "What is the tallest mountain on Earth?",
      a: "Aconcagua",
      b: "Mont Blanc",
      c: "Kilimanjaro",
      d: "Mount Everest",
      correct: "d",
    },
    {
      question: "What is the highest permanent human settlement on Earth?",
      a: "Lobuche, Nepal",
      b: "La Rinconada, Peru",
      c: "Karzok, India",
      d: "Tuiwa, China",
      correct: "b",
    },
    {
      question: "What is the deepest part of the Earth's oceans?",
      a: "Tonga Trench",
      b: "Kuril-Kamchatka Trench",
      c: "Mariana Trench",
      d: "Phillippine Trench",
      correct: "c",
    },
    {
      question: "What is the newest country on Earth?",
      a: "South Sudan",
      b: "Montenegro",
      c: "Palau",
      d: "East Timor",
      correct: "a",
    },
    {
      question: "What is the lowest land point on Earth?",
      a: "The Dead Sea",
      b: "Death Valley",
      c: "Afar Depression",
      d: "Turfan Depression",
      correct: "a",
    },
    {
      question: "What is the most remote island on Earth?",
      a: "Bouvet Island",
      b: "Tristan da Cunha",
      c: "Easter Island",
      d: "Pitcairn Island",
      correct: "a",
    },
    {
      question: "What is the hottest permanently inhabited place of Earth?",
      a: "Ahvaz,Iran",
      b: "Oodnadatta, Australia",
      c: "Furnace Creek, USA",
      d: "Dallol, Ethiopia",
      correct: "d",
    },
    {
      question: "What is the coldest permanently inhabited place of Earth?",
      a: "Ranfurly, New Zealand",
      b: "Ifrane, Morocco",
      c: "Sarmiento, Argentina",
      d: "Oymyakon, Russia",
      correct: "d",
    },
    {
      question: "What is the largest living animal on Earth?",
      a: "Humpback Whale",
      b: "Blue Whale",
      c: "Grey Whale",
      d: "Sperm Whale",
      correct: "b",
    },
  ];
  
  // fisher-yates shuffle code
  
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  const shuffledQuizData = shuffle(quizData);
  
  const quiz = document.getElementById("quiz");
  const answerEls = document.querySelectorAll(".answer");
  const questionEl = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitBtn = document.getElementById("submit");
  const startBtn = document.getElementById("start");
  const intro = document.getElementById("intro");
  
  let currentQuiz = 0;
  let score = 0;
  
  loadQuiz();
  
  startBtn.addEventListener("click", startGame);
  
  function startGame() {
    intro.style.display = "none";
    quiz.style.display = "block";
  }
  
  function loadQuiz() {
    deselectAnswers();
  
    const currentQuizData = quizData[currentQuiz];
  
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  }
  
  function deselectAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
  }

  
  
  function getSelected() {
    let answer;
  
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
  
    return answer;
  }
  
  submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
  
      currentQuiz++;
  
      if (currentQuiz < quizData.length) {
        loadQuiz();
      } else {
        if (score < 4) {
          quiz.innerHTML = `
          <div class="img-container">
          <img src="assets/bad.webp">
          </div>
          <h2> Oof. You answered ${score} out of ${quizData.length} questions correctly. Better luck next time.</h2>
  
          <button onclick="location.reload ()">Try Again?</button>`;
        } else if (score < 7) {
          quiz.innerHTML = `
          <div class="img-container">
          <img src="assets/ok.webp">
          </div>
          <h2> Not bad. You answered ${score} out of ${quizData.length} questions correctly. Keep practising.</h2>
  
          <button onclick="location.reload ()">Try Again?</button>`;
        } else {
          confetti();
          quiz.innerHTML = `
          <div class="img-container">
          <img src="assets/good.webp">
          </div>
          <h2> Well done! You answered ${score} out of ${quizData.length} questions correctly.</h2>
  
          <button onclick="location.reload ()">Try Again?</button>`;
        }
      }
    }
  });
  