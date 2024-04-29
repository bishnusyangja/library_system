import React from 'react';
import { Button, Checkbox, Form, Input, Alert } from 'antd';
import Request from '../api'
import {useState} from 'react';


const RegisterForm = () => {
    const [message, setMessage] = useState({text:'', type: ''});

    const onFinish = (values) => {
        const url = '/register/'
        Request.post(url, values, {
        }).then(function (response) {
            setMessage({text: 'User Added successfully', type: 'success'})
        }).catch(function (error) {
            console.log(error);
        })
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    return(
    <>
    <div style={{margin: '15px'}}>
    {message.text && <Alert
        message="Success"
        description={message.text}
        type={message.type}
        showIcon
        closable
        /> }
    </div>
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="First Name"
      name="first_name"
      rules={[
        {
          required: true,
          message: 'Please input your First Name',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Last Name"
      name="last_name"
      rules={[
        {
          required: true,
          message: 'Please input your Last Name',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your Email',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Mobile"
      name="mobile"
      rules={[
        {
          required: true,
          message: 'Please input your mobile number',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      label="Confirm Password"
      name="confirm_password"
      rules={[
        {
          required: true,
          message: 'Please input confirm password',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </>
)};

export default RegisterForm;