import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <h1 className="title">Puzzle Game</h1>
      <div className="container">
        <ul className="list">
          <li className="item">1</li>
          <li className="item">2</li>
          <li className="item">3</li>
          <li className="item">4</li>
          <li className="item">5</li>
          <li className="item">6</li>
          <li className="item">7</li>
          <li className="item">8</li>
          <li className="item">9</li>
          <li className="item">10</li>
          <li className="item">11</li>
          <li className="item">12</li>
          <li className="item">13</li>
          <li className="item">14</li>
          <li className="item">15</li>
          <li className="item empty"></li>
        </ul>
      </div>
      <button className="btn">New Game</button>
    </div>
  );
};

export default App;
