import React from "react";
import { BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <BsTwitter />
      </div>
      <div>
        <FaFacebookF />
      </div>
      <div>
        <BsInstagram />
      </div>
      <div>
        <BsYoutube />
      </div>
    </div>
  );
};

export default SocialMedia;
