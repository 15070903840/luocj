
//首页下划线变换
(function () {
  (function () {
    $('.nav-cell').mouseover(function(){
      $(this).find('span').animate({width:$(this).width()},"fast")
  });
  $('.nav-cell').mouseout(function(){
      $(this).find('span').animate({width:0},"fast")
  })
  })();

})();


//首页banner轮播图
(function () {
  var oImgs = document.querySelectorAll('.swiper-image ul li');
  var oLis = document.querySelectorAll('.swiper-bullts span');
  
  var index = 0;
  var timer;
  start();
  for (var i = 0; i < oLis.length; i++) {
    oLis[i].index = i;
    oLis[i].onclick = function () {
      clearInterval(timer);
      index = this.index;
      activeOne();
    };

    oLis[i].onmouseleave = function () {
      start();
    }
  };

  function start() {
    clearInterval(timer);
    timer = setInterval(function () {
      index++;
      if (index > 2) {
        index = 0;
      }
      activeOne();
    }, 3000)
  };
  function activeOne() {
    for (var i = 0; i < oLis.length; i++) {
      oImgs[i].classList.remove('active');
      oLis[i].classList.remove('swiper-pagation-buttls-active');
    }
    oImgs[index].classList.add('active');
    oLis[index].classList.add('swiper-pagation-buttls-active');
  };

})();


//首页划过效果
(function () {
  var orecomand = document.querySelectorAll('.recomand-cell');
  for (var i = 0; i < orecomand.length; i++) {
    orecomand[i].index = i
    orecomand[i].onmouseenter = function () {
      orecomand[this.index].style.marginTop = '-2px';
      orecomand[this.index].style.boxShadow = '1px 1px 30px 0px rgba(0,0,0,.5)';
    }
    orecomand[i].onmouseleave = function () {
      orecomand[this.index].style.marginTop = '0px';
      orecomand[this.index].style.boxShadow = '0px 0px 0px 0px rgba(0,0,0,0)';


    }
  }
})();


//首页划过效果
(function () {
  var comand = document.querySelectorAll('.atricl-container-list li');
  for (var i = 0; i < comand.length; i++) {
    comand[i].index = i
    comand[i].onmouseenter = function () {
      comand[this.index].style.marginTop = '-2px';
      comand[this.index].style.boxShadow = '1px 1px 30px 0px rgba(0,0,0,.5)';
    }
    comand[i].onmouseleave = function () {
      comand[this.index].style.marginTop = '0px';
      comand[this.index].style.boxShadow = '0px 0px 0px 0px rgba(0,0,0,0)';


    }
  }
})();


//底部二维码显示隐藏
(function () {
  var mok = document.querySelector('.footer-cell .fl');
  var mage = document.querySelector('.footer-cell .fr-image');

  mok.onmouseenter = function () {
    mage.style.display = 'block';
  };

  mok.onmouseleave = function () {
    mage.style.display = 'none';
  }
})();


//页面底部文字划过效果
(function () {
  var footercontain = document.querySelectorAll('.footer .nation a');
  var foottain = document.querySelectorAll('.link-ist a');
  for (var i = 0; i < footercontain.length; i++) {
    footercontain[i].onmouseenter = function () {
      this.style.opacity = '1';
    }
    footercontain[i].onmouseleave = function () {
      this.style.opacity = '0.69';
    }
  }

  for (var i = 0; i < foottain.length; i++) {
    foottain[i].onmouseenter = function () {
      this.style.color = '#ffffff';
    }
    foottain[i].onmouseleave = function () {
      this.style.color = '#ccc';
    }
  }
})();

//页面右侧固定点击效果
(function () {
  var toolral = document.querySelectorAll('.toolar div');
  var from = document.querySelector('.resertation-from');
  var mask = document.querySelector('.uis-mask');
  var btn = document.querySelector('.resertation-from-btn');  
  var omserver = document.querySelector('.other-model-server');
  var timer;
  for (var i = 0; i < toolral.length; i++) {
    toolral[i].index = i;
    //划过效果
    toolral[i].onmouseenter = function () {
      var mon = this.firstElementChild
      if (this.index == 2) {
        mon.style.display = 'block';
      }
      this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';

    }
    toolral[i].onmouseleave = function () {
      this.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      var mon = this.firstElementChild
      if (this.index == 2) {
        mon.style.display = 'none';
      }
    }
//点击效果
    toolral[i].onclick = function () {
      if (this.index == 0) {
        from.style.display = 'block';
        mask.style.display = 'block';

      }
        if(this.index == 1){
          omserver.style.display = 'block';
        }
      if (this.index == 3) {
        clearTimeout(timer);
        var top = document.documentElement.scrollTop;
        timer = setInterval(function () {
          top -= 20;
          if (top < 0) {
            clearTimeout(timer);
            top = 0;
            this.style.display = "none";
          }
          document.documentElement.scrollTop = top;
        }.bind(this), 1);
      }
    }

    btn.onclick = function () {
      from.style.display = 'none';
      mask.style.display = 'none';
    }
  }

 
})();

