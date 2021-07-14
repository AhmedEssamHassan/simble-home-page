import React from "react";
import "./home.css";
import i1 from "../../images/1.png";
import i2 from "../../images/2.png";
import i3 from "../../images/3.png";
import i4 from "../../images/4.png";
import i5 from "../../images/5.png";
import i6 from "../../images/6.png";
import i7 from "../../images/7.png";
import i8 from "../../images/8.png";
import i9 from "../../images/9.png";
import sun from "../../images/sun.png";
export default function Home() {
  return (
    <main
      style={{ height: "auto" }}
      className=" d-flex flex-column justify-content-center align-items-center"
    >
      <section className="container d-flex justify-content-between w-100 align-items-center h-50">
        <button
          className="btn"
          style={{
            width: "auto",
            backgroundColor: "orange",
            fontSize: "25px",
          }}
        >
          Explore
        </button>
        <img style={{ width: "15rem", height: "15rem" }} src={sun} alt="" />
      </section>
      <section className="planets-container  d-flex justify-content-around w-100 h-50 align-items-center">
        <img
          className="palnet i1"
          style={{
            width: "6rem",
            height: "6rem",
          }}
          src={i8}
          alt=""
        />
        <img
          className="palnet i2"
          style={{
            width: "12rem",
            height: "12rem",
          }}
          src={i6}
          alt=""
        />
        <img
          className="palnet i3"
          style={{
            width: "15rem",
            height: "15rem",
          }}
          src={i5}
          alt=""
        />
        <img
          className="palnet i4"
          style={{
            width: "7rem",
            height: "7rem",
          }}
          src={i1}
          alt=""
        />
        <img
          className="palnet i5"
          style={{
            width: "8rem",
            height: "8rem",
          }}
          src={i4}
          alt=""
        />
        <img
          className="palnet i6"
          style={{
            width: "10rem",
            height: "10rem",
          }}
          src={i3}
          alt=""
        />
        <img
          className="palnet i7"
          style={{
            width: "10rem",
            height: "10rem",
          }}
          src={i7}
          alt=""
        />
        <img
          className="palnet i8"
          style={{
            width: "5rem",
            height: "5rem",
          }}
          src={i9}
          alt=""
        />
        <img
          className="palnet i9"
          style={{
            width: "9rem",
            height: "9rem",
          }}
          src={i2}
          alt=""
        />
      </section>
    </main>
  );
}
