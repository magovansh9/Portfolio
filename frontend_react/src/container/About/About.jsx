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
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>
      <div className='app__about-text'>
        <p className=' p-text'>
          I am a 3rd Year Computer Engineering student at the University of
          Waterloo. I am passionate about building software, making music and
          the next Starship launch!
        </p>
        <p className=' p-text'>
          Over the years I have grown fond of activities and disciplines that
          allow me to be creative. I'm a tech enthusiast with a knack for full
          stack development and Machine Learning. More recently, I have become
          increasingly intrigued by System design engineering problems such as
          circuit breaking and thundering herd. I also have a newfound interest
          in the evolution of linguistics and am currently learning German and
          polishing my French! On a regular day, you might find me coding,
          watching an A380 flight review or filming a guitar cover for YouTube!
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
