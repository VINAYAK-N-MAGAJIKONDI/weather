
$(document).ready(function() {
    $('#location-form').submit(function(event) {
        event.preventDefault();
        var latitude = $('#latitude').val();
        var longitude = $('#longitude').val();
        const weatherSettings = {
            "async": true,
            "crossDomain": true,
            "url": "https://weatherbit-v1-mashape.p.rapidapi.com/current",
            "method": "GET",
            "headers": {
		"X-RapidAPI-Key": "4c0279e84fmshbf85cf77ab9edd7p1a2ac8jsnf0277490535d",
		"X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com"},
            "data": {
                "lon": longitude,
                "lat": latitude
            }
        };
        $.ajax(weatherSettings).done(function (weatherResponse) {
            $('#city').text(weatherResponse.data[0].city_name);
            $('#country').text(weatherResponse.data[0].country_code);
            $('#temperature').text(weatherResponse.data[0].temp + " °C");
            $('#description').text(weatherResponse.data[0].weather.description);
            $('#icon').attr('src', 'https://www.weatherbit.io/static/img/icons/' + weatherResponse.data[0].weather.icon + '.png');

            
           
                $('#aqi').text(weatherResponse.data[0].aqi);
                $('#aqi-description').text(weatherResponse.data[0].aqi_description);
                $('#weather-container').show();
            });
        });
    });




