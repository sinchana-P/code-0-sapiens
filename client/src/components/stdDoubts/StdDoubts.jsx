import { Form, Input, Select, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import "./StdDoubts.css" ;

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const StdDoubts = () => {
  const [responses, setResponses] = useState([]);

  const onFinish = (values) => {
    const teacherResponse = {
      id: responses.length + 1,
      response: 'This is the teacher\'s response.'
    };
    setResponses([...responses, teacherResponse]);
  };

  return (
    <div>
      <h2 className="heading">Doubts</h2>
      <Form
        name="basic"
        layout="vertical"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input title!" }]}
        >
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item
          label="Description"
          name="desc"
          rules={[{ required: true, message: "Please input description!" }]}
        >
          <TextArea placeholder="Description" />
        </Form.Item>

        <Form.Item
          label="Select Subject"
          name="subject"
          rules={[{ required: true, message: "Please select subject!" }]}
        >
          <Select placeholder="Select Subject">
            <Select.Option value="maths">Maths</Select.Option>
            <Select.Option value="science">Science</Select.Option>
            <Select.Option value="social">Social</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Post Question
          </Button>
          <br />
        </Form.Item>
      </Form>
    </div>
  );
};

export default StdDoubts;
