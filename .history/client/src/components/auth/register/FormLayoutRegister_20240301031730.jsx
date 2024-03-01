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

  const [register] = useRegisterMutation()

  const onFinish = (values) => {
    console.log('Success:', values);
    console.log({ name, password, role, phone })
    
    try {
       register({ name, password, role, phone })
      await register({ name, password, role, phone })
    } catch (err) {
      console.log(err)
    }

    setName('')
    setPhone('')
    setRole('')
    setPassword('')
  };
  

  return (
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
      label="name"
      name="name"
      rules={[{ required: true, message: "Please input your lastname!" }]}
    >
      <Input placeholder="username" onChange={e => setName(e.target.value)} />
    </Form.Item>

    <Form.Item
      label="role"
      name="role"
      rules={[
        {
          required: true,
          message: "Please input!",
        },
      ]}
    >
      <Select placeholder="Role" onChange={value => setRole(value)} value={role}>
        <Select.Option value="teacher">Teacher</Select.Option>
        <Select.Option value="student">Student</Select.Option>
      </Select>
    </Form.Item>

    <Form.Item label="Phone number" name="number">
      <Input placeholder="Phone number" onChange={e => setPhone(e.target.value)}/>
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: "Please input your password!" }]}
    >
      <Input.Password placeholder="Password" onChange={e => setPassword(e.target.value)}/>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
    {/* <button onSubmit={console.log('clicked')}>Submit</button> */}
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