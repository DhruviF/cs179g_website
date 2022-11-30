import React from "react";
import "./App.css";
import TabBar from "./components/TabBar";
import Tab from "./components/Tab";
import FlightSearch from "./components/FlightSearch";
import { timingSafeEqual } from "crypto";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "Search",
      returnedData:"bye",
      airline: "",
      originCode: "",
      destCode: "",
      Month:0,
      dayofMonth:0,
      year:0
    };
  }

  setSelected = (tab) => {
    this.setState({ selected: tab });
  };
  render() {
    const setInput = (e) =>{
      const {name, value} = e.target
      console.log(this.state.inputValues)
      if (name === "Month"){
        this.setState({Month: parseInt(value)})
        console.log(this.state.Month.valueOf())
      }
      else if(name === 'dayofMonth'){
        this.setState({dayofMonth: parseInt(value)})
        console.log(this.state.dayofMonth.valueOf())
      }
      else if(name === 'year'){
        this.setState({year: parseInt(value)})
        console.log(this.state.year.valueOf())
      }
      else if(name === 'airline'){
        this.setState({airline: value})
        console.log(this.state.airline.valueOf())
      }
      else if(name === 'destCode'){
        this.setState({destCode: value})
        console.log(this.state.destCode.valueOf())
      }
      else if(name === 'originCode'){
        this.setState({originCode: value})
        console.log(this.state.originCode.valueOf())
      }

    }
    const getData = async () =>{
      const newData = await fetch('/api', {
        method: 'POST',
        headers:{
          'content-type': 'application/json',
          'Accept':'application/json'
        },
        body: JSON.stringify({
          month: this.state.Month.valueOf()
        })
      })
      .then(res => res.json())
      console.log(newData);
      return newData
    }
    return (
      <div className="Apptabs">
        <TabBar
          tabs={["Search", "Analysis", "MLPrediction", "FlightMap"]}
          selected={this.state.selected}
          setSelected={this.setSelected}
        >
          <Tab isSelected={this.state.selected === "Search"}>
            <input 
                  name="airline" 
                  placeholder ="airline" 
                  onChange={setInput}
                  >
                  
            </input>
            <input 
                  name="originCode" 
                  placeholder ="originCode" 
                  onChange={setInput}
                  >
            </input>
            <input 
                  name="destCode" 
                  placeholder ="destCode" 
                  onChange={setInput}
                  >

            </input>
            <input 
                  type="number" 
                  name="Month" 
                  placeholder ="Month" 
                  onChange={setInput}
                  >
            </input>
            <input 
                  type="number" 
                  name="dayofMonth" 
                  placeholder ="dayofMonth" 
                  onChange={setInput}
                  ></input>
            <input 
                  type="number" 
                  name="year" 
                  placeholder ="year" 
                  onChange={setInput}
                  >
            </input>

          </Tab>

          <Tab isSelected={this.state.selected === "Analysis"}></Tab>

          <Tab isSelected={this.state.selected === "MLPrediction"}></Tab>

          <Tab isSelected={this.state.selected === "FlightMap"}></Tab>
        </TabBar>

        <button onClick={() => this.setState({returnedData: getData('/api')})}>test</button>
        <p>airline: {this.state.returnedData.airline}</p>
        <p>originCode: {this.state.returnedData.originCode}</p>
        <p>destCode: {this.state.returnedData.destCode}</p>
        <p>Month: {this.state.returnedData.Month}</p>
        <p>dayofMonth: {this.state.returnedData.dayofMonth}</p>
        <p>year: {this.state.returnedData.year}</p>
        
      </div>
    );
  }
}

export default App;
