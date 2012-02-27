/* Author: TEAM JARVIS

 */
var jsonObj;
var is_Playing = '0';
var resize_pane_selected = '1';
//Subscribe all divs to this function to resize
var w = $(window).width();
var rightPanelWidth = w / 2;
var leftPanelWidth = w / 2;
var json_fail = {
	'SONG' : 'null',
	'VIDEO' : 'null',
	'IMAGES' : 'null'
};
var json_success = {
	"SONG" : {
		"url-base" : "../media/song/",
		"count" : "4",
		"songs" : [{
			"ID" : "1",
			"genre" : "Alternative Rock",
			"type" : "mp3",
			"title" : "Bitter Sweet Symphony",
			"album" : "ZAlbum",
			"artist" : "The Verve"
		}, {
			"ID" : "2",
			"genre" : "rock",
			"type" : "mp3",
			"title" : "Ordinary World",
			"album" : "Purple",
			"artist" : "Stone Temple Pilots"
		},{
			"ID" : "3",
			"genre" : "Alternative Rock",
			"type" : "mp3",
			"title" : "Ya Ya",
			"album" : "fAlbum",
			"artist" : "The Berve"
		}, {
			"ID" : "4",
			"genre" : "rock",
			"type" : "mp3",
			"title" : "Wa Wa",
			"album" : "Zinton",
			"artist" : "Wa Wa Band"
		}]
	},
	"VIDEO" : {
		"url-base" : "../media/video/",
		"count" : "2",
		"videos" : [{
			"ID" : "0",
			"type" : "mp4",
			"title" : "Meet The Spy",
		}, {
			"ID" : "2",
			"type" : "mp4",
			"title" : "Niggas In Paris",
		}]
	},
	"IMAGES" : {
		"url-base" : "../media/img/",
		"count" : "3",
		"images" : [{
			"ID" : "2",
			"type" : "jpg",
			"title" : "newcar",
		}, {
			"ID" : "3",
			"type" : "jpg",
			"title" : "newcar2",
		}, {
			"ID" : "4",
			"type" : "jpg",
			"title" : "newcar3",
		}]
	}
}

// DEFAULT JSON OBJECT IN CASE OF FAILURE
var json_default = {
	'SONG' : 'default',
	'VIDEO' : 'default',
	'IMAGES' : 'default'
};

function playPause() {

	_V_("mainvideo").ready(function() {
		var myPlayer = this;

		if(is_Playing == '0') {
			myPlayer.play();
			$(".buttons_controls_play_pause").css({
				"background-image" : "url('./css/img/pause.png')"
			});
			is_Playing = '1';
		} else {
			myPlayer.pause();
			$(".buttons_controls_play_pause").css({
				"background-image" : "url('./css/img/play.png')"
			});
			is_Playing = '0';
		}
	});
};

