import React, { useState } from "react";
import ReadyButton from "./ReadyButton"
import ClearButton from "./ClearButton"
import StartButton from "./StartButton";


const Buttons = () => {
  const [flag, setFlag] = useState(2);
  const [bingo, setBingo] = useState([true, true, true, true, true])
  const [word] = useState(['B', 'I', 'N', 'G', 'O'])

  return (
    <div>
      <h1>
        {word.map((letter, i) => (
          <span key={i} style={{ textDecorationLine: bingo[i] === false && "line-through", padding: "0.5rem" }}>{letter}</span>
        ))
        }
      </h1>
      <ClearButton update={setFlag} />
      <br />
      <br />
      <ReadyButton update={setFlag} flag={flag} />
      <StartButton flag={flag} update={setBingo} />



    </div>
  );

}

export default Buttons;
