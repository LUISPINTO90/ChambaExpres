import { logo } from "../../assets";

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 ">
        <div className="flex items-center">
          <img src={logo} className="h-12 w-12" alt="ChambaExprés! Logo" />
          <span className="ml-4 text-gray-900 dark:text-gray-100 text-2xl font-semibold">
            ChambaExprés!
          </span>
        </div>
      </div>
    </nav>
  );
}
