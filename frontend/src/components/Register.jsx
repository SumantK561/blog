import React, { useState } from "react";
import "../App.css";
import axios from 'axios';


export default function Register() {

  
  const [name, setName] = useState("");
  const [email, setMail] = useState("");
  const [img, setImg] = useState("")
  const [password, setPassword] = useState("");

  const [role, setRole] = useState("");
  const submitForm = async (e) => {
      e.preventDefault();
      console.log({ name, email, img, password, role });

      const data = new FormData();
      data.append('name', name);
      data.append('email', email);
      data.append('image',img);
      data.append('role',role);
      data.append('password', password);


      axios.post('http://127.0.0.1:8000/api/store', data)
          .then((e) => {
              console.log(e);
              alert("Registered Successfully...");

          })
          .catch(() => {
              alert("User Already Registered OR Any Blank Field...", e);
              // console.log("error");
          });


      // console.warn(data);
      setName("");
      setMail("");
      setPassword("");

      setRole("");

  }
  return (
    <>
     
      
        <section className=" w-full h-full">
          <div
            className="absolute w-full h-full bg-gray-900"
             id="body-divR"
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full mt-11 lg:w-4/12 px-4">
                <div id="regcrd" className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg  border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h5 className="text-gray-600 text-sm font-bold">
                        Let's Register
                      </h5>
                    </div>
                    
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    
                    <form onSubmit={submitForm}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-center text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Name"
                          style={{ transition: "all .15s ease" }}
                          value={name}
                          onChange={(e) => { setName(e.target.value) }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-center text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          value={email} onChange={(e) => { setMail(e.target.value) }}
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-center text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Avatar
                        </label>
                        <input
                          type="file"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Avatar"
                          onChange={(e) => { setImg(e.target.files[0]) }}
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
                     

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-center text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Role
                        </label>
                        <input
                          type="text
                          "
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder=" Enter Role (Enter Default, if NA)"
                          value={role} onChange={(e) => { setRole(e.target.value) }}
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                     
                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="button"
                          onClick={submitForm}
                          style={{ transition: "all .15s ease" }}
                        >
                          Click Here To Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex flex-wrap mt-6">
                  <div className="w-1/2">
                    <a
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      className="text-gray-300"
                    >
                      <small>Forgot password?</small>
                    </a>
                  </div>
                  <div className="w-1/2 text-right">
                    <a
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      className="text-gray-300"
                    >
                      <small>Create new account</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </section>
    
    </>
  );
}