import React from "react";

const MapBox = () => {
  return (
    <div className="map-box">
      <iframe
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21117.72912024444!2d18.06352503114049!3d59.32461781897345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sba!4v1704557237556!5m2!1sen!2sba"
        style={{ border: 0 }}
        aria-hidden={false}
        tabIndex={0}
      ></iframe>
    </div>
  );
};

export default MapBox;
