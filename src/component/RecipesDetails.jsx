import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Images } from "../constant";
Images;
import Food from "../constant/data";

function RecipesDetails() {
  const { Id } = useParams();
  const Navigate = useNavigate();
  const RecipeData = Food.FoodData;
  const SelectedRecipe = RecipeData.find((h) => h.id == Number(Id));
  return (
    <div className="flex flex-col items-center px-[10rem] py-10">
      <img
        src={Images[SelectedRecipe.image]}
        className="w-full  object-cover rounded"
      />
      <h2 className="text-3xl font-bold mt-6 text-[orange]">
        {SelectedRecipe.name}
      </h2>
      <p className="text-[black] text-xl font-semibold mt-2">
        {SelectedRecipe.description}
      </p>
      <ul className="mt-2 text-[orange]  ml-6 flex justify-center items-center gap-3  ">
        {SelectedRecipe.ingredients.map((item, index) => (
          <li  key={index}>{item}</li>
        ))}
      </ul>
      <p className="mt-4 text-[black]">{SelectedRecipe.origin}</p>
      <button
        onClick={() => Navigate("/Recipes")}
        className="mt-6 bg-[orange] text-white px-6 py-3 rounded-lg hover:bg-[#8b1a1a] transition cursor-pointer"
      >
        Back{" "}
      </button>
    </div>
  );
}

export default RecipesDetails;
