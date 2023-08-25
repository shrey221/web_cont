// Initialize Leaflet map
var map = L.map('map').setView([0, 0], 2);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Get user's geolocation
map.locate({ setView: true, maxZoom: 16 });

// Handle location found event
function onLocationFound(e) {
  var radius = e.accuracy / 2;

  L.marker(e.latlng).addTo(map)
    .bindPopup("You are within " + radius + " meters from this point").openPopup();

  L.circle(e.latlng, radius).addTo(map);
}

// Handle location error event
function onLocationError(e) {
  alert("Location access denied or unavailable. Please enable location services.");
}

// Listen for location found and error events
map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);
