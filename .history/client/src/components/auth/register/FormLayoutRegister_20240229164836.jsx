import React from 'react';
import { Button, Form, Input,Dropdown, InputNumber} from 'antd';
import { Link } from 'react-router-dom';

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



const FormLayoutRegister = () => (
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
      rules={[{ required: true, message: 'Please input your lastname!' }]}
    >
      <Input placeholder='username'/>
    </Form.Item>
    <Form.Item
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please input your lastname!' }]}
    >
      <Input placeholder="Email address"/>
    </Form.Item>
    <Form.Item label="Select Role" name="role">
    <Dropdown.Button menu={{items}}>
      Role
    </Dropdown.Button>
    </Form.Item>
    
    <Form.Item
    label="Phone number" name="number"
    >
        <Input placeholder='Phone number'/>
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password placeholder='Password'/>
    </Form.Item>

    <Form.Item
      label="confirmPassword"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password placeholder='Confirm Password'/>
    </Form.Item>

 

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Create Account
      </Button>
      <br />
      <p>Already Registered? <Link to='/login'>Login</Link></p>
    </Form.Item>

    
  </Form>
);

export default FormLayout;