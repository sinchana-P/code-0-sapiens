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
    <div>
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
            <div>
                <Form.Item label="Class" rules={[{ required: true, message: 'Please select class!' }]}>
                <Select placeholder="class">
                    <Select.Option value="class8">Class 8</Select.Option>
                    <Select.Option value="class9">Class 9</Select.Option>
                    <Select.Option value="class10">Class 10</Select.Option>
                </Select>
                </Form.Item>
            </div>

            <div>
                <Form.Item label="Sub" style={{width: '80%' }} rules={[{ required: true, message: 'Please select class!' }]}>
                <Select placeholder="Subject">
                    <Select.Option value="maths">Maths</Select.Option>
                    <Select.Option value="science">Science</Select.Option>
                    <Select.Option value="social">Social</Select.Option>
                </Select>
                </Form.Item>
            </div>

            <div>
                <Form.Item label="Sub" style={{width: '80%' }} rules={[{ required: true, message: 'Please select class!' }]}>
                    <div>
                        <DatePicker onChange={onChangeDate} />
                    </div>
                    <div>
                        <TimePicker type='time' onChange={onChangeTime}/>
                    </div>
                </Form.Item>
            </div>

            


        </Form>
    </div>
  )
}

export default Attendance