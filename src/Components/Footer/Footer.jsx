import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div>
      <footer className="d-flex justify-content-around align-items-center">
        <section>
          <div className="d-flex p-2 element-container">
            <h4 className="num">8</h4>
            <div className="d-flex flex-column align-items-center justify-content-end">
              <p>
                known <br /> planets
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="d-flex p-2 element-container">
            <h4 className="num">5</h4>
            <div className="d-flex flex-column align-items-center justify-content-end">
              <p>
                known dwarf <br />
                planets
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="d-flex p-2 element-container">
            <h4 className="num">575</h4>
            <div className="d-flex flex-column align-items-center justify-content-end">
              <p className="align-start">
                known natural <br /> planets
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="d-flex p-2 element-container">
            <h4 className="num">4143</h4>
            <div className="d-flex flex-column align-items-center justify-content-end">
              <p>
                known <br />
                comets
              </p>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}
