import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Post = () => {
  const [item, setItem] = useState();
  const [comment, setComment] = useState("");
  const [commentUpdate, setCommentUpdate] = useState("");
  const [state, setState] = useState("");
  const [editState, setEditState] = useState(false);
  const [updateId, setUpdateId] = useState("");

  const user = JSON.parse(localStorage.getItem("token"));

  const { id } = useParams();
  const showPost = (e) => {
    axios
      .get(`http://127.0.0.1:8000/api/postDetail/${id}`,   { headers: {"Authorization" : `Bearer ${user.token}`}} )
      .then((e) => {
        console.log(e.data);
        setItem(e.data);
      })
      .catch(() => {
        alert("Internal Error ... Please Check Post - ShowPost", e);
        
      });
  };
  const editpost = (id, commentOwner) => {
    if (commentOwner === user.userId) {
      setEditState(true);
      setUpdateId(id);
    } else {
      alert("Not Allowed To Edit ... ");
    }
  };

  const deleteComment = (id, commentOwner, e) => {
    console.log("comment id", id);
    if (user.userId === commentOwner || user.userId === item.post.user_id) {
      axios
        .delete(`http://127.0.0.1:8000/api/commentDelete/${id}`)
        .then((e) => {
          alert(e.data);
          setState("Deleted Successfully ...");
        })
        .catch(() => {
          alert("Internal Error ... Please Check Post - DeleteComment ...", e);
          
        });
    } else {
      alert("Not Allowed To Delete ...");
    }
  };

  const submitUpdateForm = (e) => {
    e.preventDefault();
    console.log(commentUpdate);
    const data = new FormData();
    data.append("img_text", commentUpdate);
    console.log(updateId);

    axios
      .post(`http://127.0.0.1:8000/api/commentUpdate/${updateId}`, data)
      .then((e) => {
        alert(e.data);

        setEditState(false);
      })
      .catch((e) => {
        alert("Internal Error ... Please Check Post - SubmitUpdateForm", e);
        console.log(e);
      });

    
    setCommentUpdate("");
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(comment);
    const data = new FormData();
    data.append("img_text", comment);
    data.append("user", user.userId);
    data.append("post", item.post.post_id);

    axios
      .post("http://127.0.0.1:8000/api/commentStore", data)
      .then((e) => {
        alert(e.data);
      })
      .catch(() => {
        alert("Login To Comment...", e);
        
      });

    
    setComment("");
  };
  useEffect(() => {
    showPost();
  }, [comment, state, editState]);
  const path = "http://localhost:8000/uploads/post/";
  return (
    <>
      {item ? (
        <>
          {" "}
          <div className="flex justify-around">
            <div className="w-80 m-4">
              <img className="rounded-lg" src={path + item.post.image} alt="" />
            </div>
            <div className="w-1/3">
              <form onSubmit={submitForm}>
                <label className="block" htmlFor="Name">
                  {" "}
                  Comment here
                </label>
                <input
                  type="text"
                  name="comment"
                  placeholder="Comment here"
                  value={comment}
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
                <div className="flex justify-center">
                  <button
                    className="w-1/2 px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                    onClick={submitForm}
                  >
                    Comment{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className=" w-screen bg-slate-100 flex">
            <div className="inner  bg-slate-100 p-3">
              <div className="my-5">
                <label className="text-2xl"> Title :</label>
                <span className="text-xl ml-2">{item.post.title}</span>
              </div>
              <div className="my-5">
                <label className="text-2xl"> Author :</label>
                <span className="text-xl ml-2">{item.Author}</span>
              </div>
              <div>
                <label className="text-2xl">
                  {" "}
                  Category : <span className="text-xl">
                    {item.Category}
                  </span>{" "}
                </label>
              </div>
              <div>

                <label className="text-2xl"> Description :</label>
               <p>{item.post.desc}</p>
              </div>
              <div>
                <label className="text-2xl"> Comments :</label>
                <ul>
                  {item.comments.map((ele) => {
                    return (
                      <>
                        <li className="">
                          {ele.img_text}
                          <button
                            onClick={() => editpost(ele.id, ele.user_id)}
                            className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center ml-2 mb-2"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteComment(ele.id, ele.user_id)}
                            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-1.5 text-center ml-2 mb-2"
                          >
                            Delete
                          </button>
                        </li>
                      </>
                    );
                  })}
                  {editState ? (
                    <div className="w-1/3">
                      <form onSubmit={submitUpdateForm}>
                        <label className="block" htmlFor="Name">
                          {" "}
                          Comment here
                        </label>
                        <input
                          type="text"
                          name="comment"
                          placeholder="Comment here"
                          value={commentUpdate}
                          onChange={(e) => {
                            setCommentUpdate(e.target.value);
                          }}
                          className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                        />
                        <div className="flex justify-center">
                          <button
                            className="w-1/2 px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                            onClick={submitUpdateForm}
                          >
                            update{" "}
                          </button>
                        </div>
                      </form>
                    </div>
                  ) : (
                    ""
                  )}
                </ul>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading</p>
      )}
    </>
  );
};

export default Post;
