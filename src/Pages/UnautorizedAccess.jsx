import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";


const UnauthorizedAccess = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center h-screen">
      <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4" />
      <h1 className="text-5xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-5">You dont have the required permission to access the page</p>
      <Link
        to="/"
        className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
      >
        Back to Home
      </Link>
    </section>
  );
};

export default UnauthorizedAccess;