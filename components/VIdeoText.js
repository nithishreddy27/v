export default function TextMaskVideo({ videoSrc, text, tracking }) {
  return (
    <div className="video-section h-half-screen  my-10">
      <video src={videoSrc} autoPlay loop muted />
      <div className="video-copy">
        <h1
          className={`${
            tracking == 10 ? "tracking-widest" : "tracking-normal"
          }`}
        >
          {text}
        </h1>
      </div>
    </div>
  );
}
