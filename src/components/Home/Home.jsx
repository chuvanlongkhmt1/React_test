import { Button } from "antd";
import { FloatButton } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import Header from "../Header/Header";
import { Line } from "@ant-design/charts";
function Home() {
  const data = [
    { year: "1991", value: 3 },
    { year: "1992", value: 4 },
    { year: "1993", value: 3.5 },
    { year: "1994", value: 5 },
    { year: "1995", value: 4.9 },
    { year: "1996", value: 6 },
    { year: "1997", value: 7 },
    { year: "1998", value: 9 },
    { year: "1999", value: 13 },
  ];
  const props = {
    data,
    xField: "year",
    yField: "value",
  };
  return (
    <>
      <div>
        <div>
          <div>
            <Line {...props} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
