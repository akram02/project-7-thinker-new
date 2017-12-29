
$(document).ready(function(){
  $(window).scroll(function(){
      parallax(); 
  });
});
function parallax(){
   var x =$(window).scrollTop();
    $(".baner-content").css("background-position","center "+(x*0.75)+"px");	
}
$(document).ready(function(){
  $(window).scroll(function() {
      var x=$(window).scrollTop();
    if (x > 50) {
	  $(".header").addClass("header-efect");
	  $(".nav-brand").css("color","#121212");
	  $(".nav-menu ul li a").css("color","#121212");
    } else {
      $(".header").removeClass("header-efect");
	  $(".nav-brand").css("color","white");
	  $(".nav-menu ul li a").css("color","white");
    }
  });
});

$(document).ready(function(){
    mama();
}); 
    
    var x=0;
	var a=0;
	var c=$(".owl-page span");
    function mama(){
	    var d=$(".owl-page span").length;
	    a=a+1;
		if(a==5){
		  $(c[a-2]).css("opacity",0.5);
		}
		if(a>(d)){
		    a=1;
		}
	    x=x+555;
        if(x>2220){
		    x=555;
		}
		var b=x-555;
		$(".cursul-slider").css("transform","translate("+(-b)+"px)");
		$(c[a-1]).css("opacity",1);
		$(c[a-2]).css("opacity",.5);
	}
	setInterval(mama,5000);
	$(c[0]).click(function(){
	    $(".cursul-slider").css("transform","translate(0px)");
		$(c[0]).css("opacity",1);
		$(c[a-1]).css("opacity",.5);
		x=0;
		a=0;
	});
	$(c[1]).click(function(){
	    $(".cursul-slider").css("transform","translate(-555px)");
		$(c[1]).css("opacity",1);
		$(c[a-1]).css("opacity",.5);
		x=555;
		a=1;
	});
	$(c[2]).click(function(){
	    $(".cursul-slider").css("transform","translate(-1110px)");
		$(c[2]).css("opacity",1);
		$(c[a-1]).css("opacity",.5);
		x=1110;
		a=2;
	});
	$(c[3]).click(function(){
	    $(".cursul-slider").css("transform","translate(-1665px)");
		$(c[3]).css("opacity",1);
		$(c[a-1]).css("opacity",.5);
		x=1665;
		a=3;
	});
	
$(document).ready(function(){
    var d=$(".section-heading ul li");
	var e=$(".tab");
	$(d[0]).click(function(){
	    $(e[1],e[2],e[3]).css("display","none");
	    $(e[0]).css("display","block");
	});
	$(d[1]).click(function(){
	    $(e[0],e[2],e[3]).css("display","none");
	    $(e[1]).css("display","block");
	});
	$(d[2]).click(function(){
	    $(e[0],e[1],e[3]).css("display","none");
	    $(e[2]).css("display","block");
	});
	$(d[3]).click(function(){
	    $(e[0],e[1],e[2]).css("display","none");
	    $(e[3]).css("display","block");
	});
});
