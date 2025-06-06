import { createContext, useState } from "react";

export const recipecontext = createContext(null);

const RecipeContext = () => {
  const [data, setdata] = useState([]);
  return (
    <recipecontext.prototype value={{ data, setdata }}>
      RecipeContext
    </recipecontext.prototype>
  );
};

export default RecipeContext;
