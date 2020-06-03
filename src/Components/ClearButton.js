import React, { useContext } from "react"
import GridContext from "../GridContext"

const ClearButton = (props) => {
    // eslint-disable-next-line 
    const [game, setGame] = useContext(GridContext)


    function Clear() {
        setGame([
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""],
            ["", "", "", "", ""]
        ])
        return 1
    }

    return (
        <button style={{
            color: "Black",
            backgroundColor: "lightgrey",
            padding: "0.5rem",
            width: "4rem",
            borderRadius: "0.25rem",
            border: "transparent"
        }}
            onClick={() => { props.update(Clear()) }}>Clear</button>
    )

}

export default ClearButton;
