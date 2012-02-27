var jarvis = {};
jarvis.webdb = {};
jarvis.webdb.db = null;

jarvis.webdb.open = function() {
	var dbSize = 5 * 1024 * 1024;
	// 5MB
	jarvis.webdb.db = openDatabase("jarvis", "1.0", "Hold all json information", dbSize);
	if(!jarvis.webdb.db)

        alert("Failed to connect to database.");
}

jarvis.webdb.createTable = function() {
	var db = jarvis.webdb.db;
	db.transaction(function(tx) {
		// <!-- GENRE ARTIST ALBUM SONGS -->
		// tx.executeSql("DROP TABLE songs", []);
		// tx.executeSql("DROP TABLE videos", []);
		// tx.executeSql("DROP TABLE images", []);
		// tx.executeSql("DROP TABLE playlists", []);
		tx.executeSql("DELETE FROM playlists", []);
		tx.executeSql("CREATE TABLE IF NOT EXISTS songs (ID INTEGER PRIMARY KEY ASC, serverID INTEGER, title VARCHAR(255), artist VARCHAR(255), album VARCHAR(255), image VARCHAR(255), genre VARCHAR(255), filetype VARCHAR(255) , added_on DATETIME)", []);
		tx.executeSql("CREATE TABLE IF NOT EXISTS videos (ID INTEGER PRIMARY KEY ASC, serverID INTEGER, title VARCHAR(255), filetype VARCHAR(255) , added_on DATETIME)", []);
		tx.executeSql("CREATE TABLE IF NOT EXISTS images (ID INTEGER PRIMARY KEY ASC, serverID INTEGER, title VARCHAR(255), filetype VARCHAR(255) , added_on DATETIME)", []);
		tx.executeSql("CREATE TABLE IF NOT EXISTS playlists (PLID INTEGER PRIMARY KEY ASC, ID_FK INTEGER, PLName VARCHAR(255), mediatype VARCHAR(255), added_on DATETIME)", []);
	});
}

jarvis.webdb.emptyTables = function() {
	var db = jarvis.webdb.db;
	db.transaction(function(tx) {
		// <!-- GENRE ARTIST ALBUM SONGS -->
		// tx.executeSql("DROP TABLE songs", []);
		// tx.executeSql("DROP TABLE videos", []);
		// tx.executeSql("DROP TABLE images", []);
		// tx.executeSql("DROP TABLE playlists", []);
		tx.executeSql("DELETE FROM playlists", []);
		tx.executeSql("DELETE FROM songs", []);
		tx.executeSql("DELETE FROM images", []);
		tx.executeSql("DELETE FROM videos", []);

		
	});
}
jarvis.webdb.addSong = function(serverID, title, artist, album, genre, filetype) {
	var db = jarvis.webdb.db;
	db.transaction(function(tx) {
		var addedOn = new Date();
		tx.executeSql("INSERT INTO songs(serverID, title, artist , album, genre, filetype, added_on) VALUES (?,?,?,?,?,?,?)", [serverID, title, artist, album, genre, filetype, addedOn], jarvis.webdb.songs, jarvis.webdb.onError);
	});
}

jarvis.webdb.addVideo = function(serverID, filetype, title) {
	var db = jarvis.webdb.db;
	db.transaction(function(tx) {
		var addedOn = new Date();
		tx.executeSql("INSERT INTO videos(serverID, filetype, title, added_on) VALUES (?,?,?,?)", [serverID, filetype, title, addedOn], null, jarvis.webdb.onError);
		//jarvis.webdb.videos, jarvis.webdb.onError);
	});
}

jarvis.webdb.addImg = function(serverID, filetype, title) {
	var db = jarvis.webdb.db;
	db.transaction(function(tx) {
		var addedOn = new Date();
		tx.executeSql("INSERT INTO images(serverID, filetype, title, added_on) VALUES (?,?,?,?)", [serverID, filetype, title, addedOn], null, jarvis.webdb.onError);
		//jarvis.webdb.images, jarvis.webdb.onError);
	});
}

