<?php
$arr = array('SONG' => array('url-base' => '../media/song/', 'songcount' => '2', 'songs' => array( array('songid' => '1', 'songplaylist' => array( array('name' => '80s'), array('name' => 'rock')), 'songtype' => '.mp3', 'songtitle' => 'Bitter Sweet Symphony', 'songfolder' => 'mysongs', 'songalbum' => 'null', 'songartist' => 'The Verve', 'songalbumimg' => 'null'), array('songid' => '2', 'songplaylist' => array( array('name' => 'rock')), 'songtype' => '.mp3', 'songtitle' => 'Ordinary World', 'songfolder' => 'mysongs', 'songalbum' => 'Purple', 'songartist' => 'Stone Temple Pilots', 'songalbumimg' => 'null'))), 'VIDEO' => array('url-base' => '../media/video/', 'vidcount' => '2', 'videos' => array( array('vidid' => '1', 'vidplaylist' => array( array('name' => 'vacation trip')), 'vidtype' => '.mp4', 'vidtitle' => 'getting home', 'vidfolder' => 'vaction2011'), array('vidid' => '2', 'vidplaylist' => array( array('name' => 'vacation trip')), 'vidtype' => '.mp4', 'vidtitle' => 'the beach', 'vidfolder' => 'vaction2011'))), 'IMAGES' => array('url-base' => '../media/img/', 'imgcount' => '3', 'images' => array( array('imgname' => 'newcar', 'imgtype' => '.jpg', 'imgfolder' => 'cars'), array('imgname' => 'newcar2', 'imgtype' => '.jpg', 'imgfolder' => 'cars'), array('imgname' => 'newcar3', 'imgtype' => '.jpg', 'imgfolder' => 'cars'))));

$json = "{
'SONG':{'url-base': '../media/song/',
	'songcount': '2',
	'songs': 
	[
		{
			'songid': '1',
			'songplaylist':
			[
				{'name': '80s'},
				{'name': 'rock'}
			],
			'songtype' : '.mp3',
			'songtitle': 'Bitter Sweet Symphony',
			'songfolder': 'mysongs',
		    'songalbum': 'null',
		    'songartist': 'The Verve',
		    'songalbumimg': 'null'
    	},
	    {
	    	'songid': '2',
	        'songplaylist': 
	        [
	        	{'name': 'rock'}
		    ],
	        'songtype' : '.mp3',
	        'songtitle': 'Ordinary World',
	        'songfolder': 'mysongs',
	        'songalbum': 'Purple',
	        'songartist': 'Stone Temple Pilots',
	        'songalbumimg': 'null'
	     }
  	]
},

'VIDEO':
{
  'url-base': '../media/video/',
  'vidcount': '2',
  'videos': [
    {
      'vidname': '1',
      'songplaylist': 
      [
        {'name': 'vacation trip'}
      ],
      'vidtype' : '.mp4',
      'vidtitle': 'getting home',
      'vidfolder': 'vacation2011' 
    },
    {
      'vidname': '2',
      'songplaylist': 
      [
        {'name': 'vacation trip'}
      ],
      'vidtype' : '.mp4',
      'vidtitle': 'getting home',
      'vidfolder': 'vacation2011' 
    }
  ]
},

'IMAGES':
{
  'url-base': '../media/img/',
  'imgcount': '3',
  'images': [
    {
      'imgname': 'newcar',
      'imgtype': '.jpg',
      'imgfolder': 'cars'
    },
    {
      'imgname': 'newcar2',
      'imgtype': '.jpg',
      'imgfolder': 'cars'
    },
    {
      'imgname': 'newcar3',
      'imgtype': '.jpg',
      'imgfolder': 'cars'
    }
  ]
}
}";

$arr2 = array('SONG' => 'array()', 'VIDEO' => 'array()', 'IMAGES' => 'array()');
echo json_encode($arr, JSON_FORCE_OBJECT);
?>