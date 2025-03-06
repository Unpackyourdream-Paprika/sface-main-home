import "./LayoutFooter.css";
import { Link } from "react-router-dom";

export default function LayoutFooter() {
  return (
    <footer className="layout-footer-section">
      <div className="layout-footer-inner">
        {/* 첫 번째 섹션: 서비스 관련 링크 */}
        <div className="footer-section">
          <ul>
            <li>
              <Link to="terms-of-service">서비스 이용약관</Link>
              {/* <a
                href="/space-agree.pdf"
                
                download="space-agree.pdf"
              >
                서비스 이용약관
              </a> */}
            </li>
            <li>
              <Link to="/about">개인정보처리방침</Link>
            </li>
            <li>
              <p>개인정보책임자 : 최원호</p>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <ul>
            <li>
              <p>사업자 등록번호 : 110111-878510</p>
            </li>
          </ul>
        </div>

        {/* 세 번째 섹션: 주소 */}
        <div className="footer-section">
          <ul>
            <li>
              <p>주소 : 서울특별시 마포구 와우산로27길 28</p>
            </li>
            <li>
              <p>우편번호 : 04056</p>
            </li>
            <li>
              <p>운영시간 : 평일 09:00~18:00 (주말·공휴일 제외)</p>
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
        </div>
      </div>

      {/* 푸터 하단 */}
      <div className="footer-bottom">
        <p>Copyright &copy; 2024 스페이스 All rights reserved.</p>
      </div>
    </footer>
  );
}
