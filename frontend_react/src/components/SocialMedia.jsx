import React from "react";
import { BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const socialMedia = {
  instagram: "https://www.instagram.com/magovansh/",
  facebook: "https://www.facebook.com/vansh.mago.77",
  twitter: "https://twitter.com/VanshMago1",
  youtube: "https://www.youtube.com/channel/UCvDW61K8PknShRKck0XY3yQ",
};

const { instagram, facebook, twitter, youtube } = socialMedia;

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href={twitter} target='_blank'>
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href={facebook} target='_blank'>
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href={instagram} target='_blank'>
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href={youtube} target='_blank'>
          <BsYoutube />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
