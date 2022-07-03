import { getCenter } from "geolib";
import { useState } from "react";
import { Map as ReactMap, Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { LocationMarkerIcon } from "@heroicons/react/solid";

function Map({ searchResults }: { searchResults: SearchResults[] }) {
  const [activeLocation, setActiveLocation] = useState<SearchResults | null>(
    null
  );

  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  const center: { latitude: number; longitude: number } | false =
    getCenter(coordinates);

  const [viewport, setViewport] = useState({
    latitude: (center && center?.latitude) || 0,
    longitude: (center && center?.longitude) || 0,
    zoom: 11,
  });

  return (
    <ReactMap
      mapStyle="mapbox://styles/akshaypetta/cl53tcsom003u14lyfmwn6872/draft"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      style={{ width: "100%", height: "100%" }}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewState)}
    >
      {searchResults.map((result, index) => (
        <div key={result.star}>
          <Marker longitude={result.long} latitude={result.lat}>
            <LocationMarkerIcon
              aria-label="location pin"
              onClick={() => setActiveLocation(result)}
              className="h-7 w-7 animate-bounce-slow cursor-pointer text-black"
            />
          </Marker>
          {activeLocation?.title == result.title && (
            <Popup
              closeOnClick={false}
              onClose={() => setActiveLocation(null)}
              longitude={activeLocation.long}
              latitude={activeLocation.lat}
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
export default Map;
