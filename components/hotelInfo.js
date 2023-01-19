import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion'


const HotelInfo = ({ image, name, distance, location, book }) => {
  return (
    <motion.div
    whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}>
      <div className="border-4 shadow rounded-md border-neutral m-3">
      <div className="m-5 flex flex-col">
        <Link className="mt-3 hover:font-extrabold" href={book} target="_blank">
        <Image width={275} height={275} src={image} alt="hotel" draggable="false" />
        <h1 className="my-4 text-lg">{name}</h1>
        <p className="italic">{distance}</p>
        <p className="italic">{location}</p>
        </Link>
      </div>
    </div>
    </motion.div>
    
  );
};

export default HotelInfo;
