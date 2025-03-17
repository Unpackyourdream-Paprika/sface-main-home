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
        <video
          src={"/main-top/sface-bg.mp4"}
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%" }}
        />
      </div>
      <div className="second-inner-content">
        {isResponsive === "desktop" ? (
          <h4 className="second-inner-text">
            우리가 보는 아티스트는 과거의 빛의 흔적일 뿐, 진짜 '지금'은 우리가
            만들어가야 해요. <br />
            이 공간, 스페이스에서는 아티스트와 팬들이 함께 빛나는 별자리처럼
            연결돼요.
            <br />
            <br />
            내가 담아낸 사진과 글, 응원의 순간이 모두 '빛나는 기억'으로 남을
            거에요. <br /> 혼자가 아닌 모두와 함께, 아티스트의 찬란한 순간을
            스페이스에서 나눠보세요.
          </h4>
        ) : isResponsive === "tablet" ? (
          <h4 className="second-inner-text">
            우리가 보는 아티스트는 과거의 빛의 흔적일 뿐, 진짜 '지금'은 우리가
            만들어가야 해요. 이 공간, 스페이스에서는 아티스트와 팬들이 함께
            빛나는 별자리처럼 <br /> 연결돼요.
            <br />
            <br />
            내가 담아낸 사진과 글, 응원의 순간이 모두 '빛나는 기억'으로 남을
            거에요. 혼자가 아닌 모두와 함께, 아티스트의 찬란한 순간을
            스페이스에서 나눠보세요.
          </h4>
        ) : isResponsive === "mobile" ? (
          <h4 className="second-inner-text">
            우리가 보는 아티스트는 과거의 빛의 흔적일 뿐, 진짜 '지금'은 우리가
            만들어가야 해요. 이 공간, 스페이스에서는 아티스트와 팬들이 함께
            빛나는 별자리처럼 연결돼요.
            <br />
            <br /> 내가 담아낸 사진과 글, 응원의 순간이 모두 '빛나는 기억'으로
            남을 거에요. 혼자가 아닌 모두와 함께, 아티스트의 찬란한 순간을
            스페이스에서 나눠보세요.
          </h4>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
