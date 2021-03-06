(function ($){
    var slider = $('.colecao-wrraper-flex').slick({
        centerMode: true,
        slidesToShow: 3,
        prevArrow: '<img src="/images/pesquisa/colecao/seta-esquerda.png" class="slick-prev" alt="Esquerda" />',
        infinite:false,
        responsive: [
        {
            breakpoint: 768,
            settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
            }
        }
        ]
    });

    // Adicionar e retirar o attr dos botoes quando clica nas setas
    $('.slick-current button').attr('disabled', false);  
    $(slider).on('afterChange',function(event, slick, currentSlide){ 
        var a = $(".slick-slide").length - 1
        
        $('.slick-slide button').attr('disabled', true);      
        $('.slick-current button').attr('disabled', false);
        
        if(a >= currentSlide){
          return
        }
        $('.slick-current .botoes-colecao button').removeClass('btn-cinza');
    });

    //Envento dos botoes: adiciona os estilos e passa para o proximo slide
    $('.botoes-colecao button').on('click', function(){
        $('.slick-current .botoes-colecao button').removeClass('borda-check');
        $('.slick-current .botoes-colecao button').addClass('btn-cinza');
        $('.slick-current .botoes-colecao button').removeClass('btn-ativo');
        
        $(this).toggleClass('borda-check'); 
        $(this).parents('.bg-colecao').addClass('img-certo');
        $(this).addClass('btn-ativo');
        slider.slick('slickNext');
        $('.slick-current button').attr('disabled', false);

        var count = $('.img-certo').length;
        var universal = $('.slick-slide').length;

        if(count === universal){
            $('.btn-finalizar').attr('disabled', false);
        }else{
            $('.btn-finalizar').attr('disabled', true);
        }
    });

})($)