(function(){
  var done = document.querySelector('.nation-none');
  var omserver = document.querySelector('.other-model-server');
  done.onclick = function(){
    omserver.style.display = 'none';
  }
})();

//右侧在线请求
(function () {
  var input = document.querySelectorAll('.input-cell input');
  var osumbit = document.querySelector('.resertation-from .sumbit');
  var inputeorr = document.querySelector('.resertation-from .input-eorr');
  var resut = document.querySelector('.resertation-resut');
  var from = document.querySelector('.resertation-from');
  var yes = document.querySelector('.resertation-yes');
  var mask = document.querySelector('.uis-mask');

  osumbit.onclick = function () {
    var res = col(/^[\u4e00-\u9fa5]{2,4}$/, input[0].value, '姓名有误');
    if (!res) return;

    var res = col(/^1[0-9]{10}$/, input[1].value, '手机号码有误');
    if (!res) return;


    ajax({
      url: './login.php',
      type: 'get',
      data: 'act=add&' + 'user=' + input[0].value + '&pass=' + input[1].value,
      success: function (date) {
        var json = JSON.parse(date);
      if(json.err == '0'){
        resut.style.display = 'block';
        from.style.display = 'none';
        mask.style.display = 'none';
        input[0].value = '';
        input[1].value = '';
      }
      },
      failed: function (status) {
        alert('请求失败');
      }
    });
    

  }

  yes.onclick = function () {
    resut.style.display = 'none';
  }

  function col(regexp, namevalue, name) {
    var res = regexp.test(namevalue);
    if (!res) {
      inputeorr.innerHTML = name;
    }
    return res
  }


})();

//右侧在线咨询请求
(function(){
  var input = document.querySelectorAll('.input-conslt input');
  var sumbit = document.querySelector('.nation-consult .server-sumbit');
  var sever = document.querySelector('.other-model-server');
  var secce = document.querySelector('.other-model-server-secess');
  var resultclose = document.querySelector('.result-close');
  var againopen = document.querySelector('.again-open');
  sumbit.onclick = function(){
    var res = col(/^[\u4e00-\u9fa5]{2,4}$/, input[0].value, input[0]);
    if (!res) return;
    var res = col(/^1[0-9]{10}$/, input[1].value, input[1]);
    if (!res) return;
    var res = col(/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/, input[2].value, input[2]);
    if (!res) return;
    ajax({
      url: './resver.php',
      type: 'get',
      data: 'act=add&' + 'user=' + input[0].value + '&pass=' + input[1].value + "&wechat=" + input[2].value + "&nations="+input[3].value,
      success:function(data){
        var json = JSON.parse(data);
        if(json.err == 0){   
          secce.style.display = 'block';
          sever.style.display = 'none';
        }
      }
    })
  }

  resultclose.onclick = function(){
    secce.style.display = 'none';
  }
  againopen.onclick = function(){
    secce.style.display = 'none';
    sever.style.display = 'block';
    for(var i = 0;i<input.length;i++){
      input[i].value = '';
    }
  }



  function col(regexp, namevalue, name) {
    var res = regexp.test(namevalue);
    if (!res) {
      name.value = '';
    }
    return res
  }
})();

