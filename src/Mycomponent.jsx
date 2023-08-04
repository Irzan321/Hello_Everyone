import "/src/assets/style/Mycomponent.css";
import { useEffect, useRef, useState } from "react";
import audio from "../public/Sweet.mp3";
import Typewriter from "typewriter-effect";

function Mycomponent() {
  const audioRef = useRef(null);
  const [count, setCount] = useState(0);

  const playAudio = () => {
    audioRef.current.play().catch(() => {});
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
        <p>&#9400; IRZAN</p>
      </section>
      <audio ref={audioRef} autoPlay>
        <source src={audio} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}

export default Mycomponent;
