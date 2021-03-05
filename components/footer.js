import React, { useState } from "react";
import Link from "next/link";
import data from "../lib/social-media.yaml";

const Footer = ({ links }) => {
  const { socialMedia } = data;

  return (
    <footer>
      <div className="footer-vertical-flex">
        <p>UBIcoin</p>
        <ul>
          {socialMedia.map(({ display, href }, i) => (
            <React.Fragment key={i}>
              <li key={i}>
                <Link target="_blank" href={href}>
                  {display}
                </Link>
              </li>
              {i < socialMedia.length - 1 && " / "}
            </React.Fragment>
          ))}
        </ul>
      </div>
      <nav>
        {links &&
          links.map(({ title, id }, i) => (
            <li key={i}>
              <Link href={`/${id}`}>{title}</Link>
            </li>
          ))}
      </nav>
    </footer>
  );
};

export default Footer;
