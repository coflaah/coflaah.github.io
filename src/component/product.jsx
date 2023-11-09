import { useEffect, useRef } from "react";

const Product = () => {
  const items = [
    {
      kopi: 1,
      soldOut: false,
      promo: false,
      bestSeller: true,
      image: "./img/foto3.jpg",
      nama: "kopi 1",
      deskripsi: "as as dkj askj ",
    },
    {
      kopi: 2,
      soldOut: false,
      promo: true,
      bestSeller: true,
      image: "./img/foto4.jpg",
      nama: "kopi 2",
      deskripsi: "as as dkj askj ",
    },
    {
      kopi: 3,
      soldOut: false,
      promo: true,
      bestSeller: false,
      image: "./img/foto4.jpg",
      nama: "kopi 3",
      deskripsi: "as as dkj askj ",
    },
    {
      kopi: 4,
      soldOut: true,
      promo: false,
      bestSeller: false,
      image: "./img/foto3.jpg",
      nama: "kopi 4",
      deskripsi: "as as dkj askj ",
    },
  ];

  const animatedRef = useRef(null);

  useEffect(() => {
    const animatedElement = animatedRef.current;

    const handleScroll = () => {
      const elementTop = animatedElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight) {
        animatedElement.classList.add("animate__animated", "animate__bounceIn");
      } else {
        animatedElement.classList.remove(
          "animate__animated",
          "animate__bounceIn"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Hapus kelas animasi saat komponen dibongkar
    return () => {
      animatedElement.classList.remove(
        "animate__animated",
        "animate__bounceIn"
      );
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-gradient-to-b from-transparent to-[#eaddcf] p-16"></div>
      <div className="flex justify-center items-center flex-col bg-[#eaddcf] pb-20">
        <div className="text-black text-3xl font-bold p-10">
          <h1>Product</h1>
        </div>
        <div
          className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  "
          ref={animatedRef}
        >
          {items.map((items, index) => (
            <div key={index} className="animated-item">
              <div className="relative ...">
                <div
                  className={`card  h-96 bg-[#2d1b08] shadow-xl text-white m-3 `}
                >
                  <figure>
                    <img src={items.image} alt="Shoes" className="bg-contain" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{items.nama}</h2>
                    <p>{items.deskripsi}</p>
                    <div className="card-actions justify-end">
                      {!items.soldOut && (
                        <button className="btn bg-[#603e21] text-white">
                          Buy Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 right-2 ...">
                  <div className="flex gap-2">
                    {items.soldOut && (
                      <div>
                        <img src="./img/soldOut.png" className="w-20" alt="" />
                      </div>
                    )}
                    {items.promo && (
                      <div>
                        <img src="./img/discount.png" className="w-20" alt="" />
                      </div>
                    )}
                    {items.bestSeller && (
                      <div>
                        <img
                          src="./img/best-seller.png"
                          className="w-20"
                          alt=""
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-t from-transparent to-[#eaddcf] p-16"></div>
    </>
  );
};

export default Product;
