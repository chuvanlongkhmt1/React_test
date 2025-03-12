import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Space, Button, Flex, Popconfirm, Table } from "antd";
import { Link } from "react-router-dom";
import {} from "@ant-design/icons";
import axios from "axios";
function Users() {
  const [users, setUsers] = useState([]);
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/users/" + id)
      // .delete(`http://localhost:3000/users/${id}`)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const cancel = (e) => {
    console.log(e);
  };
  const fetchUsers = async () => {
    const { data } = await axios.get("http://127.0.0.1:3000/users");
    const users = data;
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  const title = "Users";
  const getTitle = () => {
    return title;
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Date-create",
      dataIndex: "created_at",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link
            to={{
              pathname: "/users/edit/" + record.id,
            }}
          >
            Update
          </Link>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => handleDelete(record.id)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <a href="#">Delete</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Header getTitle={getTitle} />
      <div
        style={{
          position: "absolute",
          top: "0px",
          zIndex: "0",
          width: "80%",
          height: "100%",
          padding: "100px 20px 0 20px",
        }}
      >
        <Flex justify="space-between">
          <h1>Danh sách người dùng</h1>{" "}
          <Button>
            <Link to="/users/create">Tạo người dùng</Link>
          </Button>
        </Flex>
        <Table
          columns={columns}
          rowKey={(record) => record.id}
          dataSource={users}
        />
      </div>
    </>
  );
}
export default Users;
