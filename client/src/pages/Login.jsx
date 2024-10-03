import wave01 from "../assets/wave01.png";
import wave02 from "../assets/wave02.png";
import wave03 from "../assets/wave03.png";
import bigsun from "../assets/bigsun.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/apis/login", {
        email,
        password,
      });

      localStorage.setItem("access_token", data.access_token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <body className="bg-gradient-to-t from-[#e4d9c7ff] to-[#e4d9c7ff] relative min-h-screen">
      <div className="absolute bottom-0 left-0 right-0">
        <img
          src={bigsun}
          alt="sun"
          className="absolute w-full bottom-0 shadow-lg"
        />
        <img
          src={wave03}
          alt="wave1"
          className="absolute w-full bottom-0 shadow-lg"
        />
        <img
          src={wave02}
          alt="wave2"
          className="absolute w-full bottom-0 shadow-lg"
        />
        <img
          src={wave01}
          alt="wave3"
          className="absolute w-full bottom-0 shadow-sm"
        />
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-beige-100">
        <div className="relative p-1 bg-gradient-to-t from-[#fef7f1ff] via-[#fef7f1ff] to-[#e79956] rounded-lg">
          <div className="rounded-md w-full max-w-md p-8 space-y-6 bg-[#92bcbeff]">
            <h2 className="text-3xl font-bold text-center text-brown-600 text-[#263E40]">
              Login
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-brown-400"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  className="w-full px-4 py-2 border border-brown-300 rounded-lg shadow-sm focus:outline-none focus:ring-brown-500 focus:border-brown-500 bg-beige-50"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-brown-400"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  className="w-full px-4 py-2 border border-brown-300 rounded-lg shadow-sm focus:outline-none focus:ring-brown-500 focus:border-brown-500 bg-beige-50"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-400 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-brown-400"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#263e40] text-[#fef7f1ff] py-2 rounded-lg shadow-lg hover:bg-brown-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brown-500"
              >
                Sign in
              </button>

              <p className="text-sm font-light text-brown-400">
                No Account?{" "}
                <a
                  href="/register"
                  className="font-medium text-[977458ff] hover:text-[#ffffff]"
                >
                  Register here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div id="buttonDiv"></div>;
    </body>
  );
}
