import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { useParams, useLocation } from "react-router-dom";
import { Button, Form, Input, Card, Select, Upload } from "antd";
import {PlusOutlined} from "@ant-design/icons";
import axios from "axios";
import Swal from "sweetalert2";
window.Swal = Swal;
import moment from "moment";
function Useredit() {
  // const [file,setFile]=useState(null)
  // const handlefilechange =({file}) =>{
  //   setFile(file)
  // }
  const avatar = e => {
    if (Array.isArray(e)) {
      return e;
    }
    return e.fileList[0].originFileObj;
  };
  const [groupuser, setGroupuser] = useState([]);
  const fetchGroupusers = async () => {
    const { data } = await axios.get("http://127.0.0.1:3000/group_user");
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
    form.setFieldsValue(data);
    // form.setFieldsValue({ user: data });
  };
  useEffect(() => {
    fetchUser();
  }, []);
  const onFinish =  (value) => {
    // const formData = new FormData();
    // Object.keys(value).forEach((key)=>formData.append(key, value[key]));
    axios
      .put("http://localhost:3000/users/" + id, value, {

        headers: {
          'Content-Type': 'multipart/form-data',
        }
      })
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
          <Form
            form={form}
            name="Useredit"
            onFinish={onFinish}
            initialValues={user}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              // name={"name"}
              name={"name"}
              label="Name"
              // initialValue={user.name}
              // rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              // name={"age"}
              name={"age"}
              label="Age"
              // initialValue={user.age}
              // rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={"group_user_id"}
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
            <Form.Item name={ "email"} label="Email">
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
            {/*<Form.Item label="Upload">
              <Upload
                beforeUpload={()=>false} onChange={handlefilechange}>
              <Button>Chose images</Button>
              </Upload>
            </Form.Item>*/}
            <Form.Item label="Upload" name="avatar" valuePropName="image" getValueFromEvent={avatar}>
              <Upload beforeUpload={()=>false} multiple={false} listType="picture-card">
                <button
                  style={{ color: 'inherit', cursor: 'inherit', border: 0, background: 'none' }}
                  type="button"
                >
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
