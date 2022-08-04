import { useState } from "react";

const App = () => {
  const [display, setDisplay] = useState("");
  const [activities, setActivities] = useState([]);
  // handle states values
  const handleClick = (val) => {
    setDisplay(val);
    setActivities([...activities, val]);
  };
  // calculate function

  return (
    <div>
      {/* last state */}
      <h4>{display}</h4>

      <span>test</span>
      {/* keyboard */}
      <section>
        {/* numbers */}
        <section className="buttons">
          <button onClick={() => handleClick(7)}>7</button>
          <button onClick={() => handleClick(8)}>8</button>
          <button onClick={() => handleClick(9)}>9</button>

          <button onClick={() => handleClick(4)}>4</button>
          <button onClick={() => handleClick(5)}>5</button>
          <button onClick={() => handleClick(6)}>6</button>

          <button onClick={() => handleClick(3)}>3</button>
          <button onClick={() => handleClick(2)}>2</button>
          <button onClick={() => handleClick(1)}>1</button>

          <button onClick={() => handleClick(0)}>0</button>
        </section>
        {/* operators */}
        <section className="operators">
          <button onClick={() => handleClick("/")}>/</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("=")}>=</button>
        </section>
      </section>
    </div>
  );
};

export default App;
