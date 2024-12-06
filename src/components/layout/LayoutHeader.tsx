import "./LayoutHeader.css";
import { Link, useNavigate } from "react-router-dom";

export default function LayoutHeader() {
  const navi = useNavigate();

  const onClick = () => {
    navi("/");
  };

  return (
    <div className="layout-header">
      <img src="/Sface_logo.png" alt="logo" onClick={onClick} />
      <div className="layout-header-nav-warp">
        <Link to="Contact" className="nav-text">
        Contact
        </Link>
        <Link to="About" className="nav-text">
          개인정보처리방침
        </Link>
        <a
          href="/space-agree.pdf" // 파일 경로
          className="nav-text"
          download="space-agree.pdf" // 다운로드 시 저장될 파일명
        >
          스페이스 이용약관
        </a>
      </div>
    </div>
  );
}
