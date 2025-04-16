import "./Home.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useHeaderStateStore } from "../../store/useHeaderStore";
import SecondSection from "../Main/SecondSection";
import Lottie from "lottie-react";
import HeartLottie from '../../../public/main/heart.json'
import StarLottie from '../../../public/main/star.json'
import FlowerLottie from '../../../public/main/flower.json'
import CatLottie from '../../../public/main/cat.json'

// 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { setIsHeaderState, isResponsive } = useHeaderStateStore();

  const topWrapRef = useRef(null);
  const firstWrapRef = useRef(null);
  const onePicImgRef = useRef(null)
  const twoPicImgRef = useRef(null)
  const threePicImgRef = useRef(null)

  const twoWrapRef = useRef(null);
  const firstCommentRef = useRef(null)
  const secondCommentRef = useRef(null)
  const threeCommentRef = useRef(null)
  const twoImgRef = useRef(null)

  const threeWrapRef = useRef(null);
  const threeImgRef = useRef(null)

  const fourWrapRef = useRef(null);
  const fourImgRef = useRef(null)

  useEffect(() => {
    // 스크롤 구간을 명확하게 구분
    // 구간 1: 첫 번째 섹션 표시 (시작 ~ "top 10%")
    // 구간 2: 두 번째 섹션 표시 ("top 10%" ~ "center 20%")
    // 구간 3: 세 번째 섹션 표시 ("center 20%" ~ 끝)
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    ScrollTrigger.create({
      trigger: topWrapRef.current,
      start: "top top",
      end: "100% 100%",
      // markers: true,
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

    gsap.set(onePicImgRef.current, {y: 0})
    gsap.set(twoPicImgRef.current, {y: 800})
    gsap.set(threePicImgRef.current, {y: 800})
    // 첫 번째 섹션: top 10% 지점에서 폰 이미지 변경
    ScrollTrigger.create({
      trigger: topWrapRef.current,
      start: "5% top",
      onEnter: () => {
        gsap.to(twoPicImgRef.current, {
          y: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
      },
      onLeaveBack: () => {
        gsap.to(twoPicImgRef.current, {
          y: 800,
          duration: 0.5,
          ease: "power2.inOut",
        });
      },
      // markers: true
    });

    // 첫 번째 섹션: top 20% 지점에서 폰 이미지 변경
    ScrollTrigger.create({
      trigger: topWrapRef.current,
      start: "12% top",
      onEnter: () => {
        gsap.to(threePicImgRef.current, {
          y: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
      },
      onLeaveBack: () => {
        gsap.to(threePicImgRef.current, {
          y: 800,
          duration: 0.5,
          ease: "power2.inOut",
        });
      },
      // markers: true
    });

    // 두 번째 섹션: top 30% 아래에서 위로 올라옴
    ScrollTrigger.create({
      trigger: topWrapRef.current,
      start: "20% top",
      onEnter: () => {
        gsap.to(firstWrapRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
        gsap.to(twoWrapRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
        });
      },
      onLeaveBack: () => {
        gsap.to(twoWrapRef.current, {
          y: 1000,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
        gsap.to(firstWrapRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
        });
      },
      // markers: true
    });

    gsap.set(firstCommentRef.current, {scale: 0})
    gsap.set(secondCommentRef.current, {scale: 0})
    gsap.set(threeCommentRef.current, {scale: 0})
    
    gsap.set(twoImgRef.current, {y:0})
    // 두 번째 섹션: top 40% 첫번째 댓글 보여줌
    ScrollTrigger.create({
      trigger: topWrapRef.current,
      start: "25% top",
      onEnter: () => {
        gsap.to(firstCommentRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "back.out(3)",  // 튕기는 효과를 위한 이징 함수
          yoyo: true,  // 원래 상태로 돌아오기
          repeat: 0  // 한 번만 실행
        });
      },
      onLeaveBack: () => {
        gsap.to(firstCommentRef.current, {
          scale: 0,
          duration: 0.3,
        });
      },
    });

    // 두 번째 섹션: top 50% 두번째 댓글 보여줌
    ScrollTrigger.create({
      trigger: topWrapRef.current,
      start: "32% top",
      onEnter: () => {
        gsap.to(secondCommentRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "back.out(3)",  // 튕기는 효과를 위한 이징 함수
          yoyo: true,  // 원래 상태로 돌아오기
          repeat: 0  // 한 번만 실행
        });
        gsap.to(twoImgRef.current, {
          y: isResponsive === 'mobile' 
          ? -340 
          : isResponsive === 'tablet'
          ? -430
          : -500,
          duration: 1,
          ease: "power2.inOut"
        })
      },
      onLeaveBack: () => {
        gsap.to(secondCommentRef.current, {
          scale: 0,
          duration: 0.3,
        });
        gsap.to(twoImgRef.current, {
          y: 0,
          duration: 1,
          ease: "power2.inOut"
        })
      },
    });

    // 두 번째 섹션: top 60% 세번째 댓글 보여줌
    ScrollTrigger.create({
      trigger: topWrapRef.current,
      start: "40% top",
      onEnter: () => {
        gsap.to(threeCommentRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "back.out(3)",  // 튕기는 효과를 위한 이징 함수
          yoyo: true,  // 원래 상태로 돌아오기
          repeat: 0  // 한 번만 실행
        });
      },
      onLeaveBack: () => {
        gsap.to(threeCommentRef.current, {
          scale: 0,
          duration: 0.3,
        });
      },
    });

    gsap.set(threeImgRef.current, { scale: 0.7 });
    // 세 번째 섹션: top 70% 지점에서 나타남
    ScrollTrigger.create({
      trigger: topWrapRef.current,
      start: "50% top",
      onEnter: () => {
        gsap.to(twoWrapRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
        gsap.to(threeWrapRef.current, {
          y: 0,
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
          y: 1000,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
      },
    });
    // 세 번째 섹션: top 55% 지점에서 도구툴 커짐
     ScrollTrigger.create({
      trigger: topWrapRef.current,
      start: "60% top",
      onEnter: () => {
        gsap.to(threeImgRef.current, {
          scale: 1,
          duration: 0.5,
          ease: "back.out(3)",  // 튕기는 효과를 위한 이징 함수
          yoyo: true,  // 원래 상태로 돌아오기
          repeat: 0  // 한 번만 실행
        });
      },
      onLeaveBack: () => {
        gsap.to(threeImgRef.current, {
          scale: 0.7,
          duration: 0.3,
        });
      },
    });

    // 네 번째 섹션: top 65% 보여짐
     ScrollTrigger.create({
      trigger: topWrapRef.current,
      start: "70% top",
      onEnter: () => {
        gsap.to(threeWrapRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
        gsap.to(fourWrapRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
        });
      },
      onLeaveBack: () => {
        gsap.to(fourWrapRef.current, {
          y: 1000,
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
    });

    gsap.set(fourImgRef.current, { scale: 0.835 });
    // 세 번째 섹션: top 75% 지점에서 프로플 커짐
     ScrollTrigger.create({
      trigger: topWrapRef.current,
      start: "80% top",
      onEnter: () => {
        gsap.to(fourImgRef.current, {
          scale: 1,
          duration: 0.5,
          ease: "back.out(3)",  // 튕기는 효과를 위한 이징 함수
          yoyo: true,  // 원래 상태로 돌아오기
          repeat: 0  // 한 번만 실행
        });
      },
      onLeaveBack: () => {
        gsap.to(fourImgRef.current, {
          scale: 0.835,
          duration: 0.5,
        });
      },
    });


    // 초기 상태 설정
    gsap.set(firstWrapRef.current, { opacity: 1 });
    gsap.set(twoWrapRef.current, { y: 1000, opacity: 1 });
    gsap.set(threeWrapRef.current, { opacity: 0 });
    gsap.set(fourWrapRef.current, { opacity: 0 });

    // 컴포넌트 언마운트 시 ScrollTrigger 정리
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isResponsive]);

  return (
    <section className="main-section">
      <SecondSection />
      <div className="main-three-content-wrap" ref={topWrapRef}>
        <div className="main-three-inner">
          <div className="main-three-first-wrap" ref={firstWrapRef}>
            <div className="main-innercontent-wrapper">
              <div className="main-three-left-wrap">
                <p className="big-text">
                  내 아티스트
                  <br />
                  더 많이!
                  {isResponsive !== 'mobile' && (
                    <br />
                  )}
                  더 가까이!
                </p>
              </div>
              {isResponsive === 'mobile' && (
                <div className="main-three-right-wrap">
                  <p className="small-text">
                    짧고 강렬한 영상 속, 생생한 아티스트의 순간들!
                    <br />
                    팬들과 함께 감상하고 공유하세요.
                  </p>
                  <div className="image-box">
                    <div className="icons">
                      <img src="/main/main_three_first_icon_1.png" alt="main_three_first_icon_1" />
                      <p>숏폼 감상</p>
                    </div>
                    <div className="icons">
                      <img src="/main/main_three_first_icon_2.png" alt="main_three_first_icon_2" />
                      <p>커뮤니티</p>
                    </div>
                    <div className="icons">
                      <img src="/main/main_three_first_icon_3.png" alt="main_three_first_icon_3" />
                      <p>공유</p>
                    </div>
                  </div>
                </div>
              )}
              <div className="main-three-center-wrap">
                <Lottie className="main-fir-lottie" animationData={HeartLottie} loop={true} />
                <div className="main-three-frame">
                  <img className="frame-img" src="/main/main_three_first_frame.png" alt="" />
                  <img ref={onePicImgRef} src={"/main/main_three_first_pic_1.png"} alt='main_three_first_pic_1' />
                  <img ref={twoPicImgRef} src={"/main/main_three_first_pic_2.png"} alt='main_three_first_pic_2' />
                  <img ref={threePicImgRef} src={"/main/main_three_first_pic_3.png"} alt='main_three_first_pic_3' />
                </div>
              </div>
              {isResponsive !== 'mobile' && (
                <div className="main-three-right-wrap">
                  <p className="small-text">
                    짧고 강렬한 영상 속,
                    <br />
                    생생한 아티스트의 순간들!
                    <br />
                    팬들과 함께 감상하고 공유하세요.
                  </p>
                  <div className="image-box">
                    <div className="icons">
                      <img src="/main/main_three_first_icon_1.png" alt="main_three_first_icon_1" />
                      <p>숏폼 감상</p>
                    </div>
                    <div className="icons">
                      <img src="/main/main_three_first_icon_2.png" alt="main_three_first_icon_2" />
                      <p>커뮤니티</p>
                    </div>
                    <div className="icons">
                      <img src="/main/main_three_first_icon_3.png" alt="main_three_first_icon_3" />
                      <p>공유</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/*  */}
          <div className="main-three-two-wrap" ref={twoWrapRef}>
            <div className="main-innercontent-wrapper">
              <div className="main-three-left-wrap">
                <p className="big-text">
                  너와 내가&nbsp;
                  {isResponsive !== 'mobile' && (
                    <br />
                  )}
                  발견하는
                  <br />
                  특별한 순간들!
                </p>
                <Lottie className="main-cat-lottie" animationData={CatLottie} loop={true} />
              </div>
              {isResponsive === 'mobile' && (
                <div className="main-three-right-wrap">
                  <p className="small-text">
                    새로운 시선 속에서 마주한 아티스트의 순간들
                    <br />
                    그리고 그 속에서 펼쳐지는 우리만의 이야기!
                  </p>
                  <div className="image-box">
                    <div className="icons">
                      <img src="/main/main_three_second_icon_1.png" alt="main_three_second_icon_1" />
                      <p>순간 포착</p>
                    </div>
                    <div className="icons">
                      <img src="/main/main_three_second_icon_2.png" alt="main_three_second_icon_2" />
                      <p>댓글</p>
                    </div>
                  </div>
                </div>
              )}
              <div className="main-three-center-wrap">
                <div ref={firstCommentRef} className="comment-box main-second-comment-first">
                  <p className="comment-name">김*연</p>
                  <p className="comment-content">영상이 안 끝나요 😍😍</p>
                </div>
                <div ref={secondCommentRef} className="comment-box main-second-comment-second">
                  <p className="comment-name">임*현</p>
                  <p className="comment-content">
                    너무 이쁘네요!! 😍
                    <br />
                    그냥 다른 할 말이 안 떠오름
                  </p>
                </div>
                <div ref={threeCommentRef} className="comment-box main-second-comment-three">
                  <p className="comment-name">나*주</p>
                  <p className="comment-content">
                    하루만 니곁에 
                    <br />
                    티라미수가 되고싶어 ...🍰
                  </p>
                </div>
                <div className="main-three-frame">
                  <img className="second-frame-img" src="/main/main_three_second_frame.png" alt="" />
                  <img className="second-img" ref={twoImgRef} src={"/main/main_three_second.png"} alt='main_three_first_pic_1' />
                </div>
              </div>
              {isResponsive !== 'mobile' && (
                <div className="main-three-right-wrap">
                  <p className="small-text">
                    새로운 시선 속에서 마주한
                    <br />
                    아티스트의 순간들
                    <br />
                    그리고 그 속에서 펼쳐지는
                    <br />
                    우리만의 이야기!
                  </p>
                  <div className="image-box">
                    <div className="icons">
                      <img src="/main/main_three_second_icon_1.png" alt="main_three_second_icon_1" />
                      <p>순간 포착</p>
                    </div>
                    <div className="icons">
                      <img src="/main/main_three_second_icon_2.png" alt="main_three_second_icon_2" />
                      <p>댓글</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/*  */}
          <div className="main-three-three-wrap" ref={threeWrapRef}>
            <div className="main-innercontent-wrapper">
              <div className="main-three-left-wrap">
                <p className="big-text">
                  쉽고&nbsp;
                  {isResponsive !== 'mobile' && (
                    <br /> 
                  )}
                  감각적인 편집
                  <br /> 
                  나만의&nbsp;
                  {isResponsive !== 'mobile' && (
                    <br /> 
                  )}
                  스타일로!
                </p>
              </div>
              {isResponsive === 'mobile' && (
                <div className="main-three-right-wrap">
                  <p className="small-text">
                    감성을 더하는 손쉬운 편집으로 나만의 색을 담아보세요.
                    <br />
                    나만의 영상, 나만의 이야기, 그리고 나만의 우주까지!
                  </p>
                  <div className="image-box">
                    <div className="icons">
                      <img src="/main/main_three_three_icon_1.png" alt="main_three_three_icon_1" />
                      <p>필름</p>
                    </div>
                    <div className="icons">
                      <img src="/main/main_three_three_icon_2.png" alt="main_three_three_icon_2" />
                      <p>음악 삽입</p>
                    </div>
                    <div className="icons">
                      <img src="/main/main_three_three_icon_3.png" alt="main_three_three_icon_3" />
                      <p>편집</p>
                    </div>
                    <div className="icons">
                      <img src="/main/main_three_three_icon_4.png" alt="main_three_three_icon_4" />
                      <p>효과</p>
                    </div>
                  </div>
                </div>
              )}
              <div className="main-three-center-wrap">
                <Lottie className="main-star-1-lottie" animationData={StarLottie} loop={true} />
                <Lottie className="main-star-2-lottie" animationData={StarLottie} loop={true} />
                <div className="main-three-frame three-frame">
                  <img className="three-frame-img" src="/main/main_three_three_frame.png" alt="" />
                </div>
                
                <Lottie className="main-flower-lottie" animationData={FlowerLottie} loop={true} />
                <img className="three-img" ref={threeImgRef} src={"/main/main_three_three_img.png"} alt='main_three_three_img' />
              </div>
              {isResponsive !== 'mobile' && (
                <div className="main-three-right-wrap">
                  <p className="small-text">
                    감성을 더하는 손쉬운 편집으로
                    <br />
                    나만의 색을 담아보세요.
                    <br />
                    나만의 영상, 나만의 이야기,
                    <br />
                    그리고 나만의 우주까지!
                  </p>
                  <div className="image-box">
                    <div className="icons">
                      <img src="/main/main_three_three_icon_1.png" alt="main_three_three_icon_1" />
                      <p>필름</p>
                    </div>
                    <div className="icons">
                      <img src="/main/main_three_three_icon_2.png" alt="main_three_three_icon_2" />
                      <p>음악 삽입</p>
                    </div>
                    <div className="icons">
                      <img src="/main/main_three_three_icon_3.png" alt="main_three_three_icon_3" />
                      <p>편집</p>
                    </div>
                    <div className="icons">
                      <img src="/main/main_three_three_icon_4.png" alt="main_three_three_icon_4" />
                      <p>효과</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="main-three-four-wrap" ref={fourWrapRef}>
            <div className="main-innercontent-wrapper">
              <div className="main-three-left-wrap">
                <p className="big-text">
                  내가 남긴&nbsp;
                  {isResponsive !== 'mobile' && (
                    <br /> 
                  )}
                  나의 별, 
                  <br /> 
                  나만의 우주!
                </p>
              </div>
              {isResponsive === 'mobile' && (
                <div className="main-three-right-wrap">
                  <p className="small-text">
                    릴스와 게시물을 공유할수록 레벨 UP!
                    <br />
                    나만의 우주가 점점 더 풍성해지는 걸 느껴보세요.
                  </p>
                  <div className="image-box">
                    <div className="icons">
                      <img src="/main/main_three_four_icon_1.png" alt="main_three_four_icon_1" />
                      <p>Lv.01</p>
                    </div>
                    <div className="icons">
                      <img src="/main/main_three_four_icon_2.png" alt="main_three_four_icon_2" />
                      <p>Lv.02</p>
                    </div>
                    <div className="icons">
                      <img src="/main/main_three_four_icon_3.png" alt="main_three_four_icon_3" />
                      <p>Lv.03</p>
                    </div>
                  </div>
                </div>
              )}
              <div className="main-three-center-wrap">
                <div className="main-three-frame four-frame">
                  <img className="frame-img" src="/main/main_three_four_frame.png" alt="" />
                </div>
                <img className="four-img" ref={fourImgRef} src={"/main/main_three_four_img.png"} alt='main_three_four_img' />
                <img className="four-img-2" src={"/main/main_three_four_img_2.png"} alt='main_three_four_img_2' />
              </div>
              {isResponsive !== 'mobile' && (
                <div className="main-three-right-wrap">
                  <p className="small-text">
                    릴스와 게시물을
                    <br />
                    공유할수록 레벨 UP!
                    <br />
                    나만의 우주가 점점
                    <br />
                    더 풍성해지는 걸 느껴보세요.
                  </p>
                  <div className="image-box">
                    <div className="icons">
                      <img src="/main/main_three_four_icon_1.png" alt="main_three_four_icon_1" />
                      <p>Lv.01</p>
                    </div>
                    <div className="icons">
                      <img src="/main/main_three_four_icon_2.png" alt="main_three_four_icon_2" />
                      <p>Lv.02</p>
                    </div>
                    <div className="icons">
                      <img src="/main/main_three_four_icon_3.png" alt="main_three_four_icon_3" />
                      <p>Lv.03</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-gradient-box">
        <div className="inner-bottom-gradient-box">
          <img src={"/bottom-logo-sface.png"} alt="bottom-logo-image" />

          <h1>
            우리만의 우주가 펼쳐지는 곳,
            <br />
            지금 바로 스페이스로 떠나세요!
          </h1>
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
    </section>
  );
}
