import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSignIn } from "@fortawesome/free-solid-svg-icons";

export default function Hero({ openModal }) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Conectando trabajadores a empleos{" "}
          <span className="text-blue-700">exprés.</span>
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Encuentra trabajos de corta duración cerca de ti.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <button
            onClick={openModal}
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Regístrate{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-2 -mr-1 w-5 h-5"
            />
          </button>
          <a href="#">
            <button
              onClick={openModal}
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <FontAwesomeIcon icon={faSignIn} className="mr-2 -ml-1 w-5 h-5" />{" "}
              Iniciar sesión
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
