
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FormEdit() {
  let { id } = useParams();

  const [name, setName] = useState("");
  const [type, setType] = useState(1);
  const [watersNeeds, setWater] = useState("");
  const [lightNeeds, setLight] = useState("");
  const [soilType, setSoil] = useState("");
  const [temperatureRange, setTemperature] = useState("");
  const [imageUrl, setUrl] = useState("");
  const navigate = useNavigate();

  const fetchPlantById = async () => {
    try {
      const { data } = await axios({
        url: `http://localhost:3000/plants/${id}`,
        method: "get",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log(data);
      setName(data.name);
      setType(data.type);
      setWater(data.watersNeeds);
      setLight(data.lightNeeds);
      setSoil(data.soilType);
      setTemperature(data.temperatureRange);
      setUrl(data.imageUrl)
    } catch (error) {
      console.error("Failed to fetch plant:", error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios({
        url: `http://localhost:3000/plants/${id}`,
        method: "put",
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
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      
      console.log("Plant updated successfully:", data);
      navigate("/");
    } catch (error) {
      console.error("Failed to update plan:", error);
    }
  };

  useEffect(() => {
    fetchPlantById();
  }, []);

  return (
    <>
     <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md py-8">
        <h1 className="text-2xl font-bold mb-6 text-black">New Plant</h1>
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
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
            <label className="block text-gray-700 font-bold mb-2" htmlFor="type">
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
            <label className="block text-gray-700 font-bold mb-2" htmlFor="waterNeeds">
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
              <label className="block text-gray-700 font-bold mb-2" htmlFor="lightNeed">
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
              <label className="block text-gray-700 font-bold mb-2" htmlFor="temperatureRange">
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
              <label className="block text-gray-700 font-bold mb-2" htmlFor="soilType">
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
            <label className="block text-gray-700 font-bold mb-2" htmlFor="imageUrl">
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
