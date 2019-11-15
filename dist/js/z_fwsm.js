var ulWy1A = document.querySelectorAll('#wy1 ul li a')
var ulWy1P = document.querySelectorAll('#wy1 ul li  a p')



//添加导航样式

// 	ulWy1A[0].onmouseenter = function(){
// 		var w = 0
// 		var time1
// 		time1 = setInterval(function(){
// 			w += 3
// 			if(w >= 100){
// 				clearInterval(time1)
// 			}
// 			ulWy1P[0].style.width = w + '%'
// 			
// 		},10)
// 	}	
// 	ulWy1A[0].onmouseleave = function(){
// 		var w = 100
// 		var time1
// 		time1 = setInterval(function(){
// 			w -= 3
// 			if(w <= 0){
// 				clearInterval(time1)
// 			}
// 			ulWy1P[0].style.width = w + '%'
// 			
// 		},10)
// 	}	

for(var i = 0,len = ulWy1A.length;i < len;i++){
	(function(index){
		
		if(i == 4){
			return
		}
	ulWy1A[index].onmouseenter = function(){
		var w = 0
		var time1
		time1 = setInterval(function(){
			w += 3
			if(w >= 100){
				clearInterval(time1)
			}
			ulWy1P[index].style.width = w + '%'
			
		},10)
	}	
	ulWy1A[index].onmouseleave = function(){
		var w = 100
		var time1
		time1 = setInterval(function(){
			w -= 3
			if(w <= 0){
				w = 0
				ulWy1P[index].style.width = w + '%'
				clearInterval(time1)
			}
			ulWy1P[index].style.width = w + '%'
			
		},10)
	}		
	})(i)
}

var dyhWy3 = document.querySelector('.wy3 .dayuhao')
var xyhWy3 = document.querySelector('.wy3 .xiaoyuhao')
var imgs_z = document.querySelectorAll('.wy3 .lunb img')
var span_z = document.querySelector('.wy3 .lunb .t1-wy3 span')
var arrWy3 = ['佟大为、文章、马伊琍、沈傲君、郎平、秦凯、何姿等明星之选','《失恋33天》、《我愿意》、《北上广依然相信爱情》背后的婚礼支持专家']
dyhWy3.onclick = function (){
	for(var i = 0,len = imgs_z.length;i < len;i++){
		if(imgs_z[i].getAttribute('class') == 'active_z'){
			imgs_z[i].classList.remove('active_z')
		}else{
			imgs_z[i].classList.add('active_z')
			span_z.innerText = arrWy3[i]
		}
		
	}
}
xyhWy3.onclick = function (){
	for(var i = 0,len = imgs_z.length;i < len;i++){
		if(imgs_z[i].getAttribute('class') == 'active_z'){
			imgs_z[i].classList.remove('active_z')
		}else{
			imgs_z[i].classList.add('active_z')
			span_z.innerText = arrWy3[i]
		}
		
	}
}

//wy5样式
var lisWy5 = document.querySelectorAll('.wy5 .bottom_wy5 ul li') 
var imgsWy5 = document.querySelectorAll('.wy5 .bottom_wy5 .tp_wy5 img')
var ulWy5 = document.querySelector('.wy5 .bottom_wy5 ul')
  ulWy5.onclick = function (e) { // 事件向上绑定
    // console.log(this);
    var ev = e || event;
    var target = ev.target || ev.srcElement; // 获取事件源
    // console.log(target.innerText);
    // 判断事件源
    // console.log(target.nodeName)
    if (target.nodeName == 'LI') {  // 判断li
	
		for(var i = 0,len = lisWy5.length;i < len;i++){
 			if(target == lisWy5[i]){
				
 				for(var j = 0,len = imgsWy5.length;j < len;j++){
 					if(imgsWy5[j].getAttribute('class')){ 
						imgsWy5[j].classList.remove('active_z')
						lisWy5[j].classList.remove('active_z')
 					}
 				}
 				imgsWy5[i].classList.add('active_z')
 				lisWy5[i].classList.add('active_z')
 			}

		}
    }

  }
