function doOnOrientationChange()
	{
		switch(window.orientation)
			{ 
				case -90:
				case 90:
					$("body").css({width: window.innerWidth, height : window.innerHeight});
					$("#land").css({width: window.innerWidth, height : window.innerHeight});
					anim_landscape();
					$('#port,#bird_por,#phare_por,#shine1_por,#shine2_por,#shine3_por,#enamoured_por,#logo_por,#tagline_por').stop();
					window.clearTimeout(timer_a_por);
					window.clearTimeout(timer_1_por);
					window.clearTimeout(timer_2_por);
					window.clearTimeout(timer_3_por);
					window.clearTimeout(timer_4_por);
					window.clearTimeout(timer_5_por);
					window.clearTimeout(timer_6_por);
					window.clearTimeout(timer_7_por);
					window.clearTimeout(timer_8_por);
					window.clearTimeout(timer_9_por);
					window.clearTimeout(timer_10_por);
					window.clearTimeout(timer_11_por);
					window.clearTimeout(timer_12_por);
					window.clearTimeout(timer_13_por);
                	// window.clearTimeout(timer_1);
				break;

				default:
					$("body").css({width: window.innerWidth, height : window.innerHeight});
					$("#port").css({width: window.innerWidth, height : window.innerHeight});
					anim_portrait();
					$('#land,#bird,#phare,#shine1,#shine2,#shine3,#enamoured,#logo,#tagline').stop();
					
					window.clearTimeout(timer_a);
					window.clearTimeout(timer_b);
					window.clearTimeout(timer_1);
					window.clearTimeout(timer_2);
					window.clearTimeout(timer_3);
					window.clearTimeout(timer_4);
					window.clearTimeout(timer_5);
					window.clearTimeout(timer_6);
					window.clearTimeout(timer_7);
					window.clearTimeout(timer_8);
					window.clearTimeout(timer_9);
					window.clearTimeout(timer_10);
					window.clearTimeout(timer_11);
					window.clearTimeout(timer_12);
					window.clearTimeout(timer_13);
					window.clearTimeout(timer_14);
				break;
			}
	}

window.addEventListener('orientationchange', doOnOrientationChange);

$(document).ready(function(){
		if( navigator.userAgent.match(/(iPad|iPhone|iPod)/i) || navigator.userAgent.match(/Android/i)){ 
			$("body").css({width: "968px", height: "88px"});
			$("#port").css({width: "968px", height: "88px"});
			doOnOrientationChange();
		}else{
			$("body").css({width: "968px", height: "88px"});
			$("#land").css({width: "968px", height: "88px"});
			anim_landscape();
		}
	});

var timer_a_por=null;
var timer_1_por=null;
var timer_2_por=null;
var timer_3_por=null;
var timer_4_por=null;
var timer_5_por=null;
var timer_6_por=null;
var timer_7_por=null;
var timer_8_por=null;
var timer_9_por=null;
var timer_10_por=null;
var timer_11_por=null;
var timer_13_por=null;

var timer_a=null;
var timer_b=null;
var timer_1=null;
var timer_2=null;
var timer_3=null;
var timer_4=null;
var timer_5=null;
var timer_6=null;
var timer_7=null;
var timer_8=null;
var timer_9=null;
var timer_10=null;
var timer_11=null;
var timer_13=null;
var timer_14=null;


// var timer_1_por=null;






///////////animation paysage/////////
	function anim_landscape(){
		//Initialisation css
		$("#port").css({display: "none"});
		$("#land").css({display: "block"}); 
		$("#bird").css({left: "20%", top:"-85%", opacity:"0", width:"26%"});
		$("#phare").css({left: "47%", bottom:"2%", opacity:"0"});
		$("#shine1").css({left: "47%", top:"48%", opacity:"0",width:"4%"}); 
		$("#shine2").css({left: "46%", top:"61%", opacity:"0"}); 
		$("#shine3").css({left: "48%", top:"29%", opacity:"0"});
		$("#enamoured").css({left: "30%", top:"45%", opacity:"0"});
		$("#logo").css({left: "33%", top:"10%", opacity:"0"});
		$("#tagline").css({left: "37%", top:"44%", opacity:"0"});
		timer_1 = window.setTimeout(function(){
		 	$("#phare").animate({opacity:1, }, 1500, 'easeInCubic');
		},500);

		timer_a = window.setTimeout(function(){
		 	$("#bird").animate({opacity:1, width:"30%",left:"32%",top:"-25%"}, 4500);
		});
		
		timer_b = window.setTimeout(function(){
			$("#bird").delay(2000).animate({left: "-=170"}, 2300);
		});

		timer_2 = window.setTimeout(function(){
		 	$("#shine1").delay(100).animate({opacity:0.8}, 400, 'easeInCubic');
		},5000);

		timer_3 = window.setTimeout(function(){
		 	$("#shine1").animate({opacity:0}, 600, 'easeInCubic');
		},5200);

		timer_4 = window.setTimeout(function(){
		 	$("#shine2").delay(300).animate({opacity:0.8}, 200, 'easeInCubic');
		},5100);

		timer_5 = window.setTimeout(function(){
		 	$("#shine2").animate({opacity:0}, 600, 'easeInCubic');
		},5300);

		timer_6 = window.setTimeout(function(){
		 	$("#shine3").delay(500).animate({opacity:0.8}, 200, 'easeInCubic');
		},5200);

		timer_7 = window.setTimeout(function(){
		 	$("#shine3").animate({opacity:0}, 600, 'easeInCubic');
		},5300);

		timer_8 = window.setTimeout(function(){
			$("#bird").delay(1000).animate({opacity:0}, 500, 'easeInCubic');
		},9300);

		timer_9 = window.setTimeout(function(){
			$("#enamoured").delay(200).animate({left: "60%", opacity:1}, 1700);
		},6500);

		timer_10 = window.setTimeout(function(){
			$("#enamoured").delay(1600).animate({opacity:0}, 1000);
		},7500);

		timer_11 = window.setTimeout(function(){
			$("#phare").delay(2500).animate({opacity:0}, 1000);
		},7500);

		timer_12 = window.setTimeout(function(){
			$("#logo").delay(7000).animate({opacity:1}, 2000);
		},8000);

		timer_13 = window.setTimeout(function(){
			$("#tagline").delay(1600).animate({opacity:1}, 1500);
		},9000);
		
		timer_14 = window.setTimeout(function(){
			$("#tagline").delay(2400).animate({opacity:0}, 1000);
		},9000);
		
	};