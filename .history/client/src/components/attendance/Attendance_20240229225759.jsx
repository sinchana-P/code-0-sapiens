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
        <div className='attendance-class-inputs-container'>
            <div className='attendance-class-each'>
                <Form.Item label="Class" style={{width: '500px' }} rules={[{ required: true, message: 'Please select class!' }]}>
                <Select placeholder="class">
                    <Select.Option value="class8">Class 8</Select.Option>
                    <Select.Option value="class9">Class 9</Select.Option>
                    <Select.Option value="class10">Class 10</Select.Option>
                </Select>
                </Form.Item>
            </div>

            <div className='attendance-class-each'>
                <Form.Item label="Sub" style={{width: '500px' }} rules={[{ required: true, message: 'Please select class!' }]}>
                <Select placeholder="Subject">
                    <Select.Option value="maths">Maths</Select.Option>
                    <Select.Option value="science">Science</Select.Option>
                    <Select.Option value="social">Social</Select.Option>
                </Select>
                </Form.Item>
            </div>

            <div className='attendance-class-each'>
                <Form.Item label="Sub" style={{width: '200px' }} rules={[{ required: true, message: 'Please select class!' }]}>
                    <div>
                        <DatePicker onChange={onChangeDate} style={{width: '200px' }} />
                    </div>
                    <div>
                        <TimePicker type='time' onChange={onChangeTime} style={{width: '200px' }}/>
                    </div>
                </Form.Item>
            </div>
        </div>

            


        </Form>
    </div>
  )
}

export default Attendance