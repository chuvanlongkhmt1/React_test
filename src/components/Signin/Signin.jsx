import React, { useState } from "react";
import { Link } from "react-router-dom";
const { Header, Footer, Content } = Layout;
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
  LogoutOutlined,
} from "@ant-design/icons";
const Signin = () => {
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
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
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
                initialValues={{
                  size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
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
                <Form.Item>
                  <h3>Email</h3>
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item>
                  <h3>Password</h3>
                  <Input placeholder="Password" />
                </Form.Item>
                <Form.Item valuePropName="checked">
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
                </Form.Item>
                <Form.Item>
                  <Button
                    style={{
                      width: "100%",
                      height: "40px",
                    }}
                    type="primary"
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
                    <a href="javascrip:;">
                      <h3 style={{ margin: "0px" }}>Sign Up</h3>
                    </a>
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
};
export default Signin;
