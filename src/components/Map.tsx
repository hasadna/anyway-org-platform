import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";

interface IProps {
  setLng: React.Dispatch<number>;
  setLat: React.Dispatch<number>;
  onClick: React.EventHandler<React.MouseEvent>;
}

const Map: React.FC<IProps> = ({ setLng, setLat, onClick }) => {
  const [map, setMap] = useState();
  const [maps, setMaps] = useState();
  const [marker, setMarker] = useState();

  useEffect(() => {
    if (maps) {
      const marker = new maps.Marker({ map });
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

  const renderMarkers = (map: any, maps: any) => {
    setMap(map);
    setMaps(maps);
  };

  const handleClick = (e: any) => {
    const { lat, lng } = e;
    setLat(lat);
    setLng(lng);
    marker.setPosition({
      lat,
      lng
    });
    // Call the parent component's onClick() method
    onClick(e);
  };

  return (
    <React.Fragment>
      <div style={{ height: "100vh", flexGrow: 1 }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDUIWsBLkvIUwzLHMHos9qFebyJ63hEG2M" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          onClick={e => handleClick(e)}
          onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
          yesIWantToUseGoogleMapApiInternals={true}
        />
      </div>
    </React.Fragment>
  );
};

export default Map;
