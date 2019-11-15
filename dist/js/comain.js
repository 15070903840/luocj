
//头部划线
(function () {
  $('.nav-cell').mouseover(function(){
    $(this).find('span').animate({width:$(this).width()},"fast")
});
$('.nav-cell').mouseout(function(){
    $(this).find('span').animate({width:0},"fast")
})
})();

//选项切换
(function () {
  var olo = document.querySelectorAll('.color ul li');
  var oli = document.querySelectorAll('.type ul li');
  var caselist = document.querySelector('.case-list');
  for (var i = 0; i < oli.length; i++) {
    oli[i].index = i;
    oli[i].onclick = function () {
      //循环切换
      for (var i = 0; i < oli.length; i++) {
        oli[i].classList.remove('active');
      };
      oli[this.index].classList.add('active');
      caselist.innerHTML = '';

      if (this.index == 0) {
        resquajax('a05');
      }
      for (var i = 0; i < olo.length; i++) {
        if (olo[i].getAttribute('class') == 'active') {
          var date = olo[i].getAttribute('date');
          var number = date + this.getAttribute('date');
          resquajax(number);
        } else {
          var number = this.getAttribute('date');
          resquajax(number);
        }

      }

    }
  }



  for (var i = 0; i < olo.length; i++) {
    olo[i].index = i;
    olo[i].onclick = function () {
      //循环切换
      for (var i = 0; i < olo.length; i++) {
        olo[i].classList.remove('active');
      };
      olo[this.index].classList.add('active');
      caselist.innerHTML = '';


      if (this.index == 0) {
        resquajax('a05');
      }
      //数据请求
      for (var i = 0; i < oli.length; i++) {
        if (oli[i].getAttribute('class') == 'active') {
          var data = oli[i].getAttribute('date');
          var number = this.getAttribute('date') + data;
          resquajax(number);
        } else {
          var number = this.getAttribute('date');
          resquajax(number);
        };
      }
    }
  }


  function resquajax(number) {
    ajax({
      url: './post.php',
      type: 'get',
      data: 'number=' + number,
      success: function (date) {
        var json = JSON.parse(date);
        var result = "";
        json.forEach(function (json) {
          result += '<li class="case-cell" > <a href="big.html" target="_blink"><img src="' + json.imgurl + '" title="图片" class="cell-image" /><div class="cell-box"></div><p class="case-name">' + json.friend + '</p><div class="cell-sign"><span class="case-thing">' + json.title + '</span><p class="case-where">' + json.hotel + '</p><p class="case-date">' + json.people + '</p></div></a></li >';
        });
        caselist.innerHTML += result;
        var caseli = document.querySelectorAll('.case-list li');
        for (var i = 1; i < caseli.length; i += 3) {
          caseli[i].classList.add('case-commn');
        }
      },
      failed: function (status) {
        alert('请求失败');
      }
    });
  }
  resquajax('a02')


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
})();


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


(function () {
  var toolral = document.querySelectorAll('.toolar div');
  var from = document.querySelector('.resertation-from');
  var mask = document.querySelector('.uis-mask');
  var btn = document.querySelector('.resertation-from-btn');
  var omserver = document.querySelector('.other-model-server');
  var caselist = document.querySelector('.case-list');
  var timer;
  var arr = [];
  var nonk = ['a01', 'a02', 'a', 'c', 'b', 'd', 'e', '01', '02','b02','b03','b03','b04','b05','c02','c03','c04'];
  for (var i = 0; i < toolral.length; i++) {
    toolral[i].index = i;
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


    toolral[i].onclick = function () {
      if (this.index == 0) {
        from.style.display = 'block';
        mask.style.display = 'block';

      }
      if (this.index == 1) {
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

  window.onscroll = function () {
    var topheight = document.documentElement.scrollTop;
    var cliheight = document.documentElement.clientHeight;
    var offset = document.documentElement.offsetHeight;
    if (topheight > 800) {
      toolral[3].style.display = 'block';
    } else {
      toolral[3].style.display = 'none';
    }

    if (offset - topheight - cliheight < 500) {
      var mlgb = new Promise(function (resolve, reject) {
        var index = Math.round(Math.random() * 8)
        for (var i = 0; i < 1; i++) {
          if (!arr.includes(nonk[index])) {
            arr.push(nonk[index]);
            resolve(nonk[index]);
          } else {
            i = 0;
          }
        };
      })
      mlgb.then(function (mok) {
        ajax({
          url: './post.php',
          type: 'get',
          data: 'number=' + mok,
          success: function (date) {
            var json = JSON.parse(date);
            var result = "";
            json.forEach(function (json) {
              result += '<li class="case-cell" > <a href="big.html" target="_blink"><img src="' + json.imgurl + '" title="图片" class="cell-image" /><div class="cell-box"></div><p class="case-name">' + json.friend + '</p><div class="cell-sign"><span class="case-thing">' + json.title + '</span><p class="case-where">' + json.hotel + '</p><p class="case-date">' + json.people + '</p></div></a></li >';
            });
            caselist.innerHTML += result;
            var caseli = document.querySelectorAll('.case-list li');
            for (var i = 1; i < caseli.length; i += 3) {
              caseli[i].classList.add('case-commn');
            }
          },
          failed: function (status) {
            alert('请求失败');
          }
        });
      }, function () { })

    }
  }
})();

(function () {
  var donem = document.querySelector('.other-model-server .nation-none');
  var omserver = document.querySelector('.other-model-server');
  donem.onclick = function () {
    omserver.style.display = 'none';
  }
})();

//在线预约
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
        if (json.err == '0') {
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

//底部查询
(function () {
  var dalay = document.querySelector('.bottom-banner-delay');
  var osumbit = document.querySelector('.bb-sumbit');
  var input = document.querySelectorAll('.bottom-banner-from input');
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
         console.log(255555);
         
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

//ajax请求函数
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

//在线请求
(function () {
  var input = document.querySelectorAll('.input-conslt input');
  var sumbit = document.querySelector('.server-sumbit');
  var sever = document.querySelector('.other-model-server');
  var secce = document.querySelector('.other-model-server-secess');
  var resultclose = document.querySelector('.result-close');
  var againopen = document.querySelector('.again-open');
  sumbit.onclick = function () {
    var res = col(/^[\u4e00-\u9fa5]{2,4}$/, input[0].value, input[0]);
    if (!res) return;
    var res = col(/^1[0-9]{10}$/, input[1].value, input[1]);
    if (!res) return;
    var res = col(/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/, input[2].value, input[2]);
    if (!res) return;
    ajax({
      url: './resver.php',
      type: 'get',
      data: 'act=add&' + 'user=' + input[0].value + '&pass=' + input[1].value + "&wechat=" + input[2].value + "&nations=" + input[3].value,
      success: function (data) {

        var json = JSON.parse(data);
        if (json.err == 0) {
          secce.style.display = 'block';
          sever.style.display = 'none';
        }
      }
    });
    resultclose.onclick = function () {
      secce.style.display = 'none';
    }
    againopen.onclick = function () {
      secce.style.display = 'none';
      sever.style.display = 'block';
      for (var i = 0; i < input.length; i++) {
        input[i].value = '';
      }
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

