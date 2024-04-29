import React from 'react';
import { Button, Form, Input, Table, Popconfirm } from 'antd';
import Request from '../api';
import {useState, useEffect} from 'react';


const BookList = () => {
    const [bookList, setBookList] = useState(null);

    useEffect(() => {
        let url = '/book/'
        Request.get(url, {}).then(function (response) {
            setBookList(response.data.results);
        }).catch(function (error) {
            console.log(error);
        })
    }, []);

    const confirm = (id) => {
        console.log('id ', id);
    }

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Author',
        dataIndex: 'author',
        key: 'author',
      },
      {
        title: 'Created',
        dataIndex: 'created_on',
        key: 'created_on',
      },
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => {confirm(record.id)}}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        )
      }
    ];

    return (
        <>
            {bookList &&  <Table dataSource={bookList} columns={columns} />}
        </>
    )
}

export default BookList;