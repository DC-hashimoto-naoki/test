

$('.btn').on('click', function(){
    $('.img-item:first-child').clone().appendTo('.img-list');
    $('.inShort:first-child').addClass('active').clone().appendTo('.word');
})