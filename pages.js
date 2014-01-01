$("html").bind("touchmove", false);

    function preload(arrayOfImages) {
	    $(arrayOfImages).each(function(){
	        $('<img/>')[0].src = this;
	    });
	}
	
	preload([
	    'images/bg_CB.jpg', 
	    'images/bg_AA.jpg',
	    'images/bg_BC.jpg',
	    'images/bg_JR.jpg',
	    'images/bg_JL.jpg'
	]);
	
	
    function closeIt(){
		 $("#content").hide('fold', 400, function(){
			 $("#content").html('');
		 });
		 $("body").css('overflow-y','auto');
		 $("#billingBlock").removeClass('billingHover');
		 $("html").unbind("touchmove");
	};
	
	function closeItvideo(){
		 $("#video-preview").fadeOut(function(){
			 $("#videoplayer").html('');
		 });
		 $("body").css('overflow-y','auto');
	};
	

	$(".characterInfo a.next, .characterInfo a.prev").click(function(){
		$(".characterInfo").fadeOut();
	});
	
	$("#CB a.next").click(function(){
		$("#AA").show("slide", {direction:"right"}, 500);
		$("#AA .sec").show("slide", {direction:"right"}, 500);
	});
	$("#CB a.prev").click(function(){
		$("#JL").show("slide", {direction:"left"}, 500);
		$("#JL .sec").show("slide", {direction:"left"}, 500);
	});
	
	$("#AA a.next").click(function(){
		$("#BC").show("slide", {direction:"right"}, 500);
		$("#BC .sec").show("slide", {direction:"right"}, 500);
	});
	$("#AA a.prev").click(function(){
		$("#CB").show("slide", {direction:"left"}, 500);
		$("#CB .sec").show("slide", {direction:"left"}, 500);
	});
	
	$("#BC a.next").click(function(){
		$("#JR").show("slide", {direction:"right"}, 500);
		$("#JR .sec").show("slide", {direction:"right"}, 500);
	});
	$("#BC a.prev").click(function(){
		$("#AA").show("slide", {direction:"left"}, 500);
		$("#AA .sec").show("slide", {direction:"left"}, 500);
	});
	
	$("#JR a.next").click(function(){
		$("#JL").show("slide", {direction:"right"}, 500);
		$("#JL .sec").show("slide", {direction:"right"}, 500);
	});
	$("#JR a.prev").click(function(){
		$("#BC").show("slide", {direction:"left"}, 500);
		$("#BC .sec").show("slide", {direction:"left"}, 500);
	});
	
	$("#JL a.next").click(function(){
		$("#CB").show("slide", {direction:"right"}, 500);
		$("#CB .sec").show("slide", {direction:"right"}, 500);
	});
	$("#JL a.prev").click(function(){
		$("#JR").show("slide", {direction:"left"}, 500);
		$("#JR .sec").show("slide", {direction:"left"}, 500);
	});
	
	$(".photoGallery a.next, .photoGallery a.prev").click(function(){
		$(".photoGallery").fadeOut();
	});
	
	$("#photo01 a.next").click(function(){
		$("#photo02").fadeIn();
	});
	$("#photo01 a.prev").click(function(){
		$("#photo05").fadeIn();
	});
		
	$("#photo02 a.next").click(function(){
		$("#photo03").fadeIn();
	});
	$("#photo02 a.prev").click(function(){
		$("#photo01").fadeIn();
	});
	
	$("#photo03 a.next").click(function(){
		$("#photo04").fadeIn();
	});
	$("#photo03 a.prev").click(function(){
		$("#photo02").fadeIn();
	});
	
	$("#photo04 a.next").click(function(){
		$("#photo05").fadeIn();
	});
	$("#photo04 a.prev").click(function(){
		$("#photo03").fadeIn();
	});
	
	$("#photo05 a.next").click(function(){
		$("#photo01").fadeIn();
	});
	$("#photo05 a.prev").click(function(){
		$("#photo04").fadeIn();
	});
	
