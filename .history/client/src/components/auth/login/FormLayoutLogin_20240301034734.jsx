import React from 'react';
import { Button, Checkbox, Form, Input,Select } from 'antd';
import { Link } from 'react-router-dom';


const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


const FormLayoutLogin = () => {}
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
      label="Role"
      name="Role"
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

    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input placeholder='Username'/>
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password placeholder='Password'/>
      <a style={{float:'right'}}>Forgot Password?</a>
    </Form.Item>


    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Login
      </Button>
      <br />
      <p>New user? <Link to="/register">Register</Link></p>
    </Form.Item>

    
  </Form>
);

export default FormLayoutLogin;