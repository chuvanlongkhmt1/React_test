import React, { useState, useContext } from "react";
import Header from "../Header/Header";
const { Dragger } = Upload;
import {
  Space,
  Radio,
  Flex,
  Button,
  Avatar,
  Image,
  Divider,
  message,
  Upload,
  Progress,
  List,
  Col,
  Row,
  Card,
  Descriptions,
  Switch,
} from "antd";
import {
  EditFilled,
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { UserContext } from "../../contexts/UserContext";
function Profile() {
  const { user, setUser } = useContext(UserContext);
  const title = "Profile";
  const getTitle = () => {
    return title;
  };
  const items = [
    {
      key: "1",
      span: "filled",
      label: "Full Name",
      children: "Sarah Emily Jacob",
    },
    {
      key: "2",
      span: "filled",
      label: "Mobile",
      children: "(44) 123 1234 123",
    },
    {
      key: "3",
      span: "filled",
      label: "Email",
      children: "sarahjacob@mail.com",
    },
    {
      key: "4",
      span: "filled",
      label: "Location",
      children: "USA",
    },
    {
      key: "5",
      label: "Social",
      children: (
        <Flex gap="10px">
          <FacebookOutlined
            style={{ color: "blue", height: "20px", width: "20px" }}
          />
          <InstagramOutlined
            style={{ color: "red", height: "20px", width: "20px" }}
          />
          <TwitterOutlined
            style={{ color: "#1890ff", height: "20px", width: "20px" }}
          />
        </Flex>
      ),
    },
  ];
  const listitems = [
    {
      key: "1",
      title: "Sophie B.",
      time: "Hi! I need more information…",
    },
    {
      key: "2",
      title: "Sophie B.",
      time: "Hi! I need more information…",
    },
    {
      key: "3",
      title: "Sophie B.",
      time: "Hi! I need more information…",
    },
    {
      key: "4",
      title: "Sophie B.",
      time: "Hi! I need more information…",
    },
    {
      key: "5",
      title: "Sophie B.",
      time: "Hi! I need more information…",
    },
  ];
  const switchitems = [
    "Email me when someone answers me",
    "Email me when someone answers me",
    "Email me when someone answers me",
  ];
  const switchitems1 = [
    "New launches and projects",
    "New launches and projects",
    "New launches and projects",
  ];
  const data = [
    {
      src: "https://demos.creative-tim.com/muse-ant-design-dashboard/static/media/home-decor-1.05e218fd.jpeg",
      title: "Project #1",
      content:
        "As Uber works through a huge amount of internal management turmoil.",
    },
    {
      src: "https://demos.creative-tim.com/muse-ant-design-dashboard/static/media/home-decor-1.05e218fd.jpeg",
      title: "Project #2",
      content:
        "As Uber works through a huge amount of internal management turmoil.",
    },
    {
      src: "https://demos.creative-tim.com/muse-ant-design-dashboard/static/media/home-decor-1.05e218fd.jpeg",
      title: "Project #3",
      content:
        "As Uber works through a huge amount of internal management turmoil.",
    },
  ];
  const [position1, setPosition1] = useState("overview");
  const props = {
    name: "file",
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <>
      <Header getTitle={getTitle} style={{ color: "white" }} />
      <div style={{ padding: "20px 20px 0 20px" }}>
        <div
          style={{
            backgroundImage:
              "url(	https://demos.creative-tim.com/muse-ant-design-dashboard/static/media/bg-profile.9c36abe7.jpg)",
            marginTop: "-90px",
            height: "300px",
            borderRadius: "12px",
            boxShadow: "0 20px 27px rgb(0 0 0 / 5%)",
            backgroundSize: "cover",
            backgroundPosition: "50%",
          }}
        ></div>
        <div
          style={{
            marginTop: "-50px",
            padding: "0 20px",
            marginBottom: "30px",
          }}
        >
          <Card>
            <Flex justify="space-between">
              <Flex gap="15px" style={{ alignItems: "center" }}>
                <Avatar
                  shape="square"
                  size={72}
                  src={`https://demos.creative-tim.com/muse-ant-design-dashboard/static/media/face-3.e08fd425.jpg`}
                />
                <div>
                  <h2 style={{ margin: "0px", fontWeight: "400px" }}>
                    {user.name}
                  </h2>
                  <p
                    style={{
                      margin: "0px",
                      fontWeight: "600px",
                      color: "#8c8c8c",
                    }}
                  >
                    CEO / Co-Founder
                  </p>
                </div>
              </Flex>
              <Space>
                <Radio.Group
                  value={position1}
                  onChange={(e) => setPosition1(e.target.value)}
                >
                  <Radio.Button
                    style={{
                      height: "40px",
                      lineHeight: "40px",
                    }}
                    value="overview"
                  >
                    OVERVIEW
                  </Radio.Button>
                  <Radio.Button
                    style={{
                      height: "40px",
                      lineHeight: "40px",
                    }}
                    value="teams"
                  >
                    TEAMS
                  </Radio.Button>
                  <Radio.Button
                    style={{
                      height: "40px",
                      lineHeight: "40px",
                    }}
                    value="projects"
                  >
                    PROJECTS
                  </Radio.Button>
                </Radio.Group>
              </Space>
            </Flex>
          </Card>
        </div>
      </div>
      <div style={{ padding: "0px 20px 20px 20px" }}>
        <Row gutter={14}>
          <Col span={8}>
            <Card style={{ minHeight: "600px" }}>
              <h3 style={{ marginBottom: "30px" }}>Platform Settings</h3>
              <List
                header={
                  <p
                    style={{
                      margin: "0px",
                      fontWeight: "600px",
                      color: "#8c8c8c",
                    }}
                  >
                    ACCOUNT
                  </p>
                }
                dataSource={switchitems}
                renderItem={(item) => (
                  <List.Item
                    style={{
                      border: "none",
                      justifyContent: "start",
                      gap: "10px",
                    }}
                  >
                    {
                      <>
                        <Switch defaultChecked />
                        <p>{item}</p>
                      </>
                    }
                  </List.Item>
                )}
              />
              <List
                header={
                  <p
                    style={{
                      margin: "0px",
                      fontWeight: "600px",
                      color: "#8c8c8c",
                    }}
                  >
                    APPLICATION
                  </p>
                }
                dataSource={switchitems1}
                renderItem={(item) => (
                  <List.Item
                    style={{
                      border: "none",
                      justifyContent: "start",
                      gap: "10px",
                    }}
                  >
                    {
                      <>
                        <Switch defaultChecked />
                        <p>{item}</p>
                      </>
                    }
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ minHeight: "600px" }}>
              <div
                style={{
                  marginBottom: "30px",
                  padding: "0 0 20px 0",
                  borderBottom: "1px solid #f0f0f0",
                }}
              >
                <Flex justify="space-between" style={{ marginBottom: "30px" }}>
                  <h3>Platform Settings</h3>
                  <a>
                    <EditFilled height={"30px"} />
                  </a>
                </Flex>
                <p>
                  Hi, I’m Alec Thompson, Decisions: If you can’t decide, the
                  answer is no. If two equally difficult paths, choose the one
                  more painful in the short term (pain avoidance is creating an
                  illusion of equality).
                </p>
              </div>
              <div>
                <Descriptions title="Oliver Liam" items={items} veti />
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ minHeight: "600px" }}>
              <h3 style={{ marginBottom: "30px" }}>Conversations</h3>
              <List
                style={{
                  minWidth: "240px",
                }}
                dataSource={listitems}
                renderItem={(item, index) => (
                  <List.Item
                    actions={[<a>REPLY</a>]}
                    style={{ border: "none" }}
                  >
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          shape="square"
                          size={46}
                          src={`https://demos.creative-tim.com/muse-ant-design-dashboard/static/media/face-3.e08fd425.jpg`}
                        />
                      }
                      title={<a href="javascrip:;">{item.title}</a>}
                      description={<p>{item.time}</p>}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </div>
      <div style={{ padding: "20px 20px 0 20px" }}>
        <Card>
          <h3 style={{ margin: "0px", fontWeight: "400px" }}>Projects</h3>
          <p
            style={{
              margin: "0px",
              fontWeight: "600px",
              color: "#8c8c8c",
            }}
          >
            Architects design houses
          </p>
          <Row gutter={16} style={{ margin: "30px 0px 0px 0px" }}>
            <Col span={18}>
              <List
                grid={{
                  gutter: 16,
                  column: 3,
                }}
                dataSource={data}
                renderItem={(item) => (
                  <List.Item style={{ margin: "0px" }}>
                    <div style={{ border: "0px" }}>
                      <div>
                        <Image
                          style={{
                            borderRadius: "8px",
                            boxShadow: "0 4px 6px rgb(0 0 0 / 12%)",
                          }}
                          height={120}
                          src={item.src}
                          alt=""
                        />
                      </div>
                      <div style={{ marginTop: "20px" }}>
                        <h4
                          style={{
                            margin: "0px",
                            color: "#8c8c8c",
                          }}
                        >
                          {item.title}
                        </h4>
                        <p
                          style={{
                            marginTop: "15px",
                            color: "#8c8c8c",
                          }}
                        >
                          {item.content}
                        </p>
                        <Row style={{ marginTop: "20px" }}>
                          <Col span={12}>
                            <Button>VIEW PROJECT</Button>
                          </Col>
                          <Col
                            span={12}
                            style={{ position: "absolute", right: "10px" }}
                          >
                            <Avatar.Group>
                              <Avatar
                                size="small"
                                style={{
                                  backgroundColor: "#1677ff",
                                }}
                                src="https://demos.creative-tim.com/muse-ant-design-dashboard/static/media/face-3.e08fd425.jpg"
                              />
                              <Avatar
                                size="small"
                                style={{
                                  backgroundColor: "#1677ff",
                                }}
                                src="https://demos.creative-tim.com/muse-ant-design-dashboard/static/media/face-3.e08fd425.jpg"
                              />
                              <Avatar
                                size="small"
                                style={{
                                  backgroundColor: "#1677ff",
                                }}
                                src="https://demos.creative-tim.com/muse-ant-design-dashboard/static/media/face-3.e08fd425.jpg"
                              />
                              <Avatar
                                size="small"
                                style={{
                                  backgroundColor: "#1677ff",
                                }}
                                src="https://demos.creative-tim.com/muse-ant-design-dashboard/static/media/face-3.e08fd425.jpg"
                              />
                            </Avatar.Group>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </List.Item>
                )}
              />
            </Col>
            <Col span={6}>
              <Dragger {...props}>
                <Button
                  style={{ width: "100%", height: "100%" }}
                  type="text"
                  icon={<UploadOutlined />}
                >
                  Click to Upload
                </Button>
              </Dragger>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
}
export default Profile;
