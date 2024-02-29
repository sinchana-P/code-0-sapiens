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
      label="class"
      name="class"
      rules={[
        {
          required: true,
          message: 'Please select class!',
        },
      ]}
    >
        <Select placeholder='Select Class'>
            <Select.Option value="class8">Class 8</Select.Option>
            <Select.Option value="class9">Class 9</Select.Option>
            <Select.Option value="class10">Class 10</Select.Option>
        </Select>
    </Form.Item>

    <Form.Item
      label="module"
      name="module"
      rules={[
        {
          required: true,
          message: 'Please select module!',
        },
      ]}
    >
        <Select placeholder='Select Module'>
            <Select.Option value="module1">Module 1</Select.Option>
            <Select.Option value="module2">Module 2</Select.Option>
        </Select>
    </Form.Item>

    <Form.Item
      label="class"
      name="class"
      rules={[
        {
          required: true,
          message: 'Please select class!',
        },
      ]}
    >
        <Select placeholder='Select Class'>
            <Select.Option value="chapter1">Chapter 1</Select.Option>
            <Select.Option value="chapter2">Chapter 9</Select.Option>
            <Select.Option value="chapter3">Chapter 10</Select.Option>
            <Select.Option value="chapter4">Chapter 10</Select.Option>
            <Select.Option value="chapter5">Chapter 10</Select.Option>
        </Select>
    </Form.Item>

  </Form>
        </div>
    </div>
  )
}

export default Notes