//底部固定效果
(function () {
  var dalay = document.querySelector('.bottom-banner-delay');
  var osumbit = document.querySelector('.bb-sumbit');
  var input = document.querySelectorAll('.bb-input-cell input');
  setTimeout(function () {
    dalay.style.display = 'block';
  }, 2000)

  osumbit.onclick = function () {
    var res = col(/^[\u4e00-\u9fa5]{2,4}$/, input[0].value, input[0]);
    if (!res) return;
    var res = col(/^1[0-9]{10}$/, input[1].value, input[1]);
    if (!res) return;

    ajax({
      url: './login.php',
      type: 'get',
      data: 'act=add&' + 'user=' + input[0].value + '&pass=' + input[1].value,
      success: function (date) {
        var json = JSON.parse(date);
        if(json.err == '0'){
           osumbit.innerHTML = json.msg;
          osumbit.style.backgroundColor = "green";
          localStorage.setItem("abc" , input[1].value);
          input[0].value = '';
          input[1].value = '';
        setTimeout(function () {
          osumbit.innerHTML = '免费回电';
          osumbit.style.backgroundColor = "#FB515A";
          window.open('./login.html');
        }, 1000);
        }else{
          osumbit.innerHTML = json.msg;
        }
        
       
      },
      failed: function (status) {
        alert('请求失败');
      }
    });


  }

  function col(regexp, namevalue, name) {
    var res = regexp.test(namevalue);
    if (!res) {
      name.value = '';
    }
    return res
  }
})();

//数据请求封装函数
function ajax(option) {
  // 1.创建XMLHttpRequest对象(数据交互对象)
  if (window.XMLHttpRequest) {
    var xhr = new XMLHttpRequest();
  } else {
    var xhr = ActiveXObject('Microsoft.XMLHTTP');//ie 5 6
  }
  // data -> 'a=123&b=456'
  if (option.type == 'get' || option.type == 'GET') {
    // 2.打开与服务器的链接
    xhr.open(option.type, option.url + '?' + option.data + '&_=' + new Date().getTime(), true);//解决缓存
    // 3.发送请求
    xhr.send(null);//get请求
  } else if (option.type == 'post' || option.type == 'POST') {
    // 2.打开与服务器的链接
    xhr.open(option.type, option.url, true);//解决缓存
    // 模拟表单form的post方式提交数据，在send之前设置
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // 3.发送请求
    xhr.send(option.data);//post请求
  } else {
    alert('目前只支持get和post请求方式!');
  }

  // 4.等待服务的响应
  xhr.onreadystatechange = function () {
    // console.log(xhr.readyState);//2 3 4
    if (xhr.readyState == 4) {//请求完成
      if (xhr.status == 200) {//请求成功
        option.success(xhr.responseText);
      } else {//请求失败
        option.failed(xhr.status);
      }
    }
  }
}

//图片加载请求
(function(){
  var caselist = document.querySelector('.case-list');
  var toolargotop  =document.querySelector('.toolar-gotop')
  var pom = new Promise(function (resolve, reject) {
    ajax({
    url: './post.php',
    type: 'get',
    data: 'number=a05',
    success: function (date) {
      var json = JSON.parse(date);
      var result = "";
      json.forEach(function (json) {
        result += '<li class="case-cell" > <a href="big.html" target="_blink"><img data-src="' + json.imgurl + '" title="图片" class="cell-image" /><div class="cell-box"></div><p class="case-name">' + json.friend + '</p><div class="cell-sign"><span class="case-thing">' + json.title + '</span><p class="case-where">' + json.hotel + '</p><p class="case-date">' + json.people + '</p></div></a></li >';
      });
      caselist.innerHTML += result;
      var caseli = document.querySelectorAll('.case-list li');
      for (var i = 1; i < caseli.length; i += 3) {
        caseli[i].classList.add('case-commn');
      }
      var imgs = document.querySelectorAll('.cell-image');
      resolve();
    },
    failed: function (status) {
      alert('请求失败');
    }
  });
  })
  pom.then(function(){
    var windowH = document.documentElement.clientHeight || document.body.clientHeight;
    var imgs = document.querySelectorAll('.cell-image');
    window.onscroll = function(){
      var scrollT = document.documentElement.scrollTop || document.body.scrollTop;
      for (var i = 0, len = imgs.length; i < len; i++){ 
        if ( offset(imgs[i]).top <= (scrollT + windowH + 100) ) {
            imgs[i].src = imgs[i].getAttribute('data-src');
        }
    }
    if (scrollT > 800) {
      toolargotop.style.display = 'block';      
    } else {
      toolargotop.style.display = 'none';
    }
    }
    
  },function(){});

  


  function offset(obj){
    var l = 0;
    var t = 0;
    var bdl = obj.clientLeft;
    var bdt = obj.clientTop;
    while(obj){
        l = l + obj.offsetLeft+obj.clientLeft;
        t = t + obj.offsetTop+obj.clientTop;
        obj = obj.offsetParent;
    }
    return {left:l-bdl,top:t-bdt};
}
})();











