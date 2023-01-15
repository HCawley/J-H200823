import React from "react";
import FlowerArch from "../components/FlowerArch";

const gifts = () => {
  return (
    <>
    <FlowerArch />
      <div className="text-center text-xl h-screen z-10 -mt-28 lg:-mt-36 px-8">
        <h1 className='text-4xl font-bold text-center mt-10'>Gifts</h1>
        <p className="mt-5">
          We hope you can join us in celebrating our marriage.
        </p>
        <p className="pt-2">
          Please know that your presence is the best gift you can give to us.
        </p>
        <p className="pt-2">
          Should you wish to buy us something, we'd greatly appreciate a
          contribution towards our honeymoon in Bali!
        </p>
      </div>
    </>
  );
};

export default gifts;
