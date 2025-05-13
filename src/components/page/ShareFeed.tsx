import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ShareFeed.css'

const ShareFeed = () => {
  const { feed_idx } = useParams();
  const [other, setOther] = useState(false)

  useEffect(() => {
    const userAgent = navigator.userAgent
    let device = ''
    // let isChrome = false
    // // 브라우저 판별
    // if (/chrome|crios/.test(userAgent) && !/edge|opr|ucbrowser|samsungbrowser/.test(userAgent)) {
    //     isChrome = true;
    //   }
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
        device = 'iOS';
    } else if (/Android/i.test(userAgent)) {
        device = 'Android';
    } else {
        device = 'Other';
        setOther(true)
    }

    handleDeepLink(device)
  }, []);

  // 딥링크 처리 함수
  const handleDeepLink = (device:string) => {
    console.log('device:', device)
    const deepLink = `sface://v1/share-feed/${feed_idx}`; // 앱의 URL 스킴 (실제 스킴으로 교체)
    const appStoreLink = "https://apps.apple.com/us/app/sface/id6739119853"; // iOS 앱 스토어
    const playDeepLink = `intent://sface.app/v1/share-feed/${feed_idx}#Intent;scheme=https;package=xyz.kiorobo.sface;end`; // 앱의 URL 스킴 (실제 스킴으로 교체)
    const playStoreLink = "https://play.google.com/store/apps/details?id=xyz.kiorobo.sface&hl=ko&pli=1"; // 안드로이드 플레이 스토어

    if (device === "iOS") {
      // iOS: 딥링크 시도 후 앱 스토어로 폴백
      window.location.href = deepLink;
      setTimeout(() => {
        if (document.hasFocus()) {
          window.location.href = appStoreLink;
        }
      }, 1000);
    } else if (device === "Android") {
      // 안드로이드: 딥링크 시도 후 플레이 스토어로 폴백
      window.location.href = playDeepLink;
      setTimeout(() => {
        if (document.hasFocus()) {
          window.location.href = playStoreLink;
        }
      }, 1000);
    }
  };

  return (
    <div className='share-wrap'>
        <div className="bottom-gradient-box">
        <div className="inner-bottom-gradient-box">
          <img src={"/bottom-logo-sface.png"} alt="bottom-logo-image" />

          <h1>
            우리만의 우주가 펼쳐지는 곳,
            <br />
            지금 바로 스페이스로 떠나세요!
          </h1>
          {other && (
            <div className="left-store-wrap">
                <a href="https://play.google.com/store/apps/details?id=xyz.kiorobo.sface&hl=ko&pli=1" target="_blank" className="abutton">
                <img src={"/main/main_top_google.png"} alt="google-play.png" />
                </a>
                <a href="https://apps.apple.com/us/app/sface/id6739119853" target="_blank" className="abutton">
                <img src={"/main/main_top_app.png"} alt="app-store.png" />
                </a>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};

export default ShareFeed;