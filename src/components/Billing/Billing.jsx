import React, { useState } from "react";
import Header from "../Header/Header";
import {
  Space,
  Table,
  Radio,
  Flex,
  Button,
  Avatar,
  Tag,
  Divider,
  message,
  Upload,
  List,
  Row,
  Col,
  Card,
} from "antd";
import {
  WifiOutlined,
  CaretUpOutlined,
  PinterestOutlined,
  VerticalAlignBottomOutlined,
} from "@ant-design/icons";
function Billing() {
  const title = "Billing";
  const getTitle = () => {
    return title;
  };
  const data = [
    {
      date: "March, 01, 2021",
      code: "#MS-415646",
      money: "$180",
    },
    {
      date: "March, 01, 2021",
      code: "#MS-415646",
      money: "$180",
    },
    {
      date: "March, 01, 2021",
      code: "#MS-415646",
      money: "$180",
    },
    {
      date: "March, 01, 2021",
      code: "#MS-415646",
      money: "$180",
    },
    {
      date: "March, 01, 2021",
      code: "#MS-415646",
      money: "$180",
    },
  ];
  return (
    <>
      <Header getTitle={getTitle} />
      <div style={{ padding: "20px 20px 0 20px" }}>
        <Row gutter={20}>
          <Col span={16}>
            <Row gutter={20}>
              <Col span={12}>
                <Card
                  style={{
                    backgroundImage:
                      "url(https://demos.creative-tim.com/muse-ant-design-dashboard/static/media/info-card-3.e73b3934.jpg)",
                    backgroundPosition: "50%",
                    backgroundSize: "cover",
                    border: "none",
                  }}
                >
                  <div style={{ padding: "0 5px 15px 5px" }}>
                    <WifiOutlined
                      style={{ color: "white", fontSize: "200%" }}
                    />
                  </div>
                  <div>
                    <h3
                      style={{
                        color: "#fff",
                        marginBottom: "45px",
                        wordSpacing: "10px",
                        paddingTop: "16px",
                        fontSize: "20px",
                        fontWeight: "500",
                      }}
                    >
                      4562 1122 4594 7852
                    </h3>
                  </div>
                  <Flex style={{ alignItems: "flex-end" }}>
                    <div style={{ marginRight: "30px" }}>
                      <p
                        style={{
                          margin: "0px",
                          fontWeight: "600px",
                          color: "#fff",
                        }}
                      >
                        Card Holder
                      </p>
                      <h3 style={{ color: "#fff", marginBottom: "0px" }}>
                        Jack Peterson
                      </h3>
                    </div>
                    <div style={{ marginRight: "30px" }}>
                      <p
                        style={{
                          margin: "0px",
                          fontWeight: "600px",
                          color: "#fff",
                        }}
                      >
                        Expires
                      </p>
                      <h3 style={{ color: "#fff", marginBottom: "0px" }}>
                        11/22
                      </h3>
                    </div>
                    <div style={{ marginLeft: "auto", alignItems: "flex-end" }}>
                      <img
                        style={{ maxWidth: "50px" }}
                        src="https://demos.creative-tim.com/muse-ant-design-dashboard/static/media/mastercard-logo.e1b9bed1.png"
                        alt=""
                      />
                    </div>
                  </Flex>
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  style={{ padding: "14px", height: "100%" }}
                  title={
                    <div style={{ textAlign: "center" }}>
                      <Avatar
                        shape="square"
                        size={64}
                        style={{
                          backgroundColor: "#1890ff",
                          marginBottom: "16px",
                        }}
                      >
                        <CaretUpOutlined
                          style={{
                            color: "#fff",
                            fontSize: "200%",
                          }}
                        />
                      </Avatar>
                      <h4 style={{ marginBottom: "5px", fontWeight: "500" }}>
                        Salary
                      </h4>
                      <p
                        style={{
                          margin: "0px",
                          fontWeight: "600px",
                          color: "#8c8c8c",
                          fontSize: "12px",
                        }}
                      >
                        Belong Interactive
                      </p>
                    </div>
                  }
                >
                  <div style={{ textAlign: "center" }}>
                    <span style={{ fontSize: "25px", fontWeight: "600" }}>
                      +
                    </span>
                    <span style={{ fontSize: "20px", fontWeight: "600" }}>
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(2000)}
                    </span>
                  </div>
                </Card>
              </Col>
              <Col span={6}>
                <Card
                  style={{ padding: "14px", height: "100%" }}
                  title={
                    <div style={{ textAlign: "center" }}>
                      <Avatar
                        shape="square"
                        size={64}
                        style={{
                          backgroundColor: "#1890ff",
                          marginBottom: "16px",
                        }}
                      >
                        <PinterestOutlined
                          style={{
                            color: "#fff",
                            fontSize: "200%",
                          }}
                        />
                      </Avatar>
                      <h4 style={{ marginBottom: "5px", fontWeight: "500" }}>
                        Paypal
                      </h4>
                      <p
                        style={{
                          margin: "0px",
                          fontWeight: "600px",
                          color: "#8c8c8c",
                          fontSize: "12px",
                        }}
                      >
                        Freelance Paymente
                      </p>
                    </div>
                  }
                >
                  <div style={{ textAlign: "center" }}>
                    <span style={{ fontSize: "25px", fontWeight: "600" }}>
                      +
                    </span>
                    <span style={{ fontSize: "20px", fontWeight: "600" }}>
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(2000)}
                    </span>
                  </div>
                </Card>
              </Col>
              <Col span={24} style={{ marginTop: "24px" }}>
                <Card>a</Card>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Card>
              <Flex
                justify="space-between"
                style={{ padding: "0 5px 20px 5px", alignItems: "center" }}
              >
                <h3>Invoices</h3>
                <Button type="primary" style={{ padding: "20px" }}>
                  VIEW ALL
                </Button>
              </Flex>
              <List
                dataSource={data}
                renderItem={(item) => (
                  <List.Item
                    style={{
                      border: "none",
                      gap: "10px",
                    }}
                  >
                    {
                      <>
                        <div>
                          <h4>{item.date}</h4>
                          <p
                            style={{
                              margin: "0px",
                              color: "rgb(140, 140, 140)",
                            }}
                          >
                            {item.code}
                          </p>
                        </div>
                        <p
                          style={{
                            margin: "0px",
                            color: "rgb(140, 140, 140)",
                            fontSize: "12px",
                          }}
                        >
                          {item.money}
                        </p>
                        <Flex gap={7}>
                          <VerticalAlignBottomOutlined />
                          <p>PDF</p>
                        </Flex>
                      </>
                    }
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={16}>
            <Card>a</Card>
          </Col>
          <Col span={8}>
            <Card>a</Card>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default Billing;