//wy9样式
var lisWy9 = document.querySelectorAll('.wy9 .bottomWy9 ul li') 
var imgsWy9 = document.querySelectorAll('.wy9 .bottomWy9 .imgsWy9 img')
var ulWy9 = document.querySelector('.wy9 .bottomWy9 ul')
  ulWy9.onclick = function (e) { // 事件向上绑定
    // console.log(this);
    var ev = e || event;
    var target = ev.target || ev.srcElement; // 获取事件源
    // console.log(target.innerText);
    // 判断事件源
    // console.log(target.nodeName)
    if (target.nodeName == 'LI') {  // 判断li
	
		for(var i = 0,len = lisWy9.length;i < len;i++){
 			if(target == lisWy9[i]){
				
 				for(var j = 0,len = imgsWy9.length;j < len;j++){
 					if(imgsWy9[j].getAttribute('class')){ 
						imgsWy9[j].classList.remove('active_z')
						lisWy9[j].classList.remove('active_z')
 					}
 				}
 				imgsWy9[i].classList.add('active_z')
 				lisWy9[i].classList.add('active_z')
 			}

		}
    }

  }
//wy7样式
var dyhWy11 = document.querySelector('.wy11 .dayuhao-2')
var xyhWy11 = document.querySelector('.wy11 .xiaoyuhao-2')
var imgsWy11 = document.querySelector('.wy11 .bottomWy11')

var imgsL = 0
xyhWy11.onclick = function (){
	imgsL += 320
	if(imgsL > 100){
		imgsL = -640
	}
	imgsWy11.style.left = imgsL + 'px'
}
dyhWy11.onclick = function (){
	imgsL -= 320
	if(imgsL < -640){
		imgsL = 0
	}
	imgsWy11.style.left = imgsL + 'px'
}


//wy14
var imgsWy14 = document.querySelectorAll('.wy14 .bottom-2 .bottom-2-right img')
var divWy14 = document.querySelector('.wy14 .bottom-2 .bottom-2-right div')

imgsWy14[0].onmouseenter = function(){
	divWy14.style.display = 'block'
}
imgsWy14[0].onmouseleave = function(){
	divWy14.style.display = 'none'
}

//ajax
var ipt1 = document.querySelector('.wy3 .dengji_z #ipt1')
var ipt2 = document.querySelector('.wy3 .dengji_z #ipt2')
var ipt3 = document.querySelector('.wy3 .dengji_z .btn_z')

ipt3.onclick = function(){
	 ajax({
	 	    url: 'http://localhost/text/we-are-team/zhengxiaohui/z_fwsm/php/index.php',
	 	    type: 'get',
	 	    data: 'i1='+ipt1.value+'&i2='+ipt2.value,
	 	    success: function(data){
	 // 	        var json = JSON.parse(data);
	 			
	  				alert(data);
	 	    },
	 	    failed: function(code){
	 	        alert('错误代码');
	 	    }
	 	});
	 }




function ajax(option){
    // 1.创建XMLHttpRequest对象(数据交互对象)
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
    } else {
        var xhr = ActiveXObject('Microsoft.XMLHTTP');//ie 5 6
    }
    // data -> 'a=123&b=456'
    if (option.type == 'get' || option.type == 'GET') {
        // 2.打开与服务器的链接
        xhr.open(option.type,option.url + '?'+ option.data + '&_='+new Date().getTime(),true);//解决缓存
        // 3.发送请求
        xhr.send(null);//get请求
    } else if (option.type == 'post' || option.type == 'POST'){
        // 2.打开与服务器的链接
        xhr.open(option.type,option.url,true);//解决缓存
        // 模拟表单form的post方式提交数据，在send之前设置
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        // 3.发送请求
        xhr.send(option.data);//post请求
    } else {
        alert('目前只支持get和post请求方式!');
    }

    // 4.等待服务的响应
    xhr.onreadystatechange = function (){
        // console.log(xhr.readyState);//2 3 4
        if (xhr.readyState == 4) {//请求完成
            if (xhr.status == 200) {//请求成功
                option.success(xhr.responseText);
            }else {//请求失败
                option.failed(xhr.status);
            }
        }
    }
}