mapboxgl.accessToken = mapToken; // Use the map token

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: "mapbox://styles/mapbox/streets-v12", // Mapbox style
    center: listing.geometry.coordinates, // starting position [lng, lat]
    zoom: 9, // starting zoom
});

const marker = new mapboxgl.Marker({ color: 'red' })
    .setLngLat(listing.geometry.coordinates) // Set marker location
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`)
    )
    .addTo(map);