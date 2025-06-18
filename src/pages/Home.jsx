import axios from "../utils/axios";
// import axios from "axios";

const Home = () => {
  const getproduct = async () => {
    try {
      const response = await axios.get("/products");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <button
        className="bg-amber-300 rounded-3xl text-1xl mt-3 px-2 py-2"
        onClick={getproduct}
      >
        Get Products
      </button>
    </div>
  );
};

export default Home;
