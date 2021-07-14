import React, { useState } from "react";
import "./nav.css";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineGoogle,
  AiOutlineMenuFold,
} from "react-icons/ai";
import {
  FaClosedCaptioning,
  FaFacebookF,
  FaSearch,
  FaWikipediaW,
  FaWindowClose,
} from "react-icons/fa";
export default function Nav({ setSide }) {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <nav className="d-flex">
      <section className="menu-btn-container d-flex justify-content-around align-items-center">
        <AiOutlineMenuFold
          style={{ fontSize: "25px" }}
          onClick={() => setSide(true)}
        />
        <h3 className="m-0">Gravity</h3>
      </section>
      <section className="contact-container d-flex justify-content-around align-items-center">
        <a href="https://www.facebook.com/" target="_blank">
          <FaFacebookF style={{ fontSize: "28px" }} />
        </a>
        <a href="https://www.youtube.com/" target="_blank">
          <AiFillYoutube style={{ fontSize: "28px" }} />
        </a>
        <a href="https://www.google.com/" target="_blank">
          <AiOutlineGoogle style={{ fontSize: "28px" }} />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <AiFillInstagram style={{ fontSize: "28px" }} />
        </a>
        <a href="https://en.wikipedia.org/wiki" target="_blank">
          <FaWikipediaW style={{ fontSize: "28px" }} />
        </a>
      </section>
      <section className="search-container d-flex align-items-center">
        <div className=" d-flex" style={{ width: "90%", height: "60%" }}>
          {isSearch ? (
            <div className="inpt-container">
              <input type="text" name="" id="" />
            </div>
          ) : (
            <div
              className=" left d-md-flex justify-content-around align-items-center"
              style={{ width: "100%" }}
            >
              <h4 className="m-0">explore</h4>
              <h4 className="m-0">about</h4>
              <h4 className="m-0">articles</h4>
            </div>
          )}
        </div>
        {isSearch ? (
          <FaWindowClose onClick={() => setIsSearch(false)} />
        ) : (
          <FaSearch
            style={{ fontSize: "25px", cursor: "pointer" }}
            onClick={() => {
              setIsSearch(true);
              setSide(false);
            }}
          />
        )}
      </section>
    </nav>
  );
}
