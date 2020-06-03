import React, { useContext } from "react"
import GridContext from "../GridContext"

const ReadyButton = (props) => {
    const [game] = useContext(GridContext)

    function Check() {
        let start = 1
        let array = Array(25 - start + 1)
            .fill()
            .map(() => start++);
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                const index = array.indexOf(game[i][j]);
                if (index > -1) {
                    array.splice(index, 1);
                }
                else {
                    return 1
                }
            }
        }
        if (array.length != 0) {
            return 1
        } else {
            return 0
        }
    }

    return (
        <div>
            <button style={{
                color: "white",
                backgroundColor: "green",
                padding: "0.5rem",
                width: "4rem",
                borderRadius: "0.25rem",
                border: "transparent"

            }} onClick={() => { props.update(Check()) }}>Ready</button>
            {
                props.flag === 2 ?
                    <p style={{ display: "none" }}></p> :
                    props.flag == 0 ? <p>Ready!</p> :
                        <p>Input all numbers from 1-25 and then click Ready</p>
            } {" "}
        </div >
    )

}

export default ReadyButton;
