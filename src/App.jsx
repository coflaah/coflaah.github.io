import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/navbar";
import Product from "./component/product";
import Footer from "./component/footer";
import Jumbotron from "./component/jumbtron";
import About from "./component/aboutme";

function App() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [about, setAbout] = useState(true);
  const [hilang, setHilang] = useState(false);

  const order = () => {
    // Mengarahkan ke elemen dengan id "contoh"
    const contohElement = document.getElementById("order");

    if (contohElement) {
      contohElement.scrollIntoView({ behavior: "smooth" });
    }
    if (about == true) {
      setHilang(true);
      setTimeout(() => {
        setHilang(false);
        setAbout(false);
      }, 500);
    }
  };

  return (
    <>
      <div
        style={{ backgroundImage: 'url("./img/foto1.jpg")' }}
        className=" bg-cover bg-fixed"
      >
        <Navbar isVisible={isVisible} />
        <Jumbotron order={order} />
        <Product order={order} />
        <About
          about={about}
          setAbout={setAbout}
          hilang={hilang}
          setHilang={setHilang}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
