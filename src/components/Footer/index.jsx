import React from "react";
import s from "./index.module.css";
import instagramIcon from "../../media/instagram.png";
import whatsappIcon from "../../media/whatsapp.png";

export default function Footer() {
  return (
    <div>
      <h2 className={s.title}>Contact</h2>
      <div className={s.contacts_container}>
        <div className={s.contact_card}>
          <p>Phone</p>
          <p>+49 999 999 99 99</p>
        </div>
        <div className={s.contact_card}>
          <p>Socials</p>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagramIcon} alt="instagram" />
          </a>
          <a
            href="https://wa.me/499999999999?text=Hello%2C+I+have+a+question"
            target="_blank"
          >
            <img src={whatsappIcon} alt="whatsapp" />
          </a>
        </div>
        <div className={s.contact_card}>
          <p>Address</p>
          <p>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</p>
        </div>
        <div className={s.contact_card}>
          <p>Working Hours</p>
          <p>24 hours a day</p>
        </div>
      </div>
      <div className={s.map_container}><iframe width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Linkstra%C3%9Fe%C2%A02,%208%C2%A0OG,%2010%E2%80%AF785,%20Berlin,%20Deutschland+()&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
    </div>
  );
}

