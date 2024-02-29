import React from 'react'
import { Button, Form, Input, Select } from 'antd';

const Notes = () => {
  return (
    <div className='notes-container'>
        <h1>Add Notes & Materials</h1>
        <div>
        <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    autoComplete="off"
  >
    <Form.Item
      label="sem"
      name="sem"
      rules={[
        {
          required: true,
          message: 'Please input!',
        },
      ]}
    >
    <Select placeholder='Role'>
        <Select.Option value="demo">Teacher</Select.Option>
        <Select.Option value="demo">Student</Select.Option>
    </Select>

    </Form.Item>

  </Form>
        </div>
    </div>
  )
}

export default Notes