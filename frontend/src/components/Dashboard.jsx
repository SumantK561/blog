import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import CategoryPanel from './CategoryPanel';
import PostPanel from './PostPanel.jsx';

export default function Dashboard() {

    const [item, setItem] = useState("");
    const [status, setStatus] = useState("");
    const token = JSON.parse(localStorage.getItem('token'));

    const navigate = useNavigate()
    
    const { id } = useParams();
    
    const submitForm = (e) => {
        e.preventDefault();

    }
    const submitPostForm = (e)=>{
        e.preventDefault();

    }
    const getUser = (e) => {
        if(token.userId === id){
        axios.get(`http://127.0.0.1:8000/api/userView/${id}` , { headers: {"Authorization" : `Bearer ${token.token}`}})
            .then((e) => {
                console.log(e.data);
                setItem(e.data);

            })
            .catch((e) => {
                if( e.response.status === 401){
                    navigate('/login');
                }else{

                    console.log("Internal Error ... Please Check Dashboard");
                }
            });
        }
        else{
           navigate(`/logout/${token.userId}`)
        }
    }

    useEffect(() => {
        getUser();

    }, []);
    const orig = 'http://localhost:8000/';

    return(
        <>
            <div className="container mx-auto bg-blue-600 my-5 p-5">
                <div className=" ">
                    {/* Left Side */}
                    <div className="w-full  md:mx-2 md:flex no-wrap">
                        {/* Profile Image */}
                        <div className="bg-white  rounded-md p-3 border-t-4 border-transparent md:w-1/6 justify-center  ">
                            <div className="image  mt-8  overflow-hidden">
                                <img className="h-auto w-full mx-auto" src={orig + item.image} alt="" />
                            </div>
                        </div>
                        <div className="w-full md:w-9/12 mx-2 h-64">
                            {/* Profile tab */}
                            {/* About Section */}
                            <div className="bg-white p-3 shadow-sm rounded-sm">
                                <div className="flex items-center uppercase pace-x-2 font-bold text-gray-900 leading-8">

                                    <span className="tracking-wide">About</span>
                                </div>
                                <div className="text-gray-700">
                                    <div className=" text-sm">
                                        <div className="">
                                            <h1 className="text-gray-900 capitalize font-bold text-xl leading-8 my-1">Name: {item.name}</h1>
                                            
                                            <div className="px-4 py-2 font-bold"><h4>Mail : {item.email}</h4></div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2  capitalize  font-semibold">Role :&nbsp; <strong>{item.role}</strong> </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='flex' ><button onClick={()=>{ setStatus("category")}} className="block justify-center text-black text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-400 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                                    Category</button>
                                    &nbsp;&nbsp;
                                    <button onClick={()=>{setStatus("post");}} className="block  text-black text-sm font-semibold rounded-lg bg-blue-600 hover:bg-blue-400 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                                        Post</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-evenly' >

                {/* category or post */}

                {
                    status ==="" ? "" :(status === "category" ? <CategoryPanel/> : <PostPanel/>)
                }


            </div>
        </>
    );
}