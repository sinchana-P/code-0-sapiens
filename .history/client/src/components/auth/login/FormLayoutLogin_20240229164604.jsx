import React from 'react';
import { Button, Checkbox, Form, Input,Select } from 'antd';
import { Link } from 'react-router-dom';


const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};




const FormLayout: React.FC = () => (
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
    <Form.Item label="Role">
          <Select placeholder='Role'>
            <Select.Option value="demo">User</Select.Option>
            <Select.Option value="demo">Admin</Select.Option>
            <Select.Option value="demo">Manager</Select.Option>
          </Select>
        </Form.Item>
    <Form.Item<FieldType>
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input placeholder='Username'/>
    </Form.Item>

    <Form.Item<FieldType>
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
      <p>New user? <Link to="/registration">Register</Link></p>
    </Form.Item>

    
  </Form>
);

export default FormLayout;