jarvis.webdb.onError = function(tx, e) {
	alert("There has been an error: " + e.message);
}
/* SONGS */
jarvis.webdb.songs = function(tx, r) {
	// re-render the data.
	jarvis.webdb.getMedia(loadMedia, "songs");
}
/* VIDEOS */
jarvis.webdb.videos = function(tx, r) {
	// re-render the data.
	jarvis.webdb.getMedia(loadMedia, "videos");
}
/* IMAGES */
jarvis.webdb.images = function(tx, r) {
	// re-render the data.
	jarvis.webdb.getMedia(loadMedia, "images");
}

jarvis.webdb.getMedia = function(renderFunc, table) {
	var db = jarvis.webdb.db;
	cur_table = table;
	db.transaction(function(tx) {
		tx.executeSql("SELECT * FROM " + table, [], renderFunc, jarvis.webdb.onError);
	});
}
//jarvis.webdb.getMedia(loadMedia,);
jarvis.webdb.getMediaBy = function(renderFunc, table, by) {
	var db = jarvis.webdb.db;
	cur_table = table;
	db.transaction(function(tx) {
		tx.executeSql("SELECT * FROM " + table +" ORDER BY " + by + " ASC", [], renderFunc, jarvis.webdb.onError);
	});
}

function obj_id(event){
	var obj;
	if (navigator.appName.indexOf("Microsoft")!=-1){
		obj=window.event.srcElement.id;
	} else{
		obj = event.target.id;
	}
	return obj
}

function object_click(event){
		var objtext = obj_id(event);
		var obj = document.getElementById(objtext);
		if (obj.tagName != "DIV"){
			var code = "<ul>" + obj.innerHTML + "</ul>";
		$('#rightpanel_bottom').html(code);
		}
		
	}
function loadMedia(tx, rs) {
	var rowOutput = "";
	var list = document.getElementById("main_leftpanel_list");
	if(cur_table == "songs") {
		for(var i = 0; i < rs.rows.length; i++) {
			rowOutput += renderSong(rs.rows.item(i),i);
			
		}
	}
	if(cur_table == "videos") {
		for(var i = 0; i < rs.rows.length; i++) {
			rowOutput += renderVideo(rs.rows.item(i),i);
		}
	}
	if(cur_table == "images") {
		for(var i = 0; i < rs.rows.length; i++) {
			rowOutput += renderImage(rs.rows.item(i),i);
		}
	}

	list.innerHTML = rowOutput;
	document.getElementById('main_leftpanel').onclick = object_click;
	
}




function renderSong(row,i) {
	return "<li id=s"+i+"><a onclick: ><p class='inline'>" + row.title + "," + row.artist + "," + row.album +"</p></a></li>";
}
function renderVideo(row,i) {
	return "<li id=v"+i+"><a href='http://www.google.com'><p class='inline'>" + row.title +"."+ row.filetype + "</p></a></li>";
}
function renderImage(row,i) {
	return "<li id=i"+i+"><a href='http://www.google.com'><p class='inline'>" + row.title +"."+ row.filetype + "</p></a></li>";
}


function dbinit() {
	var cur_table;
	jarvis.webdb.open();
	jarvis.webdb.createTable();
	jarvis.webdb.emptyTables();

	// Load song table
	var song_cnt = jsonObj.SONG.count;
	var songlist = jsonObj.SONG.songs;
	var i;
	for( i = 0; i < song_cnt; i++) {
		jarvis.webdb.addSong(songlist[i].ID, songlist[i].title, songlist[i].artist, songlist[i].album, songlist[i].genre, songlist[i].type);
	}
	// Load video table
	var vid_cnt = jsonObj.VIDEO.count;
	var vidlist = jsonObj.VIDEO.videos;
	var i;
	for( i = 0; i < vid_cnt; i++) {
		jarvis.webdb.addVideo(vidlist[i].ID, vidlist[i].type, vidlist[i].title);
	}
	// Load image table
	var img_cnt = jsonObj.IMAGES.count;
	var imglist = jsonObj.IMAGES.images;
	var i;
	for( i = 0; i < img_cnt; i++) {
		jarvis.webdb.addImg(imglist[i].ID, imglist[i].type, imglist[i].title);
	}

}