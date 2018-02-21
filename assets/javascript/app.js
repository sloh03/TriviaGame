
$(document).ready(function() {

    // Hide done button
    $('#done').hide();
    
    // ON CLICK OF START BUTTON
    $('#start').on("click", function() {
        // Display and start countdown
        startTimer();
        // Hide start button
        $('#start').hide();
        // Display 8 questions with answer choices in 'questions' div
        displayQuestions();
        // Display 'done' button
        $('#done').show();
    });

    // COUNTDOWN TIMER
    // Start timer countdown from 30s
    var timeLeft = 30;
        
    // Variable that will hold our setInterval that runs the timer
    var timerId;

    // Use setInterval to start the count and set the timer to running in 1000ms increments
    function startTimer(){
        timerId = setInterval(countdown, 1000);
        console.log("test");
    }

    // Create coundown function
    function countdown() {

        if (timeLeft !== -1) {
            // Display countdown
            $('#time-left').html(timeLeft + ' seconds remaining');
            timeLeft--;
        }
        // AT END OF TIMER OR WHEN 'DONE' BUTTON PRESSED
        else {
            clearTimeout(timerId);
            // Hide questions
            // Hide timer
            // Display 'All Done!' message
            // Push correct, incorrect, and unanswered questions to array
            // Display amount of correct, incorrect, and unanswered questions (array length)
        }
    }

    // DISPLAY QUIZ
    // Use array to store questions, answer choices, and correct answer
    var questions = [
        {
            question: '1. How many body systems are there?',
            choices: ['4', '7', '11', '15'],
            correctAnswer: 3
        },
        {
            question: '2. What connects bones and muscles together?',
            choices: ['Ligaments', 'Tendons', 'Glue', 'Cartilage'],
            correctAnswer: 2
        },
        {
            question: '3. Which part of the brain keeps you breathing?',
            choices: ['Frontal lobe', 'Pituitary gland', 'Cerebellum', 'Brain stem'],
            correctAnswer: 4
        },
        {
            question: '4. How many bones does an adult human have?',
            choices: ['102', '206', '254', '311'],
            correctAnswer: 2
        },
        {
            question: '5. What component of the eye allows for color vision?',
            choices: ['Lens', 'Rods', 'Cones', 'Iris'],
            correctAnswer: 3
        },
        {
            question: "6. How long are an adult's small and large intestines, respectively?",
            choices: ['22ft, 5ft', '11ft, 2ft', '5ft, 17ft', '7ft, 30ft'],
            correctAnswer: 1
        },
        {
            question: '7. What are you front teeth called?',
            choices: ['Canines', 'Chompers', 'Incisors', 'Molars'],
            correctAnswer: 3
        },
        {
            question: '8. What organ removes waste from blood?',
            choices: ['Heart', 'Liver', 'Gallbladder', 'Kidneys'],
            correctAnswer: 4
        }
    ];

    // Set count variables for quiz results
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

    // Create function to display all quiz questions and answers
    function displayQuestions() {

        // Loop through all questions
        for (var i = 0; i<questions.length; i++) {

            // Display each question
            var question = questions[i].question;
            $('#questions').append(question + '<br>');

            // Display all answer choices using radio buttons
            var choices = questions[i].choices;
            $('#questions').append(choices.join(' ' + '<br>') + '<br>' + '<br>');

            // Check if answer is correct
            if (questions[i].correctAnswer);
        }
    }

});

// ON PAGE LOAD, DISPLAY START BUTTON
// ON CLICK OF START BUTTON
    // Hide start button
    // Start timer countdown from 30s, 1000ms increment
    // Display 8 questions with answer choices
    // Display 'done' button

// AT END OF TIMER OR WHEN 'DONE' BUTTON PRESSED
    // Hide questions
    // Hide timer
    // Display 'All Done!' message
    // Push correct, incorrect, and unanswered questions to separate arrays
    // Display amount of correct, incorrect, and unanswered questions (array length)