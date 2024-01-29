"use client";

import { DishComp, DishDash } from "@/app/(home)/components/dish-dash";
import { useState, useEffect } from "react";
import { loadDishes } from "./lib/dataqueries";

export default function Home() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedDishes = await loadDishes();
        // console.log(fetchedDishes);
        setDishes(fetchedDishes);
      } catch (error) {
        // Handle or log the error as needed
      }
    }

    fetchData();
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <>
      <DishComp dishes={dishes} setDishes={setDishes}></DishComp>
    </>
  );
}
// component to be moved under `dish-dash` aka 'Food Menu' later
