import { useEffect, useState } from "react";
import "./SecondSection.css";

export default function SecondSection() {
  const [isResponsive, setIsResponsive] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setIsResponsive("mobile");
      } else if (window.innerWidth < 1024) {
        setIsResponsive("tablet");
      } else {
        setIsResponsive("desktop");
      }
    };

    // Call handleResize immediately to set the initial state
    handleResize();

    // Set up event listener for future resizes
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(isResponsive, "isResponsive?");

  return (
    <section className="second-section">
      <div className="second-bg-wrapper">
        <div className="main-top-section">
          <div className="main-top-content-wrap">
            <div className="main-top-left-wrap">
              <img
                src={"/main/main_top_logo.png"}
                alt="sface-main"
                style={{ width: "50%", minWidth: "517px" }}
              />
              <p className="main-top-text">
                Share Our Brightest Moment
              </p>
              {/* <video
                src={"/main-top/UFO-transparent.webm"}
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "50%", minWidth: "340px" }}
              /> */}
              <p className="main-top-text-sec">
                아티스트의 찬란한 순간을 모두와 공유하세요
                <br />
                바로 여기, 스페이스에서
              </p>
              <div className="left-store-wrap">
                <a href="/" className="abutton">
                  <img src={"/main/main_top_google.png"} alt="google-play.png" />
                </a>
                <a href="/" className="abutton">
                  <img src={"/main/main_top_app.png"} alt="app-store.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="second-inner-content">
          <video
            src={"/main-top/UFO-transparent.webm"}
            autoPlay
            loop
            muted
            playsInline
            // style={{ width: "100%", minWidth: "340px" }}
          />
          <h4 className="second-inner-text">
            혼자가 아닌 모두와 함께, 
            <br />
            아티스트의 찬란한 순간을 나눠보세요.
          </h4>
          <p className="second-text">
            우리가 보는 아티스트는 과거의 빛의 흔적일 뿐, 진짜 '지금'은 우리가 만들어가야 해요.
            <br />
            이 공간, 스페이스에서는 아티스트와 팬들이 함께 빛나는 별자리처럼 연결돼요.
            <br />
            내가 담아낸 사진과 글, 응원의 순간이 모두 '빛나는 기억'으로 남을 거예요.
          </p>
        </div>
      </div>
    </section>
  );
}
