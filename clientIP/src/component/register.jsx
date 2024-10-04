import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios({
        url: "http://localhost:3000/register",
        method: "post",
        data: {
          email,
          password,
        },
      });
      Swal.fire({
        icon:"success",
        title:"Registrasion Succes"})
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className="w-screen h-screen bg-gradient-to-r from-blue-100 via-green-100 to-blue-200 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-10 w-3/4 max-w-4xl">
        <h3 className="text-2xl mb-4 flex justify-center text-gray-700">Register</h3>
        <h1 className="mb-8 text-3xl font-bold flex justify-center text-gray-800">
          Welcome to TaniMap
        </h1>
        <div className="flex">
          <div className="w-1/2 flex justify-center items-center">
            <img
              alt="A cozy living room with a sofa, coffee table, and wall art"
              className="rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
              height={500}
              src="https://storage.googleapis.com/a1aa/image/kvMjpmfTMC0Of02n9DkbeCrJxw22vAVV41epZqWcFfV7sRYcC.jpg"
              width={300}
            />
          </div>
          <div className="w-1/2 pl-10">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">
              Please register your account
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
                  id="email"
                  placeholder="Enter email address ..."
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out"
                  id="password"
                  placeholder="Enter your password ..."
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-3 text-white bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-500 ease-in-out focus:ring-4 focus:outline-none focus:ring-green-300 font-medium text-sm text-center"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
