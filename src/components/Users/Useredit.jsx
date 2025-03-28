import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { useParams,} from "react-router-dom";
import { Button, Form, Input, Card, Select, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axiosClient from "../../api/axiosClient"
function Useredit() {
  const avatar = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e.fileList[0].originFileObj;
  };
  const [groupuser, setGroupuser] = useState([]);
  const [form] = Form.useForm();
  const [user, setUser] = useState();
  let { id } = useParams();
  const fetchGroupusers = async () => {
    const { data } = await axiosClient.get("/group_user");
    const groupuser = data;
    setGroupuser(groupuser);
  };
  const fetchUser = async () => {
    const { data } = await axiosClient.get("/users/" + id);
    setUser(data);
    form.setFieldsValue(data);
  };
  useEffect(() => {
    fetchGroupusers();
    fetchUser();
  }, []);
  const title = "Edit";
  const getTitle = () => {
    return title;
  };
  const onFinish = (value) => {
    axiosClient.put( "/users/" + id, value)
  };
  const onFinishFailed = (errorInfo) => {
    console.error("Failed:", errorInfo);
  };
  return (
    <>
      <Header getTitle={getTitle}></Header>
      <div style={{ padding: "20px 40px" }}>
        <Card title="Sửa thông tin người dùng" style={{ padding: "20px 40px" }}>
          <Form
            form={form}
            name="Useredit"
            onFinish={onFinish}
            initialValues={user}
            onFinishFailed={onFinishFailed}>
            <Form.Item
              name={"name"}
              label="Name">
              <Input />
            </Form.Item>
            <Form.Item
              name={"age"}
              label="Age">
              <Input />
            </Form.Item>
            <Form.Item
              name={"group_user_id"}
              label="Nhóm">
              <Select>
                {groupuser.map((option) => (
                  <Option key={option.id} value={option.id}>
                    {option.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name={"email"} label="Email">
              <Input />
            </Form.Item>
            <Form.Item name={"password"} label="Password" hasFeedback>
              <Input.Password />
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
