import { useState } from "react";
import "./LayoutHeader.css";
import { Link, useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export default function LayoutHeader() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const onClickLogo = () => {
    navigate("/");
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const onLinkClick = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  // 네비게이션 링크들
  const navigationLinks = (
    <>
      <Link to="/Contact" className="nav-text" onClick={onLinkClick}>
        Contact
      </Link>
      <Link to="/About" className="nav-text" onClick={onLinkClick}>
        개인정보처리방침
      </Link>
      <a
        href="/space-agree.pdf"
        className="nav-text"
        download="space-agree.pdf"
        onClick={onLinkClick}
      >
        스페이스 이용약관
      </a>
    </>
  );

  return (
    <header className="layout-header">
      <h1 onClick={onClickLogo}>
        <img src="/Sface_logo.png" alt="logo" />
      </h1>

      {/* 데스크톱 네비게이션 */}
      <nav className="layout-header-nav-warp desktop-nav">
        {navigationLinks}
      </nav>

      {/* 모바일 메뉴 버튼 */}
      <button
        className="mobile-menu-btn"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
      >
        {isMenuOpen ? <IoClose size={24} /> : <HiMenu size={24} />}
      </button>

      {/* 모바일 사이드 메뉴 */}
      <nav className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-content">{navigationLinks}</div>
      </nav>

      {/* 모바일 오버레이 */}
      {isMenuOpen && (
        <div className="mobile-nav-overlay" onClick={toggleMenu} />
      )}
    </header>
  );
}
