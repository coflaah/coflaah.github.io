import { useEffect, useState } from "react";

const Navbar = (props) => {
  const [logo, setLogo] = useState(false);
  const [logo1, setLogo1] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    if (props.isVisible) {
      setTimeout(() => {
        setLogo1(false);
      }, 500);
      setLogo(true);
    } else {
      setTimeout(() => {
        setLogo(false);
      }, 500);
      setLogo1(true);
    }
  }, [props.isVisible]);
  return (
    <>
      <div
        className={`navbar  ${
          props.isVisible
            ? "bg-yellow-800 animate__animated animate__fadeInDown"
            : " bg-transparent "
        }`}
        style={{ transitionDuration: "1.5s" }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 text-black"
            >
              <li>
                <button
                  className="hover:text-yellow-800"
                  onClick={() => {
                    props.view2("home");
                  }}
                >
                  Homepage
                </button>
              </li>
              <li>
                <button
                  className="hover:text-yellow-800"
                  onClick={() => {
                    props.view2("product");
                  }}
                >
                  Product
                </button>
              </li>
              <li>
                <button
                  className="hover:text-yellow-800"
                  onClick={props.toAbout}
                >
                  About
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <button
            className="btn btn-ghost  text-3xl text-white  "
            onClick={scrollToTop}
          >
            <img
              src="/img/logo.png"
              alt=""
              style={{ width: "15%" }}
              className={`animate__animated ${
                logo && !logo1
                  ? "animate__rotateIn"
                  : !logo && logo1
                  ? "animate__rotateIn"
                  : "animate__rotateOut"
              }`}
            />
          </button>
        </div>

        <div className="navbar-end  ">
          <div className="dropdown ">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle text-white "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  z-[1]  shadow bg-white rounded-box w-fit right-1 text-black "
            >
              <li>
                <div className="card w-96  shadow-x bg-white hover:text-yellow-800 active:bg-yellow-600">
                  <figure>
                    <img
                      src="./img/kopi1.png"
                      alt="Shoes "
                      className=" w-28 h-28 object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title hover:text-yellow-800">
                      Produk baru
                    </h2>
                    <p>Signature Fix</p>
                    <div className="card-actions justify-end ">
                      <button
                        className="btn bg-yellow-800 hover:bg-yellow-900 border-none text-white"
                        onClick={() => {
                          props.view("kopi1");
                        }}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/* <button className="btn btn-ghost btn-circle text-white">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs bg-yellow-200 indicator-item"></span>
            </div>
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
