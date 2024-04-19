// eventContext.js
import React, { createContext, useContext, useEffect, useState } from "react";

export const EventContext = createContext({});

export const EventProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [detailEvent, setDetailEvent] = useState({
    time: 0,
    distance: 0
  })
  const [mark, setMark] = useState({
    srcPoint: {lat: -8.634368, lng: 115.1893504},
    destPoint: {lat: -8.797549, lng: 115.171829}
  });
  // const [destPoint, SetDestPoint] = useState({});

  const eventContextValue = {
    location,
    setLocation,
    mark,
    setMark,
    detailEvent,
    setDetailEvent
  };

  useEffect(() => {
    console.log(location);
  }, [location]);

  useEffect(() => {
    console.log(mark);
  }, [mark]);

  useEffect(() => {
    console.log(detailEvent);
  }, [detailEvent]);

  return (
    <EventContext.Provider value={eventContextValue}>
      {children}
    </EventContext.Provider>
  );
};
