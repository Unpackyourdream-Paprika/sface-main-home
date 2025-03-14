import "./LayoutFooter.css";
import { Link } from "react-router-dom";

export default function LayoutFooter() {
  return (
    <footer className="layout-footer-section">
      <div className="layout-footer-inner">
        {/* 첫 번째 섹션: 서비스 관련 링크 */}
        <div className="footer-section">
          <h4>주식회사 키오로보</h4>
          <ul>
            <li>문의</li>
            <li>
              <Link to="terms-of-service">서비스 이용약관</Link>
            </li>
            <li>
              <Link to="/about">개인정보처리방침</Link>
            </li>
            <li>개인정보책임자 : 최원호</li>
          </ul>
        </div>

        <div className="footer-section">
          <ul>
            <li>
              <p>사업자 등록번호 : 110111-878510</p>
            </li>
            <li>
              <p>대표 : 최원호</p>
            </li>
          </ul>
        </div>

        {/* 세 번째 섹션: 주소 */}
        <div className="footer-section second">
          <ul>
            <li>
              <p>주소 : 서울특별시 마포구 와우산로27길 28</p>
            </li>
          </ul>
        </div>

        {/* 세 번째 섹션: 연락처 이메일 */}
        <div className="footer-section">
          <ul>
            <li>
              <p>E-MAIL : app@kiorobo.com</p>
            </li>
            <li>
              <p>전화 : 070-8778-0000</p>
            </li>
          </ul>

          <p className="footer-last-text">
            Copyright &copy; 2024 스페이스 All rights reserved.
          </p>
        </div>
      </div>

      {/* 푸터 하단 */}
    </footer>
  );
}
