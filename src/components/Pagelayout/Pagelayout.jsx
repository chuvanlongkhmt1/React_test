import Slidebar from "../Slidebar/Slidebar";
import Headerr from "../Header/Header";
import Footerr from "../Footer/Footer";
import { Layout, FloatButton } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Outlet, Link } from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;
function Pagelayout() {
  const siderStyle = {
    overflow: "auto",
    height: "100vh",
    position: "sticky",
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: "thin",
    scrollbarGutter: "stable",
    background: "#f5f5f5",
  };
  return (
    <div>
      <Layout>
        <Sider width={250} style={siderStyle}>
          <Slidebar />
        </Sider>
        <Layout>
          <FloatButton icon={<SettingOutlined />} />
          <Header style={{ background: "none", padding: "20px 50px" }}>
            <Headerr />
          </Header>
          <Content>
            <Outlet />
          </Content>
          <Footer>
            <Footerr />
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
export default Pagelayout;
