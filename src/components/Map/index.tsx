import React, { FC, useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import MapMarkerIcon from "../icons/MapMarkerIcon";

interface IMaps {
  lat: number;
  lng: number;
}

const Map: FC<IMaps> = ({ lat, lng }) => {
  const containerStyle = {
    width: "100%",
    height: "790px",
  };

  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: `${process.env.GATSBY_GOOGLE_API_KEY}`,
  });

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
      center={{ lat: Number(lat), lng: Number(lng) }}
      zoom={9}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={{ lat: Number(lat), lng: Number(lng) }} visible={true}>
        <MapMarkerIcon />
      </Marker>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
