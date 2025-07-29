import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

const Fav = () => {
  const [favroite, setfavroite] = useState([]);

  useEffect(() => {
    const favFromStorage = JSON.parse(localStorage.getItem("fav") || "[]");
    setfavroite(favFromStorage);
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-4">
      {favroite.length > 0 ? (
        favroite.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))
      ) : (
        <p className="text-gray-600 text-lg">No favorite recipes found!</p>
      )}
    </div>
  );
};

export default Fav;
