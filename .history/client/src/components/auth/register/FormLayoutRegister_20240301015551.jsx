import React, {useState} from 'react';
import { Button, Form, Input,Dropdown, InputNumber, Select} from 'antd';
import { Link } from 'react-router-dom';
import { useRegisterMutation, useLoginMutation} from '../../../api/apiSlice'
// import { v4 as uuidv4 } from 'uuid';

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
  // register()
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};



const FormLayoutRegister = () => {

  const [name, setName] = useState('')
  // const [userId, setUserId] = useState(uuidv4());
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [phone, setPhone] = useState('')
  // const [phone, setPhone] = useState('')

  // const [register] = useRegisterMutation()

  return (<Form
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
      <Input placeholder="username" onChange={e => setPhone(e.target.value)} />
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
      <Select placeholder="Role" onChange={e => setRole(e.target.value)}>
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
  )
  
};

export default FormLayoutRegister;