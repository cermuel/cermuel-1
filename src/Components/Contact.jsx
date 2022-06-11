import React, { useState } from "react";
import "../App.css";
import Modal from "./Modal";

const Contact = () => {
  const [openModal, setopenModal] = useState(false);
  return (
    <div className="contactContainer">
      <div className="container-item main-header">Drop A Query</div>
      <br />
      <div className="container-item main-contacts">
        <div className="contacts">
          <div className="contacts-text">Phone</div>
          <div className="contacts-details" action="">
            <a href="tel:+2347063554955">+234-706-355-4955</a>
          </div>
        </div>
        <div className="contacts">
          <div className="contacts-text">Email</div>
          <div className="contacts-details" action="">
            <a href="mailto:samuelobasi2005@gmail.com">
              samuelobasi2005@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="container-item contactMe">
        <form
          onSubmit={() => {
            setopenModal(true);
          }}
          action="https://formsubmit.co/5e4d1009b5e39bb0ccaba60202326bbe"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="#" />
          <input
            type="text"
            placeholder="Name"
            className="user-info"
            name="Name"
            required
          />
          <br />
          <input
            name="Email"
            type="email"
            placeholder="Email"
            className="user-info"
            required
          />
          <br />
          <input
            name="Query"
            type="text"
            placeholder="Tell Me About your issue"
            className="my-info"
            required
          />
          <button type="submit">SEND</button>
        </form>
        {openModal && <Modal closeModal={setopenModal} />}
      </div>
    </div>
  );
};

export default Contact;
