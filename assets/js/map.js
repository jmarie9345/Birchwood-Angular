function initMap() {
        var myLatLng = {lat: 43.033980, lng: -82.464194};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Our Location'
        });
      }