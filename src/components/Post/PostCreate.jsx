import React from "react";
import Header from "../Header/Header";
import { Button, Form, Input, Card } from "antd";
import axiosClient from "../../api/axiosClient"
function PostCreate() {
  const [form] = Form.useForm();

  const onFinish = async ( post ) => {
    axiosClient.post("/posts", post)
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
              name={"title"}
              label="Title"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={"description"}
              label="Description"
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

export default PostCreate;