import React from "react";
import Image from "next/image";

const FlowerArch = () => {
  return (
    <div>
      <Image
        width={500}
        height={300}
        src="/flower-arch.png"
        alt="flower arch"
        className="z-0"
        priority
        style={{ margin: "auto" }}
      />
    </div>
  );
};

export default FlowerArch;
