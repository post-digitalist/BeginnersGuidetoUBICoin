import React, { useState } from "react";

const Footer = () => {
  return (
    <footer>
      <div className="vertical-flex">
        <p>UBIcoin</p>
        <ul>
          <li>
            <a href="#">TW</a>
          </li>
          {" / "}
          <li>
            <a href="#">IG</a>
          </li>
          {" / "}
          <li>
            <a href="#">GC</a>
          </li>
        </ul>
      </div>
      <nav data-aos="zoom-in-left">
        <li>What is Ethereum?</li>
        <li>How the Ethereum Network Works</li>
        <li>The Problem of Gas</li>
        <li>What's UBICoin?</li>
        <li>How UBICoin Solves the Problem of Gas</li>
        <li>How to Get UBICoin</li>
        <p>Add your own</p>
      </nav>
    </footer>
  );
};

export default Footer;
