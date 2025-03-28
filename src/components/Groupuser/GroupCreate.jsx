import React from "react";
import Header from "../Header/Header";
import { Button, Form, Input, Card } from "antd";
import axiosClient from "../../api/axiosClient"
function Groupcreate() {
  const [form] = Form.useForm();
  const onFinish = async ( group ) => {
    axiosClient.post("/group_user", group)
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
            name="Groupcreate"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name={"name"}
              label="Name"
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
export default Groupcreate;
