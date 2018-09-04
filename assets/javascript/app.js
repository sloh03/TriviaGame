$(document).ready(function() {

    // Hide done button
    $('#done').hide();
    $('#results-name').hide();
    
    // ON CLICK OF START BUTTON
    $('#start').on("click", function() {
        // Display and start countdown
        startTimer();
        // Hide instructions
        $('#instructions').hide();
        // Hide start button
        $('#start').hide();
        // Display 8 questions with answer choices in 'questions' div
        displayQuestions();
        // Display 'done' button
        $('#done').show();
    });

    // COUNTDOWN TIMER
    // Start timer countdown from 45s
    var timeLeft = 45;
        
    // Variable that will hold our setInterval that runs the timer
    var timerId;

    // Use setInterval to start the count and set the timer to running in 1000ms increments
    function startTimer() {
        timerId = setInterval(countdown, 1000);
    }

    // Create countdown function
    function countdown() {

        // While timer is running
        if (timeLeft !== -1) {
            // Display countdown
            $('#time-left').html(timeLeft + ' seconds remaining');
            timeLeft--;
        }
        // AT END OF TIMER, END QUIZ
        if (timeLeft === -1) {
            endQuiz();
        }
    }

    // ON CLICK OF DONE BUTTON, END QUIZ
    $('#done').on("click", endQuiz);

    // Create end quiz function
    function endQuiz() {
        // Clear timer
        clearTimeout(timerId);
        // Change to results
        $('#game-name').hide();
        $('#results-name').show();
        // Hide questions
        $('#questions').hide();
        // Hide timer
        $('#time-left').hide();
        // Hide 'Done' button
        $('#done').hide();
        // Count correct and incorrect questions, subtract from total to count unanswered questions
        checkAnswers();
        // Display 'All Done!' message and amount of correct, incorrect, and unanswered questions (array length)
        $('#results').append(
            'Your quiz has been submitted.' + '<br><br>' + 
            'Correct Answers: ' + amountCorrect + '<br>' +
            'Incorrect Answers: ' + amountIncorrect + '<br>' +
            'Unanswered: ' + amountUnanswered
        );
    }

    // DISPLAY QUIZ
    // Use array to store questions, answer choices, and correct answer
    var questions = [
        {
            question: 'How many body systems are there?',
            choices: ['4', '7', '11', '15'],
            correctAnswer: 2
        },
        {
            question: 'What connects bones and muscles together?',
            choices: ['Ligaments', 'Tendons', 'Glue', 'Cartilage'],
            correctAnswer: 1
        },
        {
            question: 'Which part of the brain keeps you breathing?',
            choices: ['Frontal lobe', 'Pituitary gland', 'Cerebellum', 'Brain stem'],
            correctAnswer: 3
        },
        {
            question: 'How many bones does an adult human have?',
            choices: ['102', '206', '254', '311'],
            correctAnswer: 1
        },
        {
            question: 'What component of the eye allows for color vision?',
            choices: ['Lens', 'Rods', 'Cones', 'Iris'],
            correctAnswer: 2
        },
        {
            question: "How long are an adult's small and large intestines, respectively?",
            choices: ['22ft, 5ft', '11ft, 2ft', '5ft, 17ft', '7ft, 30ft'],
            correctAnswer: 0
        },
        {
            question: 'What are you front teeth called?',
            choices: ['Canines', 'Chompers', 'Incisors', 'Molars'],
            correctAnswer: 2
        },
        {
            question: 'What organ removes waste from blood?',
            choices: ['Heart', 'Appendix', 'Gallbladder', 'Kidneys'],
            correctAnswer: 3
        }
    ];

    // Create function to display all quiz questions and answers
    function displayQuestions() {

        // Loop through questions array
        for (var i = 0; i<questions.length; i++) {

            var question = questions[i].question;
            var choices = questions[i].choices;

            // Display each question
            $('#questions').append((i+1) + '. ' + question + '<br><br>');

            // Display all answer choices using radio buttons
            $('#questions').append("<label>" + "<input type='radio' name='quiz" + (i+1) + "'id='" + (0) + "'value='" + choices[0] + "'>" + ' ' + choices[0] + "</label><br>");
            $('#questions').append("<label>" + "<input type='radio' name='quiz" + (i+1) + "'id='" + (1) + "'value='" + choices[1] + "'>" + ' ' + choices[1] + "</label><br>");
            $('#questions').append("<label>" + "<input type='radio' name='quiz" + (i+1) + "'id='" + (2) + "'value='" + choices[2] + "'>" + ' ' + choices[2] + "</label><br>");
            $('#questions').append("<label>" + "<input type='radio' name='quiz" + (i+1) + "'id='" + (3) + "'value='" + choices[3] + "'>" + ' ' + choices[3] + "</label><br>" + '<br>');
        }
    }

    // CHECK RESULTS
    // Set count variables for quiz results
    var amountCorrect = 0;
    var amountIncorrect = 0;
    var amountUnanswered = 0;

    // Create function to check answers
    function checkAnswers() {

        // Loop through all questions
        for (var i = 0; i<questions.length; i++) {

            var radios = document.getElementsByName('quiz' + (i+1));

            // Loop through sets of answer choices for each question
            for (var j = 0; j<radios.length; j++) {

                var radio = radios[j];
                var correctAnswer = questions[i].correctAnswer;

                // Check if selected answer is correct 
                if(parseInt(radio.id) === correctAnswer && radio.checked) {
                    console.log('Correct: ' + radio.id + ', ' + correctAnswer);
                    amountCorrect++;
                }
                // Check if selected answer is incorrect
                else if (parseInt(radio.id) !== correctAnswer && radio.checked) {
                    console.log('Incorrect: ' + radio.id + ', ' + correctAnswer);
                    amountIncorrect++;
                }
                // Calculate amount unanswered 
                amountUnanswered = questions.length - amountCorrect - amountIncorrect;
                
            }
        }
    }

});


// SUMMARY

// ON PAGE LOAD, DISPLAY START BUTTON
// ON CLICK OF START BUTTON
    // Hide start button
    // Start timer countdown from 30s, 1000ms increment (function)
    // Display 8 questions with answer choices (function)
    // Display 'done' button

// AT END OF TIMER OR WHEN 'DONE' BUTTON PRESSED
    // Clear timer
    // Hide questions
    // Hide timer
    // Count correct and incorrect questions, subtract from total to count unanswered questions (function)
    // Display 'All Done!' message and amount of correct, incorrect, and unanswered questions