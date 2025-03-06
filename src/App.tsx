import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/page/Home";
import About from "./components/page/About";
import Contact from "./components/page/Contact";

function App() {
  return (
    <Router>
      <Routes>
        {/* 레이아웃이 필요한 라우트 */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/terms-of-service" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>

        {/* 레이아웃 없이 렌더링되는 별도 페이지 */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
