import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Button, Form, Input, Card } from "antd";
import {} from "@ant-design/icons";
import axios from "axios";
import Swal from "sweetalert2";
window.Swal = Swal;
function Usercreate() {
  const [form] = Form.useForm();
  const onFinish = async ({ user }) => {
    axios
      .post("http://127.0.0.1:3000/users", user)
      .then(function (response) {
        console.log(response.data);
        Swal.fire({
          icon: "success",
          title: `Tạo người dùng mới thành công`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(function (error) {
        console.log(error);
        Swal.showValidationMessage(err.response.data.message);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.error("Failed:", errorInfo);
  };

  const title = "Create";
  const getTitle = () => {
    return title;
  };
  return (
    <>
      <Header getTitle={getTitle}></Header>
      <div style={{ padding: "20px 40px" }}>
        <Card title="Thêm người dùng" style={{ padding: "20px 40px" }}>
          <Form
            form={form}
            name="Usercreate"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            // validateMessages={validateMessages}
          >
            <Form.Item
              name={["user", "name"]}
              label="Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "age"]}
              label="Age"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
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
