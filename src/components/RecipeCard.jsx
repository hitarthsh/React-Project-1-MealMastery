import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { id, image, title, demo, chef } = props.recipe;
  console.log(demo);
  return (
    <Link
      to={`/recipes/details/${id}`}
      className="duration-150 hover:scale-105 mr-3 mb-3 block w-[23vw] rounded overflow-hidden shadow"
    >
      <img className="object-cover w-full h-[30vh]" src={image} alt="" />
      <h1 className="px-2 mt-2 font-black">{title}</h1>
      <small className="px-2 text-red-400">{chef}</small>
      <p className="px-2 pb-3">
        {demo.slice(0, 100)}...
        <small className="text-blue-400">more</small>
      </p>
    </Link>
  );
};

export default RecipeCard;
