import React from 'react'
import { Form, Select, Checkbox } from 'antd';
import './Attendance.css'

const Attendance = () => {
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
            <div></div>
            <div></div>

            <Form.Item label="Sub" rules={[{ required: true, message: 'Please select class!' }]}>
            <Select placeholder="Subject">
                <Select.Option value="maths">Maths</Select.Option>
                <Select.Option value="science">Science</Select.Option>
                <Select.Option value="social">Social</Select.Option>
            </Select>
            </Form.Item>


        </Form>
    </div>
  )
}

export default Attendance