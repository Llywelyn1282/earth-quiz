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

    const quiz = document.getElementById("quiz");
    const answerEls = document.querySelectorAll(".answer");
    const questionEls = document.getElementById("question");
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

    startBtn.addEventListener("click", startGame)

    function startGame() {
        intro.style.display = "none";
        quiz.style.display = "block";
    }

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEls.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}