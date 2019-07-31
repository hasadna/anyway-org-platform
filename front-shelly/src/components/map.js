import React, {useState, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({setLng, setLat}) => {
    const [map, setMap] = useState(null);
    const [maps, setMaps] = useState(null);
    const [marker, setMarker] = useState(null);

    useEffect(() => {
        if (maps) {
            const marker = new maps.Marker({
                map
            });
            setMarker(marker);
        }
    }, [maps, map]);

    const defaultProps = {
        center: {
            lat: 32.109333,
            lng: 34.855499
        },
        zoom: 11
    };

    const renderMarkers = (map, maps) => {
        setMap(map);
        setMaps(maps);
    };

    const handleClick = (e) => {
        console.log('click', e);
        const lat = e.lat;
        const lng = e.lng;
        setLat(lat);
        setLng(lng);
        marker.setPosition({
            lat,
            lng
        });
    };

    return (
        <React.Fragment>
            <div style={{height: '100vh', width: '50%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyDUIWsBLkvIUwzLHMHos9qFebyJ63hEG2M'}}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    onClick={(e) => handleClick(e)}
                    onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}
                    yesIWantToUseGoogleMapApiInternals={true}
                >

                </GoogleMapReact>
            </div>
        </React.Fragment>
    );
};

export default Map;