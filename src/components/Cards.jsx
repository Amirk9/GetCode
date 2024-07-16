import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className=" mt-4 my-3 p-3">
        <div className=" bg-slate-200 card w-80  shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Book" />
          </figure>
          <div className="card-body h-44">
            <h2 className="card-title ">
              {item.name}
              <div className="badge border-none bg-green-00 badge-secondary">{item.category}</div>
            </h2>
            <p className="text-stone-500 text-sm">{item.title}</p>
            <div className="flex items-center card-actions justify-between">
              <div className="badge badge-outline ">RS:{item.price}</div>
              <div className=" cursor-pointer px-4 py-1 rounded-full border-[2px] bg-black  text-white  hover:text-white duration-200">
                Buy
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
