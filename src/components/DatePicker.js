import React, { useState } from "react";
import "./DatePicker";

function DatePick() {
  const [date, setDate] = useState();

  console.log("Date", date);
  return (
    <div>
      <div>
        <label>Select Date </label>s
      </div>
      <input type="date" onChange={(e) => setDate(e.target.value)} />
    </div>
  );
}

export default DatePick;
