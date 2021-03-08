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
            <li key={i}>
              <Link target="_blank" href={href}>
                {display}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <nav>
        <ul>
          {links &&
            links.map(({ title, id }, i) => (
              <li key={i}>
                <Link href={`/${id}`}>{title}</Link>
              </li>
            ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
