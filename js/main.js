$(document).ready(function () {
    $('.choices').on('click', function () {
        $('.user-choice').addClass('animate-user');
        setTimeout(function() {
            $('.user-choice').removeClass('animate-user');
        }, 1000)

        $('.computer-choice').addClass('animate-computer');
        setTimeout(function() {
            $('.computer-choice').removeClass('animate-computer');
        }, 1000)
 
    });

});