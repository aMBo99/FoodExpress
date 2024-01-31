"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import "./create.css"
import { createDish } from "../../lib/dataqueries";

export default function CreateDish() {
  const router = useRouter();

  const [dishName, setDishName] = useState("");
  const [dishDescription, setDishDescription] = useState("");
  const [imageURL, setImageURL] = useState("");

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
    if (!dishName || !dishDescription) return; // maybe not needed since 'required'
    // e.preventDefault() disables required attr.
    try {
      const dish = await createDish(dishName, dishDescription, imageURL);
      if (dish) {
        console.log("Dish created successfully");
        router.push('/');
      } else {
        throw error;
      }
    } catch (error) {
      console.log("Error creating a new dish: ", error);
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
        <button
          type="submit"
          onClick={handleSubmit}
          className="create-button"
        >
          Create Dish
        </button>
      </form>
    </div>
  );
}
