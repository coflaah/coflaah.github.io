import "./style/footer.css";

const Footer = () => {
  return (
    <>
      <>
        <div className="bg-gradient-to-b from-transparent to-yellow-900 p-16"></div>
        <footer
          className="footer  flex justify-center bg-yellow-900"
          style={{ transition: "1s" }}
        >
          <div className="container">
            <br />
            <div className="row  w-full ">
              <div className="col-md mb-5">
                <div className="footer-col ">
                  <h4 className="text-white">Quotes</h4>
                  <p className="text-white">
                    "Mulai setiap harimu dengan pikiran positif dan hati yang
                    bersyukur." - Roy T. Bennett."
                  </p>
                </div>
              </div>
              <div className="col-md mb-3">
                <div className="footer-col text-white">
                  <h4>follow us</h4>
                  <div className="social-links text-white">
                    <a
                      href="https://www.instagram.com/coflaah_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-yellow-950 hover:bg-[#c6781f]  "
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <footer className="text-center pb-1 pt-3 text-light rounded-top-5 bg-yellow-950 text-white ">
          <p>
            Create with <i className="bi bi-heart-fill"></i> by{" "}
            <a
              href="https://www.instagram.com/coflaah_/"
              className=" hover:bg-gray-500 rounded-full py-2 px-1 fw-bold "
              style={{ textDecoration: "none" }}
            >
              Ardi Fajar Arifin
            </a>
          </p>
        </footer>
      </>
    </>
  );
};

export default Footer;
