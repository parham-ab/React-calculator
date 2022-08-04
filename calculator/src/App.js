import { useState } from "react";

const App = () => {
  const [display, setDisplay] = useState(0);
  const [activities, setActivities] = useState([]);
  // handle states values
  const handleClick = (val) => {
    setDisplay(val);
    setActivities([...activities, val]);
  };
  // calculate function
  const calculateHandle = () => {
    const result = activities
      // convert array to string
      .join("")
      // group numbers together & separate them from operators
      .split(/(\D)/g)
      // if data was number inside quotation convert it to number
      .map((item) => (item.match(/\d/g) ? parseInt(item, 0) : item))
      // calculate based on entered operator
      .reduce((acc, value, index, array) => {
        switch (value) {
          case "+":
            return (acc += array[index + 1]);
          case "-":
            return (acc -= array[index + 1]);
          case "x":
            return (acc *= array[index + 1]);
          case "÷":
            return (acc /= array[index + 1]);
          default:
            return acc;
        }
      });
    // display results
    setDisplay(result);
    setActivities("");
  };
  // clear all (AC button)
  const AllClear = () => {
    setActivities("");
    setDisplay(0);
  };
  // clear last value (CE button)
  const ClearHandle = () => {
    let allActivities = activities.join("");

    if (allActivities.length === 1 && display != 0) {
      setDisplay(0);
      setActivities([]);
    } else if (allActivities.length > 1) {
      let newVal = allActivities.substring(0, allActivities.length - 1);
      setActivities(newVal);
      setDisplay(newVal.slice(-1));
    }
  };

  return (
    <div className="container">
      {/* last state */}
      <h2>{display}</h2>

      <span>{activities}</span>
      {/* keyboard */}
      <section>
        {/* numbers */}
        <div className="keyboard">
          <div>
            <section className="buttons">
              <div>
                <button onClick={() => handleClick(7)}>7</button>
                <button onClick={() => handleClick(8)}>8</button>
                <button onClick={() => handleClick(9)}>9</button>
              </div>

              <div>
                <button onClick={() => handleClick(4)}>4</button>
                <button onClick={() => handleClick(5)}>5</button>
                <button onClick={() => handleClick(6)}>6</button>
              </div>

              <div>
                <button onClick={() => handleClick(1)}>1</button>
                <button onClick={() => handleClick(2)}>2</button>
                <button onClick={() => handleClick(3)}>3</button>
              </div>

              <button style={{ width: "100%" }} onClick={() => handleClick(0)}>
                0
              </button>
            </section>
          </div>
          {/* operators */}
          <div className="operators">
            <section>
              <button onClick={() => handleClick("÷")}>÷</button>
              <button onClick={() => handleClick("x")}>x</button>
              <button onClick={() => handleClick("-")}>-</button>
              <button onClick={() => handleClick("+")}>+</button>
              <button onClick={() => AllClear()}>AC</button>
              <button onClick={ClearHandle}>C</button>
              <button onClick={() => calculateHandle()}>=</button>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
