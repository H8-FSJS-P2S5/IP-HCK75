  import { useState } from "react";
  export default function SearchFS({ setSearch, setSort,setSelectedType,types }) {
    const [name, setName] = useState("");
    

    // const [sort, setSort] = useState("");
    function sentName(e) {
      e.preventDefault();
      // console.log(name);
      setSearch(name);
    }

  
    return (
      <div className="flex justify-end items-center">
        {/* search */}
        <div className="w-1/3">
          <form className="max-w-md mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
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
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required=""
              />
              <button
                onClick={sentName}
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        {/* filter */}
        <div className="dropdown ">
          <label
            htmlFor="HeadlineAct"
            className="block text-sm text-center font-medium text-white-900"
          >
            {" "}
            Type{" "}
          </label>

          <select
            name="HeadlineAct"
            id="HeadlineAct"
            className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
            onChange={(e) => setSelectedType(e.target.value) }
            
          >
            <option value="">Please select</option>
            {types.map((type)=>
            
            <option value={type.name} key={type.id}>{type.name}</option>
            )}
            
          </select>
        </div>
        {/* sort */}
        <div>
          <details className="dropdown">
            <summary className="btn m-1 ">Sort</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
              <li onClick={() => setSort("DESC")}>
                <a>DESC</a>
              </li>
              <li onClick={() => setSort("ASC")}>
                <a>ASC</a>
              </li>
            </ul>
          </details>
        </div>
      </div>
    );
  }
