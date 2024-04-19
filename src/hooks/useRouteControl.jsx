import L from "leaflet";
import { useEvent } from "./useEvent";
import { useEffect } from "react";
import { useMap } from "react-leaflet";

const UseRouteControl = () => {
  const { mark } = useEvent();
  const map = useMap();

  const waypoints = [
    mark.srcPoint ? L.latLng(mark.srcPoint.lat, mark.srcPoint.lng) : null,
    mark.destPoint ? L.latLng(mark.destPoint.lat, mark.destPoint.lng) : null,
  ].filter((point) => point !== null);

  useEffect(() => {
    if (waypoints.length === 2) {
      const routingControl = L.Routing.control({
        waypoints: waypoints,
      });

      map.addControl(routingControl);

      return () => {
        map.removeControl(routingControl);
      };
    }
  }, [waypoints, map]);

  return null;
};

export default UseRouteControl;
