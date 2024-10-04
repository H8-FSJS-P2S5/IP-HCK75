import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function FormCreate() {
  let { id } = useParams()

  const [name, setName] = useState("");
  const [type, setType] = useState(1);
  const [watersNeeds, setWater] = useState("");
  const [lightNeeds, setLight] = useState("");
  const [soilType, setSoil] = useState("");
  const [temperatureRange, setTemperature] = useState("");
  const [imageUrl, setUrl] = useState("");
  const navigate = useNavigate();

  console.log(name,type);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("access_token");

    try {
      const { data } = await axios({
        url: "http://localhost:3000/plants",
        method: "post",
        data: {
          name,
          type,
          watersNeeds,
          lightNeeds,
          temperatureRange,
          soilType,
          imageUrl,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      navigate("/");
    } catch (error) {
      console.log(error);
      
      console.error("Error details:", error.response?.data || error);
    }
  };

  return (
    <>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md py-8">
        <h1 className="text-2xl font-bold mb-6 text-black">New Plant</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Plant name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="type"
            >
              Type <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="number" //
              name="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder=""
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="waterNeeds"
            >
              Water need <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="text"
              name="watersNeeds"
              value={watersNeeds}
              onChange={(e) => setWater(e.target.value)}
              placeholder=""
            />
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="lightNeed"
              >
                Light Need <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg"
                type="text"
                name="lightNeeds"
                value={lightNeeds}
                onChange={(e) => setLight(e.target.value)}
                placeholder=""
              />
            </div>
            <div className="w-1/2 pl-2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="temperatureRange"
              >
                Temperature Range <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg"
                type="text"
                name="temperatureRange"
                value={temperatureRange}
                onChange={(e) => setTemperature(e.target.value)}
                placeholder=""
              />
            </div>
            <div className="w-1/2 pl-2">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="soilType"
              >
                Soil Type <span className="text-red-500">*</span>
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg"
                type="text"
                name="soilType"
                value={soilType}
                onChange={(e) => setSoil(e.target.value)}
                placeholder=""
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="imageUrl"
            >
              Image URL
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg"
              type="text"
              name="imageUrl"
              value={imageUrl}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter image URL"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="px-6 py-2 border rounded-lg text-gray-700 border-gray-300 hover:bg-gray-100"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
