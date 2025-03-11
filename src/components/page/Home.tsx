import "./Home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

// 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const topWrapRef = useRef(null);
  const firstWrapRef = useRef(null);
  const twoWrapRef = useRef(null);
  const threeWrapRef = useRef(null);

  useEffect(() => {
    // 스크롤 구간을 명확하게 구분
    // 구간 1: 첫 번째 섹션 표시 (시작 ~ "top 10%")
    // 구간 2: 두 번째 섹션 표시 ("top 10%" ~ "center 20%")
    // 구간 3: 세 번째 섹션 표시 ("center 20%" ~ 끝)

    // 첫 번째 섹션: top 10% 지점에서 사라짐
    ScrollTrigger.create({
      trigger: topWrapRef.current,
      start: "center 90%",
      onEnter: () => {
        gsap.to(firstWrapRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
        // 첫 번째가 사라질 때 두 번째 나타나게
        gsap.to(twoWrapRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
        });
      },
      onLeaveBack: () => {
        gsap.to(firstWrapRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
        });
        // 첫 번째가 나타날 때 두 번째 사라지게
        gsap.to(twoWrapRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
      },

    });

    // 세 번째 섹션: center 20% 지점에서 나타남
    ScrollTrigger.create({
      trigger: topWrapRef.current,
      start: "center 25%",
      onEnter: () => {
        gsap.to(twoWrapRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
        gsap.to(threeWrapRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
        });
      },
      onLeaveBack: () => {
        gsap.to(twoWrapRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
        });
        gsap.to(threeWrapRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
      },
      // markers: true,
    });

    // 초기 상태 설정
    gsap.set(firstWrapRef.current, { opacity: 1 });
    gsap.set(twoWrapRef.current, { opacity: 0 });
    gsap.set(threeWrapRef.current, { opacity: 0 });

    // 컴포넌트 언마운트 시 ScrollTrigger 정리
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="main-section">
      <div className="main-top-section">
        <div className="main-top-content-wrap">
          <div className="main-top-left-wrap">
            <img src={"/main-logo.png"} alt="sface-main" />
            <p>
              언제 어디서나 아티스트의 순간을 스트리밍 <br />
              내가 찍은 나의 최애, 즉시 프린트해 간직하세요!
            </p>
            <div className="left-store-wrap">
              <img src={"/main-top/app-store.png"} />
              <img src={"/main-top/google-play.png"} />
            </div>
          </div>
        </div>
      </div>

      <div className="main-three-content-wrap" ref={topWrapRef}>
        <div className="main-three-inner">
          <div className="main-three-first-wrap" ref={firstWrapRef}>
            <div className="main-three-left-wrap">
              <p>
                내가 뽑고 싶은 아티스트의 순간을 한눈에 확인 가능, <br />
                지금 바로 스페이스(Sface)에 풍덩!
              </p>
            </div>
            <div className="main-three-right-wrap">
              <div className="main-three-right-circle" />
              <img src={"/main-top/pic-1.png"} />
            </div>
          </div>

          <div className="main-three-two-wrap" ref={twoWrapRef}>
            <div className="main-three-left-wrap">
              <p>
                내가 뽑고 싶은 아티스트의 순간을 한눈에 확인 가능, <br />
                지금 바로 스페이스(Sface)에 풍덩!222
              </p>
            </div>
            <div className="main-three-right-wrap">
              <div className="main-three-right-circle" />
              <img src={"/main-top/pic-1.png"} />
            </div>
          </div>

          <div className="main-three-three-wrap" ref={threeWrapRef}>
            <div className="main-three-left-wrap">
              <p>
                QR코드 스캔으로 언제 어디서나 손쉽게 간직 <br /> 거래내역도
                프로필에서 쉽게 확인 가능해요
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
