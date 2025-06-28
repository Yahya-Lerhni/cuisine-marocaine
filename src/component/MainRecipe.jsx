import React from "react";
import Food from "../constant/data";
Images
import { CiSearch } from "react-icons/ci";

import { useNavigate } from "react-router-dom";
import { Images } from "../constant";
import { useState } from "react";
function MainRecipe() {
  const Recipe = Food.FoodData;
  const Navigate = useNavigate();
  const [recherch,setRecherch] = useState("")
    const Rech = Recipe.filter((e)=> e.name.toLowerCase().includes(recherch.toLowerCase()))
  return ( 
    <div className=" flex flex-col gap-[5rem] items-center">
        <div>
             <CiSearch className="size-[2.5rem] hover:text-[orange] cursor-pointer absolute right-[21rem]" />
            <input value={recherch} onChange={(e)=>{setRecherch(e.target.value)}} className="w-[50vw] h-[8vh] rounded-[3rem] px-3 border-2 placeholder:font-bold placeholder:text-[orange] relative"  type="search" placeholder="... Search"  />
        </div>
      <div className=" flex flex-wrap   justify-center items-center gap-[5vh] ">
        {Rech.map((e) => (
          <div
            key={e.id} className="  shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105 duration-300 cursor-pointer flex flex-col items-center w-[16rem] bg-[orange]" onClick={() => Navigate(`/recipes/${e.id}`)}
          >
            <div className="w-[100%]">
              <img src={Images[e.image]} className=" h-[10rem] w-full object-cover"
              />
            </div>
            <div className="p-4 text-[#053f30]">
              <h2 className="text-lg font-bold text-center">{e.name}</h2>
              <p className="mt-2 text-[#b22222] font-semibold text-center">
                {e.origin}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainRecipe;
