import { useState } from "react";
import CreativeGallery from "./components/CreativeGallery/CreativeGallery.jsx";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ScrollToTop />
      <CreativeGallery />
    </>
  );
}

export default App;
