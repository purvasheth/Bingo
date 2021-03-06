import React from "react";
class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Game: [
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""],
        ["", "", "", "", ""]
      ]
    };

  }
  handleChange = (event) => {
    let { name, value } = event.target;

    console.log(name, value);
    name = name.split(" ");
    const i = parseInt(name[0], 10);
    const j = parseInt(name[1], 10);
    console.log(i, j);

    const newGame = this.state.Game;
    newGame[i][j] = value === "" ? "" : parseInt(value, 10);
    this.setState({ Game: newGame });
    console.log(newGame);
  };
  //Game.map(value => value.map(number => number * 2))

  render() {
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
            {this.state.Game.map((value, i) => (
              <tr key={i}>
                {value.map((element, j) => (
                  <td key={i + " " + j}>
                    <input
                      type="text"
                      value={element}
                      name={i + " " + j}
                      pattern="^$|([1-9]|1[0-9]|2[0-5])$"
                      onChange={(event => (this.handleChange(event)))}
                      style={{
                        width: "2rem",
                        height: "2rem",
                        fontSize: "1.3rem",
                        textAlign: "center",
                        backgroundColor: "lightblue",
                        color: "black"
                      }}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p>{this.state.Game}</p>
      </div>
    );
  }
}

export default Grid;
