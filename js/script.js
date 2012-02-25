/* Author: TEAM JARVIS

*/
var jsonObj;
var is_Playing = '1';
var resize_pane_selected = '1';
//Subscribe all divs to this function to resize
var w = $(window).width();
var rightPanelWidth = w / 2;
var leftPanelWidth = w / 2;
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

function playPause() {
	
	_V_("mainvideo").ready(function()
	{
		var myPlayer = this;
		
		if(is_Playing == '1') {				
	    	  myPlayer.play();						
			$(".buttons_controls_play_pause").css({
				"background-image" : "url('./css/img/pause.png')"
			});
			is_Playing = '0';
		} else {			
			myPlayer.pause();			
			$(".buttons_controls_play_pause").css({
				"background-image" : "url('./css/img/play.png')"
			});
			is_Playing = '1';
		}		
	});
};

var isGhostBarEnabled = '0'
function musicGhostBar(div) {
	if($(div).attr("id") == "media_select_songs") {
		if(isGhostBarEnabled == '0') {
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
	} else if($(div).attr("id") == "media_select_img") {
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
	} else if($(div).attr("id") == "media_select_vids") {
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
	}

}

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
	

	var vidHeight = (rightPanelWidth-50)*9/16;
	if(vidHeight<($("#rightpanel_top").height()))
	{
	_V_("mainvideo").size(rightPanelWidth-50,(vidHeight));
	}
	else
	{
		vidHeight = $("#rightpanel_top").height();
	_V_("mainvideo").size(vidHeight*16/9,(vidHeight));
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
		"height" : $("#main").height() - $("#rightpanel_bottom").height()
	})
	$('.mediameta').css({
		"width" : rightPanelWidth - 100,
		"height" : ((h - 240) / 4) - 50
	})
	
	$('#container_controls').css({
		"width" : w,
	})
	
	$('.trackbar').css({
		"width" : w*.6-146,
	})
	
	$('.volume').css({
		"width" : w - w*.6-146 - w*.2,
		"left" : w*.6+225,
	})
	
	$('.volume_icon').css({
		"left" : w*.6+146,
	})
	
	$('.fullscreen').css({
		"left" : w*.8+100,
	})
	
	
	
	
	var vidHeight = (rightPanelWidth-50)*9/16;
	if(vidHeight<($("#rightpanel_top").height()))
	{
	_V_("mainvideo").size(rightPanelWidth-50,(vidHeight));
	}
	else
	{
		vidHeight = $("#rightpanel_top").height();
	_V_("mainvideo").size(vidHeight*16/9,(vidHeight));
	}

}

function hidestuff(boxid) {
	document.getElementById(boxid).style.visibility = "hidden";
}



function ajaxcall() {
	$.ajax({
		url : '../jarvis/php/json.php',
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
function seek(){
	//Get mouse X position
	var x =  event.pageX;
	//Get the offset of the trackbar
	var xOffset = $(".trackbar").offset().left;
	//Set the xOffset to the offset of the actual trackbar
	xOffset = x-xOffset;
	//Create a percentage of progress on the bar
	var xPercent = xOffset/parseInt(document.getElementById('progress').style.width);
	//Sets video to the play time
	_V_("mainvideo").currentTime(_V_("mainvideo").duration()*xPercent); 
	_V_("mainvideo").play();
	_V_("mainvideo").pause();
	_V_("mainvideo").play();
	trackBarProgress(xPercent*100);
	
}

function fullscreen(){
	_V_("mainvideo").requestFullScreen();
}
var isMuted = '0';
var oldVolume = '0';

function changeVolume(){
	//Get mouse X position
	var x =  event.pageX;
	//Get the offset of the trackbar
	var xOffset = $(".volume").offset().left;
	//Set the xOffset to the offset of the actual trackbar
	xOffset = x-xOffset;
	
	//Create a percentage of progress on the bar
	var xPercent = xOffset/parseInt(document.getElementById('volumeBar').style.width);
	//Sets video to the play time
	_V_("mainvideo").volume(xPercent); 
	oldVolume = xPercent;
	document.getElementById('volumeBar').getElementsByTagName('p')[0].style.width = (((xPercent*100)+'%'));
	$(".volume_icon").css({
			"background-image" : "url('./css/img/sound.png')"
	});
	
}


function mute(){
	if(isMuted == '0')
	{
	$(".volume_icon").css({
			"background-image" : "url('./css/img/muted.png')"
		});
	_V_("mainvideo").volume(0); 
	document.getElementById('volumeBar').getElementsByTagName('p')[0].style.width = ('0%');
	isMuted = '1';
	}
	else
	{
		isMuted = '0';
		$(".volume_icon").css({
			"background-image" : "url('./css/img/sound.png')"
		});
	_V_("mainvideo").volume(oldVolume); 
	document.getElementById('volumeBar').getElementsByTagName('p')[0].style.width = (((oldVolume*100)+'%'));
	}
}


function init() {
	jsonObj = json_success;
	setsizes();
	ajaxcall();
	hidestuff("whiteout");
	var jo = jsonObj;
	
}

function trackBarProgress(percent)
{
	//Sets the trackbar to the current percentage;
	document.getElementById('progress').getElementsByTagName('p')[0].style.width = (percent);
}
var trackBarUpdate = function(){
	var percent = '0%';
	if(_V_("mainvideo").duration()>0)
	{
		percent = _V_("mainvideo").currentTime()/_V_("mainvideo").duration()*100 + '%';
	}
	trackBarProgress(percent);
	
	var timeInSec = _V_("mainvideo").currentTime();
	var hours = _V_("mainvideo").currentTime()/3600;
	hours = Math.round(hours-.5);
	var minutes = _V_("mainvideo").currentTime()/60;
	minutes = Math.round(minutes-.5);
	var seconds = _V_("mainvideo").currentTime()%60;
	seconds = Math.round(seconds-.5);
	if(seconds < 10)
	{
		seconds = '0'+ seconds;
	}
	if(minutes < 10)
	{
		minutes = '0'+ minutes;
	}
	
	$(".buttons_controls_play_pause").css({
				"background-image" : "url('./css/img/pause.png')"
			});
			is_Playing = '0';
	
	
	 document.getElementById('play_time_bar').innerHTML = '<FONT COLOR="FFFFFF">'+ hours + ':' + minutes + ':' + seconds+'</FONT>';
  };
  _V_("mainvideo").addEvent("timeupdate", trackBarUpdate);


$(window).resize(function() {
	setsizes();
});

$(document).ready(function() {
	init();

});

/**
 * stores the strigified JSON object into local storage
 *
function storeJSON()
{
<<<<<<< HEAD
	//localStorage.setItem("test", JSON.stringify(jsonObj));
	var test = jsonObj.VIDEO.videos[0].vidname;
	document.write(test);
=======
	// because local storage really only deals with strings, the JSON object must be stringified, 
	// meaning it is now a long arrayof strings
>>>>>>> d0ef99918c02f6306178fcdfcf7900bb4d834824

	json_intake(jsonObj);
}
*/
/**
 * Processes JSON upon opening application.
 * It interprets the JSON and populates the application with media names and files
 */
function json_intake(jsonObj) {
	var numSongs = jsonObj.SONG.songs.length;
	var numVideos = jsonObj.VIDEO.videos.length;
	var numPics = jsonObj.IMAGES.images.length;
	var sean = jsonObj.VIDEO.videos[0].vidname;

	if(numSongs > 0) {

	}
}
