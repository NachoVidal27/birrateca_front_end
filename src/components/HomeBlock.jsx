import React from "react";

function HomeBlock({ img, title, text }) {
  return (
    <div className="grid grid-cols-2 mt-14 mx-12">
      <div>
        <img src={img} className="h-[450px]  ms-16" alt="" />
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-start  mx-auto">{title}</h3>
        <p className="text-xl   text-start mt-2 w-[85%]">{text}</p>
      </div>
    </div>
  );
}

export default HomeBlock;
