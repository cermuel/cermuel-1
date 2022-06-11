import React from "react";
import "../App.css";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="container-item main-header">Drop A Line</div>
      <br />
      <div className="container-item main-contacts">
        <div className="contacts">
          <div className="contacts-text">Phone</div>
          <div className="contacts-details" action="">
            +234-706-355-4955
          </div>
        </div>
        <div className="contacts">
          <div className="contacts-text">Email</div>
          <div
            className="contacts-details"
            action="mailto: samuelobasi2005@gmail.com"
          >
            samuelobasi2005@gmail.com
          </div>
        </div>
      </div>
      <div className="container-item contactMe">
        <form action="">
          <input
            type="text"
            placeholder="Name"
            className="user-info"
            required
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            className="user-info"
            required
          />
          <br />
          <input
            type="text"
            placeholder="Tell Me About your issue"
            className="my-info"
            required
          />
          <button type="submit">SEND</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
