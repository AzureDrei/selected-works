import { useEffect } from "react";

function ScrollToTop({ trigger }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [trigger]);

  return null;
}

export default ScrollToTop;
