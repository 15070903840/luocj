var imgO = document.querySelector('.oufooter-tel-middleR-div .oua1 .box10')
var ewmO = document.querySelector('.oufooter-tel-middleR-div2 img')
imgO.onmouseenter = function(){
    ewmO.style.display = 'block'
}
imgO.onmouseleave = function(){
    ewmO.style.display = 'none'
}


var Oucr = document.querySelector('.content-right');
window.onscroll = function () {
    if(document.documentElement.scrollTop>33 && document.documentElement.scrollTop < 19430){
        Oucr.style.position = 'fixed';
        Oucr.style.top = 33+"px";
        Oucr.style.right =174 + 'px';
    }else{
        Oucr.style.position = 'static';
    }

   if(document.documentElement.offsetHeight - document.documentElement.scrollTop - document.documentElement.clientHeight < 1300){
    Oucr.style.position = 'absolute';
    Oucr.style.top = 18300+"px";
    Oucr.style.right =1 + 'px';
   }
}