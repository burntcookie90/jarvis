/* Author:

*/
//Subscribe all divs to this function to resize
var json_fail = {
	'SONG' : 'FAIL',
	'VIDEO' : 'null',
	'IMAGES' : 'null'
};
var json_success = {
	"SONG" : {
		"url-base" : "../media/song/",
		"songcount" : "2",
		"songs" : [{
			"songid" : "1",
			"songplaylist" : [{
				"name" : "80s"
			}, {
				"name" : "rock"
			}],
			"songtype" : ".mp3",
			"songtitle" : "Bitter Sweet Symphony",
			"songfolder" : "mysongs",
			"songalbum" : "null",
			"songartist" : "The Verve",
			"songalbumimg" : "null"
		}, {
			"songid" : "2",
			"songplaylist" : [{
				"name" : "rock"
			}],
			"songtype" : ".mp3",
			"songtitle" : "Ordinary World",
			"songfolder" : "mysongs",
			"songalbum" : "Purple",
			"songartist" : "Stone Temple Pilots",
			"songalbumimg" : "null"
		}]
	},
	"VIDEO" : {
		"url-base" : "../media/video/",
		"vidcount" : "2",
		"videos" : [{
			"vidname" : "1",
			"songplaylist" : [{
				"name" : "vacation trip"
			}],
			"vidtype" : ".mp4",
			"vidtitle" : "getting home",
			"vidfolder" : "vacation2011"
		}, {
			"vidname" : "2",
			"songplaylist" : [{
				"name" : "vacation trip"
			}],
			"vidtype" : ".mp4",
			"vidtitle" : "getting home",
			"vidfolder" : "vacation2011"
		}]
	},
	"IMAGES" : {
		"url-base" : "../media/img/",
		"imgcount" : "3",
		"images" : [{
			"imgname" : "newcar",
			"imgtype" : ".jpg",
			"imgfolder" : "cars"
		}, {
			"imgname" : "newcar2",
			"imgtype" : ".jpg",
			"imgfolder" : "cars"
		}, {
			"imgname" : "newcar3",
			"imgtype" : ".jpg",
			"imgfolder" : "cars"
		}]
	}
}

var jsonObj;
var is_Playing = '1';
var resize_pane_selected = '1';

function playPause() {
	if(is_Playing == '1') {
		$(".buttons_controls_play_pause").css({
			"background-image" : "url('./css/img/pause.png')"
		});
		is_Playing = '0';
	} else {
		$(".buttons_controls_play_pause").css({
			"background-image" : "url('./css/img/play.png')"
		});
		is_Playing = '1';
	}
};

function resizePanes(div){
	if($(div).attr("id") == "resize_left")
	{
		
		resize_pane_selected = '0';
		$("#resize_left").css({
			"background-image" : "url('./css/img/resize_left_selected.png')"
		});
		$("#resize_reset").css({
			"background-image" : "url('./css/img/resize_reset.png')"
		});
		$("#resize_right").css({
			"background-image" : "url('./css/img/resize_right.png')"
		});
	}
	if($(div).attr("id") == "resize_reset")
	{
		resize_pane_selected = '1';
		$(div).css({
			"background-image" : "url('./css/img/resize_reset_selected.png')"
		});
		$("#resize_left").css({
			"background-image" : "url('./css/img/resize_left.png')"
		});
		$("#resize_right").css({
			"background-image" : "url('./css/img/resize_right.png')"
		});
	}
	if($(div).attr("id") == "resize_right")
	{
		resize_pane_selected = '2';
		$(div).css({
			"background-image" : "url('./css/img/resize_right_selected.png')"
		});
		$("#resize_reset").css({
			"background-image" : "url('./css/img/resize_reset.png')"
		});
		$("#resize_left").css({
			"background-image" : "url('./css/img/resize_left.png')"
		});
	}
}

var size_state = '0';
function resize_right() {
	var w = $(window).width();
	var h = $(window).height();

	if(size_state == '0') {
		$('#main_leftpanel').css({
			"width" : w / 2 - 10,
		});

		$('#main_rightpanel').css({
			"width" : w / 2 - 10,
		});
	}
}

$(".buttons_controls_play_pause").mouseover(function() {
	if(is_Playing == '1') {
		$(".buttons_controls_play_pause").css({
			"background-image" : "url('./css/img/play_hover.png')"
		});
	} else {
		$(".buttons_controls_play_pause").css({
			"background-image" : "url('./css/img/pause_hover.png')"
		});
	}
}).mouseout(function() {
	if(is_Playing == '1') {
		$(".buttons_controls_play_pause").css({
			"background-image" : "url('./css/img/play.png')"
		});
	} else {
		$(".buttons_controls_play_pause").css({
			"background-image" : "url('./css/img/pause.png')"
		});
	}
});
function setsizes() {
	var w = $(window).width();
	var h = $(window).height();
	var buffer = 15;

	if(h < 300) {
		h = 300;
	}
	if(w < 500) {
		w = 500;
	}

	$("#main").css({
		"width" : w,
	});

	$("#fullscreen").css({
		"width" : w - 2,
		"height" : h / 2
	});

	$("#container").css({
		"height" : h - 59
	});

	$('#main_leftpanel').css({
		"width" : w / 2 - 10,
	});

	$('#main_rightpanel').css({
		"width" : w / 2 - 10,
	});
	$("#main").css({
		"height" : h - $("footer").height() - $("header").height() - buffer
	});

	$('#rightpanel_bottom').css({
		"width" : w / 2,
	})
	$('#rightpanel_top').css({
		"width" : w / 2,
		"height" : $("#main").height() - $("#rightpanel_bottom").height()
	})
	$('.mediameta').css({
		"width" : w / 2 - 100,
		"height" : ((h - 240) / 4) - 50
	})

}

function hidestuff(boxid){
   document.getElementById(boxid).style.visibility="hidden";
}

function init() {
	setsizes();
	ajaxcall();
	hidestuff("whiteout");
}

function ajaxcall() {
	$.ajax({
		url : '../php/json.php',
		async : true,
		success : function(data) {
			jsonObj = json_success;
		},
		error : function(data) {
			jsonObj = json_success;
		},
		type : 'POST'
	});
}


$(window).resize(function() {
	setsizes();
});

$(document).ready(function() {
	init();
});
