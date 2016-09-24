// JavaScript Document
function flexslider(obj,imgs,args){
	var interval = (args && args.interval)?args.interval:4000; //动画间隔时间
	var fadeoutTime = (args && args.fadeoutTime)?args.fadeoutTime:0; //图片淡出耗时，0表示立即消失
	var fadeinTime = (args && args.fadeinTime)?args.fadeinTime:500; //图片淡入耗时
	
	if(obj && imgs){
		var ul = $("<ul></ul>");
		ul.addClass("flexslider-control");
		ul.width(imgs.length * 20);
		obj.append(ul);
		for(var i=0; i<imgs.length; i++){
			var li = $("<li></li>");
			li.addClass("flexslider-index");
			if(i == 0){
				li.addClass("flexslider-index-active");
			}
			li.click(function(e) {
				var clicked_index = obj.children("ul").children("li").index($(this));
                obj.children("img").attr("src",imgs[clicked_index]);
				$(this).siblings().removeClass("flexslider-index-active");
				$(this).addClass("flexslider-index-active");
            });
			ul.append(li);
		}
		
		setTimeout(fx, interval);
	}
	
	function fx(){
		obj.fadeOut(fadeoutTime,function(){
			var img = $(this).children("img");					
			var src = img.attr("src");
			for(var x=0; x < imgs.length; x++){
				if(src == imgs[x]){
					if(x < (imgs.length - 1)){
						img.attr("src",imgs[x+1]);
						adjust_index(x+1);
						return;
					}else{
						img.attr("src",imgs[0]);
						adjust_index(0);
						return;
					}
				}
			}
		}).fadeIn(fadeinTime);
		
		setTimeout(fx, interval);
	}
	
	function adjust_index(index){
		obj.children("ul").children("li.flexslider-index-active").removeClass("flexslider-index-active");
		obj.children("ul").children("li").eq(index).addClass("flexslider-index-active");
	}
}
