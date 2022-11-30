import React from "react";
import "./App.css";
import TabBar from "./components/TabBar";
import Tab from "./components/Tab";
import FlightSearch from "./components/FlightSearch";
import Analysis from "./components/Analysis";
import DelayPrediction from "./components/MLComponents/DelayPrediction";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "Search",
    };
  }

  setSelected = (tab) => {
    this.setState({ selected: tab });
  };

  render() {
    return (
      <div className="Apptabs">
        <TabBar
          tabs={["Search", "Analysis", "Predict Delay", "FlightMap"]}
          selected={this.state.selected}
          setSelected={this.setSelected}
        >
          <Tab isSelected={this.state.selected === "Search"}>
            <FlightSearch></FlightSearch>
          </Tab>

          <Tab isSelected={this.state.selected === "Analysis"}>
            {/* <Analysis/> */}
          </Tab>

          <Tab isSelected={this.state.selected === "Predict Delay"}>
            <DelayPrediction/>
          </Tab>

          <Tab isSelected={this.state.selected === "FlightMap"}></Tab>
        </TabBar>
      </div>
    );
  }
}

export default App;
