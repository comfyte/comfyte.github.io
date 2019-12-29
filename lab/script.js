$(document).ready(function () {
    $('.navigation').on('click', 'a', function () {
        $('.navigation').removeClass('active');
        $(this).parent().addClass('active');
    });
    // $('.bg-img').css('opacity', '0').load( function() {
    //     $(this).css('opacity', '1');
    // });
});

function hom() {
    if ( $('.main-overlay').css('width') != '50%' ) {
        $('.main-overlay').css('width', '').css('background-color', '');
        setTimeout( function(){$('.main-overlay').css('box-shadow', '')}, 500 );
    }
}

function ame() {
    if ( $('.main-overlay').css('width') != '100%' ) {
        $('.main-overlay').css('width', '100%').css('background-color', 'rgba(0, 0, 0, 1)').css('box-shadow', 'none');
    }
}