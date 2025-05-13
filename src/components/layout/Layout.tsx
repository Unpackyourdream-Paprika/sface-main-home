import LayoutHeader from "./LayoutHeader";
import { Outlet, useLocation } from "react-router-dom";
import "./Layout.css";
import LayoutFooter from "./LayoutFooter";


const Layout = () => {
  const location = useLocation();
  const hideFooter = location.pathname.startsWith("/share-feed/");

  return (
    <div className="body-layout">
      {/* {!hideFooter && <LayoutHeader />} */}
      <LayoutHeader />
      <main className="body-layout-main">
        <Outlet />
      </main>
      {!hideFooter && <LayoutFooter />}
    </div>
  );
};

export default Layout;
