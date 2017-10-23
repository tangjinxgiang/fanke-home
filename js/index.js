

//轮播图
var oSlider = document.querySelector('.slider');
var aLi = oSlider.querySelectorAll('ul li');
var aDot = oSlider.querySelectorAll('.dot a');
var oBtn1 = oSlider.querySelector('.btn1');
var oBtn2 = oSlider.querySelector('.btn2');

var num = 0; //存一个变量
var timer = null;
//点击按钮切换
oBtn1.onclick = function() {
	clearInterval(timer)
	if(num == 0) {
		num = aLi.length;
	}
	num--;
	for(var j = 0; j < aDot.length; j++) {
		aDot[j].style.background = '#dddddd';
		aLi[j].style.opacity = 0;
	}
	aDot[num].style.background = '#a10000';
	aLi[num].style.opacity = 1;
}
oBtn2.onclick = function() {
	clearInterval(timer)
	if(num == aLi.length - 1) {
		num = -1;
	}
	num++;
	for(var j = 0; j < aDot.length; j++) {
		aDot[j].style.background = '#dddddd';
		aLi[j].style.opacity = 0;
	}
	aDot[num].style.background = '#a10000';
	aLi[num].style.opacity = 1;
}
oBtn1.onmouseout = function() { //鼠标移开按钮 定时器开启
	clearInterval(timer); //开启时先清除所有 不然会越来越快
	time();
}
oBtn2.onmouseout = function() {
	clearInterval(timer);
	time();
}
//点击小圆点切换
for(var i = 0; i < aDot.length; i++) {
	aDot[i].index = i; //存索引值
	aDot[i].onmouseover = function() {
		clearInterval(timer)
		for(var j = 0; j < aDot.length; j++) {
			aDot[j].style.background = '#dddddd';
			aLi[j].style.opacity = 0;
		}
		aDot[this.index].style.background = '#a10000';
		aLi[this.index].style.opacity = 1;
		num = this.index /*按钮点击时变量与索引联动*/
	}
	aDot[i].onmouseout = function() { //鼠标移开圆点 定时器开启
		time();
	}
}
time();

function time() { //自动轮播
	timer = setInterval(function() {
		if(num == aLi.length - 1) {
			num = -1;
		}
		num++;
		for(var j = 0; j < aDot.length; j++) {
			aDot[j].style.background = '#dddddd';
			aLi[j].style.opacity = 0;
		}
		aDot[num].style.background = '#a10000';
		aLi[num].style.opacity = 1;
	}, 2000)
}