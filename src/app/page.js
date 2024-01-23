"use client"
import { DishDash } from '@/app/components/dish-dash'
import NavBar from './components/navbar'
import { useState } from 'react';

const Vdishes = [
  {
    "id": 1,
    "title": "Moussaka",
    "description": "",
    "thumbnailUrl": "/Moussaka.jpg"
  },
  {
    "id": 2,
    "title": "Chicken Fricassee",
    "description": "",
    "thumbnailUrl": "/ChickenFricassee.jpg"
  },
  {
    "id": 3,
    "title": "Spaghetti Carbonara",
    "description": "",
    "thumbnailUrl": "/spaghettiCarbon.jpg"
  },
  {
    "id": 4,
    "title": "Tiramisu",
    "description": "",
    "thumbnailUrl": "/Tiramisu.jpg"
  },
  {
    "id": 5,
    "title": "Garage Cake",
    "description": "The most famous desert that came from the city holding the nickname `Little Viena` - that is Ruse (Bulgaria). This cake consists primarily of chocolate and walnuts",
    "thumbnailUrl": ""
  },
  {
    "id": 6,
    "title": "Biscuit Cake",
    "description": "Traditional cake made out of biscuits, caressing the tongue, mixes well together with berry jam, but the grated chocolate on top makes it come out as a perfect sweet",
    "thumbnailUrl": "/bisquitcake.jpg"
  },
  {
    "id": 7,
    "title": "Chicken Fajita",
    "description": "",
    "thumbnailUrl": ""
  },
  {
    "id": 8,
    "title": "Beans Monastery Style",
    "description": "",
    "thumbnailUrl": ""
  },
  {
    "id": 9,
    "title": "Wine Kebap",
    "description": "",
    "thumbnailUrl": ""
  },
  {
    "id": 10,
    "title": "Caesar Salad",
    "description": "",
    "thumbnailUrl": ""
  },
  {
    "id": 11,
    "title": "Tripe Soup",
    "description": "",
    "thumbnailUrl": ""
  },
  {
    "id": 12,
    "title": "Gazpacho",
    "description": "",
    "thumbnailUrl": ""
  },
  {
    "id": 13,
    "title": "Souffle",
    "description": "",
    "thumbnailUrl": ""
  },
  {
    "id": 14,
    "title": "Spaghetti Bolognese",
    "description": "",
    "thumbnailUrl": ""
  },
  {
    "id": 15,
    "title": "Lasagna",
    "description": "",
    "thumbnailUrl": ""
  },
  {
    "id": 16,
    "title": "Chicken Biryani",
    "description": "",
    "thumbnailUrl": ""
  },
  {
    "id": 17,
    "title": "Butter Chicken",
    "description": "",
    "thumbnailUrl": ""
  },
  {
    "id": 18,
    "title": "Paella",
    "description": "",
    "thumbnailUrl": ""
  }
]


export default function Home() {
  
  const [dishes, setDishes] = useState(Vdishes);
  return (
    <>
      {/* <NavBar></NavBar> */}
      <DishDash dishes={dishes} setDishes={setDishes} ></DishDash>
      
    </>
  )
}
