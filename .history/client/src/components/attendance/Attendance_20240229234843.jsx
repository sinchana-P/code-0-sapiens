import React from 'react'
import dayjs from 'dayjs';
import { Form, Select, Checkbox, DatePicker, TimePicker} from 'antd';


import './Attendance.css'

const Attendance = () => {

    const onChangeDate = (date, dateString) => {
        console.log(dateString);
    };

    const onChangeTime = (time, timeString) => {
        console.log(timeString);
    };

  return (
    <div className='attendance-main'>
        <h2>Attendance</h2>
        <div></div>


    </div>
  )
}

export default Attendance