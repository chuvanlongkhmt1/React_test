import Slidebar from "../Slidebar/Slidebar";
import Footerr from "../Footer/Footer";
import { Layout } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import ReactDOM from "react-dom/client";
import { Outlet, Link } from "react-router-dom";
const { Footer, Sider, Content } = Layout;
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
          <Content>
            <Outlet />
          </Content>
          <Footer>{/* <Footerr /> */}</Footer>
        </Layout>
      </Layout>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
export default Pagelayout;
