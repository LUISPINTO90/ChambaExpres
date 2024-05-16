import { useAuthStore } from "../../stores/authStore";

const Home = () => {
  const { user } = useAuthStore();
  return (
    <>
      <h1>Home</h1>
      {user.displayName}
    </>
  );
};

export default Home;
