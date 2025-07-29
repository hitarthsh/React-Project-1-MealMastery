import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  const navigate = useNavigate();
  const params = useParams();

  const recipe = data.find((recipe) => recipe.id == params.id);

  const { register, handleSubmit, reset } = useForm();

  const [favroite, setfavroite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  useEffect(() => {
    if (recipe) {
      reset({
        title: recipe.title,
        chef: recipe.chef,
        image: recipe.image,
        inst: recipe.inst,
        desc: recipe.desc,
        ingr: recipe.ingr,
        category: recipe.category,
      });
    }
  }, [recipe, reset]);

  const SubmitHandler = (updatedRecipe) => {
    const index = data.findIndex((r) => r.id == params.id);
    if (index !== -1) {
      const copydata = [...data];
      copydata[index] = { ...copydata[index], ...updatedRecipe };
      setdata(copydata);
      localStorage.setItem("recipes", JSON.stringify(copydata));
      toast.success("Recipe updated!");
    }
  };

  const DeleteHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setdata(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata));
    toast.success("Recipe deleted!");
    navigate("/recipes");
  };

  const FavHandler = () => {
    if (!favroite.find((f) => f.id === recipe?.id)) {
      const copyfav = [...favroite, recipe];
      setfavroite(copyfav);
      localStorage.setItem("fav", JSON.stringify(copyfav));
    }
  };

  const UnFavHandler = () => {
    const filterfav = favroite.filter((f) => f.id != recipe?.id);
    setfavroite(filterfav);
    localStorage.setItem("fav", JSON.stringify(filterfav));
  };

  useEffect(() => {
    console.log("SingleRecipe.jsx Mounted");
    return () => {
      console.log("SingleRecipe.jsx Unmount");
    };
  }, []);

  const favroite = JSON.parse(localStorage.getItem("fav")) || [];

  const FavHandler = () => {
    favroite.push(recipe);
    localStorage.setItem("fav", JSON.stringify(favroite));
  };

  const UnFavHandler = () => {
    const filterfav = favroite.filter((f) => f.id != recipe?.id);
    localStorage.setItem("fav", JSON.stringify(filterfav));
  };

  return recipe ? (
    <div className="w-full flex flex-col md:flex-row">
      <div className="relative w-full md:w-1/2 p-10">
        {favroite.find((f) => f.id == recipe?.id) ? (
          <i
            onClick={UnFavHandler}
            className="absolute right-[5%] text-3xl text-red-400 ri-heart-fill cursor-pointer"
          ></i>
        ) : (
          <i
            onClick={FavHandler}
            className="absolute right-[5%] text-3xl text-red-400 ri-heart-line cursor-pointer"
          ></i>
        )}

        <h1 className="text-5xl font-black">{recipe?.title}</h1>
        <img className="h-[20vh] object-cover" src={recipe?.image} alt={recipe?.title} />
        <h2 className="text-xl font-semibold mt-2">{recipe?.chef}</h2>
        <p className="mt-2">{recipe?.desc}</p>
      </div>

      <form className="w-full md:w-1/2 p-4" onSubmit={handleSubmit(SubmitHandler)}>
        <input
          className="block border-b outline-0 p-2"
          {...register("image")}
          type="url"
          placeholder="Enter Image Url"
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
          {...register("desc")}
          placeholder="//start from here"
        ></textarea>

        <textarea
          className="block border-b outline-0 p-2"
          {...register("ingr")}
          placeholder="//write ingredients separated by comma"
        ></textarea>

        <textarea
          className="block border-b outline-0 p-2"
          {...register("inst")}
          placeholder="//write instructions separated by comma"
        ></textarea>

        <select
          className="block border-b outline-0 p-2"
          {...register("category")}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        <button className="mt-5 block bg-blue-900 text-white px-4 py-2 rounded">
          Update Recipe
        </button>
        <button
          type="button"
          onClick={DeleteHandler}
          className="mt-3 block bg-red-700 text-white px-4 py-2 rounded"
        >
          Delete Recipe
        </button>
      </form>
    </div>
  ) : (
    <div className="text-center py-10">Loading...</div>
  );
};

export default SingleRecipe;
