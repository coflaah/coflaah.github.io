import { useEffect, useRef } from "react";

const Product = () => {
  const items = [
    {
      kopi: 1,
      soldOut: false,
      promo: false,
      bestSeller: false,
      new: true,
      image: "./img/foto3.jpg",
      nama: "Signature Fix",
      deskripsi: "kopi susu gula aren ",
      harga: 28,
      ukuran: "500 ml",
    },
  ];

  const animatedRef = useRef(null);

  return (
    <>
      <div className="bg-gradient-to-b from-transparent to-[#eaddcf] p-16"></div>
      <div className="flex justify-center items-center flex-col bg-[#eaddcf] pb-20">
        <div className="text-black text-3xl font-bold p-10">
          <h1>Product</h1>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10  ">
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
                    <div className="grid grid-cols-2">
                      <div>
                        <div className="flex items-end gap-2">
                          <h2 className="card-title text-3xl ">{items.nama}</h2>
                          <p className="text-xl">{items.ukuran}</p>
                        </div>
                        <p>{items.deskripsi}</p>
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-white w-fit p-3 text-black font-bold rounded-lg h-fit">
                          {items.harga + " "}K
                        </div>
                      </div>
                    </div>
                    <div className="card-actions justify-end">
                      {!items.soldOut && (
                        <button className="btn bg-[#603e21] text-white">
                          Buy Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4  right-2 ...">
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
                    {items.new && (
                      <div>
                        <img
                          src="./img/new.png"
                          className="w-20 mt-4 me-1"
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
