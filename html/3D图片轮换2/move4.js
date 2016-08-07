function move(obj,json,options){
	var timer = null;
	options  = options || {};//不懂
	var type = options.type || 'linear';
	var time = options.time || 500;
	
	var start = {};
	var dis = {};

	for (var name in json) {
		start[name]=parseFloat(getStyle(obj,name));
		if (isNaN(start[name])) {
			switch(name){
				case 'left':
					start[name]=obj.offsetLeft;
				break;
				case 'top':
					start[name]=obj.offsetTop;
				break;
			}
		}
		dis[name]=json[name]-start[name];
	}

	var count = Math.floor(time/30);//总次数
	var n = 0;

	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		n++;

		for (var name in json) {
			switch(type){
				case 'linear':
				var cur = start[name]+dis[name]*n/count;
				break;

				case 'ease-in':
				var a = n/count;
				var cur = start[name]+dis[name]*(a*a*a);
				break;

				case 'ease-out':
				var a = 1-n/count;
				var cur = start[name]+dis[name]*(1-a*a*a);
				break;
			}
			
			if (name=='opacity') {
				obj.style[name]=cur;
			} else {
				obj.style[name]=cur+'px';
			}
		}
		if (n==count) {
			clearInterval(obj.timer);
			options.fn && options.fn();
		} 
	},30)	
}
function getStyle(obj,name){//获取元素所有样式值
	return (obj.currentStyle || getComputedStyle(obj,false))[name];
}
			/*alert(getStyle(owl,'width'));*/