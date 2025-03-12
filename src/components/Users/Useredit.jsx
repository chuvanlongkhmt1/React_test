import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import { Button, Form, Input, Card } from "antd";
import {} from "@ant-design/icons";
import axios from "axios";
function Useredit() {
  let { id } = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const fetchUser = async () => {
    const { data } = await axios.get("http://127.0.0.1:3000/users/" + id);
    const user = data;
    setName(user.name);
    setAge(user.age);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  const handleUpdate = () => {
    let user = { name: name, age: age };
    axios
      .put("http://localhost:3000/users/" + id, user)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    setAge("");
    setName("");
  };
  const title = "Edit";
  const getTitle = () => {
    return title;
  };
  return (
    <>
      <Header getTitle={getTitle}></Header>
      <div style={{ padding: "20px 40px" }}>
        <Card>
          <Form>
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
                onClick={handleUpdate}
              >
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
}
export default Useredit;
