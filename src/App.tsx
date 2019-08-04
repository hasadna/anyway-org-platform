import React, { useState } from "react";
import "./App.scss";
import Map from "./components/Map";
import Bookmark from "./components/Bookmark";
import ReportForm from "./components/ReportForm";
import { SwipeableDrawer } from "@material-ui/core";

const App = () => {
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const onMapClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }

  return (
    <div className="App d-flex">
      <SwipeableDrawer
        open={isDrawerOpen}
        onClose={onMapClick}
        onOpen={onMapClick}
      >
        <ReportForm
          lng={lng}
          lat={lat}
          bookmark={bookmark}
          setBookmark={setBookmark}
        />
      </SwipeableDrawer>
      <Map
        setLng={setLng}
        setLat={setLat}
        onClick={onMapClick}
      />
      <Bookmark />
    </div>
  );
};

export default App;
