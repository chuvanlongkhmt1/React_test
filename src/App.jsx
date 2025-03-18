import Pagelayout from "./components/Pagelayout/Pagelayout";
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Table from "./components/Table/Table";
import Billing from "./components/Billing/Billing";
import Listmus from "./components/Listmus/Listmus";
import GroupUser from "./components/Groupuser/GroupUser.jsx";
import GroupCreate from "./components/Groupuser/GroupCreate.jsx";
import GroupEdit from "./components/Groupuser/GroupEdit.jsx";
import GroupView from "./components/Groupuser/GroupView.jsx";
import Users from "./components/Users/Users";
import Usercreate from "./components/Users/Usercreate";
import Useredit from "./components/Users/Useredit";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Profile from "./components/Profile/Profile";
import { useState, Component } from "react";

class App extends Component {
  // const [user, setUser] = useState([]);
  // setUser = { user };
  state = { user: null };
  setUser = (user) => {
    this.state({ user: user });
  };
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            {/* {this.state.user == null ? ( */}
            <Route
              path="/signin"
              element={<Signin user={this.state.user} setUser={this.setUser} />}
            ></Route>
            {/* ) : ( */}
            <Route path="/" element={<Pagelayout />}>
              <Route
                index
                element={<Home user={this.state.user} setUser={this.setUser} />}
              />
              <Route path="table" element={<Table />} />
              <Route path="profile" element={<Profile />} />
              <Route path="billing" element={<Billing />} />
              <Route path="listmus" element={<Listmus />} />
              <Route path="groupuser" element={<GroupUser />} />
              <Route path="groupuser/create/" element={<GroupCreate />} />
              <Route path="groupuser/edit/:id" element={<GroupEdit />} />
              <Route path="groupuser/view/:id" element={<GroupView />} />
              <Route path="users" element={<Users />} />
              <Route path="users/create/" element={<Usercreate />} />
              <Route path="users/edit/:id" element={<Useredit />} />
            </Route>
            {/* )} */}
          </Routes>
          <Routes>
            <Route path="signup" element={<Signup />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
