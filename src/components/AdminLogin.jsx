import React, { useState, useContext, useEffect } from "react";
import axios from "../api/axios";
import { FaTimes } from "react-icons/fa";
import AuthContext from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState("");
  const { setAuth } = useContext(AuthContext);
  const [content, setContent] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    if (successMsg) {
      setContent(
        <div className="toast">
          <div className="alert alert-info bg-blue-500">
            <span>
              {successMsg} <FaTimes onClick={setSuccessMsg("")} />
            </span>
          </div>
        </div>
      );
    } else if (errMsg) {
      setContent(
        <div className="toast">
          <div className="alert alert-info bg-red-500">
            <span>
              {errMsg} <FaTimes onClick={setErrMsg("")} />
            </span>
          </div>
        </div>
      );
    } else {
      setContent("");
    }
  }, [successMsg, errMsg]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await axios.post(
        "/users",
        { name, password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setAuth(response.data);
      localStorage.setItem("token", JSON.stringify(response.data));
      navigate("/admin");
      setSuccessMsg("Logged In");
    } catch (error) {
      console.log(error);
      setErrMsg("Invalid username or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold py-5">Login Page!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            {content}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="input input-bordered"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">
                {isLoading ? "Logging in..." : "Log in"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