var isGhostBarEnabled = '0';
var currentState = '0'; 
function stateMachine(div) {
	if($(div).attr("id") == "media_select_songs") {
		jarvis.webdb.getMedia(loadMedia, "songs");
		$(".buttons_media_music").css({
				"background-image" : "url(./css/img/music_hover.png)",
		});
		$(".buttons_media_pics").css({
				"background-image" : "url(./css/img/pics.png)",
		});
		$(".buttons_media_vids").css({
				"background-image" : "url(./css/img/video.png)",
		});
		if(isGhostBarEnabled == '0') {
			_V_("mainvideo").fadeOut(200);
			_V_("mainvideo").pause();
			currentState = '0';
			$("#media_select_level3").css({
				"background-color" : "#111111",
				"visibility" : "visible"
			});

			$("#music_artist").css({
				"background-image" : "url(./css/img/artists.png)",
				"visibility" : "visible"
			});

			$("#music_album").css({
				"background-image" : "url(./css/img/albums.png)",
				"visibility" : "visible"
			});

			$("#music_genre").css({
				"background-image" : "url(./css/img/genres.png)",
				"visibility" : "visible"
			});

			$("#music_songs").css({
				"background-image" : "url(./css/img/songs.png)",
				"visibility" : "visible"
			});
			
			
			isGhostBarEnabled = '1';
			
		}
		
		$("#songs").css({
				"visibility" : "visible",
				"background-image": "url(img/songs.jpg);"
			});
			
			$("#videos").css({
				"visibility" : "hidden"
			});
			
			$("#pictures").css({
				"visibility" : "hidden"
			});
			
		
		
		
	} else if($(div).attr("id") == "media_select_img") {
		_V_("mainvideo").fadeOut(200);
		_V_("mainvideo").pause();
		currentState = '1';
		jarvis.webdb.getMedia(loadMedia, "images");
		$(".buttons_media_music").css({
				"background-image" : "url(./css/img/music.png)",
		});
		$(".buttons_media_pics").css({
				"background-image" : "url(./css/img/pics_hover.png)",
		});
		$(".buttons_media_vids").css({
				"background-image" : "url(./css/img/video.png)",
		});
		if(isGhostBarEnabled == '1') {
			$("#media_select_level3").css({
				"background-color" : "#111111"
			});

			$("#music_artist").css({
				"visibility" : "hidden"
			});

			$("#music_album").css({
				"visibility" : "hidden"
			});

			$("#music_genre").css({
				"visibility" : "hidden"
			});

			$("#music_songs").css({
				"visibility" : "hidden"
			});
			
			
			
			isGhostBarEnabled = '0';
			
		}
		
		$("#pictures").css({
				"visibility" : "visible"
			});
			
			$("#videos").css({
				"visibility" : "hidden"
			});
			
			$("#songs").css({
				"visibility" : "hidden"
			});
		
		
		
	} else if($(div).attr("id") == "media_select_vids") {
		_V_("mainvideo").fadeIn(300);
		jarvis.webdb.getMedia(loadMedia, "videos");
			
			currentState = '2';
			$(".buttons_media_music").css({
				"background-image" : "url(./css/img/music.png)",
			});
			$(".buttons_media_pics").css({
				"background-image" : "url(./css/img/pics.png)",
			});
			$(".buttons_media_vids").css({
				"background-image" : "url(./css/img/video_hover.png)",
			});
		if(isGhostBarEnabled == '1') {
			$("#media_select_level3").css({
				"background-color" : "#111111"
			});

			$("#music_artist").css({
				"visibility" : "hidden"
			});

			$("#music_album").css({
				"visibility" : "hidden"
			});

			$("#music_genre").css({
				"visibility" : "hidden"
			});

			$("#music_songs").css({
				"visibility" : "hidden"
			});
			
			
			
			isGhostBarEnabled = '0';
			
		}
			$("#videos").css({
				"visibility" : "visible"
			});
					
			$("#songs").css({
				"visibility" : "hidden"
			});
			
			$("#pictures").css({
				"visibility" : "hidden"
			});
	}

}

$(".buttons_media_music").mouseover(function() {
	if(currentState!='0')
	{
		$(".buttons_media_music").css({
			"background-image" : "url('./css/img/music_hover.png')"
		});
	}

}).mouseout(function() {
	if(currentState!='0')
	{
		$(".buttons_media_music").css({
			"background-image" : "url('./css/img/music.png')"
		});
	}
});

$(".buttons_media_pics").mouseover(function() {
	if(currentState!='1')
	{
		$(".buttons_media_pics").css({
			"background-image" : "url('./css/img/pics_hover.png')"
		});
	}

}).mouseout(function() {
	if(currentState!='1')
	{
		$(".buttons_media_pics").css({
			"background-image" : "url('./css/img/pics.png')"
		});
	}
});

$(".buttons_media_vids").mouseover(function() {
	if(currentState!='2')
	{
		$(".buttons_media_vids").css({
			"background-image" : "url('./css/img/video_hover.png')"
		});
	}

}).mouseout(function() {
	if(currentState!='2')
	{
		$(".buttons_media_vids").css({
			"background-image" : "url('./css/img/video.png')"
		});
	}
});

