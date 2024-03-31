import React from 'react';
import { BsTwitterX, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (  
  <div className="app__social">
    <a style={{display: "table-cell"}} href='https://twitter.com/Demonkillua' target = "_blank" rel = "noopener noreferrer">
      <div >
        <BsTwitterX />
      </div>
    </a>
    <a style={{display: "table-cell"}} href='https://www.facebook.com/egreczkowski/' target = "_blank" rel = "noopener noreferrer">
      <div>
        <FaFacebookF />
      </div>
    </a>
    <a style={{display: "table-cell"}} href='https://www.instagram.com/lb_ed/' target = "_blank" rel = "noopener noreferrer">
      <div>
        <BsInstagram />
      </div>
    </a>
  </div>
);

export default SocialMedia;