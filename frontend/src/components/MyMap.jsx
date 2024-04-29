import React from 'react';

const MyMap = ({ latitude, longitude }) => {
  return (
    <iframe
      src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25364.85548460145!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snz!4v1714421400424!5m2!1sen!2snz`}
      width="600"
      height="600"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Embedded Google Map"
    ></iframe>
  );
};

export default MyMap;