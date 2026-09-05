const resultsContainer = document.getElementById("resultsContainer");
const clearResultsButton = document.getElementById("clearResultsButton");
const examResults = JSON.parse(localStorage.getItem("examResults") || "[]");

function formatResultDate(dateString) {
    return new Date(dateString).toLocaleString();
}

function displayResults() {
    if (examResults.length === 0) {
        resultsContainer.innerHTML = `
            <div class="results-empty">
                <h2>No results yet</h2>
                <p>Complete an exam to see your results here.</p>
            </div>
        `;
        clearResultsButton.disabled = true;
        return;
    }

    clearResultsButton.disabled = false;
    resultsContainer.innerHTML = examResults.map((result, resultIndex) => `
        <article class="result-card">
            <div class="result-card-header">
                <div>
                    <p class="result-attempt">Attempt ${examResults.length - resultIndex}</p>
                    <h2>${result.title}</h2>
                    <time datetime="${result.completedAt}">${formatResultDate(result.completedAt)}</time>
                </div>
                <div class="result-summary">
                    <strong>${result.percentage}%</strong>
                    <span>${result.score} / ${result.total}</span>
                </div>
            </div>

            <div class="result-wrong-answers">
                <h3>Questions you got wrong</h3>
                ${result.wrongAnswers.length === 0
                    ? "<p class=\"all-answers-correct\">All answers are correct.</p>"
                    : result.wrongAnswers.map((wrongAnswer, index) => `
                        <article class="wrong-answer">
                            <h4>${index + 1}. ${wrongAnswer.question}</h4>
                            <p>Your answer: <strong>${wrongAnswer.userAnswer}</strong></p>
                            <p>Correct answer: <strong>${wrongAnswer.correctAnswer}</strong></p>
                        </article>
                    `).join("")}
            </div>
        </article>
    `).join("");
}

clearResultsButton.addEventListener("click", () => {
    if (!window.confirm("Clear all saved results?")) return;

    localStorage.removeItem("examResults");
    examResults.length = 0;
    displayResults();
});

displayResults();
