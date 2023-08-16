import "/src/assets/style/Mycomponent.css";
import { useRef, useState } from "react";
import audio1 from "../src/assets/audio/NeeckDeep.mp4";
import audio2 from "../src/assets/audio/NDX.mp4";
import Typewriter from "typewriter-effect";

function Mycomponent() {
  const audioRef1 = useRef(null);
  const audioRef2 = useRef(null);
  const [count, setCount] = useState(0);

  const playAudio1 = () => {
    audioRef1.current.play().catch(() => {});
  };

  const playAudio2 = () => {
    audioRef2.current.play().catch(() => {});
  };

  return (
    <>
      <section id="Header">
        <h1>
          <Typewriter
            options={{
              strings: ["Hello", "Everyone"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className="btn">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <p className="title-count">Click on the Count</p>
        <div className="btn-audio">
          <button onClick={playAudio1}>Neck Deep</button>
          <button onClick={playAudio2}>NDX</button>
        </div>
        <p className="title-music">Please Choose Music</p>
        <p>&#9400; IRZAN</p>
      </section>
      <audio ref={audioRef1}>
        <source src={audio1} type="audio/mp4" />
        Your browser does not support the audio element.
      </audio>
      <audio ref={audioRef2}>
        <source src={audio2} type="audio/mp4" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}

export default Mycomponent;
