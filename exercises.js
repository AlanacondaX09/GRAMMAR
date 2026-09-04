const exercises = [
	{
		id: 1,
		icon: "📝",
		title: "Test Unit 1",
		description: "Test your knowledge of Unit 1 concepts.",
		minutes: 15,
		questionCount: 20,
		questions: [
			{
				type: "synonym",
				text: "The word \"rewarding\" is closest in meaning to ______.",
				options: ["satisfying", "disappointing", "harmful", "heartbreaking"],
				correctAnswer: 0
			},
			{
				type: "synonym",
				text: "The word \"retrieve\" is closest in meaning to ______.",
				options: ["lose", "get back", "worsen", "collapse"],
				correctAnswer: 1
			},
			{
				type: "antonym",
				text: "The word \"rewarding\" is opposite in meaning to ______.",
				options: ["fulfilling", "satisfying", "disappointing", "productive"],
				correctAnswer: 2
			},
			{
				type: "antonym",
				text: "\"Improve\" is opposite in meaning to ______.",
				options: ["recover", "worsen", "heal", "progress"],
				correctAnswer: 1
			},
			{
				type: "vocabulary",
				text: "The clients began to ______ about the long waiting time.",
				options: ["complain", "buzz", "beep", "progress"],
				correctAnswer: 0
			},
			{
				type: "vocabulary",
				text: "The teacher had to ______ the test fairly and ensure no one cheated.",
				options: ["attention", "administer", "shift", "collapse"],
				correctAnswer: 1
			},
			{
				type: "vocabulary",
				text: "The new manager will take ______ the school next month.",
				options: ["off", "out", "on", "over"],
				correctAnswer: 3
			},
			{
				type: "vocabulary",
				text: "The athlete fell hard and ______ his leg just above the knee.",
				options: ["stitched", "retrieved", "clutched", "wounded"],
				correctAnswer: 2
			},
			{
				type: "vocabulary",
				text: "Malak had a ______ day helping others.",
				options: ["rewarding", "emergent", "heartbreaking", "cardiopulmonary"],
				correctAnswer: 0
			},
			{
				type: "word-formation",
				text: "The doctor decided to ______ the patient immediately.",
				options: ["treatment", "treat", "treated", "treating"],
				correctAnswer: 1
			},
			{
				type: "word-formation",
				text: "The manager's ______ of the new employees was very fair.",
				options: ["administer", "administered", "administration", "administering"],
				correctAnswer: 2
			},
			{
				type: "vocabulary",
				text: "After the operation, the patient began to ______ quickly.",
				options: ["recover", "complain", "collapse", "wound"],
				correctAnswer: 0
			},
			{
				type: "grammar",
				text: "I'm really tired because I ______ all night for my exam.",
				options: ["have studied", "have been studying", "had studied", "had been studying"],
				correctAnswer: 1
			},
			{
				type: "grammar",
				text: "I won't be able to read it because I ______ my glasses.",
				options: ["lost", "have lost", "had lost", "lose"],
				correctAnswer: 1
			},
			{
				type: "grammar",
				text: "She ______ him for ten years, so they are good friends.",
				options: ["has known", "has been known", "has been knowing", "had known"],
				correctAnswer: 0
			},
			{
				type: "grammar",
				text: "Hisham ______ this car for five years.",
				options: ["is having", "has had", "has", "had had"],
				correctAnswer: 1
			},
			{
				type: "grammar",
				text: "As soon as he finishes the report, he ______ it to the manager.",
				options: ["has submitted", "submitted", "will submit", "is submitting"],
				correctAnswer: 2
			},
			{
				type: "grammar",
				text: "Which of the following is structurally correct?",
				options: [
					"I live here since five years.",
					"It's five years that I live here.",
					"I have lived here for five years.",
					"I am living here for five years."
				],
				correctAnswer: 2
			},
			{
				type: "grammar",
				text: "They have just eaten lunch. This means ______.",
				options: [
					"they are about to eat lunch",
					"they finished eating lunch a long time ago",
					"they finished eating lunch a very short time ago",
					"they will eat lunch soon"
				],
				correctAnswer: 2
			},
			{
				type: "grammar",
				text: "How long ______ English?",
				options: ["have you learned", "have you been learning", "you learnt", "have you been learnt"],
				correctAnswer: 1
			}
		]
	},
	{
		id: 2,
		icon: "⏳",
		title: "Tenses Challenge",
		description: "Challenge yourself with English verb tenses.",
		minutes: 15,
		questionCount: 20,
		questions: []
	},
	{
		id: 3,
		icon: "🧠",
		title: "Mixed Grammar Test",
		description: "A complete mixed grammar test covering different grammar topics.",
		minutes: 15,
		questionCount: 20,
		questions: []
	}
];

