import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import imgicon from "../../assets/images/icondas.png";
import { Button } from "antd";
import {
  MenuFoldOutlined,
  FundOutlined,
  TableOutlined,
  CreditCardOutlined,
  CaretLeftOutlined,
  UserOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import styles from "./styles.module.scss";
import { Menu } from "antd";
const {
  slidebar,
  textdask,
  iconimg,
  brand,
  support,
  textwhile,
  texthelp,
  boxicon,
  boxsupport,
  boxmenu,
  pos,
  menuStyle,
} = styles;
const items = [
  {
    key: "1",
    label: (
      <div>
        <a className={textdask} href="">
          <div className={brand}>
            <img className={iconimg} src={imgicon} alt="" />
            <p>Muse Dashboard</p>
          </div>
        </a>
        <hr />
      </div>
    ),
    icon: <MenuFoldOutlined />,
    type: "group",
    children: [
      {
        key: "2",
        icon: <FundOutlined />,
        label: <Link to="/">Dashboard</Link>,
      },
      {
        key: "3",
        icon: <TableOutlined />,
        label: <Link to="/table">Table</Link>,
      },
      {
        key: "4",
        icon: <CreditCardOutlined />,
        label: "Billing",
      },
      {
        key: "5",
        icon: <CaretLeftOutlined />,
        label: "RTL",
      },
    ],
  },
  {
    key: "6",
    label: "Account Pages",
    type: "group",
    children: [
      {
        key: "7",
        icon: <UserOutlined />,
        label: "Profile",
      },
      {
        key: "8",
        icon: <LoginOutlined />,
        label: <Link to="/signin">Sign In</Link>,
      },
      {
        key: "9",
        icon: <LogoutOutlined />,
        label: "Sign Out",
      },
    ],
  },
];
function Slidebar() {
  return (
    <>
      <div className={pos}>
        <div className={boxmenu}>
          <Menu
            style={{
              background: "none",
            }}
            className={menuStyle}
            items={items}
          />

          <div className={boxsupport}>
            <div className={support}>
              <span className={boxicon}>
                <FundOutlined />
              </span>
              <h6 className={texthelp}>Need Help?</h6>
              <p className={textwhile}>Please check our docs</p>
              <a href="">
                <Button color="default" variant="outlined">
                  DOCUMENTATION
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Slidebar;
