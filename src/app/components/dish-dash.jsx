import Image from "next/image";

export function DishDash({ dishes, setDishes }) {
  console.log(dishes);
  return (
    <div>
      <h1 style={{ color: "black" }}>Welcome to FoodExpress</h1>
      {dishes.map((dish, key) => (
        <div className="food-card">
          <div>
            <h6 key={key}>{dish.title}</h6>
              <p key={key}>{dish.description}</p>
              <br />
          </div>
          <Image src={dish.thumbnailUrl} width={200} height={200}></Image>
        </div>
      ))}
    </div>
  );
}

export function DishComp({ dishes, setDishes }) {
  console.log(dishes);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {dishes.map((dish, key) => (
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <Image
            src={dish.thumbnailUrl}
            alt=""
            className="w-full h-48 object-cover rounded-t-lg"
            width="200"
            height="200"
            style={{aspectRatio: "200 / 200", objectFit: "cover", margin: "20px", borderRadius: "50%"}}
          />
          <div className="p-4">
            <h3 className="whitespace-nowrap tracking-tight text-lg font-semibold text-light" key={key}>{dish.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-light" key={key}>{dish.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}