import { createContext, useState } from "react";

export const recipecontext = createContext(null);

const RecipeContext = () => {
  const [data, setdata] = useState([]);
  return (
    <recipecontext.Provider value={{ data, setdata }}>
      RecipeContext
    </recipecontext.Provider>
  );
};

export default RecipeContext;
