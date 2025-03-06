import Pagelayout from "./components/Pagelayout/Pagelayout";
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Table from "./components/Table/Table";
import Billing from "./components/Billing/Billing";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Profile from "./components/Profile/Profile";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pagelayout />}>
            <Route index element={<Home />} />
            <Route path="table" element={<Table />} />
            <Route path="profile" element={<Profile />} />
            <Route path="billing" element={<Billing />} />
          </Route>
          <Route path="signin" element={<Signin />}></Route>
          <Route path="signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
