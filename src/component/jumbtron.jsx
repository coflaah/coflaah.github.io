import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Jumbotron = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const Rekomendasi = [
    {
      kopi: 1,
      image: "./img/foto3.jpg",
      nama: "kopi 1",
      deskripsi:
        "as as dkj askj zxcv.,mn asdlf;kj zcx,./mv asdfklj zxc./,vm asdkfj zcx.,/vm  ",
    },
    {
      kopi: 2,
      image: "./img/foto4.jpg",
      nama: "kopi 2",
      deskripsi:
        "as as dkj askj zxcv.,mn asdlf;kj zcx,./mv asdfklj zxc./,vm asdkfj zcx.,/vm ",
    },
  ];
  return (
    <>
      <div className=" min-h-screen bg-fixed bg-cover bg-transparent text-white text-3xl flex justify-center items-center">
        <div className="grid grid-cols-1 gap-4  w-full lg:grid-cols-2 mt-28 lg:mt-0 ">
          <div className="  min-w-full flex justify-center items-center flex-col gap-5">
            <h1
              style={{ fontSize: "75px" }}
              className=" font-serif shadow-md font-bold"
            >
              Coflaah.
            </h1>
            <p className="p-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              ipsa sed possimus dolorem, sint architecto at consectetur
              perspiciatis fugit, magni maiores? A placeat id aperiam quaerat
              veritatis tenetur nemo suscipit.
            </p>
          </div>

          <div className=" flex justify-center items-center p-10 lg:p-20 min-h-screen">
            <div className="container rounded-3xl  h-full">
              <h1 className="text-center font-bold p-2">Best Seller</h1>
              <Slider {...settings}>
                {Rekomendasi.map((items, index) => (
                  <div key={index}>
                    <div
                      style={{
                        backgroundImage: `url(${items.image})`,
                        backgroundSize: "cover",
                      }}
                      className="h-[35rem] p-5 rounded-3xl flex items-end"
                    >
                      <div className="bg-white text-black p-3 rounded-2xl">
                        <h1 className="text-2xl font-bold">{items.nama}</h1>
                        <p className="text-lg">{items.deskripsi}</p>
                        <div className=" flex justify-end">
                          <button className="bg-yellow-800 hover:bg-yellow-900 text-white p-2 rounded-2xl">
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