const exercisesContainer = document.getElementById("exercisesContainer");
let activeExam = null;
let examTimer = null;

function displayExercises() {
	exercisesContainer.innerHTML = "";

	exercises.forEach((exercise) => {
		const card = document.createElement("article");
		const number = String(exercise.id).padStart(2, "0");
		const questionCount = exercise.questionCount ?? exercise.questions.length;

		card.className = "exercise-card";
		card.dataset.exerciseId = exercise.id;

		card.innerHTML = `
			<div class="exercise-number" aria-label="Exercise ${number}">${number}</div>
			<div class="exercise-icon" aria-hidden="true">${exercise.icon}</div>

			<div class="exercise-info">
				<h2>${exercise.title}</h2>
				<p>${exercise.description}</p>
			</div>

			<div class="exercise-meta">
				<span class="question-count">${questionCount} Questions</span>
				<span class="exam-time">${exercise.minutes} Minutes</span>
			</div>

			<button
				class="start-exam-btn"
				type="button"
				aria-label="Start ${exercise.title} exam"
			>
				START EXAM
			</button>

			<div
				class="exam-container"
				aria-live="polite"
				aria-label="${exercise.title} exam interface"
			></div>
		`;

		card.querySelector(".start-exam-btn").addEventListener("click", () => {
			startExam(exercise, card);
		});

		exercisesContainer.appendChild(card);
	});
}

function startExam(exercise, card) {
	if (activeExam) return;

	window.playSound?.(600);

	activeExam = {
		exercise,
		card,
		currentQuestion: 0,
		answers: []
	};

	card.classList.add("is-open");

	document.querySelectorAll(".exercise-card").forEach((otherCard) => {
		if (otherCard !== card) otherCard.classList.add("is-hidden");
	});

	card.querySelector(".exercise-number").style.display = "none";
	card.querySelector(".exercise-icon").style.display = "none";
	card.querySelector(".exercise-info").style.display = "none";
	card.querySelector(".exercise-meta").style.display = "none";
	card.querySelector(".start-exam-btn").style.display = "none";

	const examContainer = card.querySelector(".exam-container");
	examContainer.classList.add("is-active");

	if (exercise.questions.length === 0) {
		renderEmptyExam(examContainer, exercise);
		return;
	}

	activeExam.remainingSeconds = exercise.minutes * 60;
	renderQuestion(examContainer);
	examTimer = setInterval(() => {
		activeExam.remainingSeconds -= 1;
		updateTimer();

		if (activeExam.remainingSeconds <= 0) {
			finishExam();
		}
	}, 1000);
}

function renderEmptyExam(container, exercise) {
	container.innerHTML = `
		<div class="exam-empty">
			<h2>${exercise.title}</h2>
			<p>No questions have been added to this exam yet.</p>
			<button class="back-exam-btn" type="button">&larr; Back to Exercises</button>
		</div>
	`;

	container.querySelector(".back-exam-btn").addEventListener("click", () => {
		window.playSound?.(500);
		resetExam();
	});
}

