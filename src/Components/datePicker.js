import React, { useState } from 'react';
import DatePicker from 'react-datepicker'
import './App.css';
import 'react-datepicker/dist/react-datepicker.css'
function datePicker() {
    const [selectedDate, setSelectedDate] = useState(null)
    return (
        <div className="datePicker">
            <DatePicker selected={selectedDate}
                onChange={date => setSelectedDate(date)} />
        </div>
    );
}

export default datePicker;