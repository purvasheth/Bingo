import React, { useContext, useState } from "react"
import GridContext from "../GridContext"
import BooleanContext from "../BooleanContext"

const StartButton = (props) => {
    // eslint-disable-next-line 
    const [game] = useContext(GridContext)
    const [num, setNum] = useState("")
    const [start, setStart] = useState(false);
    const [bool, setBool] = useContext(BooleanContext)

    function Check() {
        let lines = 0
        //across rows
        for (let i = 0; i < 5; i++) {
            let flag = true
            for (let j = 0; j < 5; j++) {
                if (bool[i][j] === true) {
                    flag = false
                    break
                }
            }
            if (flag === true) {
                lines = lines + 1
            }
        }
        //across columns
        for (let i = 0; i < 5; i++) {
            let flag = true
            for (let j = 0; j < 5; j++) {
                if (bool[j][i] === true) {
                    flag = false
                    break
                }
            }
            if (flag === true) {
                lines = lines + 1
            }
        }
        let newBingo = [true, true, true, true, true]
        if (lines > 0) {
            for (let i = 0; i < lines; i++) {
                newBingo[i] = false
            }
        }
        props.update(newBingo)
        if (lines === 5) {
            alert("You Won!")
        }
        setNum("")

    }


    function Main() {
        //set the boolean matrix
        //check the game matrix
        if (num != "" && num < 26 && num > 0) {
            let row = 0
            let col = 0
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 5; j++) {
                    if (game[i][j] === num) {
                        row = i
                        col = j
                        break
                    }
                }
            }

            let newBool = [...bool];
            newBool[row][col] = false
            setBool(newBool)
            Check()
        }
        else {
            alert("Please enter valid number (between 1 and 25)")
        }

    }

    return (
        <div>
            {
                props.flag === 0 &&
                <div>
                    <button style={{
                        color: "white",
                        backgroundColor: "blue",
                        padding: "0.5rem",
                        width: "4rem",
                        borderRadius: "0.25rem",
                        border: "transparent"
                    }}
                        onClick={() => setStart(true)}
                    >Start</button>
                    <br />
                    <br />
                    {start == true && <div><input
                        type="text"
                        value={num}
                        name="num"
                        pattern="^$|([1-9]|1[0-9]|2[0-5])$"
                        onChange={event => setNum(event.target.value === "" ? "" : +event.target.value)}
                        style={{
                            width: "2.5rem",
                            height: "1.5rem",
                            fontSize: "1.3rem",
                            textAlign: "center",
                            color: "black",
                            margin: "0.5rem"
                        }}
                    />{" "}
                        <button
                            style={{
                                inline: "true",
                                color: "Black",
                                backgroundColor: "lightgrey",
                                padding: "0.5rem",
                                width: "4rem",
                                borderRadius: "0.25rem",
                                border: "transparent"
                            }}
                            onClick={Main}>Select</button>
                    </div>
                    }

                </div>
            }
        </div>
    )
}
export default StartButton
