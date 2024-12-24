import "./Home.css";

export default function Home() {
  return (
    <section className="main-section">
      <div className="main-top-section">
        <div className="main-top-content-wrap">
          <div className="main-top-left-wrap">
            <h1>Sface</h1>
            <p>
              언제 어디서나 아티스트의 순간을 스트리밍 <br />
              내가 찍은 나의 최애, 즉시 프린트해 간직하세요!
            </p>
            <div className="left-store-wrap">
              <img src={"/main-top/app-store.png"} />
              <img src={"/main-top/google-play.png"} />
            </div>
          </div>
          <div className="main-top-right-wrap">
            <div className="main-top-img-wrap">
              <img src={"/main-top/top-img.png"} />
            </div>
          </div>
        </div>
      </div>

      <div className="main-three-content-wrap">
        <div className="main-three-inner">
          <div className="main-three-first-wrap">
            <div className="main-three-left-wrap">
              <p>
                찰나의 그 순간,
                <br />
                아티스트의 시간을 손쉽게 등록하고 <br />
                우리만의 팬덤과 공유해보세요
              </p>
            </div>
            <div className="main-three-right-wrap">
              <div className="main-three-right-circle" />
              <img src={"/main-top/pic-1.png"} />
            </div>
          </div>
          <div className="main-three-two-wrap">
            <div className="main-three-right-wrap">
              <div className="main-three-right-circle" />
              <img src={"/main-top/pic-2.png"} />
            </div>
            <div className="main-three-left-wrap">
              <p>
                QR코드 스캔으로 언제 어디서나 손쉽게 간직 <br /> 거래내역도
                프로필에서 쉽게 확인 가능해요
              </p>
            </div>
          </div>
          <div className="main-three-three-wrap">
            <div className="main-three-left-wrap">
              <p>
                내가 뽑고 싶은 아티스트의 순간을 한눈에 확인 가능, <br />
                지금 바로 스페이스(Sface)에 풍덩!
              </p>
            </div>
            <div className="main-three-right-wrap">
              <div className="main-three-right-circle" />
              <img src={"/main-top/pic-3.png"} />
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-gradient-box">
        <div className="inner-bottom-gradient-box">
          <h1>지금 바로 스페이스를 만나보세요!</h1>
          <div className="bottom-store-wrap">
            <img src={"/main-top/app-store.png"} />
            <img src={"/main-top/google-play.png"} />
          </div>
        </div>
      </div>
    </section>
  );
}
