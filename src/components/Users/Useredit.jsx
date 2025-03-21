import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { useParams, useLocation } from "react-router-dom";
import { Button, Form, Input, Card, Select } from "antd";
import {} from "@ant-design/icons";
import axios from "axios";
import Swal from "sweetalert2";
window.Swal = Swal;
import moment from "moment";
function Useredit() {
  const [groupuser, setGroupuser] = useState([]);
  const fetchGroupusers = async () => {
    const { data } = await axios.get("http://127.0.0.1:3000/groupuser");
    const groupuser = data;
    setGroupuser(groupuser);
  };
  useEffect(() => {
    fetchGroupusers();
  }, []);
  let { id } = useParams();
  const title = "Edit";
  const getTitle = () => {
    return title;
  };
  const [form] = Form.useForm();
  const [user, setUser] = useState();
  const fetchUser = async () => {
    const { data } = await axios.get("http://127.0.0.1:3000/users/" + id);
    setUser(data);
    // form.setFieldsValue(data);
    form.setFieldsValue({ user: data });
  };
  useEffect(() => {
    fetchUser();
  }, []);
  const onFinish = async (user) => {
    axios
      .put("http://localhost:3000/users/" + id, user)
      .then(function (response) {
        console.log(response.data);
        Swal.fire({
          icon: "success",
          title: `Cập nhật người dùng thành công`,
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
  // if (!user) return null;
  return (
    <>
      <Header getTitle={getTitle}></Header>
      <div style={{ padding: "20px 40px" }}>
        <Card title="Sửa thông tin người dùng" style={{ padding: "20px 40px" }}>
          {/* <Form>
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
          </Form> */}
          <Form
            form={form}
            name="Useredit"
            onFinish={onFinish}
            initialValues={user}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              // name={"name"}
              name={["user", "name"]}
              label="Name"
              // initialValue={user.name}
              // rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              // name={"age"}
              name={["user", "age"]}
              label="Age"
              // initialValue={user.age}
              // rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              // name={"age"}
              name={["user", "groupuser_id"]}
              label="Nhóm"

              // initialValue={user.age}
              // rules={[{ required: true }]}
            >
              <Select>
                {groupuser.map((option) => (
                  <Option key={option.id} value={option.id}>
                    {option.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item name={["user", "email"]} label="Email">
              <Input />
            </Form.Item>
            <Form.Item name={["user", "password"]} label="Password" hasFeedback>
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
