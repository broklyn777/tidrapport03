import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { registerLocale } from 'react-datepicker';
import { sv } from 'date-fns/locale';

registerLocale('sv', sv);



function DateRangePicker(props) {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleStartChange = (date) => {
        setStartDate(date);
        props.onStartDateChange(date);
    };

    const handleEndChange = (date) => {
        setEndDate(date);
        props.onEndDateChange(date);
    };

    return (
        <>
            <DatePicker

                locale="sv"
                selected={startDate}
                onChange={handleStartChange}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Start datum"
            />
            <DatePicker

                locale="sv"
                selected={endDate}
                onChange={handleEndChange}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="Slut datum"
            />
        </>
    );
}

export default DateRangePicker;
