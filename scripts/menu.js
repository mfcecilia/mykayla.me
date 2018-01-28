/*scroll to menu content*/
$(".edu-btn").click(function() {
    $('html,body').animate({
        scrollTop: $(".edu").offset().top},
        'slow');
});