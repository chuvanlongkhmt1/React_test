import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Flex, Avatar, List, Tag, Button, Modal } from "antd";
import {} from "@ant-design/icons";
import listmusApi from "../../api/listmusApi";
import Axios from "axios";
function Listmus() {
  //   useEffect(() => {
  //     const fetchListmus = async () => {
  //       const listmus = await listmusApi.getAll();
  //       console.log(listmus);
  //     };
  //     fetchListmus;
  //   });
  const [listmus, setListmus] = useState([]);
  const fetchProducts = async () => {
    const { data } = await Axios.get(
      "https://api.sampleapis.com/recipes/recipes"
    );
    const listmus = data;
    setListmus(listmus);
    console.log(listmus);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const title = "Listmus";
  const getTitle = () => {
    return title;
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
          //   backgroundImage:
          //     "url(https://zmp3-static.zmdcdn.me/skins/zmp3-v5.2/images/chart-new-release-vn.png)",
          //   backgroundPosition: "center",
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
        }}
      >
        <h1>Danh sách món ăn</h1>
        <List
          dataSource={listmus}
          renderItem={(item) => (
            <>
              <List.Item>
                <Flex
                  gap={10}
                  align="center"
                  style={{ minWidth: "600px", overflow: "hidden" }}
                >
                  <h1 style={{ minWidth: "30px" }}>{item.id}</h1>
                  <h1>-</h1>
                  <Avatar shape="square" size={44}>
                    <img src={item.photoUrl} alt="" />
                  </Avatar>
                  <div>
                    <h3>{item.title}</h3>
                    <Tag color="#87d068">{item.tags}</Tag>
                    <Flex>
                      <p color="#87d068">Xuất sứ: {item.cuisine},</p>
                      <p color="#87d068">
                        Nguyên liệu chính: {item.mainIngredient}
                      </p>
                    </Flex>
                  </div>
                </Flex>
                <p>tổng thời gian nấu: {item.totalTime} phút</p>
                <Button type="primary" onClick={showModal}>
                  Chi tiết
                </Button>
                <Modal
                  title={item.title}
                  open={isModalOpen}
                  onCancel={handleCancel}
                >
                  <Flex justify="space-around">
                    <p>Thời gian chuẩn bị: {item.prepTime}</p>
                    <p>Thời gian nấu: {item.cookTime}</p>
                    <p>Thời gian nấu: {item.totalTime}</p>
                  </Flex>
                  <p>Mô tả: {item.description}</p>
                  <p>
                    Tham khảo:
                    <a href={item.source} target="_blank">
                      tại đây
                    </a>
                  </p>
                </Modal>
              </List.Item>
            </>
          )}
        />
      </div>
    </>
  );
}
export default Listmus;
