


function initMap() {
  var mapDiv = document.getElementById('googleMap');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 43.033980, lng: -82.464194},
    zoom: 14
    })
  var marker = new google.maps.Marker
      ({
                 position: new google.maps.LatLng(43.033980, -82.464194),
                 map: map,
          });
    }