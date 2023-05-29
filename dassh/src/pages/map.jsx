import React, { useState, useEffect } from "react";
import "./map.css";

// leaflet
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const Map = () => {
  const [inputValue, setInputValue] = useState("");
  const [center, setCenter] = useState([51.505, -0.09]);
  const [key, setKey] = useState(0); // Add key state

  useEffect(() => {
    // Get user's location
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCenter([latitude, longitude]);
          console.log("Latitude:", latitude);
          console.log("Longitude:", longitude);
        },
        (error) => {
          console.log("Error getting user's location:", error);
        }
      );
    } else {
      console.log("Geolocation is not supported");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    // Update key when center changes
    setKey((prevKey) => prevKey + 1);
  }, [center]);

  return (
    <div className="flex-col space-y-4">
      <div className="h-[600px] w-[1020px]">
        <MapContainer key={key} center={center} zoom={13} scrollWheelZoom={false} className="h-full">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={center} />
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
