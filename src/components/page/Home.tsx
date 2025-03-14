import "./Home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useHeaderStateStore } from "../../store/useHeaderStore";
import SecondSection from "../Main/SecondSection";

// 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { setIsHeaderState } = useHeaderStateStore();
  const topWrapRef = useRef(null);
  const firstWrapRef = useRef(null);
  const twoWrapRef = useRef(null);
  const threeWrapRef = useRef(null);
  const fourWrapRef = useRef(null);

  useEffect(() => {
    // 스크롤 구간을 명확하게 구분
    // 구간 1: 첫 번째 섹션 표시 (시작 ~ "top 10%")
    // 구간 2: 두 번째 섹션 표시 ("top 10%" ~ "center 20%")
    // 구간 3: 세 번째 섹션 표시 ("center 20%" ~ 끝)

    ScrollTrigger.create({
      trigger: topWrapRef.current,
      start: "top top",
      end: "100% 100%",
      onEnter: () => {
        setIsHeaderState(true);
      },

      onEnterBack: () => {
        setIsHeaderState(true);
      },
      onLeaveBack: () => {
        setIsHeaderState(false);
      },
    });

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
      start: "center 45%",
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

    ScrollTrigger.create({
      trigger: topWrapRef.current,
      start: "center 15%", // 뷰포트 상단에 도달했을 때
      onEnter: () => {
        gsap.to(threeWrapRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
        gsap.to(fourWrapRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
        });
      },
      onLeaveBack: () => {
        gsap.to(threeWrapRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
        });
        gsap.to(fourWrapRef.current, {
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
    gsap.set(fourWrapRef.current, { opacity: 0 });

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
            {/* <img
              src={"/main-top/ufo.gif"}
              alt="sface-main"
              style={{ width: "50%", minWidth: "340px" }}
            /> */}
            <video
              src={"/main-top/UFO-transparent.webm"}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "50%", minWidth: "340px" }}
            />
            <p>
              언제 어디서나 아티스트의 순간을 스트리밍 <br />
              내가 찍은 나의 최애, 즉시 프린트해 간직하세요!
            </p>
            <div className="left-store-wrap">
              <a href="/" className="abutton">
                <img src={"/google-play.png"} alt="google-play.png" />
              </a>
              <a href="/" className="abutton">
                <img src={"/app-store.png"} alt="app-store.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <SecondSection />

      <div className="main-three-content-wrap" ref={topWrapRef}>
        <div className="main-three-inner">
          <div className="main-three-first-wrap" ref={firstWrapRef}>
            <div className="main-innercontent-wrapper">
              <div className="main-three-left-wrap">
                <p className="big-text">
                  보고 싶은 <br /> 순간을 <br /> 더 가까이!
                </p>
                <p className="small-text">
                  팔로잉한 사람들의 영상으로 <br /> 아티스트를 만나보세요.
                </p>
              </div>
              <div className="main-three-right-wrap">
                <img src={"/main-top/pic-1.png"} />
              </div>
            </div>
          </div>

          <div className="main-three-two-wrap" ref={twoWrapRef}>
            <div className="main-innercontent-wrapper">
              <div className="main-three-left-wrap">
                <p className="big-text">
                  너와 내가 <br /> 발견하는 <br /> 특별한 순간들!
                </p>
                <p className="small-text">
                  다른 시각의 사진과 영상 속에서 <br /> 우리들의 이야기를
                  이어가세요.
                </p>
              </div>
              <div className="main-three-right-wrap">
                <img src={"/main-top/pic-2.png"} />
              </div>
            </div>
          </div>

          <div className="main-three-three-wrap" ref={threeWrapRef}>
            <div className="main-innercontent-wrapper">
              <div className="main-three-left-wrap">
                <p className="big-text">
                  아티스트의 <br /> 순간을 <br /> 더욱 특별하게!
                </p>
                <p className="small-text">
                  손쉽게 영상을 편집하고 <br /> 나만의 감성을 담아보세요.
                </p>
              </div>
              <div className="main-three-right-wrap">
                <img src={"/main-top/pic-3.png"} />
              </div>
            </div>
          </div>

          <div className="main-three-four-wrap" ref={fourWrapRef}>
            <div className="main-innercontent-wrapper">
              <div className="main-three-left-wrap">
                <p className="big-text">
                  내가 남긴 <br /> 나의 별, <br /> 나만의 우주!
                </p>
                <p className="small-text">
                  내가 남긴 순간들로 레벨업하고, <br /> 나만의 우주를 만들어
                  보세요!
                </p>
              </div>
              <div className="main-three-right-wrap">
                <img src={"/main-top/pic-4.png"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-gradient-box">
        <div className="inner-bottom-gradient-box">
          <img src={"/bottom-logo-sface.png"} alt="bottom-logo-image" />
          <p className="small-text">혼자가 아닌 모두와 함께 </p>
          <h1>아티스트의 찬란한 순간을 공유, 스페이스</h1>
          <div className="bottom-store-wrap">
            <a href="/" className="abutton">
              <img src={"/google-play.png"} alt="google-play.png" />
            </a>
            <a href="/" className="abutton">
              <img src={"/app-store.png"} alt="app-store.png" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
