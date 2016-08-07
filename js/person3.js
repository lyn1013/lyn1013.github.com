function rnd(n,m){
	return parseInt(Math.random()*(m-n)+n);
}
window.onload=function(){
	//导航部分
	var navul = document.querySelector('#nav');
	var navli = navul.children;
	var oac = navli[navli.length-1];
	for (var i = 0; i < navli.length-1; i++) {
		navli[i].onmouseover=function(){
			txyd(oac,this.offsetLeft-20);
		};
	}
	//宣言部分
	var timer3 = null;
	var nparr = [];
	var onp = document.querySelector('#np');
	var npstr = "曾经的理想是做个程序员，那时以为程序就是计算机的全部。现在依然喜欢程序，但是开始明白，程序并不是计算机的全部，好的程序，好的程序员要经历漫长的修炼，就像是武林高手修炼内功比招式更重要。我是程序员，我为自己代言。。。";
	for (var i = 0; i < npstr.length; i++) {
		var npspan = document.createElement('span');
		npspan.innerHTML=npstr.charAt(i);
		onp.appendChild(npspan);
		nparr.push(npspan);
	}
	var n1 = 0;
	timer3=setInterval(function(){
		move(nparr[n1],{opacity:1})
		n1++;
		if (n1==nparr.length) {
			clearInterval(timer3);
		}
	},500)
	//技能部分
	new Chart("pie1").ratePie(90);
 	new Chart("pie2").ratePie(90);
 	new Chart("pie3").ratePie(80);
 	new Chart("pie4").ratePie(60);
	//圆周运动
	var obox2 = document.getElementById('box2');
	var oxz = document.getElementById('xz');
	var bspan=obox2.children[0];
	var timer = null;
	var r = obox2.offsetWidth/2;
	var m = 4;
	var arr0 = ['360首页','小米官网','京东首页','美丽说'];
	var arr1 = ['html/360首页/Untitled-360官网.html','html/小米官网/Untitled-小米官网.html','html/京东首页/京东.html','html/美丽说/index.html'];
	for (var i = 0; i < m; i++) {
		var bspan = document.createElement('span');
		obox2.appendChild(bspan);
	}
	var aspan = obox2.children;
	aspan[0].style.background='imgs/bg15.png';
	for (var i = 0; i < aspan.length; i++) {
		aspan[i].innerHTML=arr0[i];

		;(function(index){
			aspan[i].onclick=function(){
				window.open(arr1[index]);
			}
		})(i);
	}

	var bsys = true;
	oxz.onclick=function(){
		if (bsys) {
			for (var i = 0; i < aspan.length; i++) {
				var deg = 360/m*i;
				xz(aspan[i],deg);
			}
		} else{
			for (var i = 0; i < aspan.length; i++) {
				/*var deg = 360/m*i;*/
				xz(aspan[i],0);
			}
		}
		bsys=!bsys;
	}

	function xz(obj,target){
		clearInterval(obj.timer);
		/*var a = 0;*/
		var count = Math.ceil(1000/30);
		var start = obj.a || 0;
		var dis = target-start;//圆周度数，即运动路程
		var n = 0;
		obj.timer = setInterval(function(){
			n++;
			var a = n/count; /*var a = 1-n/count;*/
			var cur = start+dis*a;  /*var cur = dis*(1-a*a*a);*/   //dis/count*n
			var x = r+r*Math.sin(cur*Math.PI/180);
			var y = r-r*Math.cos(cur*Math.PI/180);
			obj.a = cur;
			obj.style.left = x+'px';
			obj.style.top = y+'px';
			if (n==count) {
				clearInterval(obj.timer);
			}
		},30)
	};
	//js部分
	var arr4=['九宫图，点击查看','拖拽碰撞，点击查看','图片中心放大，点击查看','无缝轮播图，点击查看','图片爆炸效果，点击查看','3D轮转图，点击查看','物体拖拽轨迹回放，点击查看','放大镜效果，点击查看'];
	var arr3 = ['html/九宫图/index.html','html/work2.html','html/work5.html','html/work4.html','html/work3.html','html/3D图片轮换2/3D轮换图.html','html/work6.html','html/work7.html'];

	var oboss1 = document.getElementById('boss1');
	var obox = oboss1.getElementsByTagName('div');
	var ap1 = oboss1.getElementsByTagName('p');
	for (var i = 0; i < obox.length; i++) {
		ap1[i].innerHTML=arr4[i];
		(function(index){
			obox[i].onclick=function(){
				window.open(arr3[index]);
			}
		})(i);
		
		obox[i].onmouseover=function(ev){
			var owl = this.children[0];
			var et = ev||event;
			var ofrom = et.fromElement||et.relatedTarget;
			if (this.contains(ofrom)) return false;
			move(owl,{left:0,top:0});
		}
		obox[i].onmouseout=function(ev){
			var owl = this.children[0];
			var et = ev||event;
			var oto = et.toElement||et.relatedTarget;
			if (this.contains(oto)) return false;
			move(owl,{left:0,top:200});
		}
	}			
}
	