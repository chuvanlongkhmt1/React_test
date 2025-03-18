import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Button, Form, Input, Card, Select } from "antd";
import {} from "@ant-design/icons";
import axios from "axios";
import Swal from "sweetalert2";
window.Swal = Swal;
function Usercreate() {
  const [groupuser, setGroupuser] = useState([]);
  const fetchGroupusers = async () => {
    const { data } = await axios.get("http://127.0.0.1:3000/groupuser");
    const groupuser = data;
    setGroupuser(groupuser);
  };
  useEffect(() => {
    fetchGroupusers();
  }, []);
  const [form] = Form.useForm();
  const onFinish = (user) => {
    console.log(user);
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
            <Form.Item
              name={["user", "groupuser_id"]}
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
              name={["user", "email"]}
              label="Email"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "password"]}
              label="Password"
              rules={[{ required: true }]}
              hasFeedback
            >
              <Input />
            </Form.Item>

            {/* <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["user", "password"]}
              hasFeedback
              rules={[
                { required: true },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("không trùng khớp mật khẩu")
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item> */}
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
