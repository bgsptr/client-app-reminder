// eventContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

export const EventContext = createContext({});

export const EventProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [mark, setMark] = useState({
    srcPoint: {lat: 0, lng: 0},
    destPoint: {lat: 0, lng: 0}
  });
  // const [destPoint, SetDestPoint] = useState({});

  const eventContextValue = {
    location,
    setLocation,
    mark,
    setMark
  };

  useEffect(() => {
    console.log(location);
  }, [location]);

  useEffect(() => {
    console.log(mark.srcPoint.lat);
  }, [mark]);

  return (
    <EventContext.Provider value={eventContextValue}>
      {children}
    </EventContext.Provider>
  );
};
