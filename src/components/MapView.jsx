import { MapContainer, TileLayer } from "react-leaflet";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";
const MapView = ({ title }) => {
  const mapRef = useRef(null);
  const latitude = 108.349200;
  const longitude = -7.341400;
  return (
    <div className="flex flex-col flex-1 p-5 bg-white rounded-xl border border-neutral-200 min-w-[240px] max-w-full text-neutral-500">
      <div className="flex items-center text-base font-medium text-stone-900 mb-4">
        {title || "Map View"}
      </div>
      <div className="h-[300px] w-full rounded-lg overflow-hidden">
        <MapContainer ref={mapRef} center={[longitude, latitude]} zoom={12} style={{height: "100vh", width: "100vw"}}>
          {" "}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default MapView;
