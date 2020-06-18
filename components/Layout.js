import Header from "./Header";
import NavBar from "./NavBar";

const Layout = props => (
  <div>
    <Header />
    <div>
      {props.children}
    </div>
    <NavBar />
  </div>
);

export default Layout