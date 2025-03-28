import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
const { Header, Footer, Content } = Layout;
import axios from "axios";
import Swal from "sweetalert2";
window.Swal = Swal;
import { Button, Form, Input, Switch, Flex, Layout, Menu } from "antd";
import { UserContext } from "../../contexts/UserContext";

import {
  ChromeOutlined,
  GithubOutlined,
  PinterestOutlined,
  InstagramOutlined,
  TwitterOutlined,
  FundOutlined,
  UserOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
function Signin() {
  const headerStyle = {
    textAlign: "center",
    color: "#141414",
    height: 64,
    paddingInline: 48,
    lineHeight: "64px",
    background: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 20px 27px",
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
  };
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
    {
      key: "4",
      icon: <LogoutOutlined />,
      label: <Link to="/signup">Sign Up</Link>,
    },
  ];
  let navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [form] = Form.useForm();
  const onFinish = async ({ user }) => {
    axios
      .post("http://localhost:3000/signin", user, { withCredentials: true })
      .then(function (response) {
        if (response.data.logged_in === true) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          setUser(response.data.user);
          Swal.fire({
            icon: "success",
            title: response.data.success,
            showConfirmButton: false,
            timer: 500,
          });
          navigate("/");
        } else {
          Swal.fire({
            icon: "error",
            title: response.data.error,
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(response.data.error);
        }
      })
      .catch(function (error) {
        console.log(error);
        Swal.showValidationMessage(error);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.error("Failed:", errorInfo);
  };

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <Flex align="center" justify="space-between">
          <h3 style={{ margin: "0px" }}>Muse Dashboard</h3>
          <Menu
            items={menu}
            style={{
              background: "none",
              display: "flex",
              borderInlineEnd: "none !important",
              border: "none",
            }}
          ></Menu>
          <Button type="primary">Free Download</Button>
        </Flex>
      </Header>
      <Content style={contentStyle}>
        <>
          <Flex justify="space-around">
            <div style={{ marginLeft: "8%", maxWidth: "310px" }}>
              <Form
                form={form}
                name="Signin"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <h1
                  style={{ fontSize: "48px", fontWeight: "700", margin: "0px" }}
                >
                  Sign In
                </h1>
                <h5
                  style={{
                    fontWeight: "400",
                    color: "#8c8c8c",
                    fontSize: "20px",
                    whiteSpace: "normal",
                    marginBottom: "0px",
                  }}
                >
                  Enter your email and password to sign in
                </h5>
                <Form.Item
                  label="email"
                  name={["user", "email"]}
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="password"
                  name={["user", "password"]}
                  rules={[{ required: true }]}
                  hasFeedback
                >
                  <Input.Password />
                </Form.Item>
                {/* <Form.Item valuePropName="checked">
                  <Flex
                    gap="8px"
                    style={{
                      fontWeight: "400",
                      color: "#8c8c8c",
                      fontSize: "15px",
                    }}
                  >
                    <Switch />
                    Remember me
                  </Flex>
                </Form.Item> */}
                <Form.Item>
                  <Button
                    style={{
                      width: "100%",
                      height: "40px",
                    }}
                    type="primary"
                    htmlType="submit"
                  >
                    Sign In
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
                    Don't have an account?
                  </h3>
                  <Link to="/signup">
                    <h3 style={{ margin: "0px" }}>Sign Up</h3>
                  </Link>
                </Flex>
              </Form>
            </div>
            <div>
              <img
                style={{ height: "667px" }}
                src="https://demos.creative-tim.com/muse-ant-design-dashboard/static/media/img-signin.cba9a972.jpg"
                alt=""
              />
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
}
export default Signin;
