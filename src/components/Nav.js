import React, { useEffect, useState } from "react";
import "../css/nav.css";

function Nav() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, [show]);
  return (
    <div className={`nav ${show ? "nav__black" : ""}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="Netflix Logo"
      />
      <img
        src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png"
        className="nav__avater"
        alt=""
      />
    </div>
  );
}

export default Nav;
