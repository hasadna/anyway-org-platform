import React, {useState} from 'react';
import './App.css';
import Map from './components/map';
import Fav from './components/fav';
import Report from './components/report';

function App() {
    const [lng, setLng] = useState(null);
    const [lat, setLat] = useState(null);

    return (
        <div className="App d-flex">
            <Report lng={lng} lat={lat}/>
            <Map setLng={setLng} setLat={setLat}/>
            <Fav/>
        </div>
    );
}

export default App;
