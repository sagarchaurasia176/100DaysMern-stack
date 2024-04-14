import React from "react";
import UseData from "../hook/useDataFetch";
import { BarLoader } from "react-spinners";

{
  /* <BeatLoader color="#36d7b7" /> */
}
function Card() {
  const { loading, apiHandler } = UseData();
  // api calls
  const MoveHandler = () => {
    apiHandler();
  };

  return (
    <div>
      {/* userCard */}

      <div class="w-full m-auto  my-28 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-end px-4 pt-4">
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
            type="button"
          >
            <span class="sr-only">Open dropdown</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
          </button>
        </div>
        {loading ? (
          <BarLoader />
        ) : (
          <>
            <div class="flex flex-col items-center pb-10">
              <img
                class="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="/docs/images/people/profile-picture-3.jpg"
                alt="Bonnie image"
              />
              <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Bonnie Green
              </h5>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                Visual Designer
              </span>
            </div>
          </>
        )}
        <div class="flex m-auto h-auto p-2 ">
          <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Add friend
          </button>
          <button
            onClick={MoveHandler}
            class="py-2 transition-all translate-x-2 duration-100 px-4 ms-2 text-sm font-medium text-white focus:outline-none bg-slate-800 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Move
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