$(".music_artist").mouseover(function() {
	if(isGhostBarEnabled == '1') {
		$(".music_artist").css({
			"background-image" : "url('./css/img/artists_hover.png')",
			"background-color" : "#34b4e3"
		});
	}
}).mouseout(function() {
	if(isGhostBarEnabled == '1') {
		$(".music_artist").css({
			"background-image" : "url('./css/img/artists.png')",
			"background-color" : "#111111"
		});
	}
});



$(".music_album").mouseover(function() {
	if(isGhostBarEnabled == '1') {
		$(".music_album").css({
			"background-image" : "url('./css/img/albums_hover.png')",
			"background-color" : "#34b4e3"
		});
	}
}).mouseout(function() {
	if(isGhostBarEnabled == '1') {
		$(".music_album").css({
			"background-image" : "url('./css/img/albums.png')",
			"background-color" : "#111111"
		});
	}
});

$(".music_genre").mouseover(function() {
	if(isGhostBarEnabled == '1') {
		$(".music_genre").css({
			"background-image" : "url('./css/img/genres_hover.png')",
			"background-color" : "#34b4e3"
		});
	}
}).mouseout(function() {
	if(isGhostBarEnabled == '1') {
		$(".music_genre").css({
			"background-image" : "url('./css/img/genres.png')",
			"background-color" : "#111111"
		});
	}
});

