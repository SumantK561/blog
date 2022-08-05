import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    
      <div className="absolute w-full h-full bg-gray-900" id="body-divH">
        <div>
          <div class="flex mt-16 ml-5 justify-center">
            <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
              <img
                class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src="https://images.pexels.com/photos/6953871/pexels-photo-6953871.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <div class="p-6 flex flex-col justify-start">
                <h3 class="text-gray-900 text-center text-xl font-medium mb-2">
                  WELCOME 
                </h3>
                <p class="text-black-700 text-center mt-3 text-base mb-4">
                  This Platform Allows You To Express Your Ideas With Other Community Members...
                  <br/>
                  <br/>
                  <b>Let's Go Blogging...</b>
                </p>
                <NavLink
                  to={"/Allposts"}
                  className=" inline-block px-6 mt-16 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 text-center focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Explore All Posts
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
}
