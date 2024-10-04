import axios from "axios";
import { useState } from "react";

export default function GetAPI() {
let [search,setSearch] = useState("")
let [recomendation,setRecomendation] = useState([])



const handleAPI= async (e) => {
    try {
        e.preventDefault()
        const {data} = await axios({
            url:`http://localhost:3000/gemini`,
            method:"post",
            data:{
                location: search
            }
        }) 
        console.log(data);
        
        setRecomendation(data.recommendations)

    } catch (error) {
        console.log(error);
    }
}



  return (
    <>
      <form
      onSubmit={handleAPI} 
      className="py-8 flex  justify-center">
        <label 
            
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white "
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search"
            required=""
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>


<div className="container mx-auto px-4 items-center grid grid-cols-3 gap-4 py-8">
{recomendation.map((e)=>{
    return(
      <div
      key={e.id}
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  
    <img className="rounded-t-lg h-56 w-full object-cover" src={e.imageUrl} alt="" />
 
  <div className="p-5">
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {e.name}
      </h5>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {e.type}
      </h5>
    </a>
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {e.description}
    </p>
    
  </div>
</div>
    )
})}
</div>
    </>
  );
}
