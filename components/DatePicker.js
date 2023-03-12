import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function DatePickerComponent(props) {
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = date => {
    setStartDate(date);
    props.onDateChange(date);
  };

  return (
    <DatePicker selected={startDate} onChange={handleDateChange} />
  );
}

export default DatePickerComponent;
