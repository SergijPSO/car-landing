import React from "react";

const Map: React.FC = () => {
  return (
    <iframe
      className='app-map'
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222521.50739844536!2d30.3678875618948!3d50.401919092509516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNGX0LIsIDAyMDAw!5e1!3m2!1suk!2sua!4v1698322165666!5m2!1suk!2sua'
      width='100%'
      height='500'
      allowFullScreen={true}
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
    ></iframe>
  );
};

export default Map;
