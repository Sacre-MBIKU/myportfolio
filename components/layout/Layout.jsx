import LayoutStyled from "./LayoutStyled";
import Navbar from "../navbar/Navbar";
const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Navbar />
      {children}
    </LayoutStyled>
  );
};
export default Layout;
