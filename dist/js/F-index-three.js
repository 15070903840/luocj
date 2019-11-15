$('.F-header-top-a').mouseover(function(){
    $(this).find('span').animate({width:$(this).width()},"fast")
});
$('.F-header-top-a').mouseout(function(){
    $(this).find('span').animate({width:0},"fast")
})





$(window).scroll(function(){
    if($(document).height()-$(this).height() - $(this).scrollTop() <500){
        $.ajax({
            url:'data/data.json',
            type:'get',
            dataType:'json',
            success:function(data){
                data.imgurl.forEach(function(item,index){
                    $('.F-middle-dv').append(`
                        <div class="F-middle-dvv">
                            <div class="F-middle-div1">
                                <video controls  class="F-middle-dv-video" poster="${item}">
                                    <source src="${data.videourl}" type="video/mp4">
                                    您的浏览器不支持video标签...
                                </video>
                                
                            </div>
                            <div class="F-middle-zi">
                                <span>
                                    ${data.spanurl[index]}
                                </span>
                                <p>
                                    ${data.purl[index]}
                                </p>
                            </div>
                        </div>  
                     `)
                });
                
                
            }
        })

    }
})



$('.F-middle-div1').click(function(){
    $(this).find('img').css({display:'none'})
    // $('.F-middle-dv-img2').css({display:'none'})
    $(this).closest('.F-middle-dvv').siblings().find('.F-middle-div1').find('img').css({display:'block'})
    console.log($('.F-middle-dv-video'));
    
    $('.F-middle-dv-video')[0].setAttribute('autoplay','autoplay')
    console.log($('.F-middle-dv-video')[0]);
    
})






