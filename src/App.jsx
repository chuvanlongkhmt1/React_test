import Pagelayout from "./components/Pagelayout/Pagelayout";
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import Table from "./components/Table/Table";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pagelayout />}>
            <Route index element={<Home />} />
            <Route path="table" element={<Table />} />
          </Route>
          <Route path="signin" element={<Signin />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
