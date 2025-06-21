import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);

  // ⚠️ If recipe is not found yet, return early
  if (!recipe) {
    return <div className="p-5 text-xl">Loading or Invalid Recipe...</div>;
  }

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe.title,
      image: recipe.image,
      chef: recipe.chef,
      demo: recipe.demo,
      ingr: recipe.ingr,
      inst: recipe.inst,
      category: recipe.category,
    },
  });

  const UpdatedHandler = (updatedRecipe) => {
    const index = data.findIndex((r) => params.id == r.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...updatedRecipe };
    setdata(copydata);
    toast.success("Recipe Updated!");
  };

  const DeleteHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setdata(filterdata);
    toast.success("Recipe deleted");
    navigate("/recipes");
  };

  return (
    <div className="w-full flex">
      <div className="left w-1/2 p-2">
        <h1 className="text-5xl font-black">{recipe.title}</h1>

        {/* ✅ Fix empty src warning */}
        {recipe.image && (
          <img className="h-[20vh]" src={recipe.image} alt="Recipe" />
        )}
        <h1>{recipe.chef}</h1>
        <p>{recipe.demo}</p>
      </div>

      <form className="w-1/2 p-2" onSubmit={handleSubmit(UpdatedHandler)}>
        <input
          className="block border-b outline-0 p-2"
          {...register("image")}
          type="url"
          placeholder="Enter Image URL"
        />
        <small className="text-red-400">This is how the error is shown</small>

        <input
          className="block border-b outline-0 p-2"
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
        />

        <input
          className="block border-b outline-0 p-2"
          {...register("chef")}
          type="text"
          placeholder="Chef Name"
        />

        <textarea
          className="block border-b outline-0 p-2"
          {...register("demo")}
          placeholder="//Start from here"
        ></textarea>

        <textarea
          className="block border-b outline-0 p-2"
          {...register("ingr")}
          placeholder="//Write ingredients separated by comma"
        ></textarea>

        <textarea
          className="block border-b outline-0 p-2"
          {...register("inst")}
          placeholder="//Write instructions separated by comma"
        ></textarea>

        <label className="block mb-1 text-sm text-gray-800">Category</label>
        <select
          className="block p-2 border text-white border-gray-300 rounded-md bg-[#1E2939] focus:outline-none focus:border-blue-500"
          {...register("category")}
        >
          <option value="">Select Category</option>
          <option value="breakfast">Break-Fast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        <button className="mt-5 block bg-blue-900 px-4 py-2 rounded">
          Update Recipe
        </button>
        <button
          onClick={DeleteHandler}
          className="mt-5 block bg-red-900 px-4 py-2 rounded"
        >
          Delete Recipe
        </button>
      </form>
    </div>
  );
};

export default SingleRecipe;
