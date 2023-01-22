import Footer from "./footer";
import NavBar from "./navBar";

const Layout = ({ children }) => {
  return (
    <div className="text-plum" style={{backgroundImage: 'url(/Background.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
