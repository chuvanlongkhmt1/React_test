import React from "react";
import { HeartFilled } from "@ant-design/icons";
import { Flex, Menu } from "antd";
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
    label: "Blog",
    key: "blog",
  },
  {
    label: "License",
    key: "license",
  },
];
const Footer = () => {
  return (
    <Flex style={{ alignItems: "center", justifyContent: "space-between", paddingLeft:"20px"}}>
      <div>
        ©{new Date().getFullYear()}, made with
        <HeartFilled style={{ color: "red" }} />
        byCreative Timfor a better web.
      </div>
      <a href="">
        <Menu
          items={items}
          style={{
            background: "none",
            display: "flex",
            borderInlineEnd: "none !important",
            border: "none",
            overflow: "none",
          }}
        />
      </a>
    </Flex>
  );
};
export default Footer;
