import React from 'react';
import { Button, Form, Input, Table, Popconfirm } from 'antd';
import Request from '../api';
import {useState, useEffect} from 'react';


const BookList = () => {
    const [bookList, setBookList] = useState(null);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        let url = '/book/'
        Request.get(url, {}).then(function (response) {
            setBookList(response.data.results);
            setLoad(false);
        }).catch(function (error) {
            console.log(error);
        })
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

    return (
        <>
            <a href="/add-book">Add Book</a>
            {bookList &&  <Table dataSource={bookList} columns={columns} />}
        </>
    )
}

export default BookList;