function renderQuestion(container) {
	const question = activeExam.exercise.questions[activeExam.currentQuestion];
	const questionNumber = activeExam.currentQuestion + 1;
	const totalQuestions = activeExam.exercise.questions.length;
	const selectedAnswer = activeExam.answers[activeExam.currentQuestion];

	container.innerHTML = `
		<div class="exam-header">
			<button class="back-exam-btn" type="button">&larr; Back to Exercises</button>
			<span class="exam-timer" aria-live="polite">${formatTime(activeExam.remainingSeconds)}</span>
		</div>

		<div class="exam-progress-info">
			Question ${questionNumber} of ${totalQuestions}
		</div>

		<progress
			class="exam-progress"
			value="${questionNumber}"
			max="${totalQuestions}"
			aria-label="Exam progress"
		></progress>

		<div class="exam-question">
			<h2>${question.text}</h2>
			<div class="answer-options" role="radiogroup" aria-label="Answer options">
				${question.options.map((option, index) => `
					<label class="answer-option">
						<input
							type="radio"
							name="question-${questionNumber}"
							value="${index}"
							${selectedAnswer === index ? "checked" : ""}
						>
						<span>${option}</span>
					</label>
				`).join("")}
			</div>
		</div>

		<div class="exam-actions">
			<button class="previous-question-btn" type="button">Previous</button>
			${questionNumber === totalQuestions
				? "<button class=\"submit-exam-btn\" type=\"button\">Submit Exam</button>"
				: "<button class=\"next-question-btn\" type=\"button\">Next</button>"}
		</div>
	`;

	container.querySelectorAll("input[name='question-${questionNumber}']").forEach((input) => {
		input.addEventListener("change", () => {
			activeExam.answers[activeExam.currentQuestion] = Number(input.value);
		});
	});

	container.querySelector(".back-exam-btn").addEventListener("click", () => {
		window.playSound?.(500);
		resetExam();
	});
	container.querySelector(".previous-question-btn").addEventListener("click", () => {
		window.playSound?.(550);
		previousQuestion();
	});

	const nextButton = container.querySelector(".next-question-btn");
	const submitButton = container.querySelector(".submit-exam-btn");

	nextButton?.addEventListener("click", () => {
		window.playSound?.(650);
		nextQuestion();
	});
	submitButton?.addEventListener("click", () => {
		window.playSound?.(700);
		finishExam();
	});
}

function nextQuestion() {
	if (activeExam.currentQuestion < activeExam.exercise.questions.length - 1) {
		activeExam.currentQuestion += 1;
		renderQuestion(activeExam.card.querySelector(".exam-container"));
	}
}

function previousQuestion() {
	if (activeExam.currentQuestion > 0) {
		activeExam.currentQuestion -= 1;
		renderQuestion(activeExam.card.querySelector(".exam-container"));
	}
}

function finishExam() {
	if (!activeExam) return;

	clearInterval(examTimer);

	const { exercise, card, answers } = activeExam;
	const score = exercise.questions.reduce((total, question, index) => {
		return total + (answers[index] === question.correctAnswer ? 1 : 0);
	}, 0);

	const container = card.querySelector(".exam-container");
	container.innerHTML = `
		<div class="exam-result">
			<h2>Exam Complete</h2>
			<p class="exam-score">${score} / ${exercise.questions.length}</p>
			<p>You answered ${score} question${score === 1 ? "" : "s"} correctly.</p>
			<button class="back-exam-btn" type="button">&larr; Back to Exercises</button>
		</div>
	`;

	container.querySelector(".back-exam-btn").addEventListener("click", () => {
		window.playSound?.(500);
		resetExam();
	});
	activeExam = null;
}

function resetExam() {
	clearInterval(examTimer);
	examTimer = null;
	activeExam = null;
	displayExercises();
}

function updateTimer() {
	const timer = document.querySelector(".exam-timer");
	if (timer) timer.textContent = formatTime(activeExam.remainingSeconds);
}

function formatTime(totalSeconds) {
	const minutes = Math.floor(totalSeconds / 60);
	const seconds = totalSeconds % 60;
	return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

displayExercises();
