import Link from "next/link";
import Image from "next/image";
import React from "react";

const Maps = () => {
  return (
    <div>
      <Link target="_blank" href="https://www.google.com/maps/place/Foxtail+Barns+Wedding+Venue+With+Lodges/@53.0368346,-2.0188644,17z/data=!3m1!4b1!4m5!3m4!1s0x487a3fd81ddca4e7:0x2c5a2610625e7c6b!8m2!3d53.0368366!4d-2.0165903">
        <Image
          src="/Maps-Pin.png"
          alt="google pin"
          width={30}
          height={30}
          className="mt-2 mx-auto"
        />
      </Link>
    </div>
  );
};

export default Maps;
