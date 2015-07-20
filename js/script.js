function getWeatherDataByCityName(lang, fnOK, fnError, CityName) {
       var url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + encodeURIComponent(CityName) +
             '&units=metric' + '&lang=' + lang + '&callback=?';
        console.log(url);
       $.getJSON(url, fnOK);
}

function getWeatherData(lang, fnOK, fnError, byCityName) {
	navigator.geolocation.getCurrentPosition(locSuccess, locError);

	function locSuccess(position) {
		// Check cache
		var cache = localStorage.weatherCache && JSON.parse(localStorage.weatherCache);
		var currDate = new Date();
		// If the cache is newer than 30 minutes, use the cache
		if(cache && cache.timestamp && cache.timestamp > currDate.getTime() - 30*60*1000){
			fnOK.call(this, cache.data);
		} else {
			$.getJSON(
				'http://api.openweathermap.org/data/2.5/forecast?lat=' + position.coords.latitude + '&lon=' +
				position.coords.longitude + '&units=metric' + '&lang=' + lang + '&callback=?',
				function (response) {
					// Store the cache
					localStorage.weatherCache = JSON.stringify({
						timestamp: (new Date()).getTime(),	// getTime() returns milliseconds
						data: response
					});
					// Call the function again
					locSuccess(position);
				}
			);
		}
	}

	function locError(error) {
		var message = 'Location error. ';
		switch(error.code) {
			case error.TIMEOUT:
				message += 'A timeout occured! Please try again!';
				break;
			case error.POSITION_UNAVAILABLE:
				message += 'We can\'t detect your location. Sorry!';
				break;
			case error.PERMISSION_DENIED:
				message += 'Please allow geolocation access for this to work.';
				break;
			case error.UNKNOWN_ERROR:
				message += 'An unknown error occured!';
				break;
		}
		fnError.call(this, message);
	}
}

	function fnOK(data) {
        console.dir(data);
		$('#1').html (data.city.name + ' ' + data.city.country+'<br>'+'<img src="icons/'+data.list[0].weather[0].icon+'.png">'+ Math.round(data.list[0].main.temp)+ '&deg;' + ', '+ data.list[0].weather[0].main+'<br>'+ moment( data.list[0].dt_txt).calendar());
		$('#2').html('<img src="icons/'+data.list[3].weather[0].icon+'.png">'+ Math.round(data.list[3].main.temp)+ '&deg;'+ ', '+ data.list[3].weather[0].main+'<br>'+ moment( data.list[3].dt_txt).calendar());
		$('#3').html('<img src="icons/'+data.list[5].weather[0].icon+'.png">'+  Math.round(data.list[5].main.temp)+ '&deg;' + ', '+data.list[5].weather[0].main+'<br>'+ moment( data.list[5].dt_txt).calendar());
		$('#4').html( '<img src="icons/'+data.list[6].weather[0].icon+'.png">'+ Math.round(data.list[6].main.temp)+ '&deg;' + ', '+data.list[6].weather[0].main+'<br>'+ moment( data.list[6].dt_txt).calendar());
		$('#5').html( '<img src="icons/'+data.list[9].weather[0].icon+'.png">'+ Math.round(data.list[9].main.temp)+ '&deg;' + ', '+data.list[9].weather[0].main+'<br>'+ moment( data.list[9].dt_txt).calendar());
		$('#6').html('<img src="icons/'+data.list[11].weather[0].icon+'.png">'+  Math.round(data.list[11].main.temp)+ '&deg;' + ', '+data.list[11].weather[0].main+'<br>'+ moment( data.list[11].dt_txt).calendar());
		$('#7').html('<img src="icons/'+data.list[13].weather[0].icon+'.png">'+  Math.round(data.list[13].main.temp)+ '&deg;' + ', '+data.list[13].weather[0].main+'<br>'+ moment( data.list[13].dt_txt).calendar());
		$('#8').html('<img src="icons/'+data.list[14].weather[0].icon+'.png">'+  Math.round(data.list[14].main.temp)+ '&deg;' + ', '+data.list[14].weather[0].main+'<br>'+ moment( data.list[14].dt_txt).calendar());
		$('#9').html('<img src="icons/'+data.list[17].weather[0].icon+'.png">'+  Math.round(data.list[17].main.temp)+ '&deg;' + ', '+data.list[17].weather[0].main+'<br>'+ moment( data.list[17].dt_txt).calendar());
		$('#10').html('<img src="icons/'+data.list[19].weather[0].icon+'.png">'+  Math.round(data.list[19].main.temp)+ '&deg;' + ', '+data.list[19].weather[0].main+'<br>'+ moment( data.list[19].dt_txt).calendar());
		$('#11').html('<img src="icons/'+data.list[21].weather[0].icon+'.png">'+  Math.round(data.list[21].main.temp)+ '&deg;' + ', '+data.list[21].weather[0].main+'<br>'+ moment( data.list[21].dt_txt).calendar());
		$('#12').html( '<img src="icons/'+data.list[22].weather[0].icon+'.png">'+ Math.round(data.list[22].main.temp)+ '&deg;' + ', '+data.list[22].weather[0].main+'<br>'+ moment( data.list[22].dt_txt).calendar());
		$('#13').html('<img src="icons/'+data.list[25].weather[0].icon+'.png">'+  Math.round(data.list[25].main.temp)+ '&deg;' + ', '+data.list[25].weather[0].main+'<br>'+ moment( data.list[25].dt_txt).calendar());
		$('#14').html('<img src="icons/'+data.list[27].weather[0].icon+'.png">'+  Math.round(data.list[27].main.temp)+ '&deg;' + ', '+data.list[27].weather[0].main+'<br>'+ moment( data.list[27].dt_txt).calendar());
		$('#15').html('<img src="icons/'+data.list[29].weather[0].icon+'.png">'+  Math.round(data.list[29].main.temp)+ '&deg;' + ', '+data.list[29].weather[0].main+'<br>'+ moment( data.list[29].dt_txt).calendar());
		$('#16').html('<img src="icons/'+data.list[30].weather[0].icon+'.png">'+  Math.round(data.list[30].main.temp)+ '&deg;' + ', '+data.list[30].weather[0].main+'<br>'+ moment( data.list[30].dt_txt).calendar());
		$('#17').html('<img src="icons/'+data.list[33].weather[0].icon+'.png">'+  Math.round(data.list[33].main.temp)+ '&deg;' + ', '+data.list[33].weather[0].main+'<br>'+ moment( data.list[33].dt_txt).calendar());
		$('#111').html( moment( data.list[3].dt_txt).format("h A"));
		$('#121').html( moment( data.list[5].dt_txt).format("h A"));
		$('#131').html( moment( data.list[6].dt_txt).format("h A"));
		$('#141').html( moment( data.list[9].dt_txt).format("h A"));

	}

	function fnErr(msg) {
		console.error(msg);
	}


$(function() {
	getWeatherData('uk', fnOK, fnErr);
});