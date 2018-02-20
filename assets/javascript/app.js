$(document).ready(function() {

    // ON PAGE LOAD
    window.onload = function() {
        // ON CLICK OF START BUTTON
        $('#start').on("click", function() {
            // Hide start button
            // Display and start countdown
            countdown();
            // Display 8 questions with answer choices
            // Display 'done' button
        });
    }

    // COUNTDOWN TIMER
    // Start timer countdown from 30s
    var timeLeft = 30;
    // Variable that will hold our setInterval that runs the timer
    var timerId;
    // Use setInterval to start the count and set the timer to running in 1000ms increments
    timerId = setInterval(countdown, 1000);
    
    function countdown() {
        if (timeLeft !== 0) {
            // Display countdown
            $('#time-left').html(timeLeft + ' seconds remaining');
            timeLeft--;
        }
        // AT END OF TIMER OR WHEN 'DONE' BUTTON PRESSED
        else {
            clearTimeout(timerId);
            // Hide questions
            // Display 'All Done!' message
            // Push correct, incorrect, and unanswered questions to array
            // Display amount of correct, incorrect, and unanswered questions (array length)
        }
    }
});