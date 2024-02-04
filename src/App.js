import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [lightPosition, setLightPosition] = useState({ top: 0, left: 0 });

  const handleMouseMove = (event) => {
    setLightPosition({
      top: event.clientY - 50,
      left: event.clientX - 50,
    });
  };

  // function handleTouchMove(event) {
  //   event.preventDefault(); // Prevent scrolling
  //   const touch = event.targetTouches[0];
  //   handleEvent(touch);
  // }

  function handleEvent(event) {
    const x = event.pageX || event.clientX;
    const y = event.pageY || event.clientY;
    document.getElementById(
      "light"
    ).style.transform = `translate(${x}px, ${y}px)`;
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    // document.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      //document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div class="container">
      <div
        id="light"
        style={{
          position: "absolute",
          top: lightPosition.top,
          left: lightPosition.left,
        }}
      ></div>
      <div class="content">
        <div>
          Harsh Karanwal, I have known you for seven years now, dated you for
          2.5 years, liked you for 6 years and loved you for what feels like
          13.8 billion years(that is when our universe started). I have always
          felt that something was missing in my life, and I used to wonder what
          it could be. And when I saw you for the first time across that
          classroom, I knew that my wait was over. You bring the best out in me,
          you make me try new things that I thought I would never enjoy. You
          have made me laugh, you have made me cry, but most importantly,you
          have made me happy, and you helped me grow into a person, I never
          thought I would become. I have so much to learn from you, and I adore
          everything about you. You make me more complete. Over these years, you
          have become an inseparable part of me, and now, I can't remember a
          time when we weren't together.
        </div>{" "}
        <br></br>
        <div>
          I enjoy every moment with you. You participate in everything I like.
          You listen to all my stories (and forget it soon after),you understand
          me, and you play all the games I like (like the fact game or
          telepathy).
        </div>{" "}
        <br></br>
        <div>
          Which reminds me of a fact. You know it is said that there is a 100%
          chance that the water we are drinking right now has been through a
          dinosaur's body, and this put me in a deep thought, we have both come
          from the same origin and we are destined to go back together to that
          same origin. We can be galaxies apart, but I will still find my way to
          you, because there is a 100% chance that the atoms that make us up
          were together in the previous years since our universe started. I
          probably should have written it first somewhere else, because I may
          not be able to convey myself here, but what I really wanna say is,
          that , we can be kilometers apart or worlds apart, or maybe galaxies
          apart, but my soul would find you,like you are finding this message in
          darkness, because there is a 100% chance that we have been together,
          in some life before. And while we may not remember what it was like, I
          know that it was beautiful, filled with love and laughter and care.
          And I want to spend this lifetime with you, and make this one so
          memorable that nothing could do us apart. I wish to be with you in all
          parts of your life, in all lows and all highs. You know when you were
          in Delhi and we hugged, we exchanged something amongst us. It could be
          energy or atoms or our essence, but it was something. So, I know that
          a part of you, a teeny part of you, is always gonna reside in me. I
          couldn't stop imagining when you very casually said that, "hey, let's
          get married". And while there is time to that, I want to tell you
          something.
        </div>{" "}
        <br></br>
        <div>
          1. I vow to you remember you in all lifetimes we are gonna live ahead.
          So even if we are apart, I will always find you.
        </div>
        <div>
          2. I vow to be the best partner you will have, and I will always be
          there for you, no matter what happens.{" "}
        </div>
        <div>
          3. I vow to trust you, respect you and take care of you like you do
          for me.
        </div>
        <div>4. </div>
        <div>5. </div>
        <div>6.</div>
        <div>
          7. I vow to always love you, and never be hesitant of saying it again.
        </div>
        <br></br>
        <div>
          I left those three, and I wish to write them together. I widh I could
          do more, but, I will do everything I can when you are here. We had
          amzing 7 years, and I want to have amazing next 70 years with you. I
          want to say more, but it will never end, so I will finish up now.
        </div>{" "}
        <br></br>
        <div>
          Happy birthday my sweetums! You were worried about not doing enough on
          my birthday, but trust me, every moment with you I spend is a gift, an
          irreplacable gift. You mean so much to me, and I may not be able to
          express it to you always, but I really love you, and I only want to
          spend my future with you, and do every crazy thing. I want to make
          mistakes with you, I want to laugh with you, I want to grow with you,
          I want to have kids with you, and I want everything with you.
        </div>
      </div>
    </div>
  );
}

export default App;
