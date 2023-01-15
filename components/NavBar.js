import Link from "next/link";
import { motion } from "framer-motion";
import HamburgerMenu, { Links } from "./Hamburger.js";

const NavBar = () => {
  return (
    <>
      <div className="max-w-full h-12 flex justify-start items-center bg-black mb-4 text-white rounded-md ">
        <div className="flex md:hidden">
          <HamburgerMenu />
        </div>
        <div className="hidden md:flex">
          <div className="text-xl mt-10 p-2 px-8 border-neutral border-0 border-b border-solid">
            <Links />
          </div>
        </div>
      </div>

      {/* <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link href="/">Home</Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link className="ml-8" href="/about">
          Info
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link className="ml-8" href="/hotels">
          Hotels
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link className="ml-8" href="/gifts">
          Gifts
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link className="ml-8" href="/rsvp">
          RSVP
        </Link>
      </motion.div> */}
    </>
  );
};

export default NavBar;
