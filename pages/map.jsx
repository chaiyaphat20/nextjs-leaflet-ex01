import dynamic from "next/dynamic";
import React from "react";
const MapComponent = dynamic(() => import("../components/map"), { ssr: false });
function Map() {
  return <MapComponent />;
}

export default Map;
