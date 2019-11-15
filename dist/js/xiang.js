var imgO = document.querySelector('.oufooter-tel-middleR-div .oua1 .box10')
var ewmO = document.querySelector('.oufooter-tel-middleR-div2 img')
imgO.onmouseenter = function(){
    ewmO.style.display = 'block'
}
imgO.onmouseleave = function(){
    ewmO.style.display = 'none'
}


var con = document.querySelectorAll('.content-a')
for(var i = 0;i < con.length; i++){
    con[i].onmouseenter = function(){
        this.style.marginTop = '-2px';
        this.style.boxShadow = '1px 1px 30px 0px rgba(0,0,0,.5)';
    }
    con[i].onmouseleave = function(){
        this.style.marginTop = '0';
        this.style.boxShadow = '0px 0px 0px 0px rgba(0,0,0,0)';
    }
}

