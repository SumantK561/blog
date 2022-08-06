import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CardSearch from "./CardSearch";

export default function Allposts() {
  const [category, setCategory] = useState([]);
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");

  const showCategory = (e) => {
    axios
      .get("http://127.0.0.1:8000/api/categoryView")
      .then((e) => {
        setCategory(e.data);
      })
      .catch(() => {
        alert("Internal Error ... Please Check AllPosts", e);
       
      });
  };
  const showPost = (e) => {
    axios
      .get("http://127.0.0.1:8000/api/postView")
      .then((e) => {
        setPost(e.data);
        localStorage.setItem("allpost", JSON.stringify(e.data));
      })
      .catch(() => {
        alert("Internal Error ... Please Check Allposts", e);
        
      });
  };
  useEffect(() => {
    showCategory();
    showPost();
  }, []);
  const getCategoryId = (id) => {
    const item = JSON.parse(localStorage.getItem("allpost")).filter((ele) => {
      return id === ele.category_id;
    });
    setPost(item);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  console.log(search);
  const orig = "http://localhost:8000/uploads/post/";

  return (
    <>
      <div className="flex justify-center w-full">
        <input
          type="text"
          onChange={handleChange}
          style={{textAlign:"center",fontWeight:"bold"}}
          className="px-2 py-1 h-8 border border-solid border-zinc-600 rounded-full text-sm leading-snug shadow-none outline-none focus:outline-none w-full font-normal flex-1 border-l-0 "
          placeholder="Search All Posts ..."
        />
      </div>
<br/>
      <div className=" flex mx-6 border border-solid rounded-lg bg-amber-100">
        <div className="flex flex-col p-3 w-44 ">
          <h4 className="text-3xl underline">Categories</h4>
          <button className="text-2xl   text-blue-900 font-serif" onClick={showPost}>
            All
          </button>

          {category.map((e, index) => {
            console.log(e);
            return (
              <>
                <button
                  className="text-2xl text-rose-900 font-serif"
                  onClick={() => getCategoryId(e.category_id)}
                >
                  {e.name}{" "}
                </button>
              </>
            );
          })}
        </div>
        <div className="w-0.5 p-0.5 bg-black "></div>

        <div className=" mt-8  ml-5  grid grid-cols-4 gap-6">
          {search === "" ? (
            post.map((e) => {
              return (
                <>
                  <div className=" bg-slate-300 max-w-xs rounded-md overflow-hidden shadow-lg">
                    <img
                      className="w-3/4 h-24 m-auto mt-3"
                      src={orig + e.image}
                      alt="Sorry...Image Not Found..."
                    />
                    <div className="px-6 py-4">
                      <p className="text-xl my-1">{e.title}</p>
                      <br/>
                      <Link
                        to={"/post/" + e.post_id}
                        class="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <CardSearch search={search} post={post} />
          )}
        </div>
      </div>
    </>
  );
}
