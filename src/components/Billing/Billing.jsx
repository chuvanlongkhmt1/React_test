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
  Progress,
  Row,
  Col,
  Card,
} from "antd";
import { UserOutlined, UploadOutlined, EditFilled } from "@ant-design/icons";
function Billing() {
  const title = "Billing";
  const getTitle = () => {
    return title;
  };
  return (
    <>
      <Header getTitle={getTitle} />
      <div style={{ padding: "20px 20px 0 20px" }}>
        <Row gutter={16}>
          <Col span={16}>
            <Row gutter={16}>
              <Col span={10}>
                <Card>a</Card>
              </Col>
              <Col span={7}>
                <Card>a</Card>
              </Col>
              <Col span={7}>
                <Card>a</Card>
              </Col>
              <Col span={24}>
                <Card>a</Card>
              </Col>
            </Row>
          </Col>
          <Col span={8}>
            <Card>a</Card>
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
