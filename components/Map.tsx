import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Map as ReactMap, Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { LocationMarkerIcon } from "@heroicons/react/solid";
import randomCoordinates from "../utils/randomCoords";
import { getCenter } from "geolib";

interface Coordinates {
  latitude: number;
  longitude: number;
}

function Map({
  searchResults,
  location,
}: {
  searchResults: SearchResults[];
  location: string;
}) {
  const [activeLocation, setActiveLocation] = useState<SearchResults | null>(
    null
  );
  const [randomCoords, setRandomCoords] = useState<Coordinates[]>([]);

  useEffect(() => {
    const fetchRandomCoords = async () => {
      const coords = await randomCoordinates(location);
      setRandomCoords(coords);
    };

    fetchRandomCoords();
  }, [location]);

  const center = useMemo(
    () =>
      randomCoords.length > 0
        ? getCenter(randomCoords)
        : { latitude: 0, longitude: 0 },
    [randomCoords]
  );

  const [viewport, setViewport] = useState({
    latitude: (center && center?.latitude) || 0,
    longitude: (center && center?.longitude) || 0,
    zoom: 11,
  });

  // Update viewport when location changes
  useEffect(() => {
    setViewport({
      latitude: (center && center?.latitude) || 0,
      longitude: (center && center?.longitude) || 0,
      zoom: 12,
    });
  }, [center]);

  const handleMarkerClick = useCallback((result: React.SetStateAction<SearchResults | null>) => {
    setActiveLocation(result);
  }, []);

  const handleMove = useCallback((evt: { viewState: React.SetStateAction<{ latitude: number; longitude: number; zoom: number; }>; }) => {
    setViewport(evt.viewState);
  }, []);

  if (randomCoords.length === 0)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="text-xl font-semibold text-airbnb-pink">Loading...</div>
      </div>
    );

  return (
    <ReactMap
      mapStyle="mapbox://styles/akshaypetta/cl53tcsom003u14lyfmwn6872/draft"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      style={{ width: "100%", height: "100%" }}
      {...viewport}
      onMove={handleMove}
    >
      {searchResults.map((result, index) => (
        <div key={result.star}>
          <Marker
            longitude={randomCoords[index]?.longitude}
            latitude={randomCoords[index]?.latitude}
          >
            <LocationMarkerIcon
              aria-label="location pin"
              onClick={() => handleMarkerClick(result)}
              className="h-7 w-7 animate-bounce-slow cursor-pointer text-black"
            />
          </Marker>
          {activeLocation?.title == result.title && (
            <Popup
              closeOnClick={false}
              onClose={() => setActiveLocation(null)}
              longitude={randomCoords[index]?.longitude}
              latitude={randomCoords[index]?.latitude}
              anchor="bottom"
            >
              {activeLocation.title}
            </Popup>
          )}
        </div>
      ))}
    </ReactMap>
  );
}

export default React.memo(Map);
