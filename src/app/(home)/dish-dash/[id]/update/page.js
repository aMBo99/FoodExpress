"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "../../create/create.css";
import { loadDish, updateDish } from "@/app/(home)/lib/dataqueries";

export default function EditDish({ params }) {
  const router = useRouter();
  const [dishName, setDishName] = useState("");
  const [dishDescription, setDishDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [dishID, setDishID] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedDish = await loadDish(params.id);
        if (!fetchedDish) {
          throw error;
        }
        setDishName(fetchedDish.title);
        setDishDescription(fetchedDish.descript);
        setImageURL(fetchedDish.imgUrl);
        setDishID(fetchedDish.id);
      } catch (error) {
        console.log("Error: ", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array to run the effect once on mount

  function handleDishNameInput(e) {
    setDishName(e.target.value);
  }

  function handleDishDescriptionInput(e) {
    setDishDescription(e.target.value);
  }

  function handleImageURLinput(e) {
    setImageURL(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!dishName || !dishDescription || !imageURL || !dishID) return; // maybe not needed since 'required'
    // e.preventDefault() disables required attr.
    try {
      const dish = await updateDish(dishID, dishName, dishDescription, imageURL);
      console.log(dish);
      if (dish) {
        console.log("Dish updated successfully");
        router.push("/");
      } else {
        throw error;
      }
    } catch (error) {
      console.log("Error updating dish: ", error);
    }
  }

  return (
    <div className="create-container">
      <form action="/" className="text-light">
        <div className="input-group">
          <label htmlFor="dish">Dish</label>
          <input
            type="text"
            onInput={handleDishNameInput}
            value={dishName}
            required
            id="dish"
            name="dish"
            placeholder="Enter dish name..."
          />
        </div>
        <div className="input-group">
          <label htmlFor="dish">Description</label>
          <input
            type="text"
            onInput={handleDishDescriptionInput}
            value={dishDescription}
            required
            id="descript"
            name="description"
            placeholder="Enter description..."
          />
        </div>
        <div className="input-group">
          <label htmlFor="imgURL">Image URL</label>
          <input
            type="text"
            onInput={handleImageURLinput}
            value={imageURL}
            required
            id="imgURL"
            name="imgURL"
            placeholder="Enter image URL..."
          />
        </div>
        <button type="submit" onClick={handleSubmit} className="create-button">
          Update Dish
        </button>
      </form>
    </div>
  );
}
