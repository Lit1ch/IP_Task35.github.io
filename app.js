$(document).ready(function() {
    $('#hamburgerButton').on('click', function() {
        $(this).toggleClass('active');
        $('.nav_menu').toggleClass('active');
    });

    $('.nav_menu .button').on('click', function() {
        $('#hamburgerButton').removeClass('active');
        $('.nav_menu').removeClass('active');
    });
});