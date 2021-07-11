// index.html에 대한 jquery
// 2021-07-08 제출

$(function(){
	
	// ● 날짜 출력
	
	// 날짜함수를 가져와서 변수에 넣어줍니다.
	let today = new Date();
	let year = today.getFullYear();
	let month = today.getMonth()+1;
	let date = today.getDate();
	// alert(year); 
	
	$('#date_wrap .year').text(year);
	$('#date_wrap .month').text(month);
	$('#date_wrap .date').text(date);
	
	
	
	// ● 검색어를 입력하세요
	
	// focusin과 focusout을 사용해도 되고
	// focus와 blur를 사용해도 됩니다.
	
	$('#sch_f #keyword').focus(function(){
		$(this).css('background','none')
	});

	$('#sch_f #keyword').blur(function(){
		$(this).css('background', 'url("./images/sch_guide.gif") no-repeat')
	});
	
	
	
	
	// ● 탭팬 구현
	
	$('#tabmenu .tab_btn1').click(function(){
		$('#tabmenu .tab_btn1 img').attr('src', $('#tabmenu .tab_btn1 img').attr('src').replace('out','over'));
		$('#tabmenu .tab_btn2 img').attr('src', $('#tabmenu .tab_btn2 img').attr('src').replace('over','out'));
		$('#tabmenu .tab_btn3 img').attr('src', $('#tabmenu .tab_btn3 img').attr('src').replace('over','out'));
		$('#tabmenu .pan1').show();
		$('#tabmenu .pan2').hide();
		$('#tabmenu .pan3').hide();
	});
	
	$('#tabmenu .tab_btn2').click(function(){
		$('#tabmenu .tab_btn1 img').attr('src', $('#tabmenu .tab_btn1 img').attr('src').replace('over','out'));
		$('#tabmenu .tab_btn2 img').attr('src', $('#tabmenu .tab_btn2 img').attr('src').replace('out','over'));
		$('#tabmenu .tab_btn3 img').attr('src', $('#tabmenu .tab_btn3 img').attr('src').replace('over','out'));
		$('#tabmenu .pan1').hide();
		$('#tabmenu .pan2').show();
		$('#tabmenu .pan3').hide();
	});
	
	$('#tabmenu .tab_btn3').click(function(){
		$('#tabmenu .tab_btn1 img').attr('src', $('#tabmenu .tab_btn1 img').attr('src').replace('over','out'));
		$('#tabmenu .tab_btn2 img').attr('src', $('#tabmenu .tab_btn2 img').attr('src').replace('over','out'));
		$('#tabmenu .tab_btn3 img').attr('src', $('#tabmenu .tab_btn3 img').attr('src').replace('out','over'));
		$('#tabmenu .pan1').hide();
		$('#tabmenu .pan2').hide();
		$('#tabmenu .pan3').show();
	});


	
	
	
    $('#best_bg_div').bxSlider({
        minSlides : 5,
        maxSlides : 5,
        auto: true,
        autoHover: true,
        pager: true,
        slideWidth: 122,
        slideMargin:10,
        speed: 100, pause: 1000,
        moveSlides:1
    });
     // bxSlider 이미지 수정
    $('.bx-wrapper').css({'text-align':'center', 'margin':'0 auto'})
		
		
		
		
		
		
	// ● 로그인
	
	// 로그인창 열기
	$('.login_wrap img').click(function(){
		$('#login_f').css('left','-115px')
		$('#login_f').css('top','25px')
	});
	
	// 로그인창 닫기
	$('.login_close_btn').click(function(){
		$('#login_f').css('left','-110px')
		$('#login_f').css('top','-500px')
	});
	
	
	// ● 전체메뉴
	
	// 전체메뉴 열기
	$('#total_btn').click(function(){
		$('#total_menu').css('display','inline-block')
	});
	
	// 전체메뉴 닫기
	$('#total_close').click(function(){
		$('#total_menu').css('display','none')
	});
	
	
})