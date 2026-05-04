import { useEffect, useState } from "react";
import "./ScrollTop.css";

function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShow(true);  // 👈 bas scroll hote hi show
      } else {
        setShow(false); // top par hide
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-btn ${show ? "show" : ""}`}
      onClick={goTop}
    >
      ↑
    </button>
  );
}

export default ScrollTop;