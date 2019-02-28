function initMap() {
	// add your code here
	L.mapquest.key = "phiS3Znj4pQ4kQgryeBaMD3K9mVEkXcn";

	//'map' refers to a <div> element with the ID map
	var map = L.mapquest.map("map", {
		center: [32.878814, -117.235911],
		layers: L.mapquest.tileLayer("map"),
		zoom: 12,
		zoomControl: false
	});

	//Add a marker to the map
	L.marker([32.878814, -117.235911]).addTo(map);
}