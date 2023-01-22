import React from "react";
import FlowerArch from "../components/flowerArch";

const gifts = () => {
  return (
    <>
    <FlowerArch />
      <div className="h-screen text-center text-xl z-10 -mt-28 lg:-mt-36 px-8">
        <h1 className='text-4xl font-bold text-center mt-10'>Gifts</h1>
        <p className="mt-5">
          We hope you can join us in celebrating our marriage.
        </p>
        <p className="py-4">
          Please know that your presence is the best gift you can give to us.
        </p>
        <p>
          Should you wish to buy us something, we&apos;d greatly appreciate a
          contribution towards our honeymoon in Bali!
        </p>
      </div>
    </>
  );
};

export default gifts;
