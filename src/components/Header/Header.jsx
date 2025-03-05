import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import {
  Button,
  Flex,
  Breadcrumb,
  Drawer,
  Dropdown,
  Badge,
  Avatar,
  Space,
  Switch,
  Radio,
  Card,
  List,
} from "antd";
import styles from "./styles.module.scss";
import {
  UserOutlined,
  SettingOutlined,
  BellOutlined,
  FacebookFilled,
  TwitterOutlined,
  StarOutlined,
  HistoryOutlined,
} from "@ant-design/icons";
import Title from "antd/es/skeleton/Title";
function Header() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const items = [
    {
      key: "1",
      title: "New message from Sophie",
      time: "2 day ago",
    },
    {
      key: "2",
      title: "New message from Sophie",
      time: "2 day ago",
    },
    {
      key: "3",
      title: "New message from Sophie",
      time: "2 day ago",
    },
  ];
  const onChange = (value) => {
    console.log(value);
  };
  const onChanges = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const { container, box } = styles;
  return (
    <>
      <div>
        <Flex wrap justify="space-between">
          <div>
            <Breadcrumb>
              <Breadcrumb.Item>Pages</Breadcrumb.Item>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <h3 style={{ lineHeight: "16px" }}>Dashboard</h3>
          </div>
          <Flex wrap gap="small" className={box}>
            <Button icon={<SearchOutlined />}>type here</Button>
            <a href="/signin" gap="small">
              <Avatar size="small" icon={<UserOutlined />} />
              Sign in
            </a>
            <Button type="text" onClick={showDrawer}>
              <SettingOutlined />
            </Button>
            <Dropdown
              trigger={["click"]}
              placement="bottomRight"
              dropdownRender={() => (
                <>
                  <div
                    style={{
                      borderRadius: "15px",
                      padding: "10px",
                      background: "#ffffff",
                      border: "1px solid #f0f0f0;",
                      boxShadow: "0 20px 27px rgb(0 0 0 / 5%)",
                    }}
                  >
                    <List
                      style={{
                        minWidth: "240px",
                      }}
                      dataSource={items}
                      renderItem={(item, index) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={
                              <Avatar
                                src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                              />
                            }
                            title={<a href="javascrip:;">{item.title}</a>}
                            description={
                              <p>
                                <HistoryOutlined /> {item.time}
                              </p>
                            }
                          />
                        </List.Item>
                      )}
                    />
                  </div>
                </>
              )}
            >
              <Badge count={3}>
                <Button type="text">
                  <BellOutlined />
                </Button>
              </Badge>
            </Dropdown>
          </Flex>
        </Flex>
      </div>
      <Drawer
        onClose={onClose}
        open={open}
        title={
          <Flex vertical>
            <h4>Configurator</h4>
            <p>See our dashboard options.</p>
          </Flex>
        }
      >
        <Flex vertical>
          <Flex gap="small" align="flex-start" vertical>
            <h4>Sidebar Color</h4>
            <Flex gap="small" align="flex-start">
              <Button color="blue" variant="solid"></Button>
              <Button color="green" variant="solid"></Button>
              <Button color="red" variant="solid"></Button>
              <Button color="yellow" variant="solid"></Button>
              <Button color="default" variant="solid"></Button>
            </Flex>
          </Flex>
          <Flex gap="small" align="flex-start" vertical>
            <h4>Sidenav Type</h4>
            <p>Choose between 2 different sidenav types.</p>
            <Flex
              gap="small"
              style={{ justifyContent: "space-between", width: "100%" }}
            >
              <Button style={{ width: "50%" }} type="primary">
                TRANSPARENT
              </Button>
              <Button style={{ width: "50%" }}>WHITE</Button>
            </Flex>
          </Flex>
          <Flex gap="small" align="flex-start" vertical>
            <h3>Navbar Fixed</h3>
            <Switch defaultChecked onChange={onChanges} />
            <Flex
              vertical
              gap="small"
              style={{ justifyContent: "space-between", width: "100%" }}
            >
              <Button color="default" variant="solid">
                FREE DOWNLOAD
              </Button>
              <Button variant="solid">VIEW DOCUMENTATION</Button>
            </Flex>
          </Flex>
          <Flex
            gap="small"
            align="center"
            vertical
            style={{ marginTop: "20px" }}
          >
            <Space>
              <Radio.Group>
                <Radio.Button buttonStyle="solid">
                  <StarOutlined />
                  Star
                </Radio.Button>
                <Radio.Button>150</Radio.Button>
              </Radio.Group>
            </Space>
            <h3>Thank you for sharing!</h3>
            <Flex
              gap="small"
              style={{
                justifyContent: "space-between",
                width: "80%",
              }}
            >
              <Button style={{ width: "50%" }} color="default" variant="solid">
                <TwitterOutlined />
                TWEET
              </Button>
              <Button style={{ width: "50%" }} color="default" variant="solid">
                <FacebookFilled />
                SHARE
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Drawer>
    </>
  );
}
export default Header;
