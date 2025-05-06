const easyQuizData = [
  {
    question: "What is the longest river on Earth?",
    a: "Amazon",
    b: "Nile",
    c: "Yangtze",
    d: "Mississippi",
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
    question: "What is the largest country on Earth?",
    a: "Canada",
    b: "China",
    c: "Russia",
    d: "India",
    correct: "c",
  },
  {
    question: "What do you call a river that flows into a larger river?",
    a: "Tributary",
    b: "Estuary",
    c: "Delta",
    d: "Channel",
    correct: "a",
  },
  {
    question: "Which country has the largest population on Earth?",
    a: "India",
    b: "USA",
    c: "China",
    d: "Indonesia",
    correct: "c",
  },
  {
    question: "In which country are the Pyramids of Giza located?",
    a: "Mexico",
    b: "Peru",
    c: "Cambodia",
    d: "Egypt",
    correct: "d",
  },
  {
    question: "What is the smallest country in the world?",
    a: "San Marino",
    b: "Vatican City",
    c: "Liechtenstein",
    d: "Andorra",
    correct: "b",
  },
  {
    question: "How many states make up the USA?",
    a: "50",
    b: "48",
    c: "52",
    d: "36",
    correct: "a",
  },
  {
    question: "Which is the tallest waterfall on Earth?",
    a: "Yosemite Falls",
    b: "Angel Falls",
    c: "Niagara Falls",
    d: "Victoria Falls",
    correct: "b",
  },
  {
    question: "Which country is home to the Eiffel Tower?",
    a: "Germany",
    b: "Spain",
    c: "France",
    d: "India",
    correct: "c",
  },
];

const mediumQuizData = [
  {
    question: "Which continent is the driest on Earth?",
    a: "Africa",
    b: "Australia",
    c: "Antarctica",
    d: "Asia",
    correct: "c",
  },
  {
    question: "What is the largest ocean on Earth?",
    a: "Atlantic Ocean",
    b: "Indian Ocean",
    c: "Arctic Ocean",
    d: "Pacific Ocean",
    correct: "d",
  },
  {
    question: "What is the largest island on Earth?",
    a: "Greenland",
    b: "New Guinea",
    c: "Borneo",
    d: "Madagascar",
    correct: "a",
  },
  {
    question: "Which country is home to the largest rainforest on Earth?",
    a: "Brazil",
    b: "Indonesia",
    c: "Congo",
    d: "Peru",
    correct: "a",
  },
  {
    question: "Which desert is the hottest on Earth?",
    a: "Sahara Desert",
    b: "Sonoran Desert",
    c: "Lut Desert",
    d: "Kalahari Desert",
    correct: "a",
  },
  {
    question: "Which of these countries is on the Equator?",
    a: "Thailand",
    b: "France",
    c: "Uganda",
    d: "Turkey",
    correct: "c",
  },
  {
    question: "Which of these countries is not landlocked?",
    a: "Bolivia",
    b: "Kazakhstan",
    c: "Serbia",
    d: "Iraq",
    correct: "d",
  },
  {
    question: "On which continent is the Yellow River located?",
    a: "Africa",
    b: "Asia",
    c: "Europe",
    d: "North America",
    correct: "b",
  },
  {
    question: "What is the most populous city in the world?",
    a: "Shanghai, China",
    b: "Tokyo, Japan",
    c: "Dhaka, Bangladesh",
    d: "Delhi, India",
    correct: "b",
  },
  {
    question: "What is the capital city of Canada?",
    a: "Toronto",
    b: "Calgary",
    c: "Ottawa",
    d: "Montreal",
    correct: "c",
  },
];

const hardQuizData = [
  {
    question: "What is the deepest lake on Earth?",
    a: "Lake Malawi",
    b: "Lake Baikal",
    c: "Lake Como",
    d: "Lake Superior",
    correct: "b",
  },
  {
    question: "Which country has the most active volcanoes?",
    a: "United States",
    b: "Indonesia",
    c: "Japan",
    d: "Iceland",
    correct: "b",
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
    d: "Philippine Trench",
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
  let shuffledArray = [...array]; // Makes a copy
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

// shuffle function to rearrange question order when quiz reloads

const shuffledEasyQuizData = shuffle(easyQuizData);
const shuffledMediumQuizData = shuffle(mediumQuizData);
const shuffledHardQuizData = shuffle(hardQuizData);

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const easyBtn = document.getElementById("easy");
const mediumBtn = document.getElementById("medium");
const hardBtn = document.getElementById("hard");
const submitBtn = document.getElementById("submit");
const intro = document.getElementById("intro");
const qNum = document.getElementById("q-num");
var currentQuizData = NaN;

let quizData = [];
let currentQuiz = 0;
let score = 0;
let quizMode = 1;

// difficulty selector
easyBtn.addEventListener("click", () => startGame(1));
mediumBtn.addEventListener("click", () => startGame(2));
hardBtn.addEventListener("click", () => startGame(3));


// changes view from intro box to quiz upon choice of difficulty
function startGame(mode) {
  quizMode = mode;
  intro.style.display = "none";
  quiz.style.display = "block";
  loadQuiz();
}

function loadQuiz() {
  deselectAnswers();

  // sets difficulty
  if (quizMode === 1) {
    quizData = shuffledEasyQuizData;
    currentQuizData = quizData[currentQuiz];
  } else if (quizMode === 2) {
    quizData = shuffledMediumQuizData;
    currentQuizData = quizData[currentQuiz];
  } else {
    quizData = shuffledHardQuizData;
    currentQuizData = quizData[currentQuiz];
  }
  // sets question number
  qNum.innerText = `${currentQuiz + 1} of ${quizData.length}`;
  // sets question text
  questionEl.innerText = currentQuizData.question;
  // loops through answers and text
  const answers = ["a", "b", "c", "d"];
  answers.forEach((letter) => {
    document.getElementById(`${letter}_text`).innerText =
      currentQuizData[letter];
  });
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
  //checks if answer is correct
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    // moves to next question
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      // bad end message
      if (score < 4) {
        quiz.innerHTML = `
            <div class="img-container" role="img"
             aria-label="A man with his head in his hands">
            <img src="assets/bad.webp">
            </div>
            <h1 class="end-header">Oof</h1>
            <p class="end-text">You answered ${score}
             out of ${quizData.length} questions correctly.
             Better luck next time.</p>
            <button onclick="location.reload ()">Try Again?</button>
            `;
      // mid end message
      } else if (score < 7) {
        quiz.innerHTML = `
            <div class="img-container" role="img"
             aria-label="A large cat on a sofa with a blank expression">
            <img src="assets/ok.webp">
            </div>
            <h1 class="end-header">Not Bad</h1>
            <p class="end-text">
            You answered ${score} out of
             ${quizData.length} questions correctly.
             Keep practising.</p>
            <button onclick="location.reload ()">Try Again?</button>`;
      } else {
        // good end message
        confetti(); // Summons confetti, loads from CDN link in index.html
        quiz.innerHTML = `
            <div class="img-container" role="img"
             aria-label="A man atop a mountain looking at the horizon.">
            <img src="assets/good.webp">
            </div>
            <h1 class="end-header">Well done!</h1>
            <p class="end-text"> You answered ${score}
            out of ${quizData.length} questions correctly.</p>
            <button onclick="location.reload ()">Try Again?</button>`;
      }
    }
  }
});
