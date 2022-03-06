import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setIsLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setIsLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className='head-text'>
        Let's <span>get</span> in touch!
      </h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:vmago@uwaterloo.ca' className='p-text'>
            vmago@uwaterloo.ca
          </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel:+1 (437) 983-0006' className='p-text'>
            +1 (437) 983-0006
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input
              className='p-text'
              type='text'
              placeholder='Your Name'
              value={name}
              name='name'
              onChange={handleChangeInput}
            ></input>
          </div>
          <div className='app__flex'>
            <input
              className='p-text'
              type='text'
              placeholder='Your Email'
              value={email}
              name='email'
              onChange={handleChangeInput}
            ></input>
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              value={message}
              name='message'
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>
            {isLoading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <>
          <div>
            <h3 className='head-text'>Thank you for getting in touch!</h3>
          </div>
        </>
      )}

      <div className='app__footer-greeting app__flex'>
        <h4 className='p-text'>You made it to the end!🥳</h4>

        <h5 className='credits'>
          Animations by <span>Framer Motion</span>
        </h5>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
