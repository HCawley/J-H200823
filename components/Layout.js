import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="max-w-full bg-blush text-plum">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
