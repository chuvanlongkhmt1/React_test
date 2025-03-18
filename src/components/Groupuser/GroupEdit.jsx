import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { useParams, useLocation } from "react-router-dom";
import { Button, Form, Input, Card } from "antd";
import {} from "@ant-design/icons";
import axios from "axios";
import Swal from "sweetalert2";
window.Swal = Swal;
import moment from "moment";
function Groupedit() {
  let { id } = useParams();
  const title = "Edit";
  const getTitle = () => {
    return title;
  };
  const [form] = Form.useForm();
  const [group, setGroup] = useState();
  const fetchGroup = async () => {
    const { data } = await axios.get("http://127.0.0.1:3000/groupuser/" + id);
    setGroup(data);
    // form.setFieldsValue(data);
    form.setFieldsValue({ group: data });
  };
  useEffect(() => {
    fetchGroup();
  }, []);
  const onFinish = async ({ group }) => {
    axios
      .put("http://localhost:3000/groupuser/" + id, group)
      .then(function (response) {
        console.log(response.data);
        Swal.fire({
          icon: "success",
          title: `Cập nhật nhóm thành công`,
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
  // if (!group) return null;
  return (
    <>
      <Header getTitle={getTitle}></Header>
      <div style={{ padding: "20px 40px" }}>
        <Card title="Sửa thông tin nhóm" style={{ padding: "20px 40px" }}>
          <Form
            form={form}
            name="Groupedit"
            onFinish={onFinish}
            initialValues={group}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              // name={"name"}
              name={["group", "name"]}
              label="Name"
              // initialValue={group.name}
              // rules={[{ required: true }]}
            >
              <Input />
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
export default Groupedit;
