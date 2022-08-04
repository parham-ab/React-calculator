const App = () => {
  return (
    <div>
      <h4>test</h4>

      <span>test</span>
      {/* keyboard */}
      <section>
        {/* numbers */}
        <section className="buttons">
          <button>7</button>
          <button>8</button>
          <button>9</button>

          <button>4</button>
          <button>5</button>
          <button>6</button>

          <button>3</button>
          <button>2</button>
          <button>1</button>

          <button>0</button>
        </section>
        {/* operators */}
        <section className="operators">
          <button>/</button>
          <button>*</button>
          <button>-</button>
          <button>+</button>
          <button>=</button>
        </section>
      </section>
    </div>
  );
};

export default App;
