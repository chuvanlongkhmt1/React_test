import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Link, useLocation } from "react-router-dom";
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
function Slidebar() {
  const deletelocal = () => {
    localStorage.removeItem("token");
    window.location="/signin"
  };
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
          key: "/",
          icon: <FundOutlined />,
          label: <Link to="/">Dashboard</Link>,
        },
        {
          key: "/table",
          icon: <TableOutlined />,
          label: <Link to="/table">Table</Link>,
        },
        {
          key: "/billing",
          icon: <CreditCardOutlined />,
          label: <Link to="/billing">Billing</Link>,
        },
        {
          key: "/listmus",
          icon: <CreditCardOutlined />,
          label: <Link to="/listmus">Listmus</Link>,
        },
        {
          key: "/groupuser",
          icon: <CreditCardOutlined />,
          label: <Link to="/groupuser">Group Users</Link>,
        },
        {
          key: "/users",
          icon: <CreditCardOutlined />,
          label: <Link to="/users">Users</Link>,
        },
        {
          key: "/test",
          icon: <CaretLeftOutlined />,
          label: <Link to="/test">Test</Link>,
        },
      ],
    },
    {
      key: "6",
      label: "Account Pages",
      type: "group",
      children: [
        {
          key: "/profile",
          icon: <UserOutlined />,
          label: <Link to="/profile">Profile</Link>,
        },
        // {
        //   key: "signin",
        //   icon: <LoginOutlined />,
        //   label: <Link to="/signin">Sign In</Link>,
        // },
        {
          key: "Logout",
          icon: <LogoutOutlined />,
          label: (
            <Link onClick={deletelocal}>
              Log out
            </Link>
          ),
        },
      ],
    },
  ];

  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <>
      <div className={pos}>
        <div className={boxmenu}>
          <Menu
            style={{
              background: "none",
              borderInlineEnd: "none",
            }}
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
