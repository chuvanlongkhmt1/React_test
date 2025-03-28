import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { useParams, useLocation } from "react-router-dom";
import { Button, Form, Input, Card } from "antd";
import {} from "@ant-design/icons";
import axiosClient from "../../api/axiosClient"
function Groupedit() {
  let { id } = useParams();
  const title = "Edit";
  const getTitle = () => {
    return title;
  };
  const [form] = Form.useForm();
  const [group, setGroup] = useState();
  const fetchGroup = async () => {
    const { data } = await axiosClient.get("/group_user/" + id);
    setGroup(data.groupuser);
    form.setFieldsValue(data.groupuser);
  };
  useEffect(() => {
    fetchGroup();
  }, []);
  const onFinish = async ( group ) => {
    axiosClient.put("/group_user/" + id, group)
  };
  const onFinishFailed = (errorInfo) => {
    console.error("Failed:", errorInfo);
  };
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
              name={"name"}
              label="Name"
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
