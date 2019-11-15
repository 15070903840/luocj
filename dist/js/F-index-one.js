$('.F-header-top-a').mouseover(function(){
    $(this).find('span').animate({width:$(this).width()},"fast")
});
$('.F-header-top-a').mouseout(function(){
    $(this).find('span').animate({width:0},"fast")
})


$('.F-banner ul li').click(function(){
    var index = $(this).index();
    $(this).attr('id','Fshow').siblings().removeAttr('id');
    $('.F-banner img').eq(index).addClass('F-active1').siblings().removeClass('F-active1');
    // console.log($('.banner .F-active1').eq(index));
    // var self=this
    // $('.F-banner ul li').each(function(index,item){
    //     if(self==item){
    //         $('.F-banner ul li').removeAttr('id')
    //         $(item).attr('id','Fshow')
    //         $('.F-banner img').removeClass('F-active1');
    //         $('.F-banner img').each(function(a,b){
    //             if(a==index){
    //                 $(b).addClass('F-active1');
    //             }
    //         })
    //     }
    // })
})
// for(var i = 1;i < 6;i++){
//     console.log(i);
    
    $.ajax({
        url:'data/data.json',
        type:'get',
        dataType:'json',
        success:function(data){
            data.imggurl.forEach(function(item,index){
                $('.F-dramg-five ul').append(`
                <li style="background-image:url(${item});background-size: 300px 300px;
                background-position: center center;">
                    <div class="F-dramg-five-one">
                        <p>${data.ppurl[index]}</p>
                        <span></span>
                    </div>
                </li>
                `)
            })
        }    
    })
   

    $.ajax({
        url:'data/data.json',
        type:'get',
        dataType:'json',
        success:function(data){
            data.numurl.forEach(function(item,index){
                
            })
        }
    })



























