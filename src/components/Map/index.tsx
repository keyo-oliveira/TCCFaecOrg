import React, { FC, useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

interface IMaps {
  center: ICenter;
}

interface ICenter {
  lat: number;
  lng: number;
}

const Map: FC<IMaps> = ({ center }) => {
  const containerStyle = {
    width: "800px",
    height: "800px",
  };

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${process.env.GOOGLE_API_KEY}`,
  });

  center = {
    lat: center.lat ?? -23.100149,
    lng: center.lng ?? -46.569521,
  };

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  if (loadError) {
    console.log(loadError);
    return <>"Error loading maps"</>;
  }
  if (!isLoaded) {
    return <div> Loading map... </div>;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
