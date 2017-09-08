//仿锚点
	$('.qindex').on('tap','a',function(){
			var aim = $(this).attr('anchor');	//跳转对象id
			var pos = $("#"+aim).offset().top-70;
			if(true){
				//平滑
				$("body").animate({scrollTop: pos}, 500);	
			}else{
				$(window).scrollTop(pos);
			}
			return false;
	})
	//头部固定	
 	var flag=true;
 	$(function(){
 		$(window).on('scroll',function(){
 			if(flag){
	 			 c = []	
	 			 $(".Tcontent .cityName").each(function() {
	                c.push($(this).offset().top-66)
	             });
	             d = c.length;
	             flag=false;
 			}	 		
            var f = $(document)
              , e = $(".Tcontent");
			$.each(c, function(g, j) {
                var h = f.scrollTop();
                if (h >= j && (g == d - 1 || (g < d && h <= c[g + 1]))) {
                    $(".ckeyWord").removeClass("fixed");
                    $(".cityName:eq(" + g + ")").find('p').addClass("fixed");
                    e.addClass("pad30")
                } else {
                    if (h < c[0]) {
                        $(".ckeyWord").removeClass("fixed");
                        e.removeClass("pad30")
                    }
                }
            })
 		})
 	})
