import React from 'react';
import { Button, Form, Input, Table, Popconfirm } from 'antd';
import Request from '../api';
import {useState, useEffect} from 'react';


const BookList = () => {
    const [bookList, setBookList] = useState(null);
    const [bookCount, setBookCount] = useState(0);
    const [load, setLoad] = useState(false);

    const get_data = (search) => {
        let url = '/book/';
        Request.get(url, {search: search}).then(function (response) {
            setBookList(response.data.results);
            setBookCount(response.data.count);
            setLoad(false);
        }).catch(function (error) {
            console.log(error);
        });
    }

    useEffect(() => {
        get_data('');
    }, [load]);

    const get_detail_url = (id) => {
        return '/book/' + id + '/';
    }

    const confirm = (id) => {
        Request.del(get_detail_url(id) ).then(function (response) {
            console.log('success');
            setLoad(true);
        }).catch(function (error) {
            console.log(error);
        })
    }

    const columns = [
       {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
      },
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
            description={"Are you sure to delete " + "'" + record.name + "'" + " Book?"}
            onConfirm={() => {confirm(record.id)}}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        )
      }
    ];

    const onSearch = (values) => {
        get_data(values.search);
    }

    const formItemLayout = null;

    return (
        <>
            <div style={{margin: '10px'}}>
            <Form layout="horizontal"
                  labelCol={{
                    span: 4,
                  }}
                  wrapperCol={{
                    span: 14,
                  }}
                 onFinish={onSearch}>
                  <Form.Item label="Search" name="search">
                    <Input placeholder="Search Book By name and author" />
                  </Form.Item>
                  <Button type="primary">Submit</Button>

            </Form>
            </div>
            <a href="/add-book">Add Book</a>
            <div style={{margin: '20px'}}>
                Total {bookCount} number of books
            </div>
            {bookList &&  <Table dataSource={bookList} columns={columns} />}
        </>
    )
}

export default BookList;