$(".music_songs").mouseover(function() {
	if(isGhostBarEnabled == '1') {
		$(".music_songs").css({
			"background-image" : "url('./css/img/songs_hover.png')",
			"background-color" : "#34b4e3"
		});
	}
}).mouseout(function() {
	if(isGhostBarEnabled == '1') {
		$(".music_songs").css({
			"background-image" : "url('./css/img/songs.png')",
			"background-color" : "#111111"
		});
	}
});
function resizePanes(div) {
	if($(div).attr("id") == "resize_left") {
		rightPanelWidth = w / 4 * 3;
		leftPanelWidth = w / 4;
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
	if($(div).attr("id") == "resize_reset") {
		rightPanelWidth = w / 2;
		leftPanelWidth = w / 2;
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
	if($(div).attr("id") == "resize_right") {
		rightPanelWidth = w / 4;
		leftPanelWidth = w / 4 * 3;
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
	$('#main_rightpanel').css({
		"width" : rightPanelWidth - 10,
	});
	$('#rightpanel_bottom').css({
		"width" : rightPanelWidth
	});
	$('#rightpanel_top').css({
		"width" : rightPanelWidth,

	});
	$('#main_leftpanel').css({
		"width" : leftPanelWidth - 10
	});
	$('.mediameta').css({
		"width" : rightPanelWidth - 100
	});

	var vidHeight = (rightPanelWidth - 50) * 9 / 16;
	if(vidHeight < ($("#rightpanel_top").height())) {
		_V_("mainvideo").size(rightPanelWidth - 50, (vidHeight));
	} else {
		vidHeight = $("#rightpanel_top").height();
		_V_("mainvideo").size(vidHeight * 16 / 9, (vidHeight));
	}
}

var size_state = '0';
function resize_right() {
	w = $(window).width();
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
	if(is_Playing == '0') {
		$(".buttons_controls_play_pause").css({
			"background-image" : "url('./css/img/play_hover.png')"
		});
	} else {
		$(".buttons_controls_play_pause").css({
			"background-image" : "url('./css/img/pause_hover.png')"
		});
	}
}).mouseout(function() {
	if(is_Playing == '0') {
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
	w = $(window).width();
	var h = $(window).height();

	var buffer = 15;

	if(resize_pane_selected == '0') {
		rightPanelWidth = w / 4 * 3;
		leftPanelWidth = w / 4;
	} else if(resize_pane_selected == '1') {
		rightPanelWidth = w / 2;
		leftPanelWidth = w / 2;
	} else {
		rightPanelWidth = w / 4;
		leftPanelWidth = w / 4 * 3;
	}

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
		"width" : leftPanelWidth - 10,
	});

	$('#main_rightpanel').css({
		"width" : rightPanelWidth - 10,
	});
	$("#main").css({
		"height" : h - $("footer").height() - $("header").height() - buffer
	});

	$('#rightpanel_bottom').css({
		"width" : rightPanelWidth,
	})
	$('#rightpanel_top').css({
		"width" : rightPanelWidth,
		"height" : $("#main").height() - $("#rightpanel_bottom").height() - 15
	})
	$('.mediameta').css({
		"width" : rightPanelWidth - 100
	})

	$('#container_controls').css({
		"width" : w,
	})

	$('.trackbar').css({
		"width" : w * .6 - 146,
	})

	$('.volume').css({
		"width" : w - w * .6 - 146 - w * .2,
		"left" : w * .6 + 225,
	})

	$('.volume_icon').css({
		"left" : w * .6 + 146,
	})

	$('.fullscreen').css({
		"left" : w * .8 + 100,
	})

	var vidHeight = (rightPanelWidth - 50) * 9 / 16;
	if(vidHeight < ($("#rightpanel_top").height())) {
		_V_("mainvideo").size(rightPanelWidth - 50, (vidHeight));
	} else {
		vidHeight = $("#rightpanel_top").height();
		_V_("mainvideo").size(vidHeight * 16 / 9, (vidHeight));
	}

}

function hidestuff(boxid) {
	document.getElementById(boxid).style.visibility = "hidden";
}

function ajaxcall() {
	$.ajax({
		url : '../php/json.php',
		async : true,
		success : function(data) {
			jsonObj = json_success;
			// store the media information into localstorage
			localStorage.setItem("media", JSON.stringify(jsonObj));
		},
		error : function(data) {
			jsonObj = json_success;
		},
		type : 'GET'
	});
}

function seek() {
	//Get mouse X position
	var x = event.pageX;
	//Get the offset of the trackbar
	var xOffset = $(".trackbar").offset().left;
	//Set the xOffset to the offset of the actual trackbar
	xOffset = x - xOffset;
	//Create a percentage of progress on the bar
	var xPercent = xOffset / parseInt(document.getElementById('progress').style.width);
	//Sets video to the play time
	_V_("mainvideo").currentTime(_V_("mainvideo").duration() * xPercent);
	_V_("mainvideo").play();
	_V_("mainvideo").pause();
	_V_("mainvideo").play();
	trackBarProgress(xPercent * 100);

}

function fullscreen() {
	_V_("mainvideo").requestFullScreen();
}

var isMuted = '0';
var oldVolume = '0';

function changeVolume() {
	//Get mouse X position
	var x = event.pageX;
	//Get the offset of the trackbar
	var xOffset = $(".volume").offset().left;
	//Set the xOffset to the offset of the actual trackbar
	xOffset = x - xOffset;

	//Create a percentage of progress on the bar
	var xPercent = xOffset / parseInt(document.getElementById('volumeBar').style.width);
	//Sets video to the play time
	_V_("mainvideo").volume(xPercent);
	oldVolume = xPercent;
	document.getElementById('volumeBar').getElementsByTagName('p')[0].style.width = (((xPercent * 100) + '%'));
	$(".volume_icon").css({
		"background-image" : "url('./css/img/sound.png')"
	});

}

function mute() {
	if(isMuted == '0') {
		$(".volume_icon").css({
			"background-image" : "url('./css/img/muted.png')"
		});
		_V_("mainvideo").volume(0);
		document.getElementById('volumeBar').getElementsByTagName('p')[0].style.width = ('0%');
		isMuted = '1';
	} else {
		isMuted = '0';
		$(".volume_icon").css({
			"background-image" : "url('./css/img/sound.png')"
		});
		_V_("mainvideo").volume(oldVolume);
		document.getElementById('volumeBar').getElementsByTagName('p')[0].style.width = (((oldVolume * 100) + '%'));
	}
}



function trackBarProgress(percent) {
	//Sets the trackbar to the current percentage;
	document.getElementById('progress').getElementsByTagName('p')[0].style.width = (percent);
}

var trackBarUpdate = function() {
	var percent = '0%';
	if(_V_("mainvideo").duration() > 0) {
		percent = _V_("mainvideo").currentTime() / _V_("mainvideo").duration() * 100 + '%';
	}
	trackBarProgress(percent);

	var timeInSec = _V_("mainvideo").currentTime();
	var hours = _V_("mainvideo").currentTime() / 3600;
	hours = Math.round(hours - .5);
	var minutes = _V_("mainvideo").currentTime() / 60;
	minutes = Math.round(minutes - .5);
	var seconds = _V_("mainvideo").currentTime() % 60;
	seconds = Math.round(seconds - .5);
	if(seconds < 10) {
		seconds = '0' + seconds;
	}
	if(minutes < 10) {
		minutes = '0' + minutes;
	}

	// $(".buttons_controls_play_pause").css({
	// "background-image" : "url('./css/img/pause.png')"
	// });
	// is_Playing = '0';

	document.getElementById('play_time_bar').innerHTML = '<FONT COLOR="FFFFFF">' + hours + ':' + minutes + ':' + seconds + '</FONT>';
};

var paused = function(){
		$(".buttons_controls_play_pause").css({
			"background-image" : "url('./css/img/play.png')"
	});
	is_Playing = '0';
}

var playing = function(){
		$(".buttons_controls_play_pause").css({
			"background-image" : "url('./css/img/pause.png')"
		});
		is_Playing = '1';
}
_V_("mainvideo").addEvent("timeupdate", trackBarUpdate);
_V_("mainvideo").addEvent("pause", paused);
_V_("mainvideo").addEvent("play", playing);



function init() {
	jsonObj = json_success;
	setsizes();
	localStorage.setItem("media", JSON.stringify(json_default));
//	ajaxcall();
	hidestuff("whiteout");
	var jo = jsonObj;
	dbinit();
}
$(window).resize(function() {
	setsizes();
});

$(document).ready(function() {
	init();
	// Spacebar eventlistener
	$(document).keyup(function(event) {
		if(event.keyCode == 32) {
			// alert('Handler for .keyup() called.');
			playPause();
		} else if(event.keyCode == 77) {
			// alert('Handler for .keyup() called.');
			mute();
		} else if(event.keyCode == 37) {
			//prev
		} else if(event.keyCode == 39) {
			//next
		} else if(event.keyCode == 38) {
			//vol up
			if(_V_("mainvideo").volume() == 1.0) {

			} else {(_V_("mainvideo").volume(_V_("mainvideo").volume() + .1))
				document.getElementById('volumeBar').getElementsByTagName('p')[0].style.width = (((_V_("mainvideo").volume() * 100) + '%'));
			}
		} else if(event.keyCode == 40) {
			//vol down
			if(_V_("mainvideo").volume() == 0.0) {

			} else {(_V_("mainvideo").volume(_V_("mainvideo").volume() - .1))
				document.getElementById('volumeBar').getElementsByTagName('p')[0].style.width = (((_V_("mainvideo").volume() * 100) + '%'));
			}
		} else if(event.keyCode == 72) {
			alert('Space: Play/Pause \nF: Enter Fullscreen \nM: Mute \nLeft: Previous \nRight: Next \nUp: Volume Up \nDown: Volume Down \nH: This Dialog');
		} else if(event.keyCode == 70) {
			fullscreen();
		}

	});

	_V_("mainvideo").volume(1.0);
	oldVolume = 1.0;

});



function music_video_img(div) {
	
	 alert("it got here");
	 if($(div).attr("id") == "media_select_songs"){

	 alert("it got to songs");

	 }else if($(div).attr("id") == "media_select_vids") {

	 alert("it got to vids");

	 object= document.forms['video'];
	 alert("it got to the middle");
	 object.elements["hidden"].value="false";
	 alert("it got to the end");

	 }
	 else if($(div).attr("id") == "media_select_img") {

	 alert("it got to img");
	 }
	 
}

