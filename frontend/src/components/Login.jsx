import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../App.css";


export default function Login() {

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

    const navigate = useNavigate();
  const submitdata = async (e) => {
      e.preventDefault();
      


      const data = new FormData();
      data.append('email',mail);
      data.append('password',password);


      axios.post('http://127.0.0.1:8000/api/login', data)
                  .then((e) => {
                      console.log(e);
                      localStorage.setItem('token',JSON.stringify(e.data));
                      const temp = e.data.userId;
                      console.log(temp);
                        navigate(`/Dashboard/${temp}`);
                      alert("Login Successfull ...")
                  
                  })
                  .catch(() => {
                      alert("Internal Error ... Please Check Login", e);
                      
                  });



      setMail("");
      setPassword("");
  }
  return (
    <>
     
      
        <section className="absolute w-full h-full">
          <div
            className="absolute w-full h-full bg-gray-900"
             id="body-div"
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div id="rcrd" className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg  border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3 ">
                      <h6 className="text-gray-600 text-sm font-bold ">
                        Sign in with credentials
                      </h6>
                    </div>
                    
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    
                    <form  onSubmit={submitdata}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-center text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          value={mail} onChange={(e) => { setMail(e.target.value) }}
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-center text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Password"
                          value={password} onChange={(e) => { setPassword(e.target.value) }}
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                     
                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="button"
                          onClick={submitdata}
                          style={{ transition: "all .15s ease" }}
                        >
                        Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          
        </section>
    
    </>
  );
}