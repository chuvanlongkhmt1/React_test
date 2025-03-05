import React, { useState } from "react";
import styles from "./styles.module.scss";
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
} from "antd";
import { UserOutlined, UploadOutlined, EditFilled } from "@ant-design/icons";
function Tables() {
  const { Column, ColumnGroup } = Table;
  const [position, setPosition] = useState("end");
  const [position1, setPosition1] = useState("stores");
  const data = [
    {
      key: "1",
      author: ["John Brown", "michael@mail.com"],
      functionn: ["Manager", "Organization"],
      employed: "2014-12-24",
      status: 1,
    },
    {
      key: "2",
      author: ["John Brown", "michael@mail.com"],
      functionn: ["Manager", "Organization"],
      employed: "2014-12-24",
      status: 1,
    },
    {
      key: "3",
      author: ["John Brown", "michael@mail.com"],
      functionn: ["Manager", "Organization"],
      employed: "2014-12-24",
      status: 0,
    },
  ];
  const data1 = [
    {
      key: "1",
      companies: ["Spotify Version"],
      budget: 12,
      status: "done",
      completion: 40,
    },
    {
      key: "2",
      companies: ["Spotify Version"],
      budget: 0,
      status: "working",
      completion: 70,
    },
    {
      key: "3",
      companies: ["Spotify Version"],
      budget: 12,
      status: "canceled",
      completion: 40,
    },
  ];
  const props = {
    name: "file",
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <>
      <div style={{ padding: "20px 20px 0 20px" }}>
        <div
          style={{
            margin: "20px",
            backgroundColor: "white",
            borderRadius: "15px",
          }}
        >
          <div>
            <Flex wrap justify="space-between" style={{ padding: "16px" }}>
              <h4>Authors Table</h4>
              <Space>
                <Radio.Group
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                >
                  <Radio.Button value="start">start</Radio.Button>
                  <Radio.Button value="end">end</Radio.Button>
                </Radio.Group>
              </Space>
            </Flex>
          </div>
          <Table
            dataSource={data}
            pagination={false}
            style={{ borderBlockEnd: "15px" }}
          >
            <Column
              title="AUTHOR"
              dataIndex="author"
              key="author"
              render={(author) => (
                <>
                  <Flex align="center">
                    <Avatar
                      shape="square"
                      size="large"
                      icon={<UserOutlined />}
                    />
                    <div>
                      {author.map((a) => (
                        <p>{a}</p>
                      ))}
                    </div>
                  </Flex>
                </>
              )}
            />
            <Column
              title="FUNCTION"
              dataIndex="functionn"
              key="functionn"
              render={(functionn) => (
                <>
                  {functionn.map((f) => (
                    <p>{f}</p>
                  ))}
                </>
              )}
            />
            <Column
              title="STATUS"
              dataIndex="status"
              key="status"
              render={(status) => (
                <>
                  {status ? (
                    <Button type="primary">Online</Button>
                  ) : (
                    <Button color="default">Online</Button>
                  )}
                </>
              )}
            />
            <Column title="EMPLOYED" dataIndex="employed" key="employed" />
            <Column
              title="Action"
              key="action"
              render={() => (
                <Space size="middle">
                  <a>Edit</a>
                </Space>
              )}
            />
          </Table>
        </div>
        <div
          style={{
            margin: "20px 20px 0 20px",
            backgroundColor: "white",
            borderRadius: "15px",
          }}
        >
          <div>
            <Flex wrap justify="space-between" style={{ padding: "16px" }}>
              <h4>Projects Table</h4>
              <Space>
                <Radio.Group
                  value={position1}
                  onChange={(e) => setPosition1(e.target.value)}
                >
                  <Radio.Button value="all">All</Radio.Button>
                  <Radio.Button value="online">ONLINE</Radio.Button>
                  <Radio.Button value="stores">STORES</Radio.Button>
                </Radio.Group>
              </Space>
            </Flex>
          </div>
          <Table dataSource={data1} pagination={false}>
            <Column
              title="COMPANIES"
              dataIndex="companies"
              key="companies"
              render={(companies) => (
                <>
                  <Flex align="center">
                    <Avatar
                      shape="square"
                      size="large"
                      icon={<UserOutlined />}
                    />
                    <p>{companies}</p>
                  </Flex>
                </>
              )}
            />
            <Column
              title="BUDGET"
              dataIndex="budget"
              key="budget"
              render={(budget) => (
                <>
                  {budget ? (
                    <p>
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(budget)}
                    </p>
                  ) : (
                    <p>Not Set</p>
                  )}
                </>
              )}
            />
            <Column title="STATUS" dataIndex="status" key="status" />
            <Column
              title="COMPLETION"
              key="completion"
              render={(completion) => (
                <>
                  <div>
                    <Flex gap="small">
                      <Progress
                        percent={30}
                        percentPosition={{
                          align: "start",
                          type: "outer",
                        }}
                      />
                      <a>
                        <EditFilled />
                      </a>
                    </Flex>
                  </div>
                </>
              )}
            />
          </Table>
          <Upload {...props}>
            <div style={{ padding: "16px" }}>
              <Button type="dashed" icon={<UploadOutlined />}>
                Click to Upload
              </Button>
            </div>
          </Upload>
        </div>
      </div>
    </>
  );
}
export default Tables;
