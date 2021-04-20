$(function(){
	/* popup */
	$('#popup p a').click(function(){
		$('#popup').hide();
	});
	
	
	
	/* gnb */
	$('header li a').click(function(e){
		e.preventDefault();
	});
	$('.double').hover(
		function(){
			$(this).children('.hidden').stop().slideDown(300);
		}, function(){
			$(this).children('.hidden').stop().slideUp(200);
		}
	);
	
	
	
	/* all menu modal */
	$('.allMenu a').click(function(e){
		e.preventDefault();
	});
	var flag=1;
	$('.navBtn li:eq(1)').click(function(){
		$('.allMenuBack, .allMenu').fadeToggle(200);
		if(flag == 1){
			$(this).children().css({transform:'rotate(-45deg)', transition:'0.25s ease'});
			flag = 0;
		} else{
			$(this).children().css({transform:'rotate(0deg)', transition:'0.25s ease'});
			flag = 1;
		}
	});
	
	
	
	/* side menu */
	$(window).scroll(function(){
		var sctop = $(this).scrollTop();
		if(sctop < 500){
			$('aside ul li:first .sideIcon').attr('src', 'images/aside_li_on.png');
			$('aside ul li:first').siblings().find('.sideIcon').attr('src', 'images/aside_li.png');
			$('aside ul li:first .sideTitle').fadeIn(300);
			$('aside ul li:first').siblings().children('.sideTitle').fadeOut(300);
		} else if(sctop >= 501 && sctop < 1500){
			$('aside ul li:eq(1) .sideIcon').attr('src', 'images/aside_li_on.png');
			$('aside ul li:eq(1)').siblings().find('.sideIcon').attr('src', 'images/aside_li.png');
			$('aside ul li:eq(1) .sideTitle').fadeIn(300);
			$('aside ul li:eq(1)').siblings().children('.sideTitle').fadeOut(300);
		} else if(sctop >= 1501 && sctop < 2300){
			$('aside ul li:eq(2) .sideIcon').attr('src', 'images/aside_li_on.png');
			$('aside ul li:eq(2)').siblings().find('.sideIcon').attr('src', 'images/aside_li.png');
			$('aside ul li:eq(2) .sideTitle').fadeIn(300);
			$('aside ul li:eq(2)').siblings().children('.sideTitle').fadeOut(300);
		} else if(sctop >= 2301 && sctop < 3700){
			$('aside ul li:eq(3) .sideIcon').attr('src', 'images/aside_li_on.png');
			$('aside ul li:eq(3)').siblings().find('.sideIcon').attr('src', 'images/aside_li.png');
			$('aside ul li:eq(3) .sideTitle').fadeIn(300);
			$('aside ul li:eq(3)').siblings().children('.sideTitle').fadeOut(300);
		} else if(sctop >= 3701 && sctop < 4675){
			$('aside ul li:eq(4) .sideIcon').attr('src', 'images/aside_li_on.png');
			$('aside ul li:eq(4)').siblings().find('.sideIcon').attr('src', 'images/aside_li.png');
			$('aside ul li:eq(4) .sideTitle').fadeIn(300);
			$('aside ul li:eq(4)').siblings().children('.sideTitle').fadeOut(300);
		} else{
			$('aside ul li:last .sideIcon').attr('src', 'images/aside_li_on.png');
			$('aside ul li:last').siblings().find('.sideIcon').attr('src', 'images/aside_li.png');
			$('aside ul li:last .sideTitle').fadeIn(300);
			$('aside ul li:last').siblings().children('.sideTitle').fadeOut(300);
		}
	});
	$('.sideTitle').siblings('a').click(function(e){
		e.preventDefault();
	})
	$('.sideAbout').on('click', function(){
		$('html, body').stop().animate({scrollTop:910}, 800);
	});
	$('.sidePreview').on('click', function(){
		$('html, body').stop().animate({scrollTop:1840}, 800);
	});
	$('.sideReview').on('click', function(){
		$('html, body').stop().animate({scrollTop:2750}, 800);
	});
	$('.sidePromo').on('click', function(){
		$('html, body').stop().animate({scrollTop:4580}, 800);
	});
	$('.sideLoca').on('click', function(){
		$('html, body').stop().animate({scrollTop:5560}, 800);
	});
	$('.sideTop').on('click', function(){
		$('html, body').stop().animate({scrollTop:0}, 800);
	});
	
	
	
	/* main slide */
	var backIndex=0;
	setInterval(function(){
		backIndex++;
		if(backIndex == 5){backIndex = 0};
		var addImg = '<img src = "' + $('.mainSlide img').eq(backIndex).attr('src') + '">';
		$('#main>img').before(addImg);
		$('#main>img:last').fadeOut(500, function(){
			$(this).remove();
		});
	},3000);
	$('.mainSlide>img').each(function(index){
		$(this).css('left', index*1200);
	});
	setInterval(function(){
		$('.mainSlide>img').each(function(){
			var Left = parseInt($(this).css('left'));
			$(this).animate({left:Left-1200}, function(){
				if(parseInt($(this).css('left')) < -2400){
					$(this).css('left', 2400);
				}
			});
		});
	},3000);



	/* 객실 전경 */
	$('.roomlist ul li, .detail a').click(function(e){
		e.preventDefault();
	});
	var n = 0;
	var roomImgCnt = $('.roomImg article img').last().index();
	$('.roomImgBtn li:eq(1) span').text('1 / ' + roomImgCnt);
	$('.roomImgBtn li:eq(2) i').click(function(){
		n++;
		if(n == 4){
			$('.roomImg article').css({left:0});
			n = 1;
		}
		$('.roomImg article').stop().animate({left:-1140*n});
		
		var idx = n+1;
		if(idx == 4){
			idx = 1;
		}
		$('.roomImgBtn li:eq(1) span').text(idx + ' / ' + roomImgCnt);
	});
	$('.roomImgBtn li:eq(0) i').click(function(){
		n--;
		if(n == -1){
			$('.roomImg article').css({left:-1140*3});
			n = 2;
		}
		$('.roomImg article').stop().animate({left:-1140*n});
		
		var idx = n+1;
		if(idx == -1){
			idx = 3;
		}
		$('.roomImgBtn li:eq(1) span').text(idx + ' / ' + roomImgCnt);
	});
	setInterval(function(){
		$('.roomImgBtn li:eq(2) i').each(function(){
			n++;
			if(n == 4){
				$('.roomImg article').css({left:0});
				n = 1;
			}
			$('.roomImg article').stop().animate({left:-1140*n});
			
			var idx = n+1;
			if(idx == 4){
				idx = 1;
			}
			$('.roomImgBtn li:eq(1) span').text(idx + ' / ' + roomImgCnt);
		});
	},3000);



	/* 더조은 후기 팝업 */
	$('.reviewList a').click(function(e){
		e.preventDefault();
		$('.reviewPopup, .reviewPopupBack').fadeIn(300);
	});
	var a = 0;
	$('.reviewPopup>img:last').click(function(){
		$('.reviewPopup, .reviewPopupBack').fadeOut(200);
		$('.reviewPopupImg article').css({left:0});
		a = 0;
	});
	$('.popupBtnPrev').click(function(){
		a--;
		if(a == -1){
			$('.reviewPopupImg article').css({left:-1800});
			a = 2;
		}
		$('.reviewPopupImg article').stop().animate({left:-600*a});
	});
	$('.popupBtnNext').click(function(){
		a++;
		if(a == 4){
			$('.reviewPopupImg article').css({left:0});
			a = 1;
		}
		$('.reviewPopupImg article').stop().animate({left:-600*a});
	});
	// 인터넷에서 긁어온~~~ 별점 버튼 쿼리~~~~~~
	$('.starRating span').click(function(){
		$(this).parent().children('span').removeClass('on');
		$(this).addClass('on').prevAll('span').addClass('on');
		var starValue = '별점 : '+ $(this).attr("value");
		$('.starRating p').html(starValue);
		return false;
	});
	/*
		별점 5개 /반개 설정을 위해 반개씩 총 10개의 별을 html에 구성해놓고
		이미지는 회색 /파란색 별이 함께 있는 것으로 백그라운드 설정
		백그라운드 설정시 floating 및 위치 설정으로 회색으로 지정
		제이쿼리로 클릭했을때 백그라운드 위치를 바꿔 채워진 별로 보이는 class(.on)을 추가해주는 함수 구현
		attr로 클릭한 span의 value 가져와서 화면에 html로 띄워주기
	*/
	
	
	
	/* 프로모션 */
	$('.promolist a, .promoBtn a').click(function(e){
		e.preventDefault();
	});
	var b = 0;
	$('.promoBtnNext').click(function(){
		b++;
		if(b == 5){
			$('.promowrap').css({left:0});
			b = 1;
		}
		$('.promowrap').stop().animate({left:-315*b});
	});
	$('.promoBtnPrev').click(function(){
		b--;
		if(b == -4){
			$('.promowrap').css({left:-315});
			b = 0;
		}
		$('.promowrap').stop().animate({left:-315*b});
	});
});