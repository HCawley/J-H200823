import Footer from "./footer";
import NavBar from "./navBar";

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
