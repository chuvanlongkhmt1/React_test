import React, { useState, useContext } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
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
  List,
  FloatButton,
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
import { UserContext } from "../../contexts/UserContext";
function Header(props) {
  const [open, setOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);
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
  const onChanges = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const { box } = styles;
  const headerstyle = {
    background: "none",
    padding: "20px 40px",
    position: "relative",
    with: "80%",
    top: "0px",
    zIndex: "1",
  };

  return (
    <>
      <FloatButton icon={<SettingOutlined spin />} onClick={showDrawer} />
      <div style={headerstyle}>
        <Flex wrap justify="space-between">
          <div>
            <Breadcrumb>
              <Breadcrumb.Item>Pages</Breadcrumb.Item>
              <Breadcrumb.Item>{props.getTitle()}</Breadcrumb.Item>
            </Breadcrumb>
            <h3 style={{ lineHeight: "16px" }}>{props.getTitle()}</h3>
          </div>
          <Flex wrap gap="small" className={box}>
            <Button
              style={{ width: "200px", height: "40px" }}
              icon={<SearchOutlined />}
            >
              type here
            </Button>
            {/* <Link to="/signin">
              <Avatar
                style={{
                  backgroundColor: "black",
                  color: "white",
                  marginRight: "5px",
                }}
                size={20}
                icon={<UserOutlined />}
              />
              <span>Sign In</span>
            </Link> */}
            <Link to="/profile">
              <Avatar
                style={{
                  backgroundColor: "black",
                  color: "white",
                  marginRight: "5px",
                }}
                size={20}
                src={user.avatar_url}
              />
              <span>{user?.name}</span>
            </Link>
            <Button type="text" onClick={showDrawer}>
              <Avatar
                style={{
                  backgroundColor: "#f5f5f5",
                  color: "black",
                }}
                size="small"
                icon={<SettingOutlined />}
              />
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
              <Button type="text">
                <Badge count={3}>
                  <Avatar
                    style={{
                      backgroundColor: "#f5f5f5",
                      color: "black",
                    }}
                    shape="square"
                    icon={<BellOutlined />}
                  />
                </Badge>
              </Button>
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
