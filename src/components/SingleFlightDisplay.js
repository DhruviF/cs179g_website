import React from "react";
import "./SingleFlightDisplay.css";

function SingleFlightDisplay({ data }) {
  console.log(data);
  return (
    <div className="FlightDisplay">
      {data.map((value, key) => {
        return (
          <div className="card">
            <div>
              <h5 className="Line"> {value.Airline} </h5>
              <a className="Line">
                {value.Month}-{value.DayofMonth}-{value.Year}
              </a>
            </div>

            <div>
              <a className="Line Left">
                Origin:{value.Origin},{value.OriginCityName}
              </a>
              <a className="Line Right">
                Destination:{value.Dest},{value.DestCityName}
              </a>
            </div>

            <div>
              <a className="Line Left">
                Departure Time:{value.DepTime}+{value.DepDel15}
              </a>
              <a className="Line Right">
                Arrival Time:{value.ArrTime}+{value.ArrDel15}
              </a>
            </div>

            <div>
              <a className="Line Middle">Duration:{value.ActualElapsedTime}</a>
            </div>
            <a></a>
          </div>
        );
      })}
    </div>
  );
}

export default SingleFlightDisplay;
