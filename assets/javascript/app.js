$(document).ready(function() {


    // Questions array
    var questions = [
        {
            question: 'How many body systems are there?',
            choices: ['4', '7', '11', '15'],
            correctAnswer: 3
        }
        {
            question: 'What connects bones and muscles together?',
            choices: ['ligaments', 'tendons', 'glue', 'cartilage'],
            correctAnswer: 2
        }
        {
            question: 'Which part of the brain keeps you breathing?',
            choices: ['Frontal lobe', 'Pituitary gland', 'Cerebellum', 'Brain stem'],
            correctAnswer: 4
        }
        {
            question: 'How many bones does an adult human have?',
            choices: ['102', '206', '254', '311'],
            correctAnswer: 2
        }
        {
            question: 'What component of the eye allows for color vision?',
            choices: ['lens', 'rods', 'cones', 'iris'],
            correctAnswer: 3
        }
        {
            question: "How long are an adult's small and large intestines, respectively?",
            choices: ['22ft, 5ft', '11ft, 2ft', '5ft, 17ft', '7ft, 30ft'],
            correctAnswer: 1
        }
        {
            question: 'What are you front teeth called?',
            choices: ['Canines', 'Chompers', 'Incisors', 'Molars'],
            correctAnswer: 3
        }
        {
            question: 'What organ removes waste from blood?',
            choices: ['Heart', 'Liver', 'Gallbladder', 'Kidneys'],
            correctAnswer: 4
        }
    ];

// Start timer countdown from 30s
var timeLeft = 30;
// Variable that will hold our setInterval that runs the timer
var timerId;

    // ON PAGE LOAD
    window.onload = function() {
        // Display start button
        // ON CLICK OF START BUTTON
        $('#start').on("click", function() {
            // Hide start button
            // Display and start countdown
            countdown();
            // Display 8 questions with answer choices
            // Display 'done' button

            // Use setInterval to start the count and set the timer to running in 1000ms increments
            timerId = setInterval(countdown, 1000);
        }
    }

    // COUNTDOWN TIMER


    function countdown() {

        // AT END OF TIMER OR WHEN 'DONE' BUTTON PRESSED
        if (timeLeft !== 0) {
            // Display countdown
            $('#time-left').html(timeLeft + ' seconds remaining');
            timeLeft--;
        }
        else {
            clearTimeout(timerId);
            // Hide questions
            // Display 'All Done!' message
            // Push correct, incorrect, and unanswered questions to array
            // Display amount of correct, incorrect, and unanswered questions (array length)
        }
    }
}


// ON CLICK OF START BUTTON
    // Start timer countdown from 30s, 1000ms increment
    // Display 8 questions with answer choices
    // Display 'done' button

    // AT END OF TIMER OR WHEN 'DONE' BUTTON PRESSED
    // Hide questions
    // Display 'All Done!' message
    // Push correct, incorrect, and unanswered questions to array
    // Display amount of correct, incorrect, and unanswered questions (array length)
