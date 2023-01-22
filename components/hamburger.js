import Link from "next/link";
import { motion } from "framer-motion";
import { slide as Menu } from "react-burger-menu";

const HamburgerMenu = () => (
  <div className="relative p-2">
    <Menu
      customBurgerIcon={<HamburgerIcon />}
      width={"50%"}
      className="left-0 top-0"
    >
      <Links />
    </Menu>
  </div>
);

const HamburgerIcon = () => (
  <div className="p-4">
    <svg
      className="w-10 h-10 text-plum"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </div>
);

export const Links = () => (
  <>
    <div className="md:flex text-xl mt-10 p-2 px-8">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link className="pt-8 p-4 md:p-0" href="/">
          Home
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link className="p-4 md:p-0 md:ml-8" href="/about">
          Info
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link className="p-4 md:p-0 md:ml-8" href="/hotels">
          Hotels
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link className="p-4 md:p-0 md:ml-8" href="/gifts">
          Gifts
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link className="p-4 md:p-0 md:ml-8" href="/rsvp">
          RSVP
        </Link>
      </motion.div>
    </div>
  </>
);

export default HamburgerMenu;
