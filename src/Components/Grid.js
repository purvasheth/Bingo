import React, { useContext } from "react";
import GridContext from "../GridContext"
import BooleanContext from "../BooleanContext"

const Grid = () => {
    const [game, setGame] = useContext(GridContext)
    const [bool] = useContext(BooleanContext)


    const update = (i, j, event) => {
        let newGame = [...game];
        const val = event.target.value;
        newGame[i][j] = val === "" ? "" : +val;
        setGame(newGame);
    }



    //Game.map(value => value.map(number => number * 2))


    return (
        <div>
            <table
                style={{
                    margin: "auto",
                    display: "inline-block",
                    backgroundColor: "black"
                }}
            >
                <tbody>
                    {game.map((value, i) => (
                        <tr key={i}>
                            {value.map((element, j) => (
                                <td key={i + " " + j}>
                                    <input
                                        type="text"
                                        value={element}
                                        name={i + " " + j}
                                        pattern="^$|([1-9]|1[0-9]|2[0-5])$"
                                        onChange={event => update(i, j, event)}
                                        disabled={
                                            !bool.every(function (level2) {
                                                return level2.every(function (bool) {
                                                    return bool;
                                                })
                                            })
                                        }


                                        style={{
                                            color: "#26466D",
                                            width: "2rem",
                                            height: "2rem",
                                            fontSize: "1.3rem",
                                            textAlign: "center",
                                            backgroundColor: "#B9D3EE",
                                            textDecorationColor: "black",
                                            textDecorationLine: bool[i][j] == false && "line-through"
                                        }}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default Grid;