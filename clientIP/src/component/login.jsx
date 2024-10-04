
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");  // Add state to handle errors
  const navigate = useNavigate();

  useEffect(() => {
    google.accounts.id.initialize({
      // fill this with your own client ID
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      // callback function to handle the response
      callback: async (response) => {
        console.log("Encoded JWT ID token: " + response.credential)
        const { data } = await axios.post('http://localhost:3000/auth/google', {
          googleToken: response.credential,
        });

        localStorage.setItem('access_token', data.access_token);
        Swal.fire({
          icon:"success",
          title:"Login Succes"
        })
        // navigate to the home page or do magic stuff
        navigate('/')
      },
    });
    google.accounts.id.renderButton(
      // HTML element ID where the button will be rendered
      // this should be existed in the DOM
      document.getElementById('buttonDiv'),
      // customization attributes
      { theme: 'outline', size: 'large' },
    );
    // to display the One Tap dialog, or comment to remove the dialog
    google.accounts.id.prompt();
  }, []);


  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message before making the request

    try {
      const { data } = await axios({
        url: `http://localhost:3000/login`,
        method: "post",
        data: {
          email,
          password,
        },
      });

      console.log(data,"ini data login"); // Check what data is returned

      localStorage.setItem("access_token", data.acces_token);
      navigate("/"); // Navigate on successful login
    } catch (error) {
      // Enhanced error handling
      if (axios.isAxiosError(error)) {
        // Log the error message for debugging
        console.error('Axios error message:', error.message);
        setError('Login failed. Please check your credentials and try again.');
      } else {
        console.error('Unexpected error:', error);
        setError('An unexpected error occurred. Please try again later.');
      }
    }
  };
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-blue-100 via-green-100 to-blue-200 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-10 w-3/4 max-w-4xl">
        <h3 className="text-2xl mb-4 flex justify-center text-gray-700">
          Login
        </h3>
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
              Log in to your account
            </h2>

            <form onSubmit={handleLogin}>
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
                className="w-full sm:w-auto px-5 py-3 text-white bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-500 ease-in-out focus:ring-4 focus:outline-none focus:ring-green-300 font-medium text-sm text-center item-center"
              >
                Submit
              </button>
              <br/>
              <div
              className="w-full sm:w-auto px-5 py-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-500 ease-in-out focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium text-sm text-center"
              id="buttonDiv"></div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
