import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./sidebar.css";
export default function Sidebar({ isSideShow, setSide }) {
  return (
    <>
      <aside
        className=""
        style={isSideShow ? { display: "block" } : { display: "none" }}
      >
        <AiOutlineClose className="icon" onClick={() => setSide(false)} />
        <ul>
          <li>
            <p>home</p>
          </li>
          <li>
            <p>about</p>
          </li>
          <li>
            <p>articles</p>
          </li>
          <li>
            <p>contact</p>
          </li>
        </ul>
      </aside>
    </>
  );
}