// GALLERY *********************************************************************88
	showing_thumbs = 5;
	count_backgrounds = $('#gallery .backgrounds').length;
	$('#gallery .backgrounds a.next').each(function(index){
		if((index+1)!=count_backgrounds){
			$(this).click(function(){
				$('#gallery .backgrounds').eq(index).hide();
				var next = index+1;
				$('#gallery .backgrounds').eq(next).show("slide", { direction: "right" }, 500);
				$('#gallery #gallery-thumbs .per-line-thumbs li').removeClass('active');
				$('#gallery #gallery-thumbs .per-line-thumbs li').eq(next).addClass('active');
				if(next==5){
					$('#gallery #gallery-thumbs li .per-line-thumbs').eq(0).hide();
					$('#gallery #gallery-thumbs li .per-line-thumbs').eq(1).show("slide", { direction: "right" }, 300);
				}
			})
		}
		else{
			$(this).click(function(){
				$('#gallery .backgrounds').eq(index).fadeOut('slow');
				$('#gallery .backgrounds').eq(0).show("slide", { direction: "right" }, 500);	
				$('#gallery #gallery-thumbs .per-line-thumbs li').removeClass('active');
				$('#gallery #gallery-thumbs .per-line-thumbs li').eq(0).addClass('active');
				
				$('#gallery #gallery-thumbs li .per-line-thumbs').eq(0).show("slide", { direction: "right" }, 300);
				$('#gallery #gallery-thumbs li .per-line-thumbs').eq(1).hide();
			})
			
		}
	})
	$('#gallery .backgrounds a.prev').each(function(i){
		if(i!=0){
			$(this).click(function(){
				$('#gallery .backgrounds').eq(i).hide();
				var prev = i-1;
				$('#gallery .backgrounds').eq(prev).show("slide", { direction: "left" }, 500);
				$('#gallery #gallery-thumbs .per-line-thumbs li').removeClass('active');
				$('#gallery #gallery-thumbs .per-line-thumbs li').eq(prev).addClass('active');
				if(prev==(showing_thumbs-1)){
					$('#gallery #gallery-thumbs li .per-line-thumbs').eq(1).hide();
					$('#gallery #gallery-thumbs li .per-line-thumbs').eq(0).show("slide", { direction: "right" }, 300);
				}
				
			})
		}
		else{
			$(this).click(function(){
				var prev = count_backgrounds-1;
				$('#gallery .backgrounds').eq(i).hide();
				$('#gallery .backgrounds').eq(prev).show("slide", { direction: "left" }, 500);	
				$('#gallery #gallery-thumbs .per-line-thumbs li').removeClass('active');
				$('#gallery #gallery-thumbs .per-line-thumbs li').eq(prev).addClass('active');
				
				$('#gallery #gallery-thumbs li .per-line-thumbs').eq(0).hide();
				$('#gallery #gallery-thumbs li .per-line-thumbs').eq(1).show("slide", { direction: "right" }, 300);
			})
		}
	})
	var thumbs_count = $('#gallery #gallery-thumbs .per-line-thumbs li').length;
	$('#gallery #gallery-thumbs .per-line-thumbs li').each(function(a){
		$(this).click(function(){
			$('#gallery #gallery-thumbs .per-line-thumbs li').removeClass('active');
			$(this).addClass('active');
			$('#gallery .backgrounds').hide();
			$('#gallery .backgrounds').eq(a).show("slide", { direction: "right" }, 600);
		})
	})
	$('#gallery #gallery-nav a#next-nav').click(function(){
		$('#gallery #gallery-thumbs li .per-line-thumbs').eq(0).hide();
		$('#gallery #gallery-thumbs li .per-line-thumbs').eq(1).show("slide", { direction: "right" }, 300);
	})
	$('#gallery #gallery-nav a#prev-nav').click(function(){
		$('#gallery #gallery-thumbs li .per-line-thumbs').eq(1).hide();
		$('#gallery #gallery-thumbs li .per-line-thumbs').eq(0).show("slide", { direction: "right" }, 300);
	})
	
	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) { 
		$('#gallery #gallery-nav').attr({
			style:'margin-bottom:3%'
		})
		
	}
//***********************************************************************************************************	
	
	