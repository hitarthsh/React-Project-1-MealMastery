import React from "react";
import RecipeCard from "../components/RecipeCard";

const Fav = () => {
  const favorite = JSON.parse(localStorage.getItem("fav") || "[]");

  const renderRecipes = favorite.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="flex flex-wrap">
      {favorite.length > 0 ? renderRecipes : "No recipes found!"}
    </div>
  );
};

export default Fav;
