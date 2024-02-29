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

  // return ()
  
};

export default FormLayoutRegister;