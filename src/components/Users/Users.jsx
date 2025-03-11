import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Table, Space, Button, Flex, Popconfirm } from "antd";
import { Link, useLocation } from "react-router-dom";
import {} from "@ant-design/icons";
import axios from "axios";
function Users() {
  const [users, setUsers] = useState([]);
  //   const [name, setName] = useState("");
  //   const [age, setAge] = useState("");
  //   const [id, setId] = useState("");
  //   const handleSubmit = () => {
  //     let user = { name: name, age: age };
  //     axios
  //       .post("http://127.0.0.1:3000/users", user)
  //       .then(function (response) {
  //         console.log(response.data);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //     setAge("");
  //     setName("");
  //   };
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/users/" + id)
      //   .delete(`http://localhost:3000/users/${id}`)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  const handleEdit = (u, id) => {
    setName(u.name);
    setAge(u.age);
    setId(id);
  };
  //   const handleUpdate = () => {
  //     let user = { name: name, age: age };
  //     axios
  //       .put("http://localhost:3000/users/" + id, user)
  //       .then(function (response) {
  //         console.log(response.data);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //     setAge("");
  //     setName("");
  //     setId("");
  //   };
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
  //   const columns = [
  //     {
  //       title: "Name",
  //       dataIndex: "name",
  //       key: "name",
  //     },
  //     {
  //       title: "Age",
  //       dataIndex: "age",
  //       key: "age",
  //     },
  //     {
  //       title: "Date-create",
  //       dataIndex: "created_at",
  //       key: "address",
  //     },
  //     {
  //       title: "Action",
  //       key: "action",
  //     },
  //   ];
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
        {/* <Table columns={columns} dataSource={users} /> */}
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Date_create</th>
            <th>Action</th>
          </tr>
          {users.map((u) => {
            return (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.age}</td>
                <td>{u.created_at}</td>
                <td>
                  <Space size="middle">
                    <a onClick={() => handleEdit(u, u.id)}>Update</a>
                    <Popconfirm
                      title="Delete the task"
                      description="Are you sure to delete this task?"
                      onConfirm={() => handleDelete(u.id)}
                      onCancel={cancel}
                      okText="Yes"
                      cancelText="No"
                    >
                      <a href="#">Delete</a>
                    </Popconfirm>
                  </Space>
                </td>
              </tr>
            );
          })}
        </table>
        {/* <Modal open={isModalOpen[1]} onCancel={() => toggleModal(1, false)}>
          <Form
            initialValues={{
              size: componentSize,
            }}
            onValuesChange={onFormLayoutChange}
            size={componentSize}
            style={{
              padding: "16px",
              background: "rgb(255, 255, 255)",
              boxShadow: "0 20px 27px rgb(0 0 0 / 5%)",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <h3>Cập nhật thông tin</h3>
            <Form.Item>
              <Input
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Input
                value={age}
                placeholder="Age"
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
              <Button
                style={{
                  width: "100%",
                  height: "40px",
                }}
                type="primary"
                onClick={handleClick2}
              >
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </Modal> */}
      </div>
    </>
  );
}
export default Users;
