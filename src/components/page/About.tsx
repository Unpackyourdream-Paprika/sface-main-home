import { Link } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <h4>개인정보처리방침</h4>
      <div className="about-item">
        본 개인정보 처리방침은 귀하가 서비스를 이용할 때 당사의 정보 수집, 사용
        및 공개에 관한 정책과 절차를 설명하며 귀하의 개인정보 권리와 법률이
        귀하를 보호하는 방법을 알려줍니다. 당사는 귀하의 개인 데이터를 사용하여
        서비스를 제공하고 개선합니다. 서비스를 사용함으로써 귀하는 본 개인정보
        처리방침에 따른 정보 수집 및 사용에 동의하게 됩니다.
      </div>
      <div className="about-item">
        <h4>정의</h4>
        <span className="spanStyle" /> 계정: 당사의 서비스 또는 서비스의 일부에
        접근하기 위해 귀하를 위해 생성된 고유한 계정
        <br />
        <span className="spanStyle" /> 회사: KIOROBO Corp., 서울특별시 마포구
        와우산로27길 28 (본 계약에서 "회사", "당사", "우리" 또는 "우리의"로
        지칭)
        <br />
        <span className="spanStyle" /> 국가: 대한민국
        <br />
        <span className="spanStyle" /> 기기: 컴퓨터, 휴대전화 또는 디지털
        태블릿과 같이 서비스에 접근할 수 있는 모든 기기 <br />
        <span className="spanStyle" /> 개인 데이터: 식별된 또는 식별 가능한
        개인과 관련된 모든 정보
        <br /> <span className="spanStyle" /> 서비스: SFace 애플리케이션
        <br /> <span className="spanStyle" /> 서비스 제공자: 회사를 대신하여
        데이터를 처리하는 모든 자연인 또는 법인
        <br /> <span className="spanStyle" /> 제3자 소셜 미디어 서비스: 사용자가
        서비스를 사용하기 위해 로그인하거나 계정을 만들 수 있는 웹사이트 또는
        소셜 네트워크 웹사이트
        <br /> <span className="spanStyle" /> 사용 데이터: 서비스 사용에 의해
        자동으로 수집되거나 서비스 인프라 자체에서 생성된 데이터
      </div>

      <div className="about-item">
        <strong>개인 데이터</strong>
        <br />
        <strong>
          당사 서비스 사용 중 귀하에게 연락하거나 식별하는 데 사용할 수 있는
          특정 개인 식별 정보를 제공하도록 요청할 수 있습니다:
        </strong>
        <br /> <span className="spanStyle" /> 이메일 주소
        <br /> <span className="spanStyle" /> 이름과 성<br />{" "}
        <span className="spanStyle" /> 전화번호
        <br /> <span className="spanStyle" /> 사용 데이터
      </div>
      <div className="about-item">
        <strong>사용 데이터</strong>
        <br />
        <strong>서비스 사용 시 자동으로 수집되는 데이터:</strong>
        <br />
        <span className="spanStyle" /> 기기 인터넷 프로토콜 주소(예: IP 주소)
        <br />
        <span className="spanStyle" /> 브라우저 유형, 브라우저 버전
        <br />
        <span className="spanStyle" /> 방문한 서비스 페이지, 방문 시간 및 날짜,
        해당페이지에서 보낸시간
        <br />
        <span className="spanStyle" /> 고유 기기 식별자 및 기타 진단 데이터
        <br />
        <br />
        <br />
        <strong>
          모바일 기기를 통해 서비스에 접근할 때, 당사는 다음과 같은 정보를
          추가로 수집할 수 있습니다:
        </strong>
        <br />
        <span className="spanStyle" /> 모바일 기기 유형
        <br />
        <span className="spanStyle" /> 모바일 기기 고유 ID
        <br />
        <span className="spanStyle" /> 모바일 기기의 IP 주소
        <br />
        <span className="spanStyle" /> 모바일 운영 체제
        <br />
        <span className="spanStyle" /> 사용하는 모바일 인터넷 브라우저 유형
        <br />- 고유 기기 식별자 및 기타 진단 데이터
      </div>
      <div className="about-item">
        <strong>제3자 소셜 미디어 서비스 정보</strong>
        <br />
        <strong>
          다음 서비스를 통해 계정을 생성하고 로그인할 수 있습니다:
        </strong>
        <br />
        <span className="spanStyle" /> 구글
        <br />
        <span className="spanStyle" /> 페이스북
        <br />
        <span className="spanStyle" /> 인스타그램
        <br />
        <span className="spanStyle" /> 트위터
        <br /> <span className="spanStyle" /> 링크드인
        <br />
        <br />
        제3자 소셜 미디어 서비스를 통해 등록하는 경우, 당사는 귀하의 이름,
        이메일 주소, 활동 또는 해당 계정과 연결된 연락처 목록과 같은 정보를
        수집할 수 있습니다.
      </div>
      <div className="about-item">
        <strong>애플리케이션 사용 중 수집되는 정보</strong>
        <br />
        <strong>
          당사 애플리케이션 사용 중, 귀하의 사전 허가를 받아 다음을 수집할 수
          있습니다:
        </strong>
        <br />
        <span className="spanStyle" /> 귀하의 기기 카메라 및 사진 라이브러리의
        사진 및 기타 정보
        <br />
        귀하는 기기 설정을 통해 언제든지 이 정보에 대한 접근을 활성화하거나
        비활성화할 수 있습니다.
      </div>

      <div className="about-item">
        <strong>개인 데이터 사용 목적</strong>
        <br />
        회사는 개인 데이터를 다음과 같은 목적으로 사용할 수 있습니다: 안내를
        <br /> <span className="spanStyle" />{" "}
        <strong>서비스 제공 및 유지관리: </strong>{" "}
        <span className="spanStyle" /> 서비스 사용 모니터링 포함함
        <br /> <strong>계정 관리: </strong> <span className="spanStyle" />{" "}
        서비스 사용자로서의 등록 관리
        <br /> <strong>계약 이행: </strong> <span className="spanStyle" /> 구매
        계약의 개발, 준수 및 수행
        <br /> <strong>연락:</strong> <span className="spanStyle" /> 업데이트
        또는 정보성 커뮤니케이션을 위한 연락 (이메일, 전화, SMS, 푸시 알림 등)
        <br /> <strong>마케팅:</strong> <span className="spanStyle" /> 유사한
        상품, 서비스 및 이벤트에 대한 정보 제공 (옵트아웃 가능)
        <br /> <strong>요청 관리:</strong> <span className="spanStyle" /> 귀하의
        요청에 참여하고 관리
        <br /> <strong>사업 이전:</strong> <span className="spanStyle" /> 합병,
        매각, 구조 조정 등의 상황에서의 정보 사용
        <br />
        <strong>기타 목적:</strong> <span className="spanStyle" /> 데이터 분석,
        사용 트렌드 파악, 서비스 개선 등
      </div>
      <div className="about-item">
        <strong>개인 정보 공유</strong>
        <br />
        <strong>서비스 제공업체와:</strong> <span className="spanStyle" />{" "}
        서비스 사용 모니터링, 분석 및 연락을 위해
        <br /> <strong>
          사업 이전을 위해:
        </strong> <span className="spanStyle" /> 합병, 자산 매각, 자금 조달 또는
        인수와 관련하여
        <br /> <strong>계열사와:</strong> <span className="spanStyle" /> 당사의
        모회사, 자회사, 합작 투자 파트너 또는 기타 관련 회사
        <br /> <strong>비즈니스 파트너와:</strong>{" "}
        <span className="spanStyle" /> 특정 제품, 서비스 또는 프로모션 제공을
        위해 <br />
        <br /> <strong>
          다른 사용자와:
        </strong> <span className="spanStyle" /> 개인 정보를 공유하거나 공개
        영역에서 상호 작용할 때
        <br /> <strong>귀하의 동의와 함께:</strong>{" "}
        <span className="spanStyle" /> 귀하의 동의를 받아 다른 목적으로
      </div>
      <div className="about-item">
        <strong>연락처</strong> <span className="spanStyle" /> 이 개인정보
        처리방침에 대해 질문이 있으시면 다음 방법으로 연락하실 수 있습니다:
        <br />
        <strong>
          이메일: <br />
          <a
            href="mailto:app@kiorobo.com"
            style={{ textDecoration: "underline" }}
          >
            app@kiorobo.com
          </a>
        </strong>
        <strong>웹사이트:</strong>
        <Link
          to="https://sface.app/Contact"
          style={{ textDecoration: "underline" }}
        >
          https://sface.app/Contact
        </Link>
        <br />
      </div>
    </div>
  );
}
