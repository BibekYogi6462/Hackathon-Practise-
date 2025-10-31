import React from "react";

const Home = () => {
  return (
    <div className="w-full px-5 min-h-[calc(100vh-60vh)]">
      <div className="w-full grid grid-cols-5">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Book Name</label>
          <input type="text" name="" id="" placeholder="Book Name" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Book Title</label>
          <input type="text" name="" id="" placeholder="Book Title" />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Book Author</label>
          <input type="text" name="" id="" placeholder="Book Author" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Selling Price</label>
          <input type="text" name="" id="" placeholder="Selling Price" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="">Published Date</label>
          <input type="date" name="" id="" placeholder="Published Date" />
        </div>
      </div>
    </div>
  );
};

export default Home;
