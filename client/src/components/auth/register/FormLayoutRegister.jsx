import React, {useState} from 'react';
import { Button, Form, Input,Dropdown, InputNumber, Select} from 'antd';
import { Link } from 'react-router-dom';
import { useRegisterMutation, useLoginMutation} from '../../../api/apiSlice'
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'

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

  // const [register] = useRegisterMutation()

  const onFinish = async(values) => {
    console.log('Success:', values);
    console.log({ name, password, role, phone })
    
    // try {

    //   //  register({ name, password, role, phone })
    //   //  register(values)
    // } catch (err) {
    //   console.log(err)
    // }

    const response = axios.get('http://localhost:3500/register', {
      params: values
    }).then(console.log('success')).catch(err => console.log(err));

    setName('')
    setPhone('')
    setRole('')
    setPassword('')
  };

  const validatePassword = (_, value) => {
    // Define your password validation criteria
    const minLength = 8;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (value.length < minLength) {
      return Promise.reject('Password must be at least 8 characters long.');
    }

    if (!(uppercaseRegex.test(value) && lowercaseRegex.test(value) && digitRegex.test(value) && specialCharRegex.test(value))) {
      return Promise.reject('Password must include uppercase and lowercase letters, digits, and special characters.');
    }

    return Promise.resolve();
  };

  const validatePhoneNumber = (_, value) => {
    // Regular expression for a basic phone number (10 digits)
    const phoneNumberRegex = /^\d{10}$/;

    if (!phoneNumberRegex.test(value)) {
      return Promise.reject('Please enter a valid phone number (10 digits).');
    }

    return Promise.resolve();
  };

  const validateTextOnly = (_, value) => {
    const textOnlyRegex = /^[a-zA-Z]+$/; // Regular expression for alphabetic characters

    if (!textOnlyRegex.test(value)) {
      return Promise.reject('Please enter only alphabetic characters.');
    }

    return Promise.resolve();
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
      rules={[{ required: true, message: "Please input your lastname!" },{validator:validateTextOnly}]}
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

    <Form.Item label="Phone number" name="phone"
    rules={[{validator:validatePhoneNumber}]}
    >
      <Input placeholder="Phone number" onChange={e => setPhone(e.target.value)}/>
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: "Please input your password!" } ,{validator:validatePassword}]}
    >
      <Input.Password placeholder="Password" onChange={e => setPassword(e.target.value)}/>
    </Form.Item>

    {role==="student"&&
      <Form.Item
      label="Class"
      name="class"
      rules={[
        {
          required: true,
          message: "Please input!",
        },
      ]}
    >
      <Select placeholder="Class" onChange={value => setRole(value)} value={role}>
        <Select.Option value="8">Class 8</Select.Option>
        <Select.Option value="9">Class 9</Select.Option>
        <Select.Option value="10">Class 10</Select.Option>

      </Select>
    </Form.Item>
    }

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
    {/* <button onSubmit={console.log('clicked')}>Submit</button> */}
      <Button type="primary" htmlType="submit" style={{marginLeft: '8rem'}}> 
        Create Account
      </Button>
      <br />
      <p style={{margin: '1rem 0 0 6rem'}}>
        Already Registered? <Link to="/login">Login</Link>
      </p>
    </Form.Item>
  </Form>
  )
  
};

export default FormLayoutRegister;