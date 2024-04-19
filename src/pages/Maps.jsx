import React, { useState, useEffect } from "react";
import LeafletMap from "../components/MapContainer";
import { EventProvider } from "../context/EventContext";

const App = () => {
  //   const [location, setLocation] = useState("");

  //   const eventContextValue = {
  //     location,
  //     setLocation,
  //   };

  //   useEffect(() => {
  //     console.log(location)
  //   }, [location])

  return (
    <div>
      <h1>React Leaflet Map Example</h1>
      <EventProvider>
        <LeafletMap />
      </EventProvider>
    </div>
  );
};

export default App;
