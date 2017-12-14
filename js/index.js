$(function(){
	 // 导航栏点击加下划线
	     $('.nav_list li').click(function() {
	      $(this).addClass('active').siblings('.nav_list li').removeClass('active');
	    });
	   		var h_header=$(".header").height();
			var h_banner=$(".banner").height();
			var h_brand=$(".brand").height();
			var h_promotion=$(".promotion").height();
			var h_relaxtion=$(".relaxation").height();
		 var scrollEvent=function(){
			 var scrollHeight=$(window).scrollTop();
			 
		     if (scrollHeight>0&&scrollHeight<=h_banner+h_brand) {
		          $('.nav_list li').eq(0).addClass('active').siblings().removeClass('active');
		      }
		      else if (scrollHeight>h_banner+h_brand&&scrollHeight<=h_banner+h_brand+h_promotion+60) {
		          $('.nav_list li').eq(1).addClass('active').siblings().removeClass('active');
		
		      }
		      else if (scrollHeight>h_banner+h_brand+h_promotion+60&&scrollHeight<=h_banner+h_brand+h_promotion+100) {
		          $('.nav_list li').eq(2).addClass('active').siblings().removeClass('active');
								
		      }
			  else if (scrollHeight>h_banner+h_brand+h_promotion) {
		          $('.nav_list li').eq(3).addClass('active').siblings().removeClass('active');
		      }
		};
			
		$("#step1").click(function(event){
			$('html,body').animate({scrollTop:h_banner},135,scrollEvent)
			});
		$("#step2").click(function(event){
			$('html,body').animate({scrollTop:h_banner+h_brand+30+"px"},135,scrollEvent)
		});
		$("#step3").click(function(event){
			$('html,body').animate({scrollTop:h_banner+h_brand+h_promotion+70+"px"},135,scrollEvent)
		});
		$("#step4").click(function(event){
			$('html,body').animate({scrollTop:h_banner+h_brand+h_promotion+h_relaxtion},135,scrollEvent)
		});
		
		 //滚动事件
	     $(window).scroll(function(){
			scrollEvent();
	    });
	   
})
