import Header from "./components/Header";
import {Routes, Route} from "react-router-dom"
import Blogs from "./pages/Blogs";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserBlogs from "./pages/UserBlogs";
import CreateBlog from "./pages/CreateBlog";
import BlogDetails from "./pages/BlogDetails";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>    
    <Header/>
    <Toaster />
    <Routes> 
      <Route path ="/" Component={Blogs}/>   
      <Route path ="/blogs" Component={Blogs}/>  
      <Route path="/my-blogs" Component={UserBlogs} />
      <Route path = '/blog-details/:id' Component={BlogDetails} />
      <Route path="/create-blog" Component={CreateBlog} />
      <Route path="/login" Component={Login} />      
      <Route path="/register" Component={Register} />
    </Routes>
    </>
  );
}

export default App;
