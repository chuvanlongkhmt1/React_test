import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import {
  Table,
  Space,
  Button,
  Flex,
  Modal,
  Form,
  Input,
  Popconfirm,
} from "antd";
import {} from "@ant-design/icons";
import axios from "axios";
function Useredit() {
  return (
    <>
      <h1>test</h1>
      <Form>
        <h3>Cập nhật thông tin</h3>
        <Form.Item>
          <Input
          // value={name}
          // placeholder="Name"
          // onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Input
          // value={age}
          // placeholder="Age"
          // onChange={(e) => setAge(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button
            style={{
              width: "100%",
              height: "40px",
            }}
            type="primary"
            // onClick={handleClick2}
          >
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
export default Useredit;
