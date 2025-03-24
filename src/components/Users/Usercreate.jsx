import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Button, Form, Input, Card, Select,Upload } from "antd";
import {PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import Swal from "sweetalert2";
window.Swal = Swal;
function Usercreate() {
  const [groupuser, setGroupuser] = useState([]);
  const fetchGroupusers = async () => {
    const { data } = await axios.get("http://127.0.0.1:3000/group_user");
    const groupuser = data;
    setGroupuser(groupuser);
  };
  useEffect(() => {
    fetchGroupusers();
  }, []);
  const [form] = Form.useForm();
  const onFinish = async (user) => {
    axios
      .post("http://127.0.0.1:3000/users", user)
      .then(function (response) {
        // console.log(response.data);
        Swal.fire({
          icon: "success",
          title: `Tạo người dùng mới thành công`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(function (err) {
        Swal.fire({
          icon: "error",
          title: err.response.data.error,
          showConfirmButton: false,
          timer: 5000,
        });
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
              name={"name"}
              label="Name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={"age"}
              label="Age"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={"group_user_id"}
              label="Nhóm"
              rules={[{ required: true }]}
            >
              <Select>
                {groupuser.map((option) => (
                  <Option key={option.id} value={option.id}>
                    {option.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name={"email"}
              label="Email"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={"password"}
              label="Password"
              rules={[{ required: true }]}
            >
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
                      new Error(
                        "The new password that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item label="Upload" name="file">
              <Upload listType="picture-card">
                <button
                  style={{
                    color: 'inherit',
                    cursor: 'inherit',
                    border: 0,
                    background: 'none',
                  }}
                  type="button"
                >
                  <PlusOutlined />
                  <div
                    style={{
                      marginTop: 8,
                    }}
                  >
                    Upload
                  </div>
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
