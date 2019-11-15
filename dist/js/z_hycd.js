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
		
		if(i == 3){
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
				clearInterval(time1)
			}
			ulWy1P[index].style.width = w + '%'
			
		},10)
	}		
	})(i)
}

//轮播图
var imgs = document.querySelectorAll('.lunb img')
var lis = document.querySelectorAll('.nav li')
var dyh = document.querySelector('.wy4 .dayuhao')
var xyh = document.querySelector('.wy4 .xiaoyuhao')
var indexZ = 0
var timeL = setInterval(lunbH,2000)//每两秒播一次

	dyh.onclick = function(){
		lunbH()
	}
	xyh.onclick = function(){
		lunbH()
		lunbH()
		lunbH()
	}


//清除激活状态
function activeZ(){
	for(var i = 0,len = lis.length;i < len;i++){
		imgs[i].classList.remove('active_z')
		lis[i].classList.remove('active_z')
	}
}
//轮播
function lunbH(){
	indexZ++
	activeZ()
	imgs[indexZ].classList.add('active_z')
	lis[indexZ].classList.add('active_z')
	if(indexZ == lis.length - 1){
		indexZ = -1
	}
}

var dyhWy6 = document.querySelector('.wy6 .dayuhao')
var xyhWy6 = document.querySelector('.wy6 .xiaoyuhao')
var leftWy6 = document.querySelectorAll('.wy6 .wy6-left')
console.log(leftWy6[0].getAttribute('class'))
dyhWy6.onclick = function (){
	for(var i = 0,len = leftWy6.length;i < len;i++){
		if(leftWy6[i].getAttribute('class') == 'wy6-left active_z'){
			leftWy6[i].classList.remove('active_z')
		}else{
			leftWy6[i].classList.add('active_z')
		}
		
	}
}
xyhWy6.onclick = function (){
	for(var i = 0,len = leftWy6.length;i < len;i++){
		if(leftWy6[i].getAttribute('class') == 'wy6-left active_z'){
			leftWy6[i].classList.remove('active_z')
		}else{
			leftWy6[i].classList.add('active_z')
		}
		
	}
}

var dyhWy7 = document.querySelector('.wy7 .dayuhao-2')
var xyhWy7 = document.querySelector('.wy7 .xiaoyuhao-2')
var imgsWy7 = document.querySelector('.wy7 .imgs')

var imgsL = 0
xyhWy7.onclick = function (){
	imgsL += 180
	if(imgsL > 100){
		imgsL = -370
	}
	imgsWy7.style.left = imgsL + 'px'
}
dyhWy7.onclick = function (){
	imgsL -= 180
	if(imgsL < -400){
		imgsL = 0
	}
	imgsWy7.style.left = imgsL + 'px'
}

//wy10设置
var imgsWy10 = document.querySelectorAll('.wy10 .bottom-2 .bottom-2-right img')
var divWy10 = document.querySelector('.wy10 .bottom-2 .bottom-2-right div')

imgsWy10[0].onmouseenter = function(){
	divWy10.style.display = 'block'
}
imgsWy10[0].onmouseleave = function(){
	divWy10.style.display = 'none'
}
