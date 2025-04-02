import React from "react";
import { useParams,} from "react-router-dom";
import Header from "../Header/Header";
import { Button, Form, Input, Card } from "antd";
import axiosClient from "../../api/axiosClient"
import { useQuery, useMutation, useQueryClient } from 'react-query'
function PostEdit() {
  let { id } = useParams();
  const [form] = Form.useForm();
  const queryClient= useQueryClient();
  async function fetchPost() {
    const res = await axiosClient.get("/posts/"+ id);
    form.setFieldsValue(res.data);
    return res.data;
  }
  const { data: post, isLoading } = useQuery(['post'], fetchPost )
  async function editPost (post) {
    const res = await axiosClient.put("/posts/"+ id, post)
    return res.data
  };
  const editMutation = useMutation({ mutationFn: editPost, onSuccess: () => queryClient.invalidateQueries(['post'])});
  const onFinish = ( post ) => {
    editMutation.mutate(post);
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
        <Card title="Edit " style={{ padding: "20px 40px" }}>
          <Form
            form={form}
            name="Groupcreate"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={post}
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
                Update
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
}
export default PostEdit;