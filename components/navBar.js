import HamburgerMenu, { Links } from "./hamburger.js";

const NavBar = () => {
  return (
    <>
      <div className="max-w-full h-12 flex justify-start items-center mb-4 text-white rounded-md ">
        <div className="flex md:hidden">
          <HamburgerMenu />
        </div>
        <div className="hidden md:flex">
          <div className="">
            <Links />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
