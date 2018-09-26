$(document).ready(function () {
    // on clicking of paper/rock/scissors hand
    // animate user and computer hands doing
    // throw down
    $('.choices').on('click', function (e) {

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
    });

});