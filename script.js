$(document).ready(function(){
    
    $('.star1').each(function(){

        $(this).click(function(){
            if($(this).hasClass('fa-star')){
                $(this).removeClass('fa-star');
                $(this).addClass('fa-star-o');
            }else{
                $(this).removeClass('fa-star-o');
                $(this).addClass('fa-star');
            }

        });
    });

});