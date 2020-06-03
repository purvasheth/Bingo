import React, { useState } from "react";
import Grid from "./Components/Grid";
import GridContext from "./GridContext";
import BooleanContext from "./BooleanContext";
import Buttons from "./Components/Buttons";




export default function App() {
  let start = 1;
  let array = Array(25 - start + 1)
    .fill()
    .map(() => start++);

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let new_array = [];
  while (array.length) new_array.push(array.splice(0, 5));

  const game = useState(new_array);
  const bool = useState([
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true],
    [true, true, true, true, true]
  ])



  return (
    <BooleanContext.Provider value={bool}>
      <GridContext.Provider value={game}>
        <div className="App">
          <br />
          <br />
          <Grid />
          <Buttons />
        </div>
      </GridContext.Provider>
    </BooleanContext.Provider>
  );
}
