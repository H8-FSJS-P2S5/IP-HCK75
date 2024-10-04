import { Link } from "react-router-dom";

export default function Cards({ plant, handleOnDeletePlant }) {
  return (
    <>
     
      <div className="container mx-auto px-4 py-8 items-center bg-black">
        <div className="px-2">
          <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <Link
              style={{ textDecoration: "none" }}
              to={`/details/${plant.id}`} // Adjust link to details page
            >
              <img
                alt={plant.name}
                src={plant.imageUrl}
                className="h-56 w-full object-cover"
              />
            </Link>
            <div className="bg-white p-4 sm:p-6 h-[200px]">
              <div className="py-1 h-30">
                <h3 className="mt-0.5 text-lg font-bold text-gray-900 text-center">
                  {plant.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1 text-center">{plant.Type.name}</p>
                <p className="mt-2 line-clamp-3 text-sm text-gray-500 text-center">
                  {plant.temperatureRange} {/* Change location to plant.location */}
                </p>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  className="btn bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-lg"
                  onClick={(e) => handleOnDeletePlant(plant.id)} // Pass plant.id instead of id
                >
                  Delete
                </button>
                <Link to={`/plants/${plant.id}`}>
                <button

                  className="btn bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg"
                   // Pass plant.id instead of id
                >
                  Edit
                </button>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
