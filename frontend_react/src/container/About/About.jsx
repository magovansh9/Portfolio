import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./About.scss";
import { urlFor, client } from "../../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type== "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <h2 className='head-text'>
        About <span>Me</span>
      </h2>
      <div className='app__about-text'>
        <p className=' p-text'>
          I am a 3rd Year Computer Engineering student at the University of
          Waterloo. I am passionate about building software, making music and
          the next Starship launch!
        </p>
        <p className='p-text'>
          I'm a tech enthusiast with an aptitude for all kinds of development.
          Over the past 2 years, I have worked with multiple companies in
          software development roles, contributing to my technical and
          professional growth. I am passionate about Fullstack and Blockchain
          development and am constantly exploring new endeavors that interest
          me.
        </p>
        <p className='p-text'>
          Over the years I have grown fond of activities and disciplines that
          allow me to be creative. Apart from coding, I absolutely love playing
          the guitar and collaborating with other musicians. I am also a space &
          aviation fanatic who has seen the Falcon 9 land about 17 jillion
          times. On a regular day, you might find me coding, watching an A380
          takeoff or filming a guitar cover for YouTube!
        </p>
      </div>

      <div className='app__profiles'>
        {abouts?.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className='p-text' style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
