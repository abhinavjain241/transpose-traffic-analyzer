      function initialize() {
        var mapOptions = {
          center: { lat: 28.6100, lng: 77.2300},
          zoom: 12
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);
