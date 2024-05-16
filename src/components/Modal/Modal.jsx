import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { useAuthStore } from "../../stores/authStore";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Modal({ isOpen, closeModal }) {
  const { signInWithGoogle } = useAuthStore();

  const navigate = useNavigate();

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
      closeModal();
      navigate("/");
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleBackdropClick}
    >
      <div
        className={`relative p-4 w-full max-w-2xl max-h-full bg-white rounded-lg shadow dark:bg-gray-700 transition-transform transform ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Inicia sesión o regístrate en un momento
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={closeModal}
          >
            <FontAwesomeIcon icon={faTimes} className="w-6 h-5" />
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-4 md:p-5 space-y-4">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 p-4">
            Usa tu correo electrónico u otro servicio para acceder a
            ChambaExprés!
          </p>
          <button
            onClick={handleSignInWithGoogle}
            className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Usar Google
          </button>

          <button className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-blue-100 hover:bg-blue-200">
            Usar correo electrónico
          </button>
        </div>
      </div>
    </div>
  );
}
