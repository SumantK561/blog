import {BrowserRouter , Routes, Route} from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import Register from "./components/Register";
import Allposts from "./components/Allposts";
import Dashboard from "./components/Dashboard";
import Protected from "./components/Protected";
import Post from "./components/Post";
import Category from "./components/Category";
import Logout from "./components/Logout";

function App() {
  return (


    <BrowserRouter>
    <Navbar/>
    <Routes>
       <Route path="/" element={<Home/>}/>

      <Route path="/Home" element={<Home/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
      <Route path="/Allposts" element={<Allposts/>}/>
      <Route element={<Protected />}>
      <Route path="/post/:id" element={<Post />} />
            
            <Route path="/Dashboard/:id" element={<Dashboard/>} />
            <Route path="/Dashboard" element={<Protected prop={"dashboard"} />} />
            <Route path="/category/:id" element={<Category />} />
     
      
      </Route>
      <Route path="/logout/:id" element={<Logout />} />
    </Routes>
    
    </BrowserRouter>
    
    
  );
  
}

export default App;
