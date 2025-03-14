import "./SecondSection.css";

export default function SecondSection() {
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
        <h4 className="second-inner-text">
          하지만, 우리가 기록하는 순간들은 사라지지 않아요. <br />
          누군가의 기억 속에서, 그리고 이곳에서,
          <br /> 아티스트의 이야기는 계속 이어져요.
        </h4>
      </div>
    </section>
  );
}
