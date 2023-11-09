const Product = () => {
  const items = [
    {
      kopi: 1,
      image: "./img/foto3.jpg",
      nama: "kopi 1",
      deskripsi: "as as dkj askj ",
    },
    {
      kopi: 2,
      image: "./img/foto4.jpg",
      nama: "kopi 2",
      deskripsi: "as as dkj askj ",
    },
  ];
  return (
    <>
      <div className="bg-gradient-to-b from-transparent to-[#eaddcf] p-16"></div>
      <div className="flex justify-center items-center flex-col bg-[#eaddcf] pb-20">
        <div className="text-black text-3xl font-bold p-10">
          <h1>Product</h1>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  ">
          {items.map((items, index) => (
            <div key={index}>
              <div
                className={`card w-96 h-96 bg-[#2d1b08] shadow-xl text-white animate__animated ${
                  items.kopi % 2 === 0
                    ? "animate__backInLeft"
                    : "animate__backInRight"
                }`}
              >
                <figure>
                  <img src={items.image} alt="Shoes" className="bg-contain" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{items.nama}</h2>
                  <p>{items.deskripsi}</p>
                  <div className="card-actions justify-end">
                    <button className="btn bg-[#603e21] text-white">
                      Buy Now
                    </button>
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
