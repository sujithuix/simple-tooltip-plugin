$(function(){
    $('.t-element').hover(function(){
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>').text(title).appendTo('body').fadeIn('normal');
    }, function() {
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
    }).mousemove(function(e) {
            var mouseX = e.pageX + 20;var mouseY = e.pageY + 10;
            $('.tooltip').css({ top: mouseY, left: mouseX });
        });

});
