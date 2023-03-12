import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { registerLocale } from 'react-datepicker';
import { sv } from 'date-fns/locale';
import { FaCalendarAlt } from 'react-icons/fa'

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

            <div className="relative">
                <DatePicker

                    locale="sv"
                    selected={startDate}
                    onChange={handleStartChange}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block  sm:text-sm border rounded-md pl-10 pr-3 py-2 text-gray-900 leading-5 bg-white"
                    placeholderText="Välj startdatum"
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaCalendarAlt />

                </span>
            </div>
            <div className="relative">
                <DatePicker

                    locale="sv"
                    selected={endDate}
                    onChange={handleEndChange}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    className="border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 block  sm:text-sm border rounded-md pl-10 pr-3 py-2 text-gray-900 leading-5 bg-white"
                    placeholderText="Slut datum"
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaCalendarAlt />

                </span>
            </div>
        </>
    );
}

export default DateRangePicker;
