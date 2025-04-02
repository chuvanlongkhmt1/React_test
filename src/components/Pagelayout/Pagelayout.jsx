import Slidebar from "../Slidebar/Slidebar";
import Footer from "../Footer/Footer";
import { Layout } from "antd";
import { Outlet,} from "react-router-dom";
const {Sider, Content } = Layout;
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
          <Footer/>
        </Layout>
      </Layout>
    </div>
  );
}
export default Pagelayout;
