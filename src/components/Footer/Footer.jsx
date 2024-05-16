import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { logo } from "../../assets";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between"></div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="mb-6 md:mb-0">
          <a href="/" className="flex items-center">
            <img src={logo} className="h-8 me-3" alt="FlowBite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-500 dark:text-gray-400">
              ChambaExprés!
            </span>
          </a>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="/" className="hover:underline">
              ChambaExprés!™
            </a>
            . Todos los derechos reservados .
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FontAwesomeIcon icon={faFacebook} />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="ml-4 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FontAwesomeIcon icon={faTwitter} />
              <span className="sr-only">Twitter profile</span>
            </a>
            <a
              href="#"
              className="ml-4 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FontAwesomeIcon icon={faGithub} />
              <span className="sr-only">GitHub profile</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
