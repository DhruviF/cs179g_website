import React from "react";
import "./App.css";
import TabBar from "./components/TabBar";
import Tab from "./components/Tab";
import FlightSearch from "./components/FlightSearch";

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
          tabs={["Search", "Analysis", "MLPrediction", "FlightMap"]}
          selected={this.state.selected}
          setSelected={this.setSelected}
        >
          <Tab isSelected={this.state.selected === "Search"}>
            <FlightSearch></FlightSearch>
          </Tab>

          <Tab isSelected={this.state.selected === "Analysis"}></Tab>

          <Tab isSelected={this.state.selected === "MLPrediction"}></Tab>

          <Tab isSelected={this.state.selected === "FlightMap"}></Tab>
        </TabBar>
      </div>
    );
  }
}

export default App;
