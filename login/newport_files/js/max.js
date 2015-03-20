var currDevice, 
	homeLoaded,
	prizesLoaded, 
	pleasurePaydayLoaded, /*pleasure payday*/
	productsLoaded, 
	wallpaper1Loaded, 
	wallpaper2Loaded, 
	wallpaper3Loaded, 
	wallpaper4Loaded, 
	winnersLoaded, 
	footerHeight, 
	winHeight,
	scrolling = false;




function setDeviceType(){
	var isAndroid = navigator.userAgent.toLowerCase().indexOf("android");
	if(isAndroid > -1){
    	currDevice = "android";
  	}  else {
		currDevice = "iphone";
  	}
	console.log("setDeviceType(): " + currDevice);	
}

function getViewportHeight(){
	console.log("$(window).height() " + $(window).height()); // returns height of browser viewport
	console.log("$(document).height() " + $(document).height()); // returns height of document
}

function setHeaderHeight(){
	winHeight = $(window).height();
	if (winHeight <= 416) {
		winHeight = 416;
	}
	$(".header-resize").css('height', winHeight);
	$('html,body').css('height', winHeight + 'px').css('overflow-y', 'hidden');
}

function setFooterHeight(){
	var footerSelector = $(".footer-resize");
	var footerHeight;
    var popupShift = $("#prizes");
    var eblastShift = $("#eblasts");
    var popupShift = $("#prizes");
			
	footerSelector.css('min-height', '3px');
	footerSelector.css('height',  '3px');
			
	var docHeight = $(document).height();
			
	if ( docHeight < 2*winHeight ) {
		footerHeight = 2*winHeight - docHeight;
		footerSelector.css('height',  footerHeight);
        /*popupShift.css('margin-top',footerHeight+= 90);
        eblastShift.css('margin-top',footerHeight += 20);*/
	}
}

function goToByScroll(value){
	$('html,body').delay(100).animate({scrollTop: value},{ duration: 1000});
}

function assignOverlayByDevice(){
	if (currDevice == "android"){
		$(".wallpaper_overlay_android").css('display', 'inherit');
	} else {
		$(".wallpaper_overlay_iphone").css('display', 'inherit');
	}
}

