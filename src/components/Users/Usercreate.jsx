import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import {
  Table,
  Space,
  Button,
  Flex,
  Modal,
  Form,
  Input,
  Popconfirm,
} from "antd";
import {} from "@ant-design/icons";
import axios from "axios";
function Usercreate() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");
  const handleSubmit = () => {
    let user = { name: name, age: age };
    axios
      .post("http://127.0.0.1:3000/users", user)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    setAge("");
    setName("");
  };
  return (
    <>
      <Form>
        <h3>Thêm người dùng</h3>
        <Form.Item>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder="Age"
            type="text"
            value={age}
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
            onClick={handleSubmit}
          >
            Thêm mới
          </Button>
        </Form.Item>
      </Form>
      ;
    </>
  );
}
export default Usercreate;
