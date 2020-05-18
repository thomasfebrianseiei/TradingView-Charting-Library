import * as React from "react";
import "./App.css";
import { BTCUSD } from "./components/TVChartContainer/BTCUSD.jsx";

class App extends React.Component {
  render() {
    return (
      <div className={"App"}>
        <header className={"App-header"}></header>
        <BTCUSD />
      </div>
    );
  }
}

export default App;
