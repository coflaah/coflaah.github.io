const Product = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-10 ">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  ">
          <div className="card w-96 h-96 bg-[#2d1b08] shadow-xl text-white">
            <figure>
              <img src="/img/foto1.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn bg-[#603e21] text-white">Buy Now</button>
              </div>
            </div>
          </div>

          <div className="card w-96 h-96 bg-[#2d1b08] shadow-xl text-white">
            <figure>
              <img src="/img/foto1.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn bg-[#603e21] text-white">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
