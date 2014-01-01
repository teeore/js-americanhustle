//$("html").on("touchmove", false);

$(document).ready(function() {
	
	$("#jquery_jplayer_1").jPlayer({
	        ready: function(event) {
            $(this).jPlayer("setMedia", {
                mp3: "sound/sound.mp3",
            }).jPlayer("volume", 0.5);
        },
        
        swfPath: "swf",
        supplied: "mp3"
		
	});
	
     $(window).load(function() {
	    setTimeout(function(){
		$("#jquery_jplayer_1").jPlayer("play");
	    }, 1000)
	    
    });
    $('.quote-fade').quovolver();
			

	
	$(window).blur( function() {
  		$("#jquery_jplayer_1").jPlayer("pause");
	});	
	
	
	 if(window.location.hash.toLowerCase() == "#cast" ||
	 	window.location.hash.toLowerCase() == "#christian_bale" ||
	 	window.location.hash.toLowerCase() == "#bradley_cooper" ||
	 	window.location.hash.toLowerCase() == "#amy_adams" ||
	 	window.location.hash.toLowerCase() == "#jeremy_renner" ||
	 	window.location.hash.toLowerCase() == "#jennifer_lawrence"){
		 $.get('pages/cast.php', function(recent) {
				  $('#content').html(recent);
				  $("#content").fadeIn();
				  $("body").css('overflow-y','hidden');
		});
	 } else if(window.location.hash.toLowerCase() == "#story"){
	 	$.get('pages/story.php', function(recent) {
				  $('#content').html(recent);
				  $("#content").fadeIn();
				  $("body").css('overflow-y','hidden');
			});
	 } else if(window.location.hash.toLowerCase() == "#filmmakers"){
	 	$.get('pages/filmmakers.php', function(recent) {
				  $('#content').html(recent);
				  $("#content").fadeIn();
				  $("body").css('overflow-y','hidden');
			});
	 } else if(window.location.hash.toLowerCase() == "#videos"){
	 	$.get('pages/videos.php', function(recent) {
				  $('#content').html(recent);
				   $("#content").fadeIn();
				   $("body").css('overflow-y','hidden');
			});
	 } else if(window.location.hash.toLowerCase() == "#photos"){
	 	$.get('pages/photos.php', function(recent) {
				  $('#content').html(recent);
				   $("#content").fadeIn();
				   $("body").css('overflow-y','hidden');
			});
	 }

	function preload(arrayOfImages) {
	    $(arrayOfImages).each(function(){
	        $('<img/>')[0].src = this;
	    });
	}
	
	preload([
		'images/bg_filmmakers.jpg',
	    'images/bg_videos.jpg', 
	    'images/bg_story.jpg'
	   	]);

	setTimeout(function(){
		$(".c_indv").mouseenter(function(){
		var caption = $(this).find('.caption');
		var img = $(this).find('img');
		
		caption.fadeIn();
				
		});
		
		$(".c_indv").mouseleave(function(){
			var caption = $(this).find('.caption');
			
			caption.fadeOut();
		});
	}, 4000)
	


		$("#jennifer_lawrence-c, #christian_bale-c, #bradley_cooper-c, #amy_adams-c, #jeremy_renner-c").click(function(){
			$("#nav03").trigger('click');
		});

		
		/*
		var count_cast = $('#characters .c_indv').length;
		$('.c_box').each(function(index){
			$(this).click(function(){
				for(el=0; el<count_cast; ++el){
					if(el!=index){
						$('.c_box').eq(el).addClass('animation');
					}
				}
				$(this).addClass('pizdet');
				$('.animation').animate({
					top:"9999"
				}, 2000)
				
				var screen_size = $(window).width();
				var el_width = Math.round($('.animation').width()/2);
				var ibati = $('.pizdet').position();
				var left_poz = Math.round(ibati.left);
				var center = Math.round(screen_size/2)-left_poz-el_width;
				

				$('.pizdet').animate({
						left:center+"px"
					}, 	
					1500, 
					function(){
						
					}
				)
				
			})
		})
		*/

	
	$("#nav01").click(function(){
			 $.get('pages/videos.php', function(recent) {
				  $('#content').html(recent);
				  $('.page-content').hide();
				  $("#content").show("blind", { direction: "bottom" },600, function(){
					$('.page-content').show("blind", { direction: "bottom" },800);
				  });
				  $("body").css('overflow-y','hidden');
			});
	});
	
	$("#nav02").click(function(){
			 $.get('pages/story.php', function(recent) {
				  $('#content').html(recent);
				  $('.page-content').hide();
				  $("#content").show("blind", { direction: "bottom" },600, function(){
					$('.page-content').show("blind", { direction: "bottom" },800);
				  });
				  $("body").css('overflow-y','hidden');
			});
	});
	
	$("#nav03").click(function(){
			$.get('pages/cast.php', function(recent) {
				  $('#content').html(recent);
				  $("#content").show();
				  $("body").css('overflow-y','hidden');
			});
			if(($(window).width()+200)<$(window).height()){		
				$('.cast-backgrounds').attr({
					style:"width:120%; padding-top:125%"
				})
			}
	
	});
	
	$("#nav04").click(function(){
			 $.get('pages/filmmakers.php', function(recent) {
				  $('#content').html(recent);
				  $('.page-content').hide();
				  $("#content").show("blind", { direction: "bottom" },600, function(){
					$('.page-content').show("blind", { direction: "bottom" },800);
				  });
				  $("body").css('overflow-y','hidden');
				  
			});
	});

	$("#nav05").click(function(){
			 /*
			 $.get('pages/photos.php', function(recent) {
				  $('#content').html(recent);
				  $('#gallery').hide();
				  $("#content").show("blind", { direction: "left" },100, function(){
					$("#gallery").show("blind", { direction: "left" },500);
				  });
				  $("body").css('overflow-y','hidden');
			});
			*/
	});
	$("#nav06").click(function(){
			 $.get('pages/downloads.php', function(recent) {
				  $('#content').html(recent);
				  $('.page-content').hide();
				  $("#content").show("blind", { direction: "bottom" },600, function(){
					$('.page-content').show("blind", { direction: "bottom" },800);
				  });
				  $("body").css('overflow-y','hidden');
				  
			});
	});
	
	var html=0;
	$('#nav ul li').each(function(i){
		$(this).click(function(){
			if(html==0 && i!=5){
				$('html').css('overflow', 'hidden');
				html=1;
			}
			
		})
	})
	$('#character .left c_box').each(function(){
		$(this).click(function(){
			if(html==0){
				$('html').css('overflow', 'hidden');
				html=1;
			}
		})
	})
/*
	$(window).load(function(){
		
		$('.c_box').eq(0).animate({
			opacity:"1.0"
			}, 600, function(){
		
				$('.c_box').eq(1).animate({
					opacity:"1.0"
				}, 600, function(){
					$('.c_box').eq(2).animate({
						opacity:"1.0"
					}, 600, function(){
					
						$('.c_box').eq(3).animate({
							opacity:"1.0"
						}, 600, function(){
							$('.c_box').eq(4).animate({
								opacity:"1.0"
							}, 600, function(){
								$('#nav').fadeIn(1000);
								$('#billing_block').fadeIn(1000);
							})
						})
					})
				})
		});
		
		$('.caption').eq(0).animate({
			opacity:"1.0"
			}, 600, function(){
				$('.caption').eq(1).animate({
					opacity:"1.0"
				}, 600, function(){
					$('.caption').eq(2).animate({
						opacity:"1.0"
					}, 600, function(){
					
						$('.caption').eq(3).animate({
							opacity:"1.0"
						}, 600, function(){
							$('.caption').eq(4).animate({
								opacity:"1.0"
							}, 600, function(){
								
							})
						})
					})
				})
		});
		
		
		
			setTimeout(function(){
				$('.c_indv .caption').fadeOut(1600)
			}, 4800)
	})
*/
	
	$(window).on('orientationchange', function(){
		if(($(window).width()+200)<$(window).height()){		
			$('.cast-backgrounds').attr({
				style:"width:120%; padding-top:125%"
			})
		}
		else{
			$('.cast-backgrounds').attr({
				style:"width:120%; padding-top:125%"
			})
		}
	})	
});

