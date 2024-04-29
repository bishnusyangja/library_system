import React from 'react';
import { Button, Form, Input } from 'antd';
import Request from '../api';


const LoginForm = () => {
    const onFinish = (values) => {
        const url = '/api-auth-token/';
        Request.post(url, values, {
        }).then(function (response) {
            localStorage.setItem('authToken', response.data.token);
            window.location.href = '/book-list';
        }).catch(function (error) {
            console.log(error);
        })
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    return (
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
          label="Username"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
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
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item >
          <span>
          Don't Have account <a href="/register" >Register </a>
          </span>
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
    )
};

export default LoginForm;