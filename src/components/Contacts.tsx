import React from "react";
import Map from "./Map";

const Contacts: React.FC = () => {
  return (
    <div className='app__contacts'>
      <span className='app__contacts_title'>Contacts</span>
      <div className='app__contacts__info'>
        <div className='app__info-contacts'>
          <span className='app__info-contacts_number'>
            Phone number: +38012345678
          </span>
          <span className='app__info-contacts_email'>
            Email: carpainting@gmail.com
          </span>
        </div>

        <div className='app__info-address'>
          <span className='app__info-address_street'>
            Office: 146b Zelena Street
          </span>
          <span className='app__info-address_country'>
            City: Lviv, 79008, Ukraine
          </span>
        </div>
      </div>

      <div className='app__contacts_map'>
        <Map />
      </div>
    </div>
  );
};

export default Contacts;
