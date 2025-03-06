import "./TermsOfService.css";

export default function TermsOfService() {
  return (
    <div className="terms-service-container">
      <h4>개인정보 수집 이용 동의(필수)</h4>
      <div className="terms-service-item">
        <strong>1. 수집 이용 목적:</strong> 가입, 서비스 이용 및 상담, 부정이용
        확인∙방지, 환불 및 교환 안내
      </div>
      <div className="terms-service-item">
        <strong>2. 수집 이용 항목:</strong> ID(이메일), 비밀번호, 닉네임 (SNS
        계정으로 가입 시) ID(이메일), 닉네임
      </div>
      <div className="terms-service-item">
        <strong>3. 보유 및 이용기간:</strong> 회원 탈퇴 후 3개월 또는 관계
        법령에 따른 기간
      </div>
      <div className="terms-service-item">
        <strong>4. 수집 이용 목적:</strong> 서비스 이용 및 상담, 부정이용
        확인∙방지, 통계•분석, 리워드 지급 서비스 제공
      </div>
      <div className="terms-service-item">
        <strong>5. 수집 이용 항목:</strong> 쿠키에 의한 자동생성정보, 서비스
        이용기록(방문일시, IP, 불량이용 기록 등), 기기정보(고유기기식별값,
        OS버전), 접속국가
      </div>
      <div className="terms-service-item">
        <strong>6. 보유 및 이용기간:</strong> 회원 탈퇴 후 3개월 또는 관계
        법령에 따른 기간
      </div>
      <h4>마케팅 목적의 개인정보 수집 이용 동의(선택)</h4>
      <div className="terms-service-item">
        <strong>1. 수집 이용 목적:</strong> 서비스 이용 및 광고성 정보 등 이용자
        안내를 위한 메시지 발송 맞춤형 광고 제공, 개인화 추천 등 맞춤형 서비스
        제공
      </div>
      <div className="terms-service-item">
        <strong>2. 수집 이용 항목:</strong> 이메일, 앱푸시 식별자, 쿠키에 의한
        자동생성정보, 서비스 이용기록(방문일시, IP, 불량이용 기록 등),
        기기정보(고유기기식별값, OS버전), 접속국가
      </div>
      <div className="terms-service-item">
        <strong>3. 보유 및 이용기간:</strong> 동의 철회시 맞춤형 광고 차단,
        서비스 탈퇴 후 3개월 또는 관계 법령에 따른 기간
      </div>
      <div className="terms-service-item">
        <strong>4. 광고 정보 수신에 대한 안내:</strong> 가입한 스타의 스타홈
        관련 이벤트・행사 및 상품/앨범 소개, 그 외 회사에서 운영하고 있는
        서비스와 관련한 마케팅 광고 발송
      </div>
      <div className="terms-service-item">
        <strong>5. 이용기간:</strong> 광고 동의 철회시 또는 회원 탈퇴 시 3개월
        이내
      </div>
    </div>
  );
}
