






















/*第四块儿*/
$(function(){
	var oli=$('#nu li');
	var odiv=$('#navb div');
	oli.mouseover(function(){
		oli.removeClass('nul');
		odiv.hide();
		$(this).addClass('nul');
		odiv.eq($(this).index()).show();
	})

})
/*第四块儿*/
/*一楼*/
$(function(){
	var oli=$('#lyn li');
	var odiv=$('.content');
	oli.mouseover(function(){		
		oli.removeClass('li1');
		odiv.hide();
		$(this).addClass('li1');
		odiv.eq($(this).index()).show();
	})
})

/*二楼*/
$(function(){
	var oli=$('#ld li');
	var odiv=$('.content2');
	oli.mouseover(function(){		
		oli.removeClass('li1');
		odiv.hide();
		$(this).addClass('li1');
		odiv.eq($(this).index()).show();
	})
})

/*二楼*/

/*三楼*/
$(function(){
	var odiv=$('.content3');
	var oli=$('#ld1 li');
	oli.mouseover(function(){
		odiv.hide();
		odiv.eq($(this).index()).show();
	})
})

/*三楼*/

/*四楼*/
$(function(){
	var odiv=$('.content4');
	var oli=$('#ld2 li');
	oli.mouseover(function(){
		odiv.hide();
		odiv.eq($(this).index()).show();
	})
})
/*四楼*/

/*五楼*/
$(function(){
	var odiv=$('.content5');
	var oli=$('#ld3 li');
	oli.mouseover(function(){
		odiv.hide();
		odiv.eq($(this).index()).show();
	})
})

/*五楼*/


