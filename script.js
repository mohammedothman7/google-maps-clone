

navigator.geolocation.getCurrentPosition(success => {
   setupMap([success.coords.longitude, success.coords.latitude]);
}, () => {
    setupMap([-73.935242, 40.730610]);
}, { enableHighAccuracy: true})

const setupMap = (center) => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibW9ldGhlbWFuMTEyIiwiYSI6ImNraGNyNjhncjAzazYycG55bTVxaGZyNzcifQ.B3TZ0v5hURO7cK-ag7hSYg';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15,
    });
    
    map.addControl(new mapboxgl.NavigationControl());

    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      });

    map.addControl(directions, 'top-left');
}