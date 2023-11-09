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

  return (
    <>
      <div
        style={{ backgroundImage: 'url("./img/foto1.jpg")' }}
        className=" bg-cover bg-fixed"
      >
        <Navbar isVisible={isVisible} />
        <Jumbotron />
        <Product />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
