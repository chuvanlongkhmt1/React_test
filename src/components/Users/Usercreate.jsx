import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Button, Flex, Alert, Form, Input, Card } from "antd";
import {} from "@ant-design/icons";
import axios from "axios";
function Usercreate() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");
  // const showAlert = () => {
  //   return (
  //     <Alert
  //       message="Success Tips"
  //       description="Detailed description and advice about successful copywriting."
  //       type="success"
  //       showIcon
  //     />
  //   );
  // };
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
  // const title = ["Users", "Create"];
  const title = "Create";
  const getTitle = () => {
    return title;
  };
  return (
    <>
      <Header getTitle={getTitle}></Header>
      <div style={{ padding: "20px 40px" }}>
        <Card>
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
        </Card>
      </div>
    </>
  );
}
export default Usercreate;
