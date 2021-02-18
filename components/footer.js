import React, { useState } from "react";
import data from "../lib/social-media.yaml";

const Footer = ({ links }) => {
  const { socialMedia } = data;

  return (
    <footer>
      <div className="vertical-flex">
        <p>UBIcoin</p>
        <ul>
          {socialMedia.map(({ display, href }, i) => (
            <>
              <li>
                <a href={href}>{display}</a>
              </li>
              {i < socialMedia.length - 1 && " / "}
            </>
          ))}
        </ul>
      </div>
      <nav data-aos="zoom-in-left">
        {links &&
          links.map(({ title, id }, i) => (
            <li key={i}>
              <a href={`/${id}`}>{title}</a>
            </li>
          ))}
      </nav>
    </footer>
  );
};

export default Footer;
