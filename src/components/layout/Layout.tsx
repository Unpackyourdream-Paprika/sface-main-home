import LayoutHeader from "./LayoutHeader";
import { Outlet } from "react-router-dom";
import "./Layout.css";
import LayoutFooter from "./LayoutFooter";

const Layout = () => {
  return (
    <div className="body-layout">
      <LayoutHeader />
      <main className="body-layout-main">
        <Outlet />
      </main>
      <LayoutFooter />
    </div>
  );
};

export default Layout;
