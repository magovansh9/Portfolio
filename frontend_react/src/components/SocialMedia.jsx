import React from "react";
import { BsInstagram, BsYoutube, BsGithub, BsLinkedin } from "react-icons/bs";

const socialMedia = {
  github: "https://github.com/magovansh9",
  instagram: "https://www.instagram.com/magovansh/",
  facebook: "https://www.facebook.com/vansh.mago.77",
  twitter: "https://twitter.com/VanshMago1",
  youtube: "https://www.youtube.com/channel/UCvDW61K8PknShRKck0XY3yQ",
  linkedin: "https://www.linkedin.com/in/vansh-mago/",
};

const { instagram, github, youtube, linkedin } = socialMedia;

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href={github} target='_blank'>
          <BsGithub />
        </a>
      </div>
      <div>
        <a href={linkedin} target='_blank'>
          <BsLinkedin />
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
