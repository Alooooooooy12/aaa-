
const questions = [
    { question: "ما هي عاصمة الكويت؟", answers: ["الكويت", "الرياض", "دبي"], correct: 0 },
    { question: "كم عدد الكواكب في المجموعة الشمسية؟", answers: ["8", "9", "7"], correct: 0 },
    { question: "من هو مخترع المصباح الكهربائي؟", answers: ["إديسون", "تيسلا", "أينشتاين"], correct: 0 }
];

let currentQuestionIndex = 0;
let score = 0;

const homeScreen = document.getElementById("home");
const quizScreen = document.getElementById("quiz");
const resultScreen = document.getElementById("result");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

document.getElementById("start-btn").addEventListener("click", startGame);
nextButton.addEventListener("click", nextQuestion);
document.getElementById("restart-btn").addEventListener("click", restartGame);

function startGame() {
    homeScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

function loadQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", () => selectAnswer(index));
        answersElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add("hidden");
    answersElement.innerHTML = "";
}

function selectAnswer(index) {
    const correct = questions[currentQuestionIndex].correct;
    if (index === correct) {
        score++;
    }
    nextButton.classList.remove("hidden");
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    scoreElement.textContent = `لقد حصلت على ${score} من ${questions.length}`;
}

function restartGame() {
    resultScreen.classList.add("hidden");
    homeScreen.classList.remove("hidden");
}
