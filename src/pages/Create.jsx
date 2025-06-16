import { nanoid } from "nanoid/non-secure";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    setdata([...data, recipe]);
    toast.success("New recipe created!");
    reset();
    navigate("/recipes");
  };
  return (
    <form onSubmit={handleSubmit(SubmitHandler)}>
      <input
        className="block border-b outline-0 p-2"
        {...register("image")}
        type="url"
        placeholder="Enter Image URL"
      />
      <small className="text-red-400">This is how the error is show</small>

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
        placeholder="//Write ingredients seperated by comma"
      ></textarea>

      <textarea
        className="block border-b outline-0 p-2"
        {...register("inst")}
        placeholder="//Write instruction seperated by comma"
      ></textarea>

      <select
        className="block border-b outline-0 p-2"
        {...register("category")}
      >
        <option value="breakfast">Break-Fast</option>
        <option value="lunch">Lunch</option>
        <option value="supper">Supper</option>
        <option value="dinner ">Dinner</option>
      </select>

      <button className="mt-5 block bg-gray-900 px-4 py-2 rounded">
        Save Recipe
      </button>
    </form>
  );
};

export default Create;
