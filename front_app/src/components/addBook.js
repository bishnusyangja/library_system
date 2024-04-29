import React from 'react';
import { Button, Form, Input, Alert } from 'antd';
import Request from '../api';
import {useState, useEffect} from 'react';


const BookForm = () => {
    const [message, setMessage] = useState({text:'', type: ''});
    const onFinish = (values) => {
        const url = '/book/'
        Request.post(url, values, {
        }).then(function (response) {
            setMessage({text: 'Book Added successfully', type: 'success'})
        }).catch(function (error) {
            console.log(error);
        })
    };

    return (
        <>
        <a href="/book-list">Book List</a>
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
    autoComplete="off"
  >
    <Form.Item
      label="Book Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input Book Name',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Author Name"
      name="author"
      rules={[
        {
          required: true,
          message: 'Please input Author name',
        },
      ]}
    >
      <Input />
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
    )
}

export default BookForm;