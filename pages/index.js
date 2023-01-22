import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import FlowerArch from "../components/flowerArch";

export default function Home() {
  return (
    <>
      <FlowerArch className="-mt-10"/>
      <div className="h-screen z-10 -mt-28 lg:-mt-36 px-8 text-center mb-40">
        <div className="text-4xl md:text-6xl mt-10 font-bold">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Jim & Helen").pauseFor(2500).deleteAll();
              typewriter.typeString("Helen & Jim").start();
            }}
          />
        </div>
        <p className="text-1xl md:text-3xl pt-2">Sunday 20th August 2023</p>
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: [1, 0.8, 1] }}
          transition={{ ease: "linear", duration: 4, repeat: Infinity }}
        >
          <Image
            className="rounded-full border-4 border-neutral"
            priority
            src="/jimhelen.jpeg"
            width={300}
            height={300}
            alt="jim and helen"
            style={{ margin: "auto", marginTop: 30, marginBottom: 30 }}
          />
        </motion.div>
      </div>
    </>
  );
}
