function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -6.2548, lng: 106.985270};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'South Jakarta, INA' // Title Location
    });
}
