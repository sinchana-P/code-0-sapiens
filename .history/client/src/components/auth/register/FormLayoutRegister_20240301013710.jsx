import React from 'react';
import { Button, Form, Input,Dropdown, InputNumber, Select} from 'antd';
import { Link } from 'react-router-dom';
import { useRegisterMutation, useLoginMutation} from '../../../api/apiSlice'

const items = [
  {
    label: 'Teacher',
    key: '1',
  },
  {
    label: 'Student',
    key: '2',
  },
]

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};



const FormLayoutRegister = () => {
  
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="lastname"
      rules={[{ required: true, message: "Please input your lastname!" }]}
    >
      <Input placeholder="username" />
    </Form.Item>
    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, message: "Please input your lastname!" }]}
    >
      <Input placeholder="Email address" />
    </Form.Item>

    <Form.Item
      label="Role"
      name="Role"
      rules={[
        {
          required: true,
          message: "Please input!",
        },
      ]}
    >
      <Select placeholder="Role">
        <Select.Option value="demo">Teacher</Select.Option>
        <Select.Option value="demo">Student</Select.Option>
      </Select>
    </Form.Item>

    <Form.Item label="Phone number" name="number">
      <Input placeholder="Phone number" />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: "Please input your password!" }]}
    >
      <Input.Password placeholder="Password" />
    </Form.Item>

    <Form.Item
      label="confirmPassword"
      name="password"
      rules={[{ required: true, message: "Please input your password!" }]}
    >
      <Input.Password placeholder="Confirm Password" />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Create Account
      </Button>
      <br />
      <p>
        Already Registered? <Link to="/">Login</Link>
      </p>
    </Form.Item>
  </Form>
};

export default FormLayoutRegister;