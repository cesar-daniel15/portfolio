import React from "react";

/*Styles*/
import "../styles/components/information.sass";

import { AiFillRead , AiFillPhone, AiFillMail , AiFillEnvironment, AiFillCalendar  } from "react-icons/ai";

const Information = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillRead  id="book-icon" />
        <div>
          <h3>Study In</h3>
          <p>Instituto Politécnico de Viana do Castelo</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillPhone id="phone-icon" />
        <div>
          <h3>Mobile Number</h3>
          <p>(+351) 900 000 000</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillMail  id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>cesardaniel.contacto@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Location</h3>
          <p>Portugal</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillCalendar  id="calendar-icon" />
        <div>
          <h3>Age</h3>
          <p>Nineteen</p>
        </div>
      </div>
    </section>
  );
};

export default Information;