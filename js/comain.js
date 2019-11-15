(function () {
  var navline = document.querySelectorAll('.navigation li span');
  var navcell = document.querySelectorAll('.navigation li a');
  var w = 0;
  var timer;
  var time;
  for (var i = 0; i < navline.length; i++) {
    if (i != 1) {
      navcell[i].index = i;
      navcell[i].onmouseenter = function () {
        clearTimeout(timer);
        var timer = setInterval(function () {
          w += 2;
          if (w == this.offsetWidth) {
            clearTimeout(timer);
          }
          navline[this.index].style.width = w + 'px';
        }.bind(this), 2)

      }
      navcell[i].onmouseleave = function () {
        clearTimeout(time);
        time = setInterval(function () {
          w -= 2;
          if (w == 0) {
            clearTimeout(time);
          }
          navline[this.index].style.width = w + 'px';
        }.bind(this), 2)
      }
    }
  }
})();


(function () {
  var oli = document.querySelectorAll('.type ul li');
  var olo = document.querySelectorAll('.color ul li');
  for (var i = 0; i < oli.length; i++) {
    oli[i].index = i;
    oli[i].onclick = function () {
      for (var i = 0; i < oli.length; i++) {
        oli[i].classList.remove('active');
      };
      oli[this.index].classList.add('active');
    }
  }
  for (var i = 0; i < olo.length; i++) {
    olo[i].index = i;
    olo[i].onclick = function () {
      for (var i = 0; i < olo.length; i++) {
        olo[i].classList.remove('active');
      };
      olo[this.index].classList.add('active');
    }
  }

})();

(function () {
  var scorlltop = document.documentElement.scrollTop;
  var cliheight = document.documentElement.clientHeight;
  var offset = document.documentElement.offsetHeight;
  window.onscroll = function () {
    if (offset - scorlltop - cliheight < 650) {
      ajax({
        url: '../post.php',
        type: 'post',
        data: 'number=a02',
        success: function (date) {
          var json = JSON.parse(date);
          console.log(date);
        },
        failed: function (status) {
          alert('请求失败');
        }
      })
  }
  }

})();