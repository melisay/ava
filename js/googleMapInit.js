$(document).ready(function () {

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
/* google */
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
function initialize() {
    var map_canvas = document.getElementById('googleMap');

    var map_options = {
        center: new google.maps.LatLng(43.6321615, -79.6641183),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false
    };

    var map = new google.maps.Map(map_canvas, map_options);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(43.6321615, -79.6641183),
        map: map,
        title: 'Our Address!'
    });
    var styles = [
  {
    "stylers": [
      { "hue": "#ecb205" },
      { "saturation": 1 }
    ]
  }
];
    map.setOptions({styles: styles});
}
google.maps.event.addDomListener(window, 'load', initialize);


});