import React from "react";
import png_4 from "../../media/png_4.png";
import cactus_404 from "../../media/cactus_404.png";
import { Link } from "react-router-dom";
import s from "./index.module.css";

export default function NotFoundPage() {
  return (
    <div className={s.container}>
      <div>
        <img src={png_4} alt="4" />
        <img src={cactus_404} alt="0" />
        <img src={png_4} alt="4" />
      </div>
      <div>
        <h1>Page Not Found</h1>
        <p>
          We’re sorry, the page you requested could not be found. Please go back
          to the homepage.
        </p>
        <Link to="/">Go home</Link>
      </div>
    </div>
  );
}
