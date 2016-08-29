$(function(){

	function thinktube(){
		var params = {
		part:'snippet',
		key: 'AIzaSyAJdGOYvqYhVCnKQn2I_rfjVeAZqPvL3pA',
		q: 'videogames'	
		};
		var url = 'https://www.googleapis.com/youtube/v3/search'
		$.getJSON(url, params , function(data){
    	showResults(data)
  		})
	};

	function showResults(results) {
		var html = "";
		$.each(results,function(index,value) {
			html += '<p>' + value.Title + '</p>';
			console.log(value.Title);
		})
		$('#search-results').html(html)
	}

	thinktube()
	showResults(thinktube())
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