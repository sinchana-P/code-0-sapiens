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
        <Form
            layout="vertical"
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
        >
            

            


        </Form>
    </div>
  )
}

export default Attendance