function pageInitHandler(id) {
	
	
	console.log('pageInitHandler ' + id);

	$('.link-hover').bind('click', function(e) {
        $(this).addClass('hover_effect');
    });
	
	$('.link-hover-msg').bind('click', function(e) {
        $(this).addClass('hover_effect');
    });
	
	if (id == "home") {
		console.log("-------------------------------------------------");
		console.log("         Home page");
		console.log("-------------------------------------------------");
		homeLoaded = 0;
	}
	if (id == "wheel-of-pleasure-the-prizes") {
		console.log("-------------------------------------------------");
		console.log("        wheel-of-pleasure-the-prizes");
		console.log("-------------------------------------------------");
		prizesLoaded = 0;
	}
	
	if (id == "products") {
		console.log("-------------------------------------------------");
		console.log("               Product page");
		console.log("-------------------------------------------------");

		productsLoaded = 0;
	}
	if (id == "instant-winner-no-winner") {
		console.log("-------------------------------------------------");
		console.log("              instant winner page - no winner");
		console.log("-------------------------------------------------");

		productsLoaded = 0;
		
		var tokenList = ['n', 'n', 'cigs', 'cigs', 'spinnaker', 'spinnaker'];

		console.log("icon stuff");
		function scramble(myArray)
		{
			var i = myArray.length;
			if (i == 0)
			{
				return false;
			}
			while (--i)
			{
				console.log("sort");
				var j = Math.floor(Math.random() * (i + 1));
				var tempi = myArray[i];
				var tempj = myArray[j];
				myArray[i] = tempj;
				myArray[j] = tempi;
			}
		}
		
		scramble(tokenList);
		
		$(".icon_0").addClass(tokenList[0]);
		$(".icon_1").addClass(tokenList[1]);
		$(".icon_2").addClass(tokenList[2]);
		
		$("#playgame-inwin").click(function() {
			$("#playGameLayer").fadeOut("fast");
			ComeBackTomorrow ();
			
			
			
			console.log("******************** HIDE SCRATCHOFF****************");
		});
		
		$("#about-game").click(function(){
				$("#about-game-layer").fadeIn("fast");
				$("#how-to-play-layer").fadeOut("fast");
		});
		
		$("#how-to-play").click(function(){
				$("#how-to-play-layer").fadeIn("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		$("#Close-inwin-how").click(function(){
				$("#how-to-play-layer").fadeOut("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		$("#Close-inwin-about").click(function(){
				$("#how-to-play-layer").fadeOut("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		
		function ComeBackTomorrow (){
			var timeout=3000;
				$("#instant_win_scratch_off_pop_up").delay(timeout).animate({opacity: 0 },500);
				$("#about-game").fadeOut("fast");
				$("#how-to-play").fadeOut("fast");
				$("#come-back-tomorrow").delay(timeout).animate({opacity: 1 },500);
				
		}
		
		
	
		
	}
	
	if (id == "instant-winner-no-winner-last-day") {
		console.log("-------------------------------------------------");
		console.log("              instant winner page - no winner-last day");
		console.log("-------------------------------------------------");

		productsLoaded = 0;
		
		var tokenList = ['n', 'n', 'cigs', 'cigs', 'spinnaker', 'spinnaker'];

		console.log("icon stuff");
		function scramble(myArray)
		{
			var i = myArray.length;
			if (i == 0)
			{
				return false;
			}
			while (--i)
			{
				console.log("sort");
				var j = Math.floor(Math.random() * (i + 1));
				var tempi = myArray[i];
				var tempj = myArray[j];
				myArray[i] = tempj;
				myArray[j] = tempi;
			}
		}
		
		scramble(tokenList);
		
		$(".icon_0").addClass(tokenList[0]);
		$(".icon_1").addClass(tokenList[1]);
		$(".icon_2").addClass(tokenList[2]);
		
		$("#playgame-inwin").click(function() {
			$("#playGameLayer").fadeOut("fast");
			
			ComeBackTomorrowLastDay ();
			
			
			console.log("******************** HIDE SCRATCHOFF****************");
		});
		
		$("#about-game").click(function(){
				$("#about-game-layer").fadeIn("fast");
				$("#how-to-play-layer").fadeOut("fast");
		});
		
		$("#how-to-play").click(function(){
				$("#how-to-play-layer").fadeIn("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		$("#Close-inwin-how").click(function(){
				$("#how-to-play-layer").fadeOut("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		$("#Close-inwin-about").click(function(){
				$("#how-to-play-layer").fadeOut("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		
		
		
		function ComeBackTomorrowLastDay (){
			var timeout=3000;
				$("#instant_win_scratch_off_pop_up").delay(timeout).animate({opacity: 0 },500);
				$("#about-game").fadeOut("fast");
				$("#how-to-play").fadeOut("fast");
				$("#come-back-tomorrow-last-day").delay(timeout).animate({opacity: 1 },500);
				
		}
		
		
	
		
	}
	
	//confirmation pages-need to know pop-up
		if (id == "wheel-of-pleasure-confirmation") {
		console.log("-------------------------------------------------");
		console.log("             Wheel of Pleasure Confirmation Page");
		console.log("-------------------------------------------------");
	
		 setTimeout(function(){
      $(".need-to-know-pop-up").fadeOut("slow");
   },6000);	
   
setTimeout(function(){
      $(".need-to-know-pop-up").addClass("hide_pop_up");
   },6500);	
   
			}
	
		if (id == "wheel-of-pleasure-confirmation-need-info") {
		console.log("-------------------------------------------------");
		console.log("             Wheel of Pleasure Confirmation Need Info Page");
		console.log("-------------------------------------------------");
	
		 setTimeout(function(){
      $(".need-to-know-pop-up").fadeOut("slow");
   },6000);	
   
setTimeout(function(){
      $(".need-to-know-pop-up").addClass("hide_pop_up");
   },6500);	
   		
		}
		
		
		if (id == "wheel-of-pleasure-a-winner-last-day") {
		console.log("-------------------------------------------------");
		console.log("           wheel-of-pleasure-a-winner-last-day");
		console.log("-------------------------------------------------");
		
	

	setTimeout(function(){
      $(".win-and-spin-pop-up").fadeOut("slow");
   },6000);	
   
setTimeout(function(){
      $(".win-and-spin-pop-up").addClass("hide_pop_up");
   },6500);	
   
 		
		}
		
	
	if (id == "loser") {
		console.log("-------------------------------------------------");
		console.log("             loser");
		console.log("-------------------------------------------------");
		
			
			
			var RotateAmount=1440;
			var congratsImage=$('.congrats_kindle');
			var SpinnakerFlicker=15;


			
if (PrizeSelector==1){			//yellow-no winner
 RotateAmount=1440;
   congratsImage= $('.no_winner'); 
}

else if (PrizeSelector==2){			//orange-mustang
 RotateAmount=1476;
  congratsImage= $('.congrats_mustang'); 	}
 
 else if (PrizeSelector==3){		//yellow-no winner
 RotateAmount=1512;	
  congratsImage= $('.no_winner'); }
 
  else if (PrizeSelector==4){		//green-camcorder
 RotateAmount=1548;
   congratsImage= $('.congrats_camcorder'); 	}
 
  else if (PrizeSelector==5){		//dark pink-karaoke
 RotateAmount=1584;
 congratsImage= $('.congrats_karaoke'); 	}
 
  else if (PrizeSelector==6){		//light pink-earphones
 RotateAmount=1620;
    congratsImage= $('.congrats_earphones'); }
 
  else if (PrizeSelector==7){		//grey-entertainment system
 RotateAmount=1656;
  congratsImage= $('.congrats_entertainment_system'); 	}
 
  else if (PrizeSelector==8){		//dark red-laptop
 RotateAmount=1728;	
  congratsImage= $('.congrats_laptop'); }
 
  else if (PrizeSelector==9){		//purple-kindle
 RotateAmount=1692;
  congratsImage= $('.congrats_kindle'); 	}
 
  else if (PrizeSelector==10){		//light blue-keurig
 RotateAmount=1764;	
   congratsImage= $('.congrats_keurig');}
   
   else if (PrizeSelector==11){		//yellow-no winner-last-day
 RotateAmount=1512;
    congratsImage= $('.no_winner_last_day'); }
    
       else if (PrizeSelector==12){		//yellow-no winner-last day
 RotateAmount=1440;
    congratsImage= $('.no_winner_last_day'); }
 
 //pop-up
  
 setTimeout(function(){
      $(".win-and-spin-pop-up").fadeOut("slow");
   },6000);	
   
setTimeout(function(){
      $(".win-and-spin-pop-up").addClass("hide_pop_up");
   },6500);	
 
  //wheel spin
 
$("#playgame-inwin").click(function() {
var wheelSpin= $(".wheel");
var spinnakerSpin= $(".spinnaker_ticker");

TweenLite.to(wheelSpin, 3, {rotation:RotateAmount, ease:Circ.easeOut});

TweenLite.to(spinnakerSpin, 3, {rotation:SpinnakerFlicker,y:0, ease:RoughEase.ease.config({strength:4.0,points:15, template:Circ.easeOut, randomize:false })

});

$(".startGame").addClass("spin_press"); 
$(".footer_button_holder").addClass("hide_links"); 
$("#about-game").fadeOut("fast");
$("#how-to-play").fadeOut("fast");

			
setTimeout(function(){
       $(congratsImage).fadeIn('slow');
   },4500);
  
	setTimeout(function(){
      $(".wheel").fadeOut("fast");
   },4500);	
   
   setTimeout(function(){
      $(".spinnaker_ticker").fadeOut("fast");
   },4500);	
   
    setTimeout(function(){
      $(".startGame").fadeOut("fast");
   },4500);	
   
    setTimeout(function(){
      $(".center_button").fadeOut("fast");
   },4500);	
    
	});


	console.log("******************** HIDE WHEEL OF PLEASURE****************");

		
		$("#about-game").click(function(){
				$("#about-game-layer").fadeIn("fast");
				$("#how-to-play-layer").fadeOut("fast");
		});
		
		$("#how-to-play").click(function(){
				$("#how-to-play-layer").fadeIn("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		$("#Close-inwin-how").click(function(){
				$("#how-to-play-layer").fadeOut("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		$("#Close-inwin-about").click(function(){
				$("#how-to-play-layer").fadeOut("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		
	}
	if (id == "visa") {
		console.log("-------------------------------------------------");
		console.log("             visa");
		console.log("-------------------------------------------------");
		
			
			
			var RotateAmount=1440;
			var congratsImage=$('.congrats_kindle');
			var SpinnakerFlicker=15;


			
if (PrizeSelector==1){			//yellow-no winner
 RotateAmount=1440;
   congratsImage= $('.no_winner'); 
}

else if (PrizeSelector==2){			//orange-mustang
 RotateAmount=1476;
  congratsImage= $('.congrats_mustang'); 	}
 
 else if (PrizeSelector==3){		//yellow-no winner
 RotateAmount=1512;	
  congratsImage= $('.no_winner'); }
 
  else if (PrizeSelector==4){		//green-camcorder
 RotateAmount=1548;
   congratsImage= $('.congrats_camcorder'); 	}
 
  else if (PrizeSelector==5){		//dark pink-karaoke
 RotateAmount=1584;
 congratsImage= $('.congrats_karaoke'); 	}
 
  else if (PrizeSelector==6){		//light pink-earphones
 RotateAmount=1620;
    congratsImage= $('.congrats_earphones'); }
 
  else if (PrizeSelector==7){		//grey-entertainment system
 RotateAmount=1656;
  congratsImage= $('.congrats_entertainment_system'); 	}
 
  else if (PrizeSelector==8){		//dark red-laptop
 RotateAmount=1728;	
  congratsImage= $('.congrats_laptop'); }
 
  else if (PrizeSelector==9){		//purple-kindle
 RotateAmount=1692;
  congratsImage= $('.congrats_kindle'); 	}
 
  else if (PrizeSelector==10){		//light blue-keurig
 RotateAmount=1764;	
   congratsImage= $('.congrats_keurig');}
   
   else if (PrizeSelector==11){		//yellow-no winner-last-day
 RotateAmount=1512;
    congratsImage= $('.no_winner_last_day'); }
    
       else if (PrizeSelector==12){		//yellow-no winner-last day
 RotateAmount=1440;
    congratsImage= $('.no_winner_last_day'); }
 
 //pop-up
  
 setTimeout(function(){
      $(".win-and-spin-pop-up").fadeOut("slow");
   },6000);	
   
setTimeout(function(){
      $(".win-and-spin-pop-up").addClass("hide_pop_up");
   },6500);	
 
  //wheel spin
 
$("#playgame-inwin").click(function() {
var wheelSpin= $(".wheel");
var spinnakerSpin= $(".spinnaker_ticker");

TweenLite.to(wheelSpin, 3, {rotation:RotateAmount, ease:Circ.easeOut});

TweenLite.to(spinnakerSpin, 3, {rotation:SpinnakerFlicker,y:0, ease:RoughEase.ease.config({strength:4.0,points:15, template:Circ.easeOut, randomize:false })

});

$(".startGame").addClass("spin_press"); 
$(".footer_button_holder").addClass("hide_links"); 
$("#about-game").fadeOut("fast");
$("#how-to-play").fadeOut("fast");

			
setTimeout(function(){
       $(congratsImage).fadeIn('slow');
   },4500);
  
	setTimeout(function(){
      $(".wheel").fadeOut("fast");
   },4500);	
   
   setTimeout(function(){
      $(".spinnaker_ticker").fadeOut("fast");
   },4500);	
   
    setTimeout(function(){
      $(".startGame").fadeOut("fast");
   },4500);	
   
    setTimeout(function(){
      $(".center_button").fadeOut("fast");
   },4500);	
    
	});


	console.log("******************** HIDE WHEEL OF PLEASURE****************");

		
		$("#about-game").click(function(){
				$("#about-game-layer").fadeIn("fast");
				$("#how-to-play-layer").fadeOut("fast");
		});
		
		$("#how-to-play").click(function(){
				$("#how-to-play-layer").fadeIn("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		$("#Close-inwin-how").click(function(){
				$("#how-to-play-layer").fadeOut("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		$("#Close-inwin-about").click(function(){
				$("#how-to-play-layer").fadeOut("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		
	}
		if (id == "GoPro") {
		console.log("-------------------------------------------------");
		console.log("             GoPro");
		console.log("-------------------------------------------------");
		
			
			
			var RotateAmount=1440;
			var congratsImage=$('.congrats_kindle');
			var SpinnakerFlicker=15;


			
if (PrizeSelector==1){			//yellow-no winner
 RotateAmount=1440;
   congratsImage= $('.no_winner'); 
}

else if (PrizeSelector==2){			//orange-mustang
 RotateAmount=1476;
  congratsImage= $('.congrats_mustang'); 	}
 
 else if (PrizeSelector==3){		//yellow-no winner
 RotateAmount=1512;	
  congratsImage= $('.no_winner'); }
 
  else if (PrizeSelector==4){		//green-camcorder
 RotateAmount=1548;
   congratsImage= $('.congrats_camcorder'); 	}
 
  else if (PrizeSelector==5){		//dark pink-karaoke
 RotateAmount=1584;
 congratsImage= $('.congrats_karaoke'); 	}
 
  else if (PrizeSelector==6){		//light pink-earphones
 RotateAmount=1620;
    congratsImage= $('.congrats_earphones'); }
 
  else if (PrizeSelector==7){		//grey-entertainment system
 RotateAmount=1656;
  congratsImage= $('.congrats_entertainment_system'); 	}
 
  else if (PrizeSelector==8){		//dark red-laptop
 RotateAmount=1728;	
  congratsImage= $('.congrats_laptop'); }
 
  else if (PrizeSelector==9){		//purple-kindle
 RotateAmount=1692;
  congratsImage= $('.congrats_kindle'); 	}
 
  else if (PrizeSelector==10){		//light blue-keurig
 RotateAmount=1764;	
   congratsImage= $('.congrats_keurig');}
   
   else if (PrizeSelector==11){		//yellow-no winner-last-day
 RotateAmount=1512;
    congratsImage= $('.no_winner_last_day'); }
    
       else if (PrizeSelector==12){		//yellow-no winner-last day
 RotateAmount=1440;
    congratsImage= $('.no_winner_last_day'); }
 
 //pop-up
  
 setTimeout(function(){
      $(".win-and-spin-pop-up").fadeOut("slow");
   },6000);	
   
setTimeout(function(){
      $(".win-and-spin-pop-up").addClass("hide_pop_up");
   },6500);	
 
  //wheel spin
 
$("#playgame-inwin").click(function() {
var wheelSpin= $(".wheel");
var spinnakerSpin= $(".spinnaker_ticker");

TweenLite.to(wheelSpin, 3, {rotation:RotateAmount, ease:Circ.easeOut});

TweenLite.to(spinnakerSpin, 3, {rotation:SpinnakerFlicker,y:0, ease:RoughEase.ease.config({strength:4.0,points:15, template:Circ.easeOut, randomize:false })

});

$(".startGame").addClass("spin_press"); 
$(".footer_button_holder").addClass("hide_links"); 
$("#about-game").fadeOut("fast");
$("#how-to-play").fadeOut("fast");

			
setTimeout(function(){
       $(congratsImage).fadeIn('slow');
   },4500);
  
	setTimeout(function(){
      $(".wheel").fadeOut("fast");
   },4500);	
   
   setTimeout(function(){
      $(".spinnaker_ticker").fadeOut("fast");
   },4500);	
   
    setTimeout(function(){
      $(".startGame").fadeOut("fast");
   },4500);	
   
    setTimeout(function(){
      $(".center_button").fadeOut("fast");
   },4500);	
    
	});


	console.log("******************** HIDE WHEEL OF PLEASURE****************");

		
		$("#about-game").click(function(){
				$("#about-game-layer").fadeIn("fast");
				$("#how-to-play-layer").fadeOut("fast");
		});
		
		$("#how-to-play").click(function(){
				$("#how-to-play-layer").fadeIn("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		$("#Close-inwin-how").click(function(){
				$("#how-to-play-layer").fadeOut("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		$("#Close-inwin-about").click(function(){
				$("#how-to-play-layer").fadeOut("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		
	}
		if (id == "chargeHub") {
		console.log("-------------------------------------------------");
		console.log("             chargeHub");
		console.log("-------------------------------------------------");
		
			
			
			var RotateAmount=1440;
			var congratsImage=$('.congrats_kindle');
			var SpinnakerFlicker=15;


			
if (PrizeSelector==1){			//yellow-no winner
 RotateAmount=1440;
   congratsImage= $('.no_winner'); 
}

else if (PrizeSelector==2){			//orange-mustang
 RotateAmount=1476;
  congratsImage= $('.congrats_mustang'); 	}
 
 else if (PrizeSelector==3){		//yellow-no winner
 RotateAmount=1512;	
  congratsImage= $('.no_winner'); }
 
  else if (PrizeSelector==4){		//green-camcorder
 RotateAmount=1548;
   congratsImage= $('.congrats_camcorder'); 	}
 
  else if (PrizeSelector==5){		//dark pink-karaoke
 RotateAmount=1584;
 congratsImage= $('.congrats_karaoke'); 	}
 
  else if (PrizeSelector==6){		//light pink-earphones
 RotateAmount=1620;
    congratsImage= $('.congrats_earphones'); }
 
  else if (PrizeSelector==7){		//grey-entertainment system
 RotateAmount=1656;
  congratsImage= $('.congrats_entertainment_system'); 	}
 
  else if (PrizeSelector==8){		//dark red-laptop
 RotateAmount=1728;	
  congratsImage= $('.congrats_laptop'); }
 
  else if (PrizeSelector==9){		//purple-kindle
 RotateAmount=1692;
  congratsImage= $('.congrats_kindle'); 	}
 
  else if (PrizeSelector==10){		//light blue-keurig
 RotateAmount=1764;	
   congratsImage= $('.congrats_keurig');}
   
   else if (PrizeSelector==11){		//yellow-no winner-last-day
 RotateAmount=1512;
    congratsImage= $('.no_winner_last_day'); }
    
       else if (PrizeSelector==12){		//yellow-no winner-last day
 RotateAmount=1440;
    congratsImage= $('.no_winner_last_day'); }
 
 //pop-up
  
 setTimeout(function(){
      $(".win-and-spin-pop-up").fadeOut("slow");
   },6000);	
   
setTimeout(function(){
      $(".win-and-spin-pop-up").addClass("hide_pop_up");
   },6500);	
 
  //wheel spin
 
$("#playgame-inwin").click(function() {
var wheelSpin= $(".wheel");
var spinnakerSpin= $(".spinnaker_ticker");

TweenLite.to(wheelSpin, 3, {rotation:RotateAmount, ease:Circ.easeOut});

TweenLite.to(spinnakerSpin, 3, {rotation:SpinnakerFlicker,y:0, ease:RoughEase.ease.config({strength:4.0,points:15, template:Circ.easeOut, randomize:false })

});

$(".startGame").addClass("spin_press"); 
$(".footer_button_holder").addClass("hide_links"); 
$("#about-game").fadeOut("fast");
$("#how-to-play").fadeOut("fast");

			
setTimeout(function(){
       $(congratsImage).fadeIn('slow');
   },4500);
  
	setTimeout(function(){
      $(".wheel").fadeOut("fast");
   },4500);	
   
   setTimeout(function(){
      $(".spinnaker_ticker").fadeOut("fast");
   },4500);	
   
    setTimeout(function(){
      $(".startGame").fadeOut("fast");
   },4500);	
   
    setTimeout(function(){
      $(".center_button").fadeOut("fast");
   },4500);	
    
	});


	console.log("******************** HIDE WHEEL OF PLEASURE****************");

		
		$("#about-game").click(function(){
				$("#about-game-layer").fadeIn("fast");
				$("#how-to-play-layer").fadeOut("fast");
		});
		
		$("#how-to-play").click(function(){
				$("#how-to-play-layer").fadeIn("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		$("#Close-inwin-how").click(function(){
				$("#how-to-play-layer").fadeOut("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		$("#Close-inwin-about").click(function(){
				$("#how-to-play-layer").fadeOut("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		
	}
		if (id == "memoPad") {
		console.log("-------------------------------------------------");
		console.log("             memoPad");
		console.log("-------------------------------------------------");
		
			
			
			var RotateAmount=1440;
			var congratsImage=$('.congrats_kindle');
			var SpinnakerFlicker=15;


			
if (PrizeSelector==1){			//yellow-no winner
 RotateAmount=1440;
   congratsImage= $('.no_winner'); 
}

else if (PrizeSelector==2){			//orange-mustang
 RotateAmount=1476;
  congratsImage= $('.congrats_mustang'); 	}
 
 else if (PrizeSelector==3){		//yellow-no winner
 RotateAmount=1512;	
  congratsImage= $('.no_winner'); }
 
  else if (PrizeSelector==4){		//green-camcorder
 RotateAmount=1548;
   congratsImage= $('.congrats_camcorder'); 	}
 
  else if (PrizeSelector==5){		//dark pink-karaoke
 RotateAmount=1584;
 congratsImage= $('.congrats_karaoke'); 	}
 
  else if (PrizeSelector==6){		//light pink-earphones
 RotateAmount=1620;
    congratsImage= $('.congrats_earphones'); }
 
  else if (PrizeSelector==7){		//grey-entertainment system
 RotateAmount=1656;
  congratsImage= $('.congrats_entertainment_system'); 	}
 
  else if (PrizeSelector==8){		//dark red-laptop
 RotateAmount=1728;	
  congratsImage= $('.congrats_laptop'); }
 
  else if (PrizeSelector==9){		//purple-kindle
 RotateAmount=1692;
  congratsImage= $('.congrats_kindle'); 	}
 
  else if (PrizeSelector==10){		//light blue-keurig
 RotateAmount=1764;	
   congratsImage= $('.congrats_keurig');}
   
   else if (PrizeSelector==11){		//yellow-no winner-last-day
 RotateAmount=1512;
    congratsImage= $('.no_winner_last_day'); }
    
       else if (PrizeSelector==12){		//yellow-no winner-last day
 RotateAmount=1440;
    congratsImage= $('.no_winner_last_day'); }
 
 //pop-up
  
 setTimeout(function(){
      $(".win-and-spin-pop-up").fadeOut("slow");
   },6000);	
   
setTimeout(function(){
      $(".win-and-spin-pop-up").addClass("hide_pop_up");
   },6500);	
 
  //wheel spin
 
$("#playgame-inwin").click(function() {
var wheelSpin= $(".wheel");
var spinnakerSpin= $(".spinnaker_ticker");

TweenLite.to(wheelSpin, 3, {rotation:RotateAmount, ease:Circ.easeOut});

TweenLite.to(spinnakerSpin, 3, {rotation:SpinnakerFlicker,y:0, ease:RoughEase.ease.config({strength:4.0,points:15, template:Circ.easeOut, randomize:false })

});

$(".startGame").addClass("spin_press"); 
$(".footer_button_holder").addClass("hide_links"); 
$("#about-game").fadeOut("fast");
$("#how-to-play").fadeOut("fast");

			
setTimeout(function(){
       $(congratsImage).fadeIn('slow');
   },4500);
  
	setTimeout(function(){
      $(".wheel").fadeOut("fast");
   },4500);	
   
   setTimeout(function(){
      $(".spinnaker_ticker").fadeOut("fast");
   },4500);	
   
    setTimeout(function(){
      $(".startGame").fadeOut("fast");
   },4500);	
   
    setTimeout(function(){
      $(".center_button").fadeOut("fast");
   },4500);	
    
	});


	console.log("******************** HIDE WHEEL OF PLEASURE****************");

		
		$("#about-game").click(function(){
				$("#about-game-layer").fadeIn("fast");
				$("#how-to-play-layer").fadeOut("fast");
		});
		
		$("#how-to-play").click(function(){
				$("#how-to-play-layer").fadeIn("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		$("#Close-inwin-how").click(function(){
				$("#how-to-play-layer").fadeOut("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		$("#Close-inwin-about").click(function(){
				$("#how-to-play-layer").fadeOut("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		
	}
		if (id == "beats") {
		console.log("-------------------------------------------------");
		console.log("             beats");
		console.log("-------------------------------------------------");
		
			
			
			var RotateAmount=1440;
			var congratsImage=$('.congrats_kindle');
			var SpinnakerFlicker=15;


			
if (PrizeSelector==1){			//yellow-no winner
 RotateAmount=1440;
   congratsImage= $('.no_winner'); 
}

else if (PrizeSelector==2){			//orange-mustang
 RotateAmount=1476;
  congratsImage= $('.congrats_mustang'); 	}
 
 else if (PrizeSelector==3){		//yellow-no winner
 RotateAmount=1512;	
  congratsImage= $('.no_winner'); }
 
  else if (PrizeSelector==4){		//green-camcorder
 RotateAmount=1548;
   congratsImage= $('.congrats_camcorder'); 	}
 
  else if (PrizeSelector==5){		//dark pink-karaoke
 RotateAmount=1584;
 congratsImage= $('.congrats_karaoke'); 	}
 
  else if (PrizeSelector==6){		//light pink-earphones
 RotateAmount=1620;
    congratsImage= $('.congrats_earphones'); }
 
  else if (PrizeSelector==7){		//grey-entertainment system
 RotateAmount=1656;
  congratsImage= $('.congrats_entertainment_system'); 	}
 
  else if (PrizeSelector==8){		//dark red-laptop
 RotateAmount=1728;	
  congratsImage= $('.congrats_laptop'); }
 
  else if (PrizeSelector==9){		//purple-kindle
 RotateAmount=1692;
  congratsImage= $('.congrats_kindle'); 	}
 
  else if (PrizeSelector==10){		//light blue-keurig
 RotateAmount=1764;	
   congratsImage= $('.congrats_keurig');}
   
   else if (PrizeSelector==11){		//yellow-no winner-last-day
 RotateAmount=1512;
    congratsImage= $('.no_winner_last_day'); }
    
       else if (PrizeSelector==12){		//yellow-no winner-last day
 RotateAmount=1440;
    congratsImage= $('.no_winner_last_day'); }
 
 //pop-up
  
 setTimeout(function(){
      $(".win-and-spin-pop-up").fadeOut("slow");
   },6000);	
   
setTimeout(function(){
      $(".win-and-spin-pop-up").addClass("hide_pop_up");
   },6500);	
 
  //wheel spin
 
$("#playgame-inwin").click(function() {
var wheelSpin= $(".wheel");
var spinnakerSpin= $(".spinnaker_ticker");

TweenLite.to(wheelSpin, 3, {rotation:RotateAmount, ease:Circ.easeOut});

TweenLite.to(spinnakerSpin, 3, {rotation:SpinnakerFlicker,y:0, ease:RoughEase.ease.config({strength:4.0,points:15, template:Circ.easeOut, randomize:false })

});

$(".startGame").addClass("spin_press"); 
$(".footer_button_holder").addClass("hide_links"); 
$("#about-game").fadeOut("fast");
$("#how-to-play").fadeOut("fast");

			
setTimeout(function(){
       $(congratsImage).fadeIn('slow');
   },4500);
  
	setTimeout(function(){
      $(".wheel").fadeOut("fast");
   },4500);	
   
   setTimeout(function(){
      $(".spinnaker_ticker").fadeOut("fast");
   },4500);	
   
    setTimeout(function(){
      $(".startGame").fadeOut("fast");
   },4500);	
   
    setTimeout(function(){
      $(".center_button").fadeOut("fast");
   },4500);	
    
	});


	console.log("******************** HIDE WHEEL OF PLEASURE****************");

		
		$("#about-game").click(function(){
				$("#about-game-layer").fadeIn("fast");
				$("#how-to-play-layer").fadeOut("fast");
		});
		
		$("#how-to-play").click(function(){
				$("#how-to-play-layer").fadeIn("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		$("#Close-inwin-how").click(function(){
				$("#how-to-play-layer").fadeOut("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		$("#Close-inwin-about").click(function(){
				$("#how-to-play-layer").fadeOut("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		
	}
		if (id == "scooter") {
		console.log("-------------------------------------------------");
		console.log("            scooter");
		console.log("-------------------------------------------------");
		
			
			
			var RotateAmount=1440;
			var congratsImage=$('.congrats_kindle');
			var SpinnakerFlicker=15;


			
if (PrizeSelector==1){			//yellow-no winner
 RotateAmount=1440;
   congratsImage= $('.no_winner'); 
}

else if (PrizeSelector==2){			//orange-mustang
 RotateAmount=1476;
  congratsImage= $('.congrats_mustang'); 	}
 
 else if (PrizeSelector==3){		//yellow-no winner
 RotateAmount=1512;	
  congratsImage= $('.no_winner'); }
 
  else if (PrizeSelector==4){		//green-camcorder
 RotateAmount=1548;
   congratsImage= $('.congrats_camcorder'); 	}
 
  else if (PrizeSelector==5){		//dark pink-karaoke
 RotateAmount=1584;
 congratsImage= $('.congrats_karaoke'); 	}
 
  else if (PrizeSelector==6){		//light pink-earphones
 RotateAmount=1620;
    congratsImage= $('.congrats_earphones'); }
 
  else if (PrizeSelector==7){		//grey-entertainment system
 RotateAmount=1656;
  congratsImage= $('.congrats_entertainment_system'); 	}
 
  else if (PrizeSelector==8){		//dark red-laptop
 RotateAmount=1728;	
  congratsImage= $('.congrats_laptop'); }
 
  else if (PrizeSelector==9){		//purple-kindle
 RotateAmount=1692;
  congratsImage= $('.congrats_kindle'); 	}
 
  else if (PrizeSelector==10){		//light blue-keurig
 RotateAmount=1764;	
   congratsImage= $('.congrats_keurig');}
   
   else if (PrizeSelector==11){		//yellow-no winner-last-day
 RotateAmount=1512;
    congratsImage= $('.no_winner_last_day'); }
    
       else if (PrizeSelector==12){		//yellow-no winner-last day
 RotateAmount=1440;
    congratsImage= $('.no_winner_last_day'); }
 
 //pop-up
  
 setTimeout(function(){
      $(".win-and-spin-pop-up").fadeOut("slow");
   },6000);	
   
setTimeout(function(){
      $(".win-and-spin-pop-up").addClass("hide_pop_up");
   },6500);	
 
  //wheel spin
 
$("#playgame-inwin").click(function() {
var wheelSpin= $(".wheel");
var spinnakerSpin= $(".spinnaker_ticker");

TweenLite.to(wheelSpin, 3, {rotation:RotateAmount, ease:Circ.easeOut});

TweenLite.to(spinnakerSpin, 3, {rotation:SpinnakerFlicker,y:0, ease:RoughEase.ease.config({strength:4.0,points:15, template:Circ.easeOut, randomize:false })

});

$(".startGame").addClass("spin_press"); 
$(".footer_button_holder").addClass("hide_links"); 
$("#about-game").fadeOut("fast");
$("#how-to-play").fadeOut("fast");

			
setTimeout(function(){
       $(congratsImage).fadeIn('slow');
   },4500);
  
	setTimeout(function(){
      $(".wheel").fadeOut("fast");
   },4500);	
   
   setTimeout(function(){
      $(".spinnaker_ticker").fadeOut("fast");
   },4500);	
   
    setTimeout(function(){
      $(".startGame").fadeOut("fast");
   },4500);	
   
    setTimeout(function(){
      $(".center_button").fadeOut("fast");
   },4500);	
    
	});


	console.log("******************** HIDE WHEEL OF PLEASURE****************");

		
		$("#about-game").click(function(){
				$("#about-game-layer").fadeIn("fast");
				$("#how-to-play-layer").fadeOut("fast");
		});
		
		$("#how-to-play").click(function(){
				$("#how-to-play-layer").fadeIn("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		$("#Close-inwin-how").click(function(){
				$("#how-to-play-layer").fadeOut("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		$("#Close-inwin-about").click(function(){
				$("#how-to-play-layer").fadeOut("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		
	}
		if (id == "pebble-watch") {
		console.log("-------------------------------------------------");
		console.log("             pebble-watch");
		console.log("-------------------------------------------------");
		
			
			
			var RotateAmount=1440;
			var congratsImage=$('.congrats_kindle');
			var SpinnakerFlicker=15;


			
if (PrizeSelector==1){			//yellow-no winner
 RotateAmount=1440;
   congratsImage= $('.no_winner'); 
}

else if (PrizeSelector==2){			//orange-mustang
 RotateAmount=1476;
  congratsImage= $('.congrats_mustang'); 	}
 
 else if (PrizeSelector==3){		//yellow-no winner
 RotateAmount=1512;	
  congratsImage= $('.no_winner'); }
 
  else if (PrizeSelector==4){		//green-camcorder
 RotateAmount=1548;
   congratsImage= $('.congrats_camcorder'); 	}
 
  else if (PrizeSelector==5){		//dark pink-karaoke
 RotateAmount=1584;
 congratsImage= $('.congrats_karaoke'); 	}
 
  else if (PrizeSelector==6){		//light pink-earphones
 RotateAmount=1620;
    congratsImage= $('.congrats_earphones'); }
 
  else if (PrizeSelector==7){		//grey-entertainment system
 RotateAmount=1656;
  congratsImage= $('.congrats_entertainment_system'); 	}
 
  else if (PrizeSelector==8){		//dark red-laptop
 RotateAmount=1728;	
  congratsImage= $('.congrats_laptop'); }
 
  else if (PrizeSelector==9){		//purple-kindle
 RotateAmount=1692;
  congratsImage= $('.congrats_kindle'); 	}
 
  else if (PrizeSelector==10){		//light blue-keurig
 RotateAmount=1764;	
   congratsImage= $('.congrats_keurig');}
   
   else if (PrizeSelector==11){		//yellow-no winner-last-day
 RotateAmount=1512;
    congratsImage= $('.no_winner_last_day'); }
    
       else if (PrizeSelector==12){		//yellow-no winner-last day
 RotateAmount=1440;
    congratsImage= $('.no_winner_last_day'); }
 
 //pop-up
  
 setTimeout(function(){
      $(".win-and-spin-pop-up").fadeOut("slow");
   },6000);	
   
setTimeout(function(){
      $(".win-and-spin-pop-up").addClass("hide_pop_up");
   },6500);	
 
  //wheel spin
 
$("#playgame-inwin").click(function() {
var wheelSpin= $(".wheel");
var spinnakerSpin= $(".spinnaker_ticker");

TweenLite.to(wheelSpin, 3, {rotation:RotateAmount, ease:Circ.easeOut});

TweenLite.to(spinnakerSpin, 3, {rotation:SpinnakerFlicker,y:0, ease:RoughEase.ease.config({strength:4.0,points:15, template:Circ.easeOut, randomize:false })

});

$(".startGame").addClass("spin_press"); 
$(".footer_button_holder").addClass("hide_links"); 
$("#about-game").fadeOut("fast");
$("#how-to-play").fadeOut("fast");

			
setTimeout(function(){
       $(congratsImage).fadeIn('slow');
   },4500);
  
	setTimeout(function(){
      $(".wheel").fadeOut("fast");
   },4500);	
   
   setTimeout(function(){
      $(".spinnaker_ticker").fadeOut("fast");
   },4500);	
   
    setTimeout(function(){
      $(".startGame").fadeOut("fast");
   },4500);	
   
    setTimeout(function(){
      $(".center_button").fadeOut("fast");
   },4500);	
    
	});


	console.log("******************** HIDE WHEEL OF PLEASURE****************");

		
		$("#about-game").click(function(){
				$("#about-game-layer").fadeIn("fast");
				$("#how-to-play-layer").fadeOut("fast");
		});
		
		$("#how-to-play").click(function(){
				$("#how-to-play-layer").fadeIn("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		$("#Close-inwin-how").click(function(){
				$("#how-to-play-layer").fadeOut("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		$("#Close-inwin-about").click(function(){
				$("#how-to-play-layer").fadeOut("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		
	}
		if (id == "sony-tv") {
		console.log("-------------------------------------------------");
		console.log("             sony-tv");
		console.log("-------------------------------------------------");
		
			
			
			var RotateAmount=1440;
			var congratsImage=$('.congrats_kindle');
			var SpinnakerFlicker=15;


			
if (PrizeSelector==1){			//yellow-no winner
 RotateAmount=1440;
   congratsImage= $('.no_winner'); 
}

else if (PrizeSelector==2){			//orange-mustang
 RotateAmount=1476;
  congratsImage= $('.congrats_mustang'); 	}
 
 else if (PrizeSelector==3){		//yellow-no winner
 RotateAmount=1512;	
  congratsImage= $('.no_winner'); }
 
  else if (PrizeSelector==4){		//green-camcorder
 RotateAmount=1548;
   congratsImage= $('.congrats_camcorder'); 	}
 
  else if (PrizeSelector==5){		//dark pink-karaoke
 RotateAmount=1584;
 congratsImage= $('.congrats_karaoke'); 	}
 
  else if (PrizeSelector==6){		//light pink-earphones
 RotateAmount=1620;
    congratsImage= $('.congrats_earphones'); }
 
  else if (PrizeSelector==7){		//grey-entertainment system
 RotateAmount=1656;
  congratsImage= $('.congrats_entertainment_system'); 	}
 
  else if (PrizeSelector==8){		//dark red-laptop
 RotateAmount=1728;	
  congratsImage= $('.congrats_laptop'); }
 
  else if (PrizeSelector==9){		//purple-kindle
 RotateAmount=1692;
  congratsImage= $('.congrats_kindle'); 	}
 
  else if (PrizeSelector==10){		//light blue-keurig
 RotateAmount=1764;	
   congratsImage= $('.congrats_keurig');}
   
   else if (PrizeSelector==11){		//yellow-no winner-last-day
 RotateAmount=1512;
    congratsImage= $('.no_winner_last_day'); }
    
       else if (PrizeSelector==12){		//yellow-no winner-last day
 RotateAmount=1440;
    congratsImage= $('.no_winner_last_day'); }
 
 //pop-up
  
 setTimeout(function(){
      $(".win-and-spin-pop-up").fadeOut("slow");
   },6000);	
   
setTimeout(function(){
      $(".win-and-spin-pop-up").addClass("hide_pop_up");
   },6500);	
 
  //wheel spin
 
$("#playgame-inwin").click(function() {
var wheelSpin= $(".wheel");
var spinnakerSpin= $(".spinnaker_ticker");

TweenLite.to(wheelSpin, 3, {rotation:RotateAmount, ease:Circ.easeOut});

TweenLite.to(spinnakerSpin, 3, {rotation:SpinnakerFlicker,y:0, ease:RoughEase.ease.config({strength:4.0,points:15, template:Circ.easeOut, randomize:false })

});

$(".startGame").addClass("spin_press"); 
//$(".footer_button_holder").addClass("hide_links"); 
$("#about-game").fadeOut("fast");
$("#how-to-play").fadeOut("fast");

			
setTimeout(function(){
       $(congratsImage).fadeIn('slow');
   },4500);
  
	setTimeout(function(){
      $(".wheel").fadeOut("fast");
   },4500);	
   
   setTimeout(function(){
      $(".spinnaker_ticker").fadeOut("fast");
   },4500);	
   
    setTimeout(function(){
      $(".startGame").fadeOut("fast");
   },4500);	
   
    setTimeout(function(){
      $(".center_button").fadeOut("fast");
   },4500);	
    
	});


	console.log("******************** HIDE WHEEL OF PLEASURE****************");

		
		$("#about-game").click(function(){
				$("#about-game-layer").fadeIn("fast");
				$("#how-to-play-layer").fadeOut("fast");
		});
		
		$("#how-to-play").click(function(){
				$("#how-to-play-layer").fadeIn("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		$("#Close-inwin-how").click(function(){
				$("#how-to-play-layer").fadeOut("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		$("#Close-inwin-about").click(function(){
				$("#how-to-play-layer").fadeOut("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		
	}
	
	
	if (id == "wheel-of-pleasure-a-winner-last-day") {
		console.log("-------------------------------------------------");
		console.log("             Wheel of Pleasure Main Page Last Day");
		console.log("-------------------------------------------------");
		
			
			
			var RotateAmount=1440;
			var congratsImage=$('.congrats_kindle');
			var SpinnakerFlicker=15;


			
if (PrizeSelector==1){			//yellow-no winner
 RotateAmount=1440;
   congratsImage= $('.no_winner'); 
}

else if (PrizeSelector==2){			//orange-mustang
 RotateAmount=1476;
  congratsImage= $('.congrats_mustang'); 	}
 
 else if (PrizeSelector==3){		//yellow-no winner
 RotateAmount=1512;	
  congratsImage= $('.no_winner'); }
 
  else if (PrizeSelector==4){		//green-camcorder
 RotateAmount=1548;
   congratsImage= $('.congrats_camcorder'); 	}
 
  else if (PrizeSelector==5){		//dark pink-karaoke
 RotateAmount=1584;
 congratsImage= $('.congrats_karaoke'); 	}
 
  else if (PrizeSelector==6){		//light pink-earphones
 RotateAmount=1620;
    congratsImage= $('.congrats_earphones'); }
 
  else if (PrizeSelector==7){		//grey-entertainment system
 RotateAmount=1656;
  congratsImage= $('.congrats_entertainment_system'); 	}
 
  else if (PrizeSelector==8){		//dark red-laptop
 RotateAmount=1728;	
  congratsImage= $('.congrats_laptop'); }
 
  else if (PrizeSelector==9){		//purple-kindle
 RotateAmount=1692;
  congratsImage= $('.congrats_kindle'); 	}
 
  else if (PrizeSelector==10){		//light blue-keurig
 RotateAmount=1764;	
   congratsImage= $('.congrats_keurig');}
   
   else if (PrizeSelector==11){		//yellow-no winner-last-day
 RotateAmount=1512;
    congratsImage= $('.no_winner_last_day'); }
    
       else if (PrizeSelector==12){		//yellow-no winner-last day
 RotateAmount=1440;
    congratsImage= $('.no_winner_last_day'); }
 
 //pop-up
  
 setTimeout(function(){
      $(".win-and-spin-pop-up").fadeOut("slow");
   },6000);	
   
setTimeout(function(){
      $(".win-and-spin-pop-up").addClass("hide_pop_up");
   },6500);	
 
  //wheel spin
 
$("#playgame-inwin").click(function() {
var wheelSpin= $(".wheel");
var spinnakerSpin= $(".spinnaker_ticker");

TweenLite.to(wheelSpin, 3, {rotation:RotateAmount, ease:Circ.easeOut});

TweenLite.to(spinnakerSpin, 3, {rotation:SpinnakerFlicker,y:0, ease:RoughEase.ease.config({strength:4.0,points:15, template:Circ.easeOut, randomize:false })

});

$(".startGame").addClass("spin_press"); 
//$(".footer_button_holder").addClass("hide_links"); 
$("#about-game").fadeOut("fast");
$("#how-to-play").fadeOut("fast");

			
setTimeout(function(){
       $(congratsImage).fadeIn('slow');
   },4500);
  
	setTimeout(function(){
      $(".wheel").fadeOut("fast");
   },4500);	
   
   setTimeout(function(){
      $(".spinnaker_ticker").fadeOut("fast");
   },4500);	
   
    setTimeout(function(){
      $(".startGame").fadeOut("fast");
   },4500);	
   
    setTimeout(function(){
      $(".center_button").fadeOut("fast");
   },4500);	
    
	});


	console.log("******************** HIDE WHEEL OF PLEASURE****************");

		
		$("#about-game").click(function(){
				$("#about-game-layer").fadeIn("fast");
				$("#how-to-play-layer").fadeOut("fast");
		});
		
		$("#how-to-play").click(function(){
				$("#how-to-play-layer").fadeIn("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		$("#Close-inwin-how").click(function(){
				$("#how-to-play-layer").fadeOut("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		$("#Close-inwin-about").click(function(){
				$("#how-to-play-layer").fadeOut("fast");
				$("#about-game-layer").fadeOut("fast");
		});
		
	}
	
	
	if (id == "instant-win-pleasure") {
		console.log("-------------------------------------------------");
		console.log("             Choose your pleasure page");
		console.log("-------------------------------------------------");

	function ResetPleasurePage() {
		$('input:radio[name=radio-1-set]:checked').each(function(){
      this.value;  
	 
  });
 $("input:radio").attr("checked", false);
	  
	
	ConfirmURL="";	
	RadioValue="";
	 $("#sure_no").removeClass("show_tv"); 
	  $("#sure_no").removeClass("show_tablet"); 
	   $("#sure_no").removeClass("show_camera"); 
	   $("#sure_no").removeClass("show_button"); 
	   $("#sure_no").addClass("hide"); 
	   	$("#no_button").addClass("hide_button");
	 
	   
	}
  var ConfirmURL="";
  $("#blue").click(blue);

function blue() {
     
      $("#sure_no").addClass("blue");
     $("#sure_no").addClass("myImage");
	
	 
	 
	 var RadioValue=$('input:radio[name=radio-1-set]:checked').val();
	  if(RadioValue=="tv") {
		  ConfirmURL="instant-win-confirm-tv.html";
		   $("#sure_no").addClass("show_tv"); 
		   $("#sure_no").removeClass("hide");
		   $("#sweeps-disclaimer").addClass("disclaimer_adjust");
	  		$("#content-footer").addClass("footer_adjust");
			
		 $('html, body').animate({
   	 		scrollTop: $('#choose_pleasure').offset().top
	
	

});
		   } 
		   
	else if(RadioValue=="tablet") {
		    ConfirmURL="instant-win-confirm-tablet.html";
		   $("#sure_no").addClass("show_tablet");
		    $("#sure_no").removeClass("hide"); 
			 $("#sweeps-disclaimer").addClass("disclaimer_adjust");
	  		$("#content-footer").addClass("footer_adjust");
			}
		   
	else if(RadioValue=="camera") {
		    ConfirmURL="instant-win-confirm-camera.html";
		   $("#sure_no").addClass("show_camera"); 
		    $("#sure_no").removeClass("hide");
			 $("#sweeps-disclaimer").addClass("disclaimer_adjust");
	 		 $("#content-footer").addClass("footer_adjust");
			}
		  

   console.log( $('input:radio[name=radio-1-set]:checked').val());
   


	$("#yes_button").click(function()
	
	{window.location = ConfirmURL;
	console.log("--------------------yes-button-clicked--------------");
	$("#yes_button").removeClass("hide_button"); 
	$("#yes_button").addClass("show_button"); 
	
	});
	
	
	$("#no_button").click(function()
	
		{console.log("--------------------no-button-clicked--------------");
		$("#no_button").removeClass("hide_button");
		$("#no_button").addClass("show_button"); 
		 setTimeout(function (){
		
		$("#sweeps-disclaimer").removeClass("disclaimer_adjust");
	  	$("#content-footer").removeClass("footer_adjust");
		
	
		ResetPleasurePage()}, 100);
	});
	 

}




	}
	
	if (id == "wallpaper1") {
		console.log("-------------------------------------------------");
		console.log("             Wallpaper1 page");
		console.log("-------------------------------------------------");

		assignOverlayByDevice();

		wallpaper1Loaded = 0;
	}
	if (id == "wallpaper2") {
		console.log("-------------------------------------------------");
		console.log("             Wallpaper2 page");
		console.log("-------------------------------------------------");

		assignOverlayByDevice();
		wallpaper2Loaded = 0;
	}
	if (id == "wallpaper3") {
		console.log("-------------------------------------------------");
		console.log("             Wallpaper3 page");
		console.log("-------------------------------------------------");
		assignOverlayByDevice();
		wallpaper3Loaded = 0;
	}
	if (id == "wallpaper4") {
		console.log("-------------------------------------------------");
		console.log("             Wallpaper4 page");
		console.log("-------------------------------------------------");
		assignOverlayByDevice();
		wallpaper4Loaded = 0;
	}

	/* pleasurePadyday     */
	
	if (id == "pleasure-payday") {
		console.log("-------------------------------------------------");
		console.log("              Pleasure payday");
		console.log("-------------------------------------------------");
		console.log("You have reached the pleasure payday page");
		winnersLoaded = 0;
	}

	if (id == "wheel-of-pleasure-landing") {
		console.log("-------------------------------------------------");
		console.log("         Wheel of Pleasure landing page");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
       	

       	pleasurePaydayLoaded = 0;
	}

	if (id == "pleasure-payday-entered") {
		console.log("-------------------------------------------------");
		console.log("          Pleasure payday entered page");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	if (id == "instant-win-already-entered") {
		console.log("-------------------------------------------------");
		console.log("         instant-win-already-entered page");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	if (id == "instant-win-already-entered-last-day") {
		console.log("-------------------------------------------------");
		console.log("      instant-win-already-entered page-last-day");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}

	if (id == "wheel-of-pleasure-confirm-kindle-need-info") {
		console.log("-------------------------------------------------");
		console.log("     wheel-of-pleasure-confirm-kindle-need-info");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	if (id == "wheel-of-pleasure-disclaimer") {
		console.log("-------------------------------------------------");
		console.log("      wheel-of-pleasure-disclaimer");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	
	if (id == "wheel-of-pleasure-disclaimer") {
		console.log("-------------------------------------------------");
		console.log("      wheel-of-pleasure-disclaimer");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	
	
	if (id == "scooter") {
		console.log("-------------------------------------------------");
		console.log("    scooter");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	if (id == "visa") {
		console.log("-------------------------------------------------");
		console.log("    visa");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	if (id == "loser") {
		console.log("-------------------------------------------------");
		console.log("    loser");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	if (id == "GoPro") {
		console.log("-------------------------------------------------");
		console.log("    GoPro");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	if (id == "chargeHub") {
		console.log("-------------------------------------------------");
		console.log("    chargeHub");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	if (id == "memoPad") {
		console.log("-------------------------------------------------");
		console.log("   memoPad");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	if (id == "beats") {
		console.log("-------------------------------------------------");
		console.log("    beats");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	if (id == "pebble-watch") { 
		console.log("-------------------------------------------------");
		console.log("    pebble-watch");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	if (id == "sony-tv") { //Sony TV
		console.log("-------------------------------------------------");
		console.log("    sony-tv");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	if (id == "wheel-of-pleasure-already-played") {
		console.log("-------------------------------------------------");
		console.log("   wheel-of-pleasure-already-played");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	
	if (id == "wheel-of-pleasure-already-played-last-day") {
		console.log("-------------------------------------------------");
		console.log(" 	wheel-of-pleasure-already-played-last-day");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	
	if (id == "instantwin-confirm-tablet") {
		console.log("-------------------------------------------------");
		console.log("      instantwin-confirm-tablet");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	if (id == "instantwin-confirm-tv") {
		console.log("-------------------------------------------------");
		console.log("      instantwin-confirm-tv");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	
	if (id == "instantwin-tablet-needInfo") {
		console.log("-------------------------------------------------");
		console.log("      instantwin-tablet-needInfo");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	if (id == "instantwin-tv-needInfo") {
		console.log("-------------------------------------------------");
		console.log("     instantwin-tv-needInfo");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	
	if (id == "wheel-of-pleasure-a-winner-mustang") {
		console.log("-------------------------------------------------");
		console.log("    Wheel Of Pleasure Winner-Mustang");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	
	
	if (id == "instant-winner-no-winner") {
		console.log("-------------------------------------------------");
		console.log("         instant-win-no-winner");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	
	if (id == "beats") {
		console.log("-------------------------------------------------");
		console.log("beats");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	if (id == "visa") {
		console.log("-------------------------------------------------");
		console.log("visa");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	if (id == "memoPad") {
		console.log("-------------------------------------------------");
		console.log("memoPad");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	if (id == "GoPro") {
		console.log("-------------------------------------------------");
		console.log("GoPro");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	
	if (id == "wheel-of-pleasure-a-winner-last-day") {
		console.log("-------------------------------------------------");
		console.log("wheel-of-pleasure-a-winner-last-day");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	
	if (id == "wheel-of-pleasure-confirm-hp") {
		console.log("-------------------------------------------------");
		console.log("         wheel-of-pleasure-confirm-hp");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	if (id == "wheel-of-pleasure-confirm-beats") {
		console.log("-------------------------------------------------");
		console.log("wheel-of-pleasure-confirm-beats");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	if (id == "pebble-watch") {
		console.log("-------------------------------------------------");
		console.log("       pebble-watch");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	if (id == "scooter") {
		console.log("-------------------------------------------------");
		console.log("scooter");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	
	if (id == "instant-winner-no-winner-last-day") {
		console.log("-------------------------------------------------");
		console.log("         instant-winner-no-winner-last-day");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
		if (id == "instant-winner-sweeps") {
		console.log("-------------------------------------------------");
		console.log("        instant-winner-sweeps");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	if (id == "wheel-of-pleasure-the-prizes") {
		console.log("-------------------------------------------------");
		console.log("        wheel-of-pleasure-the-prizes");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	
	if (id == "pleasure-payday-already-entered") {
		console.log("-------------------------------------------------");
		console.log("     pleasure payday already entered page");
		console.log("-------------------------------------------------");

		setupPopups();
       	setupButtonTouches();
	}
	
	
	if (id == "couponOffer2013Landing") {
		console.log("-------------------------------------------------");
		console.log("     Coupon offer page");
		console.log("-------------------------------------------------");
		
		$('.choices').css({backgroundPosition: '0% 0%'});
		$('.choices').children('.confirmButton').css({opacity: 0});
		
	
		$('.choices').click(function() {
  			var that = $(this);
  		
  			that.css({backgroundPosition: '0% 100%'});
  			that.children('.confirmButton').animate({opacity: 1}, 100);
  		
  			that.siblings().css({backgroundPosition: '0% 0%'});
  			that.siblings().children('.confirmButton').animate({opacity: 0}, 100);
  		});
  
  		$('.confirmButton').click(function() {
  			if ($(this).css("opacity") == "1")
  				window.location.href = "couponOfferJan2013_confirmation.html";
  		});
	}
}

function pageBeforeShowHandler(id) {
	$("#" + id + " .completion").children('div').css('width', '0');
	//$(".content").css('visibility', 'hidden');
}

     
function showHome(){
		console.log("");
		console.log("              showHome() running");
		console.log("");
	if (homeLoaded == 0) {
		// if scrollable hasn't been loaded yet
	
		$("#browsable-home").scrollable({circular: true, mousewheel: true, speed: 400, touch: false}).navigator().autoscroll({interval: 3000}).bind("swipeleft", function(){
			var api = $("#browsable-home").data("scrollable");
			api.next(400);
		}).bind("swiperight", function(){
			var api = $("#browsable-home").data("scrollable");
			api.prev(400);
		});
	
		
		// homescreen overlay
		
		$("#a-add-newport[rel]").overlay({top: 'center', fixed: true, left: 0, speed: 0}).bind("onBeforeLoad", function() {
			if (currDevice == "android"){
				$(".simple_overlay_android").css('display', 'inherit');
				$(".simple_overlay_background").css('top', '0px').css('height', $(document).height()).css('display', 'block').css('width','320px');
				$("#sgw").css('position', 'relative').css('z-index', '199');
			} else {
				
				$(".simple_overlay_iphone").css('display', 'inherit');
				
				var ios5 = navigator.userAgent.match(/OS 5_[0-9_]+ like Mac OS X/i) != null;
				
				if(ios5) {
    				$(".simple_overlay").css('margin-top', '0px');
                    scrollMove = $('body').scrollTop();
                    scrollMove=scrollMove+5;
                    
                    $('html,body').delay(0).animate({scrollTop: scrollMove},{ duration: 0});
				}
			
				$(".simple_overlay_background").css('top', '0px').css('height', $(document).height()).css('display', 'block').css('width', '320px');
				
				$("#sgw").css('position', 'relative').css('z-index', '199');
			}
				
		}).bind("onBeforeClose", function() {
			console.log('overlay close');
			$(".simple_overlay_background").css('display', 'none');	
		});
	
		homeLoaded = 1;
	
	} else {
		// else reset scrollable
		
		var api = $("#browsable-home").data("scrollable");
		api.seekTo(0);
		api.pause();
		setTimeout(function() {
			api.play();
		}, 1000);
	}
}




/*pleasure payday*/
function showPleasurePadyday(){
		console.log("");
		console.log("              showPleasurePadyday() running");
		console.log("");
	if (pleasurePaydayLoaded == 0) {
		// if scrollable hasn't been loaded yet

	//main scrollable 

		$("#browsable-payday").scrollable({
				circular: true, 
				mousewheel: true, 
				speed: 400,  
				touch: false
			}).navigator().autoscroll({
				autopause:false,
				interval: 3000
			}).bind("swipeleft", function(){
				var api = $("#browsable-payday").data("scrollable");
				api.next(800);
			}).bind("swiperight", function(){
				var api = $("#browsable-payday").data("scrollable");
				api.prev(400);
			});
			

	//main scrollable 		

		$("#browsable-pleasurePayday").scrollable({
				circular: true, 
				mousewheel: true,  
				speed: 400, 
				touch: false, 
				onBeforeSeek: function (e,i) {
					$(".items-title").animate({opacity:0},0);
				}, onSeek: function (e,i) {
					$(".items-title").animate({opacity:1},200);
				}  }).navigator().autoscroll({
					autopause:false,
					interval: 3000
				}).bind("swipeleft", function(){
					var swipeRightScrollable = $("#browsable-pleasurePayday").data("scrollable");
					swipeRightScrollable.next(400);
				}).bind("swiperight", function(){
					var swipeLeftScrollable = $("#browsable-pleasurePayday").data("scrollable");
					swipeLeftScrollable.prev(400);
				});
		
		// homescreen overlay
		
		$("#a-add-newport[rel]").overlay({top: 'center', fixed: true, left: 0, speed: 0}).bind("onBeforeLoad", function() {
			if (currDevice == "android"){
				$(".simple_overlay_android").css('display', 'inherit');
				$(".simple_overlay_background").css('top', '0px').css('height', $(document).height()).css('display', 'block').css('width','320px');
				$("#sgw").css('position', 'relative').css('z-index', '199');
			} else {
				
				$(".simple_overlay_iphone").css('display', 'inherit');
				
				var ios5 = navigator.userAgent.match(/OS 5_[0-9_]+ like Mac OS X/i) != null;
				
				if(ios5) {
    				$(".simple_overlay").css('margin-top', '0px');
                    scrollMove = $('body').scrollTop();
                    scrollMove=scrollMove+5;
                    
                    $('html,body').delay(0).animate({scrollTop: scrollMove},{ duration: 0});
				}
			
				$(".simple_overlay_background").css('top', '0px').css('height', $(document).height()).css('display', 'block').css('width', '320px');
				
				$("#sgw").css('position', 'relative').css('z-index', '199');
			}
				
		}).bind("onBeforeClose", function() {
			console.log('overlay close');
			$(".simple_overlay_background").css('display', 'none');	
		});
	
		pleasurePaydayLoaded = 1;
	
	} else {
		// else reset scrollable
		
		var api = $("#browsable-payday").data("scrollable");
		api.seekTo(0);
		api.pause();
		setTimeout(function() {
			api.play();
		}, 1000);

		var apiTitle = $("#browsable-pleasurePayday").data("scrollable");
		apiTitle.seekTo(0);
		apiTitle.pause();
		setTimeout(function() {
			apiTitle.play();
		}, 1000);
	}
}

function showProducts(){
		console.log("");
		console.log("              showProducts() running");
		console.log("");
	if (productsLoaded == 0) {
		// if scrollable hasn't been loaded yet
		var imgCount = 0;
		var currIndex = 0;
		var doAnim = true;
		$("#browsable-products").scrollable({circular: true, mousewheel: true, speed: 400, touch: false, onSeek: function(event) {
			var newIndex = this.getIndex();
			
			(newIndex > currIndex) ? imgCount++ : imgCount--;
			currIndex = newIndex;
			
			if (imgCount == this.getSize() - 1 && doAnim) {
				this.stop();
				doAnim = false;
				 
				var that = this; 
				setTimeout(function () {
					that.seekTo(0);
				}, 2000);
			}
			
		}}).navigator().autoscroll(3000,{api: true, autoplay: true}).bind("swipeleft", function(){
			var api = $("#browsable-products").data("scrollable");
			api.stop();
			doAnim = false;
			api.next(400);
		}).bind("swiperight", function(){
			var api = $("#browsable-products").data("scrollable");
			api.stop();
			doAnim = false;
			api.prev(400);
		}).bind('click', function() {
			console.log('click');
			var api = $("#browsable-products").data("scrollable");
			api.stop();
			doAnim = false;
		});
			
		$("#browsable-products").scrollable().pause();
		
		setTimeout(function() {
			$("#browsable-products").scrollable().play();
		}, 3000);
		
		productsLoaded = 1;
		
	} else {
		// else reset scrollable
		
		var imgCount = 0;
		var currIndex = 0;
		var doAnim = true;
		
		var api = $("#browsable-products").data("scrollable");
		api.seekTo(0);
		api.pause();
		setTimeout(function() {
			api.play();
		}, 1000);
	}
}

/*The Prizes*/

function showPrizes(){
		console.log("");
		console.log("              showPrizes() running");
		console.log("");
	if (prizesLoaded == 0) {
		// if scrollable hasn't been loaded yet
		var imgCountPrizes = 0;
		var currIndexPrizes = 0;
		var doAnimPrizes = true;
		$("#browsable-the-prizes").scrollable({circular: true, mousewheel: true, speed: 400, touch: false, onSeek: function(event) {
			var newIndexPrizes = this.getIndex();
			
			(newIndexPrizes > currIndexPrizes) ? imgCountPrizes++ : imgCountPrizes--;
			currIndexPrizes = newIndexPrizes;
			
		/*	if (imgCountPrizes == this.getSize() - 1 && doAnimPrizes) {
				this.stop();
				doAnimPrizes = false;
				 
				var that = this; 
				setTimeout(function () {
					that.seekTo(0);
				}, 2000);
			}*/
			
		}}).navigator().autoscroll(3000,{api: true, autoplay: true}).bind("swipeleft", function(){
			var api = $("#browsable-the-prizes").data("scrollable");
			api.stop();
			doAnimPrizes = false;
			api.next(400);
		}).bind("swiperight", function(){
			var api = $("#browsable-the-prizes").data("scrollable");
			api.stop();
			doAnimPrizes = false;
			api.prev(400);
		}).bind('click', function() {
			console.log('click');
			var api = $("#browsable-the-prizes").data("scrollable");
			api.stop();
			doAnimPrizes = false;
		});
			
		$("#browsable-the-prizes").scrollable().pause();
		
		setTimeout(function() {
			$("#browsable-the-prizes").scrollable().play();
		}, 3000);
		
		prizesLoaded = 1;
		
	} else {
		// else reset scrollable
		
		var imgCount = 0;
		var currIndex = 0;
		var doAnim = true;
		
		var api = $("#browsable-the-prizes").data("scrollable");
		api.seekTo(0);
		api.pause();
		setTimeout(function() {
			api.play();
		}, 1000);
	}
}

function showWall1(){
		console.log("");
		console.log("              showWall1() running");
		console.log("");
	if (wallpaper1Loaded == 0) {
		// if scrollable hasn't been loaded yet
		
		$("#browsable-wallpaper1").scrollable({circular: true, mousewheel: true, speed: 400, touch: false});
		wallpaper1Loaded = 1;
		
	} else {
		// else reset scrollable
		
		var api = $("#browsable-wallpaper1").data("scrollable");
		api.seekTo(0);
	}
}

function showWall2() {
	console.log("");
		console.log("              showWall2() running");
		console.log("");
	if (wallpaper2Loaded == 0) {
		// if scrollable hasn't been loaded yet
		
		$("#browsable-wallpaper2").scrollable({circular: true, mousewheel: true, speed: 400, touch: false});
		wallpaper2Loaded = 1;	
	} else {
		// else reset scrollable
		
		var api = $("#browsable-wallpaper2").data("scrollable");
		api.seekTo(0);
	}
}

function showWall3(){
	console.log("");
		console.log("              showWall3() running");
		console.log("");
	if (wallpaper3Loaded == 0) {
		// if scrollable hasn't been loaded yet
		
		$("#browsable-wallpaper3").scrollable({circular: true, mousewheel: true, speed: 400, touch: false});
		wallpaper3Loaded = 1;	
	} else {
		// else reset scrollable
		
		var api = $("#browsable-wallpaper3").data("scrollable");
		api.seekTo(0);
	}
}

function showWall4() {
	console.log("");
		console.log("              showWall4() running");
		console.log("");
	if (wallpaper4Loaded == 0) {
		// if scrollable hasn't been loaded yet
		$("#browsable-wallpaper4").scrollable({circular: true, mousewheel: true, speed: 400, touch: false});
		wallpaper4Loaded = 1;	
	} else {
		// else reset scrollable
		var api = $("#browsable-wallpaper4").data("scrollable");
		api.seekTo(0);
	}	
}

function showPayday(){
	console.log("");
		console.log("              showPayday() running");
		console.log("");
	if (winnersLoaded == 0) {
		// if scrollable hasn't been loaded yet
		$("#browsable-winners").scrollable({circular: true, mousewheel: true, speed: 400, touch: false}).navigator().autoscroll({interval: 6000}).bind("swipeleft", function(){
			var api = $("#browsable-winners").data("scrollable");
			api.pause();
			api.next(400);
			setTimeout(function() {
				api.play();
			}, 4000);
		}).bind("swiperight", function(){
			var api = $("#browsable-winners").data("scrollable");
			api.pause();
			api.prev(400);
			setTimeout(function() {
				api.play();
			}, 4000);
		});
		winnersLoaded = 1;
		
	} else {
		// else reset scrollable
		
		var api = $("#browsable-winners").data("scrollable");
		api.seekTo(0);
		api.pause();
		setTimeout(function() {
			api.play();
		}, 1000);
	
	}
}

function pageShowHandler(id) {
	console.log("");
		console.log("              pageShowHandler("+id+") running");
		console.log("");
	
	$('html,body').scrollTop(0);
	
	// animate loader bar
	$("#" + id + " .completion").children('div').css('width', '0').delay(500).animate({ width: "100%" }, 3000, function() { 
	
	
		// kill ajax for links-link fix
		$('a').attr('data-ajax', 'false');
		
		
		
		$('html,body').css('height', 'inherit').css('overflow-y', 'visible');
		$(".content").css('visibility', 'visible');

		setFooterHeight();
			 			
		goToByScroll(winHeight);
			
		// initialize page by #id
			
		if (id == "home"){
			showHome();
		
		}
		
		if (id == "wheel-of-pleasure-the-prizes"){
			showPrizes();
		
		}
		/*pleasure payday*/
		if (id == "pleasure-payday-landing"){
			showPleasurePadyday();

			
		}
		if (id == "products"){
			showProducts();
		}
		
		if (id == "wallpaper1"){
			showWall1();
		}
		
		if (id == "wallpaper2"){
			showWall2();
		}
		
		if (id == "wallpaper3"){
			showWall3();
		}
		
		if (id == "wallpaper4"){
			showWall4();
		}
		
		if (id == "pleasure-payday"){
			showPayday();
		}
        if (id == "blackjack"){
        	
           scrolling = false;
           
           function scrollup() {
				$('#howcopy').animate({marginTop: scrollpos}, 10, function(){
					if (scrollpos < -($('#howcopy').height()-$('#howcopycontainer').height()) || scrolling == false) {
						scrolling = false;
						return false;
					} else {
						scrollpos = scrollpos-1.5;
						scrollup();
					}
				});
			}
			
			function scrolldown() {
				$('#howcopy').animate({marginTop: scrollpos}, 10, function(){
					if (scrollpos > 0 || scrolling == false) {
						scrolling = false;
						return false;
					} else {
						scrollpos = scrollpos+1.5;
						scrolldown();
					}
				});
			}
			
			$('#btnUp').bind("touchstart mousedown", function(event){
				event.preventDefault();
				if (!scrolling) {
					scrolling = true;
					scrollpos = parseInt($('#howcopy').css('margin-top'));
					scrolldown();
				}
			});
			
			$('#btnDown').bind("touchstart mousedown", function(event){
				event.preventDefault();
				if (!scrolling) {
					scrolling = true;
					scrollpos = parseInt($('#howcopy').css('margin-top'));
					scrollup();
				}
			});
			
			$(document).bind("mouseup touchend", function(){
				if(scrolling) {scrolling = false};
			});
        	
        	
        	if(iw){
        		console.log("start the instant blackjack game");
        		setTimeout(function(){ NewInstantWin(); }, 1000);
        	}else{
        		console.log("start the blackjack game");
        		setupBlackjackTable();
        		setTimeout(function(){ NewHand(); }, 1000);
        	}
		}
		
	});
}



$(document).ready(function() {
	console.log("");
		console.log("              $(document).ready(function() running");
		console.log("");
  // Handler for .ready() called.
}).bind('pageinit', function (e) {
	console.log("");
		console.log("              bind('pageinit', function (e) running");
		console.log("");
	console.log('page init');
	setDeviceType();
	pageInitHandler(e.target.id);

}).bind('pagebeforeshow', function (e) {
	console.log("");
		console.log("              bind('pagebeforeshow', function (e) running");
		console.log("");
	
	$('a').blur();
	pageBeforeShowHandler(e.target.id);
	
}).bind('pageshow', function (e) {
	console.log("");
	console.log("              bind('pageshow', function (e) running");
	console.log("");
	setHeaderHeight();
	setTimeout(function(){ pageShowHandler(e.target.id);}, 100);
	
}).bind('pagebeforehide', function (e) {
	console.log("");
	console.log("              bind('pagebeforehide', function (e) running");
	console.log("");
	$("#" + e.target.id + " .completion").children('div').stop();
});