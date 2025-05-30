import "./Law.css";

export default function Law() {
  return (
    <div className="law-container">
      <h2 className="law-title">스페이스 계정 이용약관</h2>

      <div className="law-section">
        <h3 className="law-section-title">제1조 (목적)</h3>
        <p className="law-paragraph">
          ① 스페이스 계정 서비스 이용약관은 본 약관 및 추후 추가될 수 있는
          별도의 약관들을 포함한 ‘서비스’에 대한 전체 약관을 말하며, 이하
          ‘약관’이라 합니다.
        </p>
        <p className="law-paragraph">
          ② 스페이스 계정 이용약관은 ‘회사’가 홈페이지를 통해 제공하는 스페이스
          계정 (이하, ‘서비스’라 함)를 본 약관에 따라 이용계약을 체결한
          이용자(이하, 해당 계약을 ‘이용계약’, 해당 이용자를 ‘회원’이라 함)가
          이용함에 있어 ‘회사’와 ‘회원’과의 법률관계를 명확히 함을 그 목적으로
          합니다.
        </p>
        <p className="law-paragraph">
          ③ ‘회사’는 ‘약관’ 및 개인정보처리방침을 ‘회원’이 쉽게 확인할 수 있도록
          ‘서비스’의 초기화면 등에 게시합니다.
        </p>
      </div>

      <div className="law-section">
        <h3 className="law-section-title">
          제2조 (스페이스 계정 생성 및 이용)
        </h3>
        <p className="law-paragraph">
          ① 스페이스 계정이란 ‘회사’가 제공하는 ‘서비스’를 사용하기 위해서,
          ‘회원’이 생성한 로그인 계정을 의미합니다. 스페이스 계정은 ‘회원’이
          ‘약관’에 동의하고, 계정 정보를 입력하시면, ‘회사’가 일정 정보를
          인증(이메일 주소 확인)한 후 가입을 인증하는 절차로 생성됩니다.
        </p>
        <p className="law-paragraph">
          ② ‘회사’가 제공하는 ‘서비스’를 원활히 이용하기 위해서는 스페이스
          계정이 필요하며, 일부 메뉴 및 ‘서비스’는 ‘회원’ 가입 없이도 이용이
          가능합니다.
        </p>
        <p className="law-paragraph">
          ③ 계정을 생성한 이후에는 ‘회사’가 제공하는 스페이스 연동 서비스 전체를
          이용하실 수 있습니다. 다만, ‘회사’의 신규 서비스에 최초 로그인 시 사용
          동의 및 개별 서비스 이용약관에 대한 동의 등의 절차를 진행합니다.
        </p>
      </div>

      <div className="law-section">
        <h3 className="law-section-title">제3조 (이용계약의 체결)</h3>
        <p className="law-paragraph">
          ① ‘이용계약’은 ‘회원’이 되고자 하는 자(이하, ‘가입신청자’라 함)가
          ‘약관’의 내용에 대하여 동의를 한 다음 회원가입신청을 하고, ‘회사’가
          이러한 신청에 대하여 승낙함으로써 체결되며, ‘가입신청자’는 ‘회사’의
          승낙에 따라 ‘이용계약’이 체결되는 시점부터 ‘회원’이 되어 ‘약관’에 따라
          ‘서비스’를 이용할 수 있습니다.
        </p>
        <p className="law-paragraph">
          ② ‘회사’는 ‘이용계약’ 체결 과정에서 ‘가입신청자’의 이메일 주소 등의
          (개인)정보를 수집할 수 있으며, 이 경우 ‘가입신청자’는 정확한(거짓이
          아닌) 정보를 제공하여야 합니다. 본 항에 따른 개인정보의 수집 및 이용과
          보관 등에 대해서는 별도로 게시되는 개인정보처리방침이 적용됩니다.
        </p>

        <p className="law-paragraph">
          ③ ‘회사’는 ‘가입신청자’의 회원가입신청에 ‘서비스’ 시스템에의 기계적
          접근 또는 계정도용, 거짓된 정보의 제공 및 ‘가입신청자’의 ‘서비스’
          어뷰징 내역 확인 등의 사유가 있어 ‘회사’가 ‘가입신청자’의 신청을
          승낙하는 것이 적절하지 않은 경우 그 승낙을 유보 또는 거부하거나,
          사후에 이용계약을 해지할 수 있습니다.
        </p>

        <p className="law-paragraph">
          ④ ‘회사'는 아동(내국인의 경우 만14세 미만, 외국인의 경우 만16세
          미만)을 대상으로 ‘서비스’를 제공하지 않습니다.
        </p>
      </div>

      <div className="law-section">
        <h3 className="law-section-title">제4조 (약관의 개정)</h3>
        <p className="law-paragraph">
          ① ‘회사’는 관련법령에 위배되지 않는 범위에서 ‘약관’을 개정할 수
          있습니다.
        </p>
        <p className="law-paragraph">
          ② ‘회사’는 전 항에 따라 ‘약관’을 개정할 경우, 적용일자와 변경내용 및
          사유를 명시하여 ‘서비스’를 통해 사전 공지합니다. 다만, 그 변경내용이
          법적으로 ‘회원’에게 불리한 것일 경우, 그 적용일자 30일 이전부터
          변경내용을 ‘서비스’를 통해 공지할 뿐만 아니라, 해당 내용을 ‘회원’의
          이메일, 로그인 시 동의창 등의 전자적 수단을 통해 명확히 통지합니다.
        </p>

        <p className="law-paragraph">
          ③ ‘회원’은 변경되는 약관에 동의하지 않을 경우 ‘약관’을 통해 체결되었던
          ‘서비스’에 대한 이용계약을 해지하고 ‘서비스’의 이용을 중단할 수
          있습니다.
        </p>

        <p className="law-paragraph">
          ④ ‘회사’가 본 조 제2항에 따라 약관의 개정을 공지 또는 통지하면서
          적용일자 이전에 거부 의사를 표시하지 않으면 개정 약관에 동의한 것으로
          본다는 뜻을 함께 공지 또는 통지하였음에도 불구하고 ‘회원’이 명시적으로
          거절의 의사표시를 하지 않은 경우에는 ‘회원’이 개정 약관에 동의한
          것으로 봅니다.
        </p>
      </div>

      <div className="law-section">
        <h3 className="law-section-title">제5조 (서비스의 변경 및 중단 등)</h3>
        <p className="law-paragraph">
          ① ‘회사’는 필요한 경우 ‘서비스’의 내용을 변경할 수 있습니다. 다만,
          ‘서비스’ 내용의 변경이 ‘회원’의 권리와 의무에 중대한 영향을 미치는
          경우에는 제4조에 따른 공지 및 통지의 절차를 거쳐 변경합니다.
        </p>
        <p className="law-paragraph">
          ② ‘회사’는 정보통신설비의 보수점검, 교체 및 고장, 통신두절 또는 운영상
          상당한 이유가 있는 경우 ‘서비스’의 제공을 일시적으로 중단할 수
          있습니다.
        </p>

        <p className="law-paragraph">
          ③ ‘회사’는 ‘서비스’의 제공에 필요한 경우 정기점검을 실시할 수 있으며,
          정기점검이 실시되는 과정에서 ‘서비스’의 제공을 일시적으로 중단할 수
          있습니다.
        </p>

        <p className="law-paragraph">
          ④ ‘회사’는 ‘회사’의 경영상의 이유 등의 사유로 ‘서비스’를 중단할 수
          있습니다
        </p>
      </div>

      {/* 추가 조항들도 비슷한 구조로 작성 */}
    </div>
  );
}
