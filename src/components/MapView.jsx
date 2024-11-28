import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";

import customIconUrl from "../assets/placeholder.png";
const customIcon = new Icon({
  iconUrl: customIconUrl,
  iconSize: [38, 38], // size of the icon
});
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

// markers for Jakarta
const markers = [
  {
    geocode: [-6.2, 106.816666], // Jakarta Selatan
    popUp: "Hello, I am pop up 1 in Jakarta",
  },
  {
    geocode: [-6.208763, 106.845599], // Monas
    popUp: "Hello, I am pop up 2 in Jakarta",
  },
  {
    geocode: [-6.1745, 106.8227], // Kota Tua
    popUp: "Hello, I am pop up 3 in Jakarta",
  },
];

const MapView = ({ title }) => {
  return (
    <div className="flex flex-col flex-1 p-5 bg-white rounded-xl border border-neutral-200 min-w-[240px] max-w-full text-neutral-500">
      {/* Title */}
      <div className="flex items-center text-base font-medium text-stone-900 mb-4">
        {title || "Map View"}
      </div>

      {/* Map Container */}
      <div className="h-[300px] w-full rounded-lg overflow-hidden">
        <MapContainer center={[-6.2088, 106.8456]} zoom={12}>
          {" "}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createClusterCustomIcon}
          >
            {/* Mapping through the markers */}
            {markers.map((marker, index) => (
              <Marker key={index} position={marker.geocode} icon={customIcon}>
                <Popup>{marker.popUp}</Popup>
              </Marker>
            ))}
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapView;
