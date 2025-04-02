import React, { useEffect, useState} from "react";
import Header from "../Header/Header";
import { Button, Form, Input, Card, Select, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axiosClient from "../../api/axiosClient"
function Usercreate() {
  const [groupuser, setGroupuser] = useState([]);
  const [form] = Form.useForm();
  const avatar = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e.fileList[0].originFileObj;
  };
  const fetchGroupusers = async () => {
    const { data } = await axiosClient.get("/group_user");
    const groupuser = data;
    setGroupuser(groupuser);
  };
  useEffect(() => {
    fetchGroupusers();
  }, []);
  const onFinish = (value) => {
    axiosClient.post("/users",value,)
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
            onFinishFailed={onFinishFailed}>
            <Form.Item name={"name"} label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name={"age"} label="Age" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name={"group_user_id"}
              label="Nhóm">
              <Select>
                {groupuser.map((option) => (
                  <Select.Option key={option.id} value={option.id}>
                    {option.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name={"email"}
              label="Email"
              rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              name={"password"}
              label="Password"
              rules={[{ required: true }]}>
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Password confirm"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("The new password that you entered do not match!")
                    );
                  },
                }),
              ]}>
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Upload"
              name="avatar"
              valuePropName="image"
              getValueFromEvent={avatar}>
              <Upload
                beforeUpload={() => false}
                multiple={false}
                listType="picture-card">
                <button
                  style={{
                    color: "inherit",
                    cursor: "inherit",
                    border: 0,
                    background: "none",
                  }}
                  type="button">
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </button>
              </Upload>
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
