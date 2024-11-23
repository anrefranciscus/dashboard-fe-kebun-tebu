import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const MapView = ({ title }) => {
  const locations = [
    { id: 1, name: "Semarang", coords: [-6.966667, 110.416667] },
    { id: 2, name: "Solo", coords: [-7.566667, 110.816667] },
    { id: 3, name: "Magelang", coords: [-7.470476, 110.217178] },
  ];
  return (
    <div className="flex overflow-hidden flex-col flex-1 shrink pt-5 pb-1 text-xs bg-white rounded-xl border border-solid basis-10 border-neutral-200 min-w-[240px] text-neutral-500 max-md:max-w-full">
      <div className="flex flex-col pr-1.5 pl-5 w-full max-md:max-w-full">
        <div className="flex gap-1 items-center self-start text-base font-medium tracking-normal text-stone-900">
          <div className="self-stretch my-auto">{title}</div>
        </div>
        <div className="mt-4 h-full">
          <MapContainer
            center={[-7.0, 110.5]} // Lokasi tengah Jawa Tengah
            zoom={9} // Level zoom lebih kecil untuk melihat banyak kota
            style={{ height: "250px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {/* Marker untuk tiap lokasi */}
            {locations.map((loc) => (
              <Marker key={loc.id} position={loc.coords}>
                <Popup>{loc.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default MapView;
