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
  ];
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
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
                initialValues={{
                  size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
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
                <Form.Item>
                  <Input placeholder="Name" />
                </Form.Item>
                <Form.Item>
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item>
                  <Input placeholder="Password" />
                </Form.Item>
                <Form.Item valuePropName="checked">
                  <Flex
                    gap="8px"
                    style={{
                      fontWeight: "400",
                      //   color: "#8c8c8c",
                      fontSize: "15px",
                    }}
                  >
                    <Checkbox onChange={onChange} />I agree the
                    <a href="javascrip:;">
                      <h4 style={{ margin: "0px" }}>Terms and Conditions</h4>
                    </a>
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
