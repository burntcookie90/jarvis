/* Author:

 */
//Subscribe all divs to this function to resize
var json_empty = "{'SONG':'null','VIDEO':'null','IMAGES':'null'}";
var jsonObj;
function setsizes() {
		var w = $(window).width();
		var h = $(window).height();
		
		if (h<768){h=768;}
		if (w<1024){w=1024;}

		$("#fullscreen").css({
			"width" : w - 2,
			"height" : h
		});
		$("#main").css({
			"width" : w - 2,
			"height" : h - 240
		});
		
		$("#container").css({
			"width" : w - 2,
			"height" : h - 2
		});

		$('#main_leftpanel').css({
			"width" : w/2,
			"height" : 'inherit'
		});
		
		$('#main_rightpanel').css({
			"width" : w/2-10,
			"height" : h - 240
		});
		
		$('#rightpanel_top').css({
			"width" : w/2-10,
			"height" : ((h - 240) / 4) * 3 
		})
		$('#rightpanel_bottom').css({
			"width" : w/2-10,
			"height" : ((h - 240) / 4) * 1 
		})
}

function init(){
	setsizes();
	
}

function ajaxcall(){
	$.ajax({
		url: 'http://localhost:8888/CS3300/jarvis/php/json.php',
		async: true,
		success: function(data){
			jsonObj = data;
		},
		error: function(data){
			jsonObj = jQuery.parseJSON(json_empty);
		}
	});
}

$(window).resize(function() {
	setsizes();
});


$(document).ready(function() {
	init();
	ajaxcall();
});
