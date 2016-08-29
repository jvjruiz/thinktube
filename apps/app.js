$(function(){

	$('#search-form').submit(function(event) {
		event.preventDefault();
		var searchTerm = $('#query').val();
		$('#query').val('');
		thinktube(searchTerm)
	})

	function thinktube(searchTerm){
		var params = {
		part:'snippet',
		key: 'AIzaSyAJdGOYvqYhVCnKQn2I_rfjVeAZqPvL3pA',
		type: 'video',
		q: searchTerm
		};
		var url = 'https://www.googleapis.com/youtube/v3/search'
		$.getJSON(url, params , function(data){
    	var searchResult = data.items
			var html = ''
			console.log(searchResult);
			$.each(searchResult, function(index,value) {
				var picture = value.snippet.thumbnails.medium.url,
				link = 'https://www.youtube.com/watch?v=' + value.id.videoId;
				html += '<p><a href ="' + link + '"></p> <br>' + '<p><img src="' + picture + '"></p><br>';
				})
			$('#search-results').html(html)


  		})
	};

});

// ($(function() {
// 	var params = {
// 		part: 'snippet',
// 		q: 'videogames',
// 		key: 'AIzaSyAJdGOYvqYhVCnKQn2I_rfjVeAZqPvL3pA'
// 	};
// 	var url = 'https://www.googleapis.com/youtube/v3/search/list';
// 	$.getJSON(url, params, function(data) {console.log(data)});

// })();
