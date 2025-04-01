import React, { useEffect, useState, useRef } from "react";
import Header from "../Header/Header";
import { Space, Button, Flex, Popconfirm, Table, Input} from "antd";
import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import axiosClient from "../../api/axiosClient";
import { useQuery } from 'react-query'
import dayjs from "dayjs";
function Post() {
  const handleDelete = (id) => {
    axiosClient.delete("http://localhost:3000/posts/" + id)
  };
  const cancel = (e) => {
    console.log(e);
  };
  async function fetchUsers() {
    const res = await axiosClient.get("/posts");
    return res.data;
    }
  const { data, error, isError, isLoading } = useQuery(['post'], fetchUsers)
  const title = "Posts";
  const getTitle = () => {
    return title;
  };
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    filterDropdownProps: {
      onOpenChange(open) {
        if (open) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      ...getColumnSearchProps("title"),
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "description",
      dataIndex: "description",
      key: "description",
      ...getColumnSearchProps("description"),
      sorter: (a, b) => a.age - b.age,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Date-create",
      dataIndex: "created_at",
      key: "created_at",
      render: (_, record) => (
        <>{dayjs(record.created_at).format("DD-MM-YYYY HH:mm:ss")}</>
      ),
      sorter: (a, b) => dayjs(a.created_at) - dayjs(b.created_at),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Date-update",
      dataIndex: "updated_at",
      key: "updated_at",
      render: (_, record) => (
        <>{dayjs(record.updated_at).format("DD-MM-YYYY HH:mm:ss")}</>
      ),
      sorter: (a, b) => dayjs(a.updated_at) - dayjs(b.updated_at),
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link
            to={{
              pathname: "/users/edit/" + record.id,
            }}
          >
            Update
          </Link>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => handleDelete(record.id)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <a href="javascript:;">Delete</a>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  if (isLoading) {
    return <span>Đang tải...</span>
  }
  return (
    <>
      <Header getTitle={getTitle} />
      <div
        style={{
          position: "absolute",
          top: "0px",
          zIndex: "0",
          width: "80%",
          height: "100%",
          padding: "100px 20px 0 20px",
        }}
      >
        <Flex justify="space-between">
          <h1>Danh sách post</h1>{" "}
          <Button>
            <Link to="/post/create">Tạo Post</Link>
          </Button>
        </Flex>
        <Table
          columns={columns}
          rowKey={(record) => record.id}
          dataSource={data}
        />
      </div>
    </>
  );
}
export default Post;