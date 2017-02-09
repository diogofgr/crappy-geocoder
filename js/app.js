// TODO: Put your JS code in here
$('form').submit(function(e){
  e.preventDefault();
  // console.log($('#form :input'));
  var encodedAddress = encodeURI($('#input-address').val());
  console.log('encoded address: ' + encodedAddress);
  $.ajax({
    type: 'GET',
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodedAddress,
    success: function(data){
      var latitude = data.results[0].geometry.location.lat;
      var longitude = data.results[0].geometry.location.lng;

      console.log(data.results[0].geometry.location);

      $('#results-lat').text('').append('Lat: ' + latitude);
      $('#results-lng').text('').append('Long: ' + longitude);

      var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: latitude, lng: longitude },
        zoom: 14  // Change this value from 0 to 18
      });

      var marker = new google.maps.Marker({
        map: map,
        position: { lat: latitude, lng: longitude }
      });
    },
    error: ''
  });
    //code goes here

  });
