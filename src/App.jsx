import Pagelayout from "./components/Pagelayout/Pagelayout";
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Table from "./components/Table/Table";
import Post from "./components/Post/Post.jsx";
import ProjectList from "./components/Post/ProjectList.jsx";
import PostCreate from "./components/Post/PostCreate.jsx";
import PostEdit from "./components/Post/PostEdit.jsx";
import Billing from "./components/Billing/Billing";
import Listmus from "./components/Listmus/Listmus";
import GroupUser from "./components/Groupuser/GroupUser.jsx";
import GroupCreate from "./components/Groupuser/GroupCreate.jsx";
import GroupEdit from "./components/Groupuser/GroupEdit.jsx";
import GroupView from "./components/Groupuser/GroupView.jsx";
import Users from "./components/Users/Users";
import Usercreate from "./components/Users/Usercreate";
import Useredit from "./components/Users/Useredit";
import { BrowserRouter, Routes, Route } from "react-router";
import Profile from "./components/Profile/Profile";
import { useState, useEffect } from "react";
import { UserContext } from "./contexts/UserContext.jsx";
import axiosClient from "./api/axiosClient"
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
function App() {
  const [user, setUser] = useState(null);
  const fetchUsers = async () => {
    const token = localStorage.getItem("token")
    if(!token) return;
    const res = await axiosClient.get("/profile");
    setUser(res.data.user);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            {/* {user == null ? ( */}
            <Route>
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
            </Route>
            {/* ) : ( */}
            <Route exact path="/" element={<Pagelayout />}>
              <Route index element={<Home />} />
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
              <Route path="posts" element={<Post />} />
              <Route path="projectlist" element={<ProjectList />} />
              <Route path="posts/create/" element={<PostCreate />} />
              <Route path="posts/edit/:id" element={<PostEdit />} />
            </Route>
            {/* )} */}
        </Routes>
        </BrowserRouter>
      </UserContext.Provider> 
    </QueryClientProvider>
  );
}
export default App;
