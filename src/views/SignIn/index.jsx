import { useState } from "react";
import { Navbar, Hero, Footer, Modal } from "../../components";

const SignIn = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Hero openModal={openModal} />
      </div>
      <Footer />
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
}

export default SignIn;