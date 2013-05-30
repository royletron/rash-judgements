function search_places(term)
{
  var longs = Gmaps.map.serviceObject.getCenter().lng();
  var lats = 	Gmaps.map.serviceObject.getCenter().lat();

	$.ajax({
	      url: '/get_places',
	      dataType: 'json',
	      type: 'GET',
	      data: {
	        longs: longs,
					lats: lats,
					term: term
	      },
	      success: function(data) {
					for(var i = 0; i < data.length; i++)
					{
						console.log(data[i].name + " " + data[i].vicinity);	
					}
	    }
	  });
}


$('.typeahead').typeahead({
    source: function(query, process) {
			  var longs = Gmaps.map.serviceObject.getCenter().lng();
			  var lats = 	Gmaps.map.serviceObject.getCenter().lat();
        return $.ajax({
            url: '/get_places',
			      dataType: 'json',
			      type: 'GET',
			      data: {
			        longs: longs,
							lats: lats,
							term: query
			      },
            success: function(json) {
                return typeof json.options == 'undefined' ? false : process(json.options);
            }
        });
    }
});