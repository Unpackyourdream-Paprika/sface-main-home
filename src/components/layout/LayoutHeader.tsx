import { useEffect, useState } from "react";
import "./LayoutHeader.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { HiMenu } from "react-icons/hi";
// import { IoClose } from "react-icons/io5";
import { useHeaderStateStore } from "../../store/useHeaderStore";

export default function LayoutHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isHeaderState } = useHeaderStateStore();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  const hideLink = location.pathname.startsWith("/share-feed/");

  // console.log(isHeaderState, "isHeaderState?");

  // 화면 크기 변경 감지
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const onClickLogo = () => {
    if (hideLink) return
    navigate("/");
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const onLinkClick = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const getTextColor = () => {
    const currentPath = location.pathname;

    if (
      currentPath === "/Contact" ||
      currentPath === "/about" ||
      currentPath === "/terms-of-service"
    ) {
      return "black";
    }

    return isMobile ? "black" : isHeaderState ? "black" : "white";
  };

  // 네비게이션 링크들
  const navigationLinks = (
    <>
      <Link
        to="/Contact"
        className={`nav-text`}
        onClick={onLinkClick}
        style={{ color: getTextColor() }}
      >
        Contact
      </Link>
      <Link
        to="/about"
        className="nav-text"
        onClick={onLinkClick}
        style={{ color: getTextColor() }}
      >
        개인정보처리방침
      </Link>

      <Link
        to="terms-of-service"
        className="nav-text"
        style={{ color: getTextColor() }}
      >
        서비스 이용약관
      </Link>
    </>
  );

  return (
    <header className="layout-header">
      <h1 onClick={onClickLogo}>
        <img src="/header-logo.png" alt="logo" />
      </h1>

      {/* 데스크톱 네비게이션 */}
      {/* <nav className={`layout-header-nav-warp desktop-nav `}>
        {navigationLinks}
      </nav> */}

      {/* 모바일 메뉴 버튼 */}
      {/* <button
        className="mobile-menu-btn"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
      >
        {isMenuOpen ? <IoClose size={24} /> : <HiMenu size={24} />}
      </button> */}

      {/* 모바일 사이드 메뉴 */}
      <nav className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-content ">{navigationLinks}</div>
      </nav>

      {/* 모바일 오버레이 */}
      {isMenuOpen && (
        <div className="mobile-nav-overlay" onClick={toggleMenu} />
      )}
    </header>
  );
}
