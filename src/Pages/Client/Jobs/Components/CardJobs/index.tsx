import { Link } from "react-router-dom";

export default function CardJobs(job: any) {
  return (
    <div className="rounded overflow-hidden flex flex-col max-w-2xl mx-auto border bg-white shadow-xl z-50">
      <div className="sm:flex justify-between items-center pt-4 px-5 ">
        <a
          href="#"
          className="sm:w-8/12 font-medium text-md inline-block hover:text-blue-600 transition duration-500 ease-in-out mb-2"
        >
          The Best Activewear from the Nordstrom Anniversary Sale
        </a>
        <div className="sm:w-4/12 flex items-center sm:px-6 pb-4">
          <a href="#">
            <img
              className="w-10 h-10 rounded-full mr-2"
              src="https://tailwindcss.com/img/jonathan.jpg"
              alt="Avatar of Jonathan Reinink"
            />
          </a>
          <div className="text-xs">
            <a
              href="#"
              className="text-gray-900 font-medium leading-none hover:text-blue-600"
            >
              Jonathan Reinink
            </a>
            <p className="text-gray-600 text-xs">Aug 18</p>
          </div>
        </div>
      </div>
      <span className="inline-flex items-center gap-x-1.5 py-1.5 px-6  rounded-full text-sm ml-3 mt-1 font-medium bg-blue-30000 text-white dark:bg-blue-500 w-fit">
        Engenheiro de Software
      </span>

      <div className="relative">
        <Link
          to="/jobs/1"
          className="hidden absolute z-10 text-xs  top-0 right-0 bg-blue-600 px-6 m-2 py-2 text-white hover:bg-white hover:text-blue-600 transition duration-500 ease-in-out sm:flex items-center"
        >
          <span className="text-lg">|</span>&nbsp;&nbsp;<span>Read more</span>
        </Link>
      </div>
      <div className="flex">
        <span className="p-5 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
          <svg
            height="13px"
            width="13px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
          >
            <g>
              <g>
                <path
                  d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
        c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
        c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                ></path>
              </g>
            </g>
          </svg>
          <span className="ml-1">6 mins ago</span>
        </span>
        <span className="p-5 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
         
          <span className="ml-1">6 mins ago</span>
        </span>
        <span className="p-5 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
          <svg
            height="16px"
            width="16px"
            fill="#000000"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M12.32 8a3 3 0 0 0-2-.7H5.63A1.59 1.59 0 0 1 4 5.69a2 2 0 0 1 0-.25 1.59 1.59 0 0 1 1.63-1.33h4.62a1.59 1.59 0 0 1 1.57 1.33h1.5a3.08 3.08 0 0 0-3.07-2.83H8.67V.31H7.42v2.3H5.63a3.08 3.08 0 0 0-3.07 2.83 2.09 2.09 0 0 0 0 .25 3.07 3.07 0 0 0 3.07 3.07h4.74A1.59 1.59 0 0 1 12 10.35a1.86 1.86 0 0 1 0 .34 1.59 1.59 0 0 1-1.55 1.24h-4.7a1.59 1.59 0 0 1-1.55-1.24H2.69a3.08 3.08 0 0 0 3.06 2.73h1.67v2.27h1.25v-2.27h1.7a3.08 3.08 0 0 0 3.06-2.73v-.34A3.06 3.06 0 0 0 12.32 8z"></path>
            </g>
          </svg>
          <span className="ml-1">6 mins ago</span>
        </span>
      </div>
    </div>
  );
}
