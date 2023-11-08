import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./component/navbar";
import Product from "./component/product";
import Footer from "./component/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#eaddcf]">
        <Navbar />
        <div className=' min-h-screen bg-fixed bg-cover bg-[url("/img/foto2.jpg")] text-white text-3xl flex justify-center items-center'>
          Belum ada Content
        </div>
        <Product />
        <Footer />
      </div>
    </>
  );
}

export default App;
