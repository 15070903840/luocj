$('.F-header-top-a').mouseover(function(){
    $(this).find('span').animate({width:$(this).width()},"fast")
});
$('.F-header-top-a').mouseout(function(){
    $(this).find('span').animate({width:0},"fast")
})
console.log(23456);

$(document).scroll(function() {
    $(document).scroll(function(){
        var scroH = $(document).scrollTop();  //滚动高度
        var viewH = $(window).height();  //可见高度 
        var contentH = $(document).height();  //内容高度
        console.log(scroH);
        
        if(scroH > 570){
            $('.F-pink-div-img1').css({transform: "translateX(0px)",transition:"all 1s ease",opacity:1})
            $('.F-pink-div-img2').css({transform: "translateX(0px)",transition:"all 1s ease",opacity:1})
            $('.F-pink-div video').css({transform: "translateX(0px)",transition:"all 1s ease",opacity:1})
        }
        if(scroH > 1370){
            $('.F-red-div-img1').css({transform: "translateX(0px)",transition:"all 1s ease",opacity:1})
            $('.F-red-div-img2').css({transform: "translateX(0px)",transition:"all 1s ease",opacity:1})
            $('.F-red-div video').css({transform: "translateX(0px)",transition:"all 1s ease",opacity:1})
        }
        if(scroH > 2310){
            $('.F-black-div-img1').css({transform: "translateX(0px)",transition:"all 1s ease",opacity:1})
            $('.F-black-div-img2').css({transform: "translateX(0px)",transition:"all 1s ease",opacity:1})
            $('.F-black-div video').css({transform: "translateX(0px)",transition:"all 1s ease",opacity:1})
        }
        if(scroH > 3260){
            $('.F-yellow-div-img1').css({transform: "translateX(0px)",transition:"all 1s ease",opacity:1})
            $('.F-yellow-div-img2').css({transform: "translateX(0px)",transition:"all 1s ease",opacity:1})
            $('.F-yellow-div video').css({transform: "translateX(0px)",transition:"all 1s ease",opacity:1})
        }
        if(scroH > 4260){
            $('.F-orange-div-img1').css({transform: "translateX(0px)",transition:"all 1s ease",opacity:1})
            $('.F-orange-div-img2').css({transform: "translateX(0px)",transition:"all 1s ease",opacity:1})
            $('.F-orange-div video').css({transform: "translateX(0px)",transition:"all 1s ease",opacity:1})
        }
    })

})




