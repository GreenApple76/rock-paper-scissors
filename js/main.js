$(document).ready(function () {
    let userScore = 0;
    let computerScore = 0;

    // on clicking of paper/rock/scissors hand
    // animate user and computer hands doing
    // throw down
    $('.choices').on('click', function (e) {
        // exit if user clicked the div container instead
        // of the rock/paper/scissors items within the container
        if (e.target.className === 'choices') {
            return;
        }

        // reset status
        $('.status').css('visibility', 'hidden');
        // reset gestures to fists for pre-game setup
        $('.user').html('<img src="img/rock.jpg" alt="Rock" class="user-choice">');
        $('.computer').html('<img src="img/rock-computer.jpg" alt="Rock - Computer" class="computer-choice">');
        
        // animate user fist
        $('.user-choice').addClass('animate-user');
        setTimeout(function() {
            $('.user-choice').removeClass('animate-user');

        }, 1000)

        // animate computer fist
        $('.computer-choice').addClass('animate-computer');
        setTimeout(function() {
            $('.computer-choice').removeClass('animate-computer');
        }, 1000)

        let userSelection = e.target.className;
        // swap out pre-game fist with
        // user selection
        setTimeout(function() {
            $('.user').html('<img src="img/'+userSelection +
            '.jpg" alt="'+userSelection +
            '" class="user-choice">');

        }, 1100);

        // swap out computer's pre-game fist with
        // random selection
        let selections = ['rock', 'paper', 'scissors'];
        let randSelect = Math.floor(Math.random()*3);
        setTimeout(function() {
            $('.computer').html('<img src="img/' + selections[randSelect] + '-computer.jpg' +
                                '" alt="'+selections[randSelect]+' - computer"'+
                                ' class="computer-choice">');
        }, 1100);

        // check for winner
        setTimeout(function() {
            let winner = null;
            let tied = null;
            if (userSelection === 'rock') {
                if (selections[randSelect] === 'rock') {
                    tied = true;
                } else if (selections[randSelect] === 'paper') {
                    winner = false;
                    computerScore++;
                } else if (selections[randSelect] === 'scissors') {
                    winner = true;
                    userScore++;
                }
            } else if (userSelection === 'paper') {
                if (selections[randSelect] === 'rock') {
                    winner = true;
                    userScore++;
                } else if (selections[randSelect] === 'paper') {
                    tied = true;
                } else if (selections[randSelect] === 'scissors') {
                    winner = false;
                    computerScore++;
                }
            } else if (userSelection === 'scissors') {
                if (selections[randSelect] === 'rock') {
                    winner = false;
                    computerScore++;
                } else if (selections[randSelect] === 'paper') {
                    winner = true;
                    userScore++;
                } else if (selections[randSelect] === 'scissors') {
                    tied = true;
                }
            }

            // update status of page with win, lose, or draw
            if (winner) {
                $('.status').html('You Win!');
            } else if (tied) {
                $('.status').html('It\'s a draw');
            } else {
                $('.status').html('You Lose');
            }
            $('.status').css('visibility', 'visible');
            $('.user-points').text(userScore);
            $('.computer-points').text(computerScore);
        }, 1200)
    });

});