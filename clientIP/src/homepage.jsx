import Card from "../src/component/cards";
import { useNavigate, useParams } from "react-router-dom";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

// declare state for movies
export default function HomePage() {
  const [plants, setPlants] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const fetchPlants = async () => {
    try {
      const { data } = await axios({
        url: `http://localhost:3000/plants`,
        method: "get",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      console.log(data);
      setPlants(data);
    } catch (err) {
      // if err.status === 401
      localStorage.removeItem("acces_token");
      navigate("/login");
      console.log(err, "<<< e - fetchLodging");
    }
  };

  const handleOnDeletePlant = async (id) => {
    console.log(id);

    try {
      await axios({
        url: `http://localhost:3000/plants/${id}`,
        method:"delete",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      await fetchPlants();
    } catch (err) {
      console.log(err, "<<< e - handleOnDeletePlan");
    }
  };

  useEffect(() => {
    fetchPlants();
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 items-center grid grid-cols-4 gap-4 py-8">
        {plants.map((plant) => {
          return (
            <>
              <Card
                key={plant.id}
                plant={plant}
                handleOnDeletePlant={handleOnDeletePlant}
              />
            </>
          );
        })}
      </div>
    </>
  );
}
