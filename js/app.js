// Main Application JavaScript
class QuizApp {
    constructor() {
        this.currentTest = null;
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.markedQuestions = new Set();
        this.timer = null;
        this.timeLeft = 0;
        this.selectedLanguage = 'english';
        
        this.initializeEventListeners();
        this.showView('testSelectionView');
    }

    initializeEventListeners() {
        // Navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const testId = e.target.getAttribute('data-test');
                this.loadTest(testId);
            });
        });

        // Start test buttons
        document.querySelectorAll('.btn-start').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const testId = e.target.getAttribute('data-test');
                this.showInstructions(testId);
            });
        });

        // Language selection
        document.querySelectorAll('input[name="language"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.selectedLanguage = e.target.value;
            });
        });

        // Agreement checkbox
        document.getElementById('agreeCheckbox').addEventListener('change', (e) => {
            document.getElementById('btnStartTest').disabled = !e.target.checked;
        });

        // Action buttons
        document.getElementById('btnBackToTests').addEventListener('click', () => {
            this.showView('testSelectionView');
        });

        document.getElementById('btnStartTest').addEventListener('click', () => {
            this.startTest();
        });

        document.getElementById('btnBackToTests2').addEventListener('click', () => {
            this.showView('testSelectionView');
        });

        // Quiz navigation
        document.getElementById('btnPrev').addEventListener('click', () => {
            this.previousQuestion();
        });

        document.getElementById('btnNext').addEventListener('click', () => {
            this.nextQuestion();
        });

        document.getElementById('btnSave').addEventListener('click', () => {
            this.saveAnswer();
        });

        document.getElementById('btnMark').addEventListener('click', () => {
            this.markQuestion();
        });

        document.getElementById('btnClear').addEventListener('click', () => {
            this.clearAnswer();
        });

        document.getElementById('btnSubmitQuiz').addEventListener('click', () => {
            this.showSubmitModal();
        });

        // Modal actions
        document.getElementById('btnCancelSubmit').addEventListener('click', () => {
            this.hideSubmitModal();
        });

        document.getElementById('btnConfirmSubmit').addEventListener('click', () => {
            this.submitTest();
        });

        // Results actions
        document.getElementById('btnViewSolutions').addEventListener('click', () => {
            this.viewSolutions();
        });

        document.getElementById('btnReattempt').addEventListener('click', () => {
            this.reattemptTest();
        });
    }

    showView(viewId) {
        // Hide all views
        document.querySelectorAll('.view').forEach(view => {
            view.classList.remove('active');
        });
        
        // Show target view
        document.getElementById(viewId).classList.add('active');
    }

    showInstructions(testId) {
        this.currentTest = testId;
        const test = quizData[testId];
        
        if (!test) {
            alert('Test not found!');
            return;
        }

        // Update instruction view with test details
        document.getElementById('testTitle').textContent = test.title;
        document.getElementById('testDuration').textContent = `${test.duration} Mins`;
        document.getElementById('testMarks').textContent = test.totalMarks.toFixed(1);
        document.getElementById('testQuestions').textContent = test.totalQuestions;
        document.getElementById('totalQuestionsText').textContent = test.totalQuestions;
        document.getElementById('durationText').textContent = `${test.duration} minutes`;

        this.showView('instructionsView');
    }

    startTest() {
        this.currentQuestionIndex = 0;
        this.userAnswers = {};
        this.markedQuestions.clear();
        
        const test = quizData[this.currentTest];
        this.timeLeft = test.duration * 60; // Convert to seconds
        
        // Update quiz header
        document.getElementById('quizTitle').textContent = test.title;
        document.getElementById('totalQuestions').textContent = test.totalQuestions;
        
        this.showView('quizView');
        this.displayQuestion();
        this.startTimer();
        this.updateProgress();
    }

    displayQuestion() {
        const test = quizData[this.currentTest];
        const question = test.questions[this.currentQuestionIndex];
        
        if (!question) return;

        // Get question text based on selected language
        let questionText = question.question;
        let options = [...question.options];
        
        if (this.selectedLanguage === 'bengali' && bengaliTranslations[this.currentTest]) {
            const bengaliQuestion = bengaliTranslations[this.currentTest].questions[this.currentQuestionIndex];
            if (bengaliQuestion) {
                questionText = bengaliQuestion.question;
                options = [...bengaliQuestion.options];
            }
        }

        // Update question number and text
        document.getElementById('currentQuestion').textContent = this.currentQuestionIndex + 1;
        document.getElementById('displayQuestionNumber').textContent = `${this.currentQuestionIndex + 1}.`;
        document.getElementById('questionText').textContent = questionText;

        // Update options
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';

        options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            if (this.userAnswers[this.currentQuestionIndex] === index) {
                optionElement.classList.add('selected');
            }

            optionElement.innerHTML = `
                <input type="radio" name="answer" value="${index}" id="option${index}" 
                    ${this.userAnswers[this.currentQuestionIndex] === index ? 'checked' : ''}>
                <span class="option-label">${option}</span>
            `;

            optionElement.addEventListener('click', () => {
                this.selectOption(index);
            });

            optionsContainer.appendChild(optionElement);
        });

        // Update marked status
        const markButton = document.getElementById('btnMark');
        if (this.markedQuestions.has(this.currentQuestionIndex)) {
            markButton.innerHTML = '<span class="mark-icon">✓</span> Unmark';
            markButton.style.background = '#28a745';
            markButton.style.color = 'white';
        } else {
            markButton.innerHTML = '<span class="mark-icon">✓</span> Mark & Next';
            markButton.style.background = '#fff3cd';
            markButton.style.color = '#856404';
        }

        // Update navigation buttons
        document.getElementById('btnPrev').disabled = this.currentQuestionIndex === 0;
        document.getElementById('btnNext').disabled = this.currentQuestionIndex === test.questions.length - 1;
    }

    selectOption(optionIndex) {
        this.userAnswers[this.currentQuestionIndex] = optionIndex;
        this.displayQuestion(); // Refresh to show selection
        this.updateProgress();
    }

    saveAnswer() {
        this.nextQuestion();
    }

    markQuestion() {
        if (this.markedQuestions.has(this.currentQuestionIndex)) {
            this.markedQuestions.delete(this.currentQuestionIndex);
        } else {
            this.markedQuestions.add(this.currentQuestionIndex);
        }
        this.displayQuestion();
        this.updateProgress();
    }

    clearAnswer() {
        delete this.userAnswers[this.currentQuestionIndex];
        this.displayQuestion();
        this.updateProgress();
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    nextQuestion() {
        const test = quizData[this.currentTest];
        if (this.currentQuestionIndex < test.questions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        }
    }

    startTimer() {
        this.updateTimerDisplay();
        
        this.timer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay();
            
            if (this.timeLeft <= 0) {
                this.submitTest();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const hours = Math.floor(this.timeLeft / 3600);
        const minutes = Math.floor((this.timeLeft % 3600) / 60);
        const seconds = this.timeLeft % 60;
        
        const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        document.getElementById('timer').textContent = timeString;
        document.getElementById('timeLeft').textContent = timeString;
    }

    updateProgress() {
        const test = quizData[this.currentTest];
        const progress = ((this.currentQuestionIndex + 1) / test.questions.length) * 100;
        
        document.getElementById('progressFill').style.width = `${progress}%`;
        document.getElementById('attemptedCount').textContent = Object.keys(this.userAnswers).length;
        document.getElementById('markedCount').textContent = this.markedQuestions.size;
    }

    showSubmitModal() {
        document.getElementById('submitModal').classList.add('active');
    }

    hideSubmitModal() {
        document.getElementById('submitModal').classList.remove('active');
    }

    submitTest() {
        clearInterval(this.timer);
        this.calculateResults();
        this.showView('resultsView');
        this.hideSubmitModal();
    }

    calculateResults() {
        const test = quizData[this.currentTest];
        let correct = 0;
        let incorrect = 0;
        let unattempted = 0;
        
        test.questions.forEach((question, index) => {
            if (this.userAnswers[index] === undefined) {
                unattempted++;
            } else if (this.userAnswers[index] === question.correctAnswer) {
                correct++;
            } else {
                incorrect++;
            }
        });
        
        const score = correct - (incorrect * 0.33);
        const accuracy = correct / (correct + incorrect) * 100;
        const percentile = (correct / test.questions.length) * 100;
        
        // Update results display
        document.getElementById('finalScore').textContent = score.toFixed(1);
        document.getElementById('percentile').textContent = `${percentile.toFixed(2)}%`;
        document.getElementById('accuracy').textContent = `${accuracy.toFixed(0)}%`;
        document.getElementById('attemptedStats').textContent = `${correct + incorrect}/${test.questions.length}`;
        document.getElementById('correctStats').textContent = correct;
        document.getElementById('incorrectStats').textContent = incorrect;
        
        this.generateLeaderboard(score);
    }

    generateLeaderboard(userScore) {
        const leaderboard = document.querySelector('.leaderboard');
        leaderboard.innerHTML = '';
        
        const scores = [
            { name: 'You', score: userScore, isYou: true },
            { name: 'Rahul Sharma', score: 8.7 },
            { name: 'Priya Patel', score: 7.9 },
            { name: 'Amit Kumar', score: 6.5 },
            { name: 'Sneha Das', score: 5.8 }
        ].sort((a, b) => b.score - a.score);
        
        scores.forEach((item, index) => {
            const leaderboardItem = document.createElement('div');
            leaderboardItem.className = `leaderboard-item ${item.isYou ? 'you' : ''}`;
            leaderboardItem.innerHTML = `
                <div class="leaderboard-rank">${index + 1}</div>
                <div class="leaderboard-name">${item.name}</div>
                <div class="leaderboard-score">${item.score.toFixed(1)}</div>
            `;
            leaderboard.appendChild(leaderboardItem);
        });
    }

    viewSolutions() {
        alert('Solutions view will be implemented in the next version!');
    }

    reattemptTest() {
        this.startTest();
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
    
    // Initialize MathJax for LaTeX rendering
    if (window.MathJax) {
        window.MathJax.typeset();
    }
});

// Function to handle iframe embedding
function initializeEmbeddedMode() {
    if (window.self !== window.top) {
        // We're in an iframe
        document.body.classList.add('embedded-mode');
    }
}

// Call this function on load
initializeEmbeddedMode();
