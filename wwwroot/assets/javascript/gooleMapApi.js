// Initialize the map
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 30.37532, lng: 69.345116 }, // Replace with your desired coordinates
    zoom: 8,
  });

  // Add a marker
  addMarker({ lat: 30.1798, lng: 66.975 });
  addMarker({ lat: 30.1575, lng: 71.5249 });
  function addMarker(coords) {
    const customIcon = {
      url: "/assets/imgs/map-icon.png",
      size: new google.maps.Size(32, 42),
      origin: new google.maps.Point(0, 0), // Origin point of the icon (top-left)
      anchor: new google.maps.Point(16, 32),
      scaledSize: new google.maps.Size(32, 42), // Scaled size of the icon (same as the defined size)
    };
    let marker = new google.maps.Marker({
      position: coords,
      map: map,
      icon: customIcon,
    });
  }
}
