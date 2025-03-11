import Pagelayout from "./components/Pagelayout/Pagelayout";
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Table from "./components/Table/Table";
import Billing from "./components/Billing/Billing";
import Listmus from "./components/Listmus/Listmus";
import Users from "./components/Users/Users";
import Usercreate from "./components/Users/Usercreate";
import Useredit from "./components/Users/Useredit";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pagelayout />}>
            <Route index element={<Home />} />
            <Route path="table" element={<Table />} />
            <Route path="profile" element={<Profile />} />
            <Route path="billing" element={<Billing />} />
            <Route path="listmus" element={<Listmus />} />
            <Route path="users" element={<Users />} />
            <Route path="users/create" element={<Usercreate />} />
            <Route path="users/edit" element={<Useredit />} />
          </Route>
          <Route path="signin" element={<Signin />}></Route>
          <Route path="signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
