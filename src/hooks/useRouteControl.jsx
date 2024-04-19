import L from 'leaflet';
import { useEvent } from './useEvent';
import { useEffect } from 'react';

const useRouteControl = () => {
    const { srcPoint, destPoint } = useEvent()
    // if destPoint == null {
    //     return
    // }

    // useEffect(() => {
        
    // })
    const instance = L.Routing.control({
    //   waypoints: [
    //     srcPoint ? L.latLng(srcPoint.lat, srcPoint.lng) : null,
    //     destPoint ? L.latLng(destPoint.lat, destPoint.lng) : null
    //   ].filter(point => point !== null),
    });
  
    return instance;
};

export default useRouteControl