import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [count, setCount] = useState("");
  const [discount, setDiscount] = useState("");
  const [row, setRow] = useState("");
  const handleAdd = () => {
    console.log("them");
    if (!name || !count || !discount) {
      console.error("chưa nhap dủ thong tin");
      alert("chưa nhap dủ thong tin");
    } else {
      let product = [...products];
      product.push({
        name: name,
        count: count,
        discount: discount,
      });
      setProducts(product);
      setCount("");
      setName("");
      setDiscount("");
    }
  };
  const handleDel = (index) => {
    let product = [...products];
    product.splice(index, 1);
    setProducts(product);
  };
  const handleEdit = (p, index) => {
    setName(p.name);
    setCount(p.count);
    setDiscount(p.discount);
    setRow(index + 1);
  };
  const handleUp = () => {
    let product = [...products];
    product[row - 1] = {
      name: name,
      count: count,
      discount: discount,
    };
    setProducts(product);
    setCount("");
    setName("");
    setDiscount("");
    setRow("");
  };
  return (
    <>
      <div>
        <div>
          <h1>Nhập sản phẩm</h1>
          <div>
            <label htmlFor="">Tên sản phẩm</label>
            <input
              type="text"
              placeholder="nhập tên sp"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Gía sản phẩm</label>
            <input
              type="text"
              placeholder="nhập giá sp"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Giảm giá</label>
            <input
              type="text"
              placeholder="giảm giá %"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </div>
          <div>
            {row ? (
              <button onClick={handleUp}>Cập nhật</button>
            ) : (
              <button onClick={handleAdd}>Thêm sản phẩm</button>
            )}
          </div>
        </div>
        <div>
          <div>
            <h1>Danh sách sản phẩm</h1>
          </div>
          <table>
            <tr>
              <th>Số tt</th>
              <th>Tên sp</th>
              <th>Gía gốc</th>
              <th>Giam giá</th>
              <th>Gía sau giảm</th>
              <th></th>
            </tr>
            {products.map((p, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{p.name}</td>
                  <td>
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(p.count)}
                  </td>
                  <td>{p.discount}%</td>
                  <td>
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(p.count - (p.count * p.discount) / 100)}
                  </td>
                  <td>
                    <button onClick={() => handleDel(index)}>xóa</button>
                    <button onClick={() => handleEdit(p, index)}>sửa</button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
