import LayoutHeader from "./LayoutHeader";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="body-layout">
      <LayoutHeader />
      <main className="body-layout-main">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
