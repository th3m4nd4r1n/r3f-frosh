import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [travelMode, setTravelMode] = useState('DRIVING');
  const [map, setMap] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);

  useEffect(() => {
    // Initialize Google Maps
    const initMap = () => {
      const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
        // center: { lat: 30.35649823789203, lng: 76.36543075700676 },
        center:{lat:30.354535815437977, lng:76.36596295550807},
        zoom: 16.95,
      });
      setMap(mapInstance);

      const service = new window.google.maps.DirectionsService();
      setDirectionsService(service);

      const renderer = new window.google.maps.DirectionsRenderer();
      renderer.setMap(mapInstance);
      setDirectionsRenderer(renderer);
    };

    // Load the Google Maps script
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC9_x_mhwhDwiGKCIwONa3CHz_618xZct0&libraries=places`;
      script.async = true;
      script.onload = initMap;
      document.body.appendChild(script);
    };

    loadScript();

  }, []);

  const handleGetDirections = () => {
    if (directionsService && directionsRenderer) {
      const request = {
        origin: origin,
        destination: destination,
        travelMode: window.google.maps.TravelMode[travelMode],
      };

      directionsService.route(request, (result, status) => {
        if (status === 'OK') {
          directionsRenderer.setDirections(result);
        } else {
          alert('Directions request failed due to ' + status);
        }
      });
    }
  };

  const handleClearMarkers = () => {
    if (directionsRenderer) {
      directionsRenderer.setMap(null);
    }
  };

  return (
    <>
    <div id="map"></div>
      {/* <h1>Google Maps Directions</h1> */}
        <div id="directions-form">
            <div id='origin'>
                <label>
                Origin:
                {/* <input className='navigation-input'
                    type="text" 
                    value={origin} 
                    onChange={(e) => setOrigin(e.target.value)} 
                /> */}
                {/* <AutoComplete apiKey={AIzaSyC9_x_mhwhDwiGKCIwONa3CHz_618xZct0} onPlaceSelected={(place) => console.log(place)}/> */}
                </label>
            </div>
        
            <div id="destination">
                <label>
                Destination:
                </label>
                <input className='navigation-input'
                    type="text" 
                    value={destination} 
                    onChange={(e) => setDestination(e.target.value)} 
                />
            </div>
        
            <div id='travel-mode'>
                <label>
                Travel Mode:
                </label>
                <select className='navigation-input'
                    value={travelMode} 
                    onChange={(e) => setTravelMode(e.target.value)}
                >
                    <option value="DRIVING">Driving</option>
                    <option value="WALKING">Walking</option>
                    <option value="BICYCLING">Bicycling</option>
                    <option value="TRANSIT">Transit</option>
                </select>
            </div>
            <button onClick={handleGetDirections}>Get Directions</button>
            <button onClick={handleClearMarkers}>Clear Markers</button>
        </div>
      

    </>

  );
};

export default Navigation;