"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../../create/create.css";
import { loadDish, deleteDish } from "@/app/(home)/lib/dataqueries";

export default function DeleteComp({ params }) {
  const router = useRouter();
  const [dishID, setDishID] = useState("");
  const [dishName, setDishName] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedDish = await loadDish(params.id);
        if(!fetchedDish) {
          throw error;
        }
        setDishID(fetchedDish.id);
        setDishName(fetchedDish.title);
      } catch (error) {
        console.log("Error: ", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array to run the effect once on mount

  async function handleSubmit() {
    if (!dishName || !dishID) return; // maybe not needed since 'required'
    try {
      const dish = await deleteDish(dishID);
      console.log(dish);
      if (dish) {
        console.log("Dish deleted successfully");
        router.push("/");
      } else {
        throw error;
      }
    } catch (error) {
      console.log("Error deleting dish: ", error);
    }
  }

  return (
    <div className="create-container">
      <h3 className="text-light">Delete dish {dishName}?</h3>
      <form action="/" className="text-light">
        <button type="submit" onClick={() => router.push('/')} className="create-button">
          No
        </button>
        <button type="submit" onClick={handleSubmit} className="create-button">
          Yes
        </button>
      </form>
    </div>
  );
}