// Variables
const EMPTY = 0;
const CORRECT = 1;
const INCORRECT = 2;
var correctAnswer = 0;
var incorrectAnswer = 0;
var emptyAnswer = 0; // Unanswered questions
var questionCounter = 0;
var answerList = [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY];
var intervalId;

// Game logic
$(document).ready(function () {
    function startGame() {
        correctAnswer = 0;
        incorrectAnswer = 0;
        emptyAnswer = 0;
        answerList = [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY];
        $("#timer-div").show();
        var timer = 100;
        $("#timer").text(timer);
        intervalId = setInterval(decrement, 1000)

        function decrement() {
            timer--;
            $("#timer").text(timer);
            if (timer === 0) {
                endGame();
            }
        }
        $("#game-container").show()

    }

    // To finish and end the game
    function endGame() {

        // Displays game-end-div
        $("#game-end-div").show();
        $("#game-container").hide();
        $("#finishGame").hide();
        clearInterval(intervalId);

        // Increments the number of right and wrong answers and unanswered questions
        for (i = 0; i < answerList.length; i++) {
            if (answerList[i] == CORRECT) {
                correctAnswer++;
            } else if (answerList[i] == INCORRECT) {
                incorrectAnswer++;
            } else {
                emptyAnswer++;
            }
        }
        $("#correctAnswers").text(correctAnswer);
        $("#incorrectAnswers").text(incorrectAnswer);
        $("#emptyAnswers").text(emptyAnswer);
    };

    // To select correct/incorrect answers
    function selectOption(questionNumber, status) {
        answerList[questionNumber - 1] = status;
    }
    $("#Frying").on("click", function () {
        selectOption(1, CORRECT)
    })
    $("#Grilling").on("click", function () {
        selectOption(1, INCORRECT)
    })
    $("#Roasting").on("click", function () {
        selectOption(1, INCORRECT)
    })
    $("#Smoking").on("click", function () {
        selectOption(1, INCORRECT)
    })
    $("#True2").on("click", function () {
        selectOption(2, INCORRECT)
    })
    $("#False2").on("click", function () {
        selectOption(2, CORRECT)
    })
    $("#Ketchup-based").on("click", function () {
        selectOption(3, INCORRECT)
    })
    $("#Mustard-based").on("click", function () {
        selectOption(3, INCORRECT)
    })
    $("#Spice-based").on("click", function () {
        selectOption(3, CORRECT)
    })
    $("#Vinegar-based").on("click", function () {
        selectOption(3, INCORRECT)
    })
    $("#True4").on("click", function () {
        selectOption(4, CORRECT)
    })
    $("#False4").on("click", function () {
        selectOption(4, INCORRECT)
    })
    $("#Cuba").on("click", function () {
        selectOption(5, INCORRECT)
    })
    $("#The-Caribbean").on("click", function () {
        selectOption(5, CORRECT)
    })
    $("#Spain").on("click", function () {
        selectOption(5, INCORRECT)
    })
    $("#Portugal").on("click", function () {
        selectOption(5, INCORRECT)
    })
    $("#True6").on("click", function () {
        selectOption(6, CORRECT)
    })
    $("#False6").on("click", function () {
        selectOption(6, INCORRECT)
    })
    $("#Sirloin").on("click", function () {
        selectOption(7, INCORRECT)
    })
    $("#Prime-Rib").on("click", function () {
        selectOption(7, INCORRECT)
    })
    $("#Boston-Butt").on("click", function () {
        selectOption(7, CORRECT)
    })
    $("#Tenderloin").on("click", function () {
        selectOption(7, INCORRECT)
    })
    $("#True8").on("click", function () {
        selectOption(8, CORRECT)
    })
    $("#False8").on("click", function () {
        selectOption(8, INCORRECT)
    })
    $("#Wet-Rub").on("click", function () {
        selectOption(9, INCORRECT)
    })
    $("#Massage-Rub").on("click", function () {
        selectOption(9, INCORRECT)
    })
    $("#Overnight-Rub").on("click", function () {
        selectOption(9, INCORRECT)
    })
    $("#Dry-Rub").on("click", function () {
        selectOption(9, CORRECT)
    })
    $("#True10").on("click", function () {
        selectOption(10, INCORRECT)
    })
    $("#False10").on("click", function () {
        selectOption(10, CORRECT)
    })

    // Event Handlers
    // To start the game
    $("#start").on("click", function () {
        $("#game-start-div").hide()
        startGame();
    })
    $("#timer-div").hide();

    // To finish the game
    $("#finishGame").on("click", endGame);

    // To restart the game
    $("#restartGame").on("click", function () {
        $("input[type='radio'").prop('checked', false)
        startGame();
        $("#game-end-div").hide();
        $("#finishGame").show();
    })
});