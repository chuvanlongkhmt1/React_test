import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../api/axiosClient"
const { Header, Footer, Content } = Layout;
import { UserContext } from "../../contexts/UserContext";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Flex,
  Layout,
  Menu,
  Checkbox,
} from "antd";
import {
  ChromeOutlined,
  GithubOutlined,
  PinterestOutlined,
  InstagramOutlined,
  TwitterOutlined,
  FundOutlined,
  UserOutlined,
  LoginOutlined,
  FacebookFilled,
  GoogleCircleFilled,
  AppleFilled,
} from "@ant-design/icons";
const Signup = () => {
  const headerStyle = {
    padding: "0px",
    height: "550px",
    borderRadius: "12px",
    boxShadow: "0 20px 27px rgb(0 0 0 / 5%)",
    backgroundSize: "cover",
    backgroundPosition: "50%",
    textAlign: "center",
    background:
      "url(https://demos.creative-tim.com/muse-ant-design-dashboard/static/media/bg-signup.bec2ba70.jpg",
  };
  const contentStyle = {
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    margin: "0 20px",
    paddingTop: "40px",
  };
  const footerStyle = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#fff",
  };
  const layoutStyle = {
    overflow: "hidden",
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "#fff",
    padding: "11px",
  };
  const [componentSize, setComponentSize] = useState("default");
  const items = [
    {
      label: "Creative Tim",
      key: "create",
    },
    {
      label: "About Us",
      key: "about",
    },
    {
      label: "Products",
      key: "products",
    },
    {
      label: "Teams",
      key: "teams",
    },
    {
      label: "Blog",
      key: "blog",
    },
    {
      label: "Pricing",
      key: "pricing",
    },
  ];
  const dataicon = [
    {
      icon: <ChromeOutlined />,
    },
    {
      icon: <TwitterOutlined />,
    },
    {
      icon: <InstagramOutlined />,
    },
    {
      icon: <PinterestOutlined />,
    },
    {
      icon: <GithubOutlined />,
    },
  ];
  const menu = [
    {
      key: "1",
      icon: <FundOutlined />,
      label: <Link to="/">Dashboard</Link>,
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: "Profile",
    },
    {
      key: "3",
      icon: <LoginOutlined />,
      label: <Link to="/signin">Sign In</Link>,
    },
  ];
  const [form] = Form.useForm();
  const onFinish = async (user) => {
    axiosClient.post("/create", user)
  };
  const onFinishFailed = (errorInfo) => {
    console.error("Failed:", errorInfo);
  };
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Flex
          align="center"
          justify="space-between"
          style={{
            backgroundColor: "transparent",
            color: "#fff",
            margin: "0",
            padding: "0 20px",
            zIndex: "1",
          }}
        >
          <h3 style={{ margin: "0px" }}>Muse Dashboard</h3>
          <Menu
            theme="dark"
            items={menu}
            style={{
              background: "none",
              display: "flex",
              borderInlineEnd: "none !important",
              border: "none",
            }}
          ></Menu>
          <Button ghost>Free Download</Button>
        </Flex>
      </Header>
      <Content style={contentStyle}>
        <>
          <Flex justify="space-around">
            <div
              style={{
                maxWidth: "500px",
                margin: "-400px auto 120px",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h1
                  style={{
                    fontWeight: "600",
                    color: "#ffff",
                    fontSize: "50px",
                    whiteSpace: "normal",
                    margin: "0px",
                    lineHeight: "50px",
                  }}
                >
                  Sign Up
                </h1>
                <h3
                  style={{
                    fontWeight: "400",
                    color: "#ffff",
                    fontSize: "15px",
                    whiteSpace: "normal",
                    margin: "40px 0",
                    lineHeight: "20px",
                  }}
                >
                  Use these awesome forms to login or create new account in your
                  project for free.
                </h3>
              </div>
              <Form
                form={form}
                name="Signup"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                size={componentSize}
                style={{
                  padding: "16px",
                  background: "rgb(255, 255, 255)",
                  boxShadow: "0 20px 27px rgb(0 0 0 / 5%)",
                  borderRadius: "12px",
                  textAlign: "center",
                }}
              >
                <h3 style={{ marginBottom: "30px" }}>Register With</h3>
                <Flex
                  gap="20px"
                  justify="space-around"
                  style={{ padding: "0 40px" }}
                >
                  <Button style={{ padding: "30px 40px" }}>
                    <FacebookFilled
                      style={{ color: "blue", fontSize: "30px" }}
                    />
                  </Button>
                  <Button style={{ padding: "30px 40px" }}>
                    <AppleFilled style={{ fontSize: "30px" }} />
                  </Button>
                  <Button style={{ padding: "30px 40px" }}>
                    <GoogleCircleFilled
                      style={{ fontSize: "30px" }}
                      twoToneColor="#eb2f96"
                    />
                  </Button>
                </Flex>
                <h6
                  style={{
                    fontWeight: "400",
                    color: "#8c8c8c",
                    fontSize: "15px",
                    whiteSpace: "normal",
                    margin: "25px",
                  }}
                >
                  Or
                </h6>
                <Form.Item
                  name={"name"}
                  rules={[
                    { required: true, message: "Please type your name!" },
                  ]}
                >
                  <Input placeholder="name" />
                </Form.Item>
                <Form.Item
                  name={"email"}
                  rules={[
                    {
                      required: true,
                      message: "Please type your email!",
                    },
                    {
                      type: "email",
                      message: "The input is not valid E-mail!",
                    },
                  ]}
                >
                  <Input placeholder="email" />
                </Form.Item>
                <Form.Item
                  name={"password"}
                  rules={[
                    { required: true, message: "Please type your password!" },
                  ]}
                  hasFeedback
                >
                  <Input.Password placeholder="password" />
                </Form.Item>
                <Form.Item
                  name="confirm"
                  dependencies={["password"]}
                  hasFeedback
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
                  <Input.Password placeholder="Confirm Password" />
                </Form.Item>
                <Form.Item
                  name="agreement"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(
                              new Error("Should accept agreement")
                            ),
                    },
                  ]}
                >
                  <Flex
                    gap="8px"
                    style={{
                      fontWeight: "400",
                      //   color: "#8c8c8c",
                      fontSize: "15px",
                    }}
                  >
                    <Checkbox>
                      I have read the <a href="">agreement</a>
                    </Checkbox>
                  </Flex>
                </Form.Item>
                <Form.Item>
                  <Button
                    style={{
                      width: "100%",
                      height: "40px",
                    }}
                    type="primary"
                    htmlType="submit"
                  >
                    Sign Up
                  </Button>
                </Form.Item>
                <Flex gap="3px">
                  <h3
                    style={{
                      margin: "0px",
                      fontWeight: "600",
                      color: "#8c8c8c",
                    }}
                  >
                    Already have an account?
                  </h3>
                  <Link to="/signin">
                    <a href="javascrip:;">
                      <h3 style={{ margin: "0px" }}>Sign In</h3>
                    </a>
                  </Link>
                </Flex>
              </Form>
            </div>
          </Flex>
        </>
      </Content>
      <Footer style={footerStyle}>
        <>
          <div style={{ justifyContent: "space-around", display: "flex" }}>
            <a href="">
              <Menu
                items={items}
                style={{
                  background: "none",
                  display: "flex",
                  borderInlineEnd: "none !important",
                  border: "none",
                }}
              />
            </a>
          </div>
          <div style={{ justifyContent: "space-around", display: "flex" }}>
            <a href="">
              <Menu
                items={dataicon}
                style={{
                  background: "none",
                  display: "flex",
                  borderInlineEnd: "none !important",
                  border: "none",
                }}
              />
            </a>
          </div>
          <div>
            <p
              style={{
                fontSize: "16px",
                marginTop: "7px",
                color: "#8c8c8c",
              }}
            >
              Copyright © 2021 Muse by Creative Tim.
            </p>
          </div>
        </>
      </Footer>
    </Layout>
  );
};
export default Signup;
