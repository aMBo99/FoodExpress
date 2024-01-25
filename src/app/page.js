"use client"

import { DishComp, DishDash } from '@/app/components/dish-dash'
import NavBar from './components/navbar'
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
import { useState } from 'react';

async function loadDishes() {
  let loadedDishes;
  try {
    loadedDishes = await prisma.dish.findMany({});
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error loading dishes from database:', error);
  } finally {
    // Disconnect from the database
    await prisma.$disconnect();
    return loadedDishes;
  }
}
const iDishes = loadDishes();
const Vdishes = [
  {
    "id": 1,
    "title": "Moussaka",
    "description": "moussaka",
    "thumbnailUrl": "/Moussaka.jpg"
  },
  {
    "id": 2,
    "title": "Chicken Fricassee",
    "description": "chicken fricassee",
    "thumbnailUrl": "/ChickenFricassee.jpg"
  },
  {
    "id": 3,
    "title": "Spaghetti Carbonara",
    "description": "spaghetti carbonara",
    "thumbnailUrl": "/spaghettiCarbon.jpg"
  },
  {
    "id": 4,
    "title": "Tiramisu",
    "description": "The worlds most famous cake, which some like to mix with ",
    "thumbnailUrl": "/Tiramisu.jpg"
  },
  {
    "id": 5,
    "title": "Garage Cake",
    "description": "The most famous desert that came from the city holding the nickname `Little Viena` - that is Ruse (Bulgaria). This cake consists primarily of chocolate and walnuts.",
    "thumbnailUrl": "/GarageCake.jpg"
  },
  {
    "id": 6,
    "title": "Biscuit Cake",
    "description": "Traditional cake made out of biscuits, caressing the tongue, mixes well together with berry jam, but the grated chocolate on top makes it come out as a perfect sweet.",
    "thumbnailUrl": "/bisquitcake.jpg"
  },
  {
    "id": 7,
    "title": "Chicken Fajita",
    "description": "chicken fajita",
    "thumbnailUrl": "/chickenFajita.jpg"
  },
  {
    "id": 8,
    "title": "Beans Monastery Style",
    "description": "Traditional vegeterian soup made out of beans and other plants (monastery style), but to complete the recipe for success, pro tip: one could to throw in a sausage as well.",
    "thumbnailUrl": "/BeansSoup.jpg"
  },
  {
    "id": 9,
    "title": "Wine Kebap",
    "description": "A famous dish amongst people in Bulgaria, that's usually made with pork, but one does not have to comply with the original recipe. As the name suggests, it's cooked with wine to make the meat tender.",
    "thumbnailUrl": "/WineKebab.jpeg"
  },
  {
    "id": 10,
    "title": "Caesar Salad",
    "description": "The well known worldwide dish, made for kings & emperors - though the name says `Salad`, don't be fooled, as one can get filled up quite well with this one, as it contains chicken & bread slices.",
    "thumbnailUrl": "/CaeserSalad.jpg"
  },
  {
    "id": 11,
    "title": "Tripe Soup",
    "description": "Traditional bulgarian soup made out of beef tripe, usually topped with garlic vinegar sauce and some sprinkled chilly powder. Pro tip: does wonders against hangover.",
    "thumbnailUrl": "/TripeSoup.jpg"
  },
  {
    "id": 12,
    "title": "Gazpacho",
    "description": "gazpacho",
    "thumbnailUrl": "/Gazpacho.jpeg"
  },
  {
    "id": 13,
    "title": "Souffle",
    "description": "Very famous french muffins filled with chocolate creme, caressing the senses. Definitely a must-try.",
    "thumbnailUrl": "/Souffle.jpeg"
  },
  {
    "id": 14,
    "title": "Spaghetti Bolognese",
    "description": "Who doesn't know this famous italian pasta dish.",
    "thumbnailUrl": "/spaghettiBolognia.jpg"
  },
  {
    "id": 15,
    "title": "Lasagna",
    "description": "lasagne",
    "thumbnailUrl": "/Lasagne.jpeg"
  },
  {
    "id": 16,
    "title": "Chicken Biryani",
    "description": "Famous wholesome indian dish. Give it a try.",
    "thumbnailUrl": "/ChickenBiryani.jpeg"
  },
  {
    "id": 17,
    "title": "Butter Chicken",
    "description": "butter chicken",
    "thumbnailUrl": "/ButterChicken.jpg"
  },
  {
    "id": 18,
    "title": "Paella",
    "description": "seafood paella",
    "thumbnailUrl": "/Paella.jpg"
  }
]

export default function Home() {
  
  const [dishes, setDishes] = useState(Vdishes);
  return (
    <>
      <DishComp dishes={dishes} setDishes={setDishes} ></DishComp>
    </>
  )
}