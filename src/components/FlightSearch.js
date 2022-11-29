import React, { useState } from "react";
import "./FlightSearch.css";
import Select from "react-select";
import "./DatePicker";
import DatePick from "./DatePicker";

const airlineNames = [
  { airline: "united", label: "UNITED" },
  { airline: "test1", label: "test1" },
  { airline: "test2", label: "test2" },
];

const departureLocation = [
  { airline: "united", label: "UNITED" },
  { airline: "test1", label: "test1" },
  { airline: "test2", label: "test2" },
];

const arrivalLocation = [
  { airline: "united", label: "UNITED" },
  { airline: "test1", label: "test1" },
  { airline: "test2", label: "test2" },
];

class FlightSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      airline: "",
      originCityName: "",
      destCityName: "",
      mmddyyyy: "",
      depDel: false,
      arrDel: false,
    };
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    //this would be the call to the back end i guess
    event.preventDefault();
  }

  render() {
    return (
      <div className="SearchBox">
        <form onSubmit={this.handleSubmit}>
          <div className="SurveyFont">
            <label>Select Airline</label>

            <Select
              isClearable={true}
              isSearchable={true}
              options={airlineNames}
            ></Select>
            <label>Select Departure Location</label>
            <Select
              isClearable={true}
              isSearchable={true}
              options={departureLocation}
            ></Select>
            <label>Select Arrival Location</label>
            <Select
              isClearable={true}
              isSearchable={true}
              options={arrivalLocation}
            ></Select>
            <div className="DateBorder">
              <DatePick></DatePick>
            </div>
            <div>
              <label>Delayed at Departure</label>
              <input type="checkbox"></input>
            </div>
            <div>
              <label>Delayed on Arrival</label>
              <input type="checkbox"></input>
            </div>
            <input
              className="SubmitButton"
              type="submit"
              value="Search Flights"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default FlightSearch;
