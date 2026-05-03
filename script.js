// =============================
// SPACE FACT BUTTON FUNCTION
// =============================

function showFact() {
    const facts = [
        "Jupiter is so big that all the other planets could fit inside it.",
        "Europa may have an ocean beneath its icy surface.",
        "Io has over 400 active volcanoes.",
        "Saturn’s rings are made of ice and rock.",
        "Ganymede is the largest moon in the solar system.",
        "A day on Jupiter lasts only about 10 hours."
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("fact").innerText = facts[randomIndex];
}


// =============================
// JUPITER QUIZ
// =============================

const questions = [
    {
        question: "Which planet is the largest in the solar system?",
        answers: ["Mars", "Jupiter", "Earth"],
        correct: 1
    },
    {
        question: "What is Jupiter mostly made of?",
        answers: ["Rock", "Gas", "Ice"],
        correct: 1
    },
    {
        question: "What is the Great Red Spot?",
        answers: ["A mountain", "A storm", "A moon"],
        correct: 1
    },
    {
        question: "How long is a day on Jupiter?",
        answers: ["24 hours", "10 hours", "48 hours"],
        correct: 1
    },
    {
        question: "How many moons does Jupiter have?",
        answers: ["4", "Over 90", "10"],
        correct: 1
    }
];

let currentQuestion = 0;

function loadQuestion() {
    const q = questions[currentQuestion];

    document.getElementById("question").innerText = q.question;

    // ✅ IMPORTANT FIX
    const buttons = document.querySelectorAll("#jupiter-quiz .answer-btn");

    buttons[0].innerText = q.answers[0];
    buttons[1].innerText = q.answers[1];
    buttons[2].innerText = q.answers[2];

    document.getElementById("quizResult").innerText = "";
}

function checkAnswer(index) {
    const q = questions[currentQuestion];
    const result = document.getElementById("quizResult");

    if (index === q.correct) {
        result.innerText = "✅ Correct!";
    } else {
        result.innerText = "❌ Try again!";
    }
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= questions.length) {
        currentQuestion = 0;
    }

    loadQuestion();
}

window.addEventListener("load", function () {
    if (document.getElementById("jupiter-quiz")) {
        loadQuestion();
    }
});
