import Image from "next/image";

export function DishDash({ dishes, setDishes }) {
  // console.log(dishes);
  return (
    <div>
      <h1 style={{ color: "black" }}>Welcome to FoodExpress</h1>
      {dishes.map((dish, key) => (
        <div key={key} className="food-card">
          <div>
            <h6>{dish.title}</h6>
            <p>{dish.descript}</p>
            <br />
          </div>
          <Image src={dish.imgUrl} width={200} height={200}></Image>
        </div>
      ))}
    </div>
  );
}

export function DishComp({ dishes, setDishes }) {
  // console.log(dishes);
  // actually using this comp.
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <h2 style={{ color: "orange" }}>Our Food Menu</h2>
      {dishes.map((dish, key) => (
        <div
          key={key}
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
        >
          <Image
            src={dish.imgUrl}
            alt=""
            className="w-full h-48 object-cover rounded-t-lg"
            width="200"
            height="200"
            style={{
              aspectRatio: "200 / 200",
              objectFit: "cover",
              margin: "20px",
              borderRadius: "50%",
            }}
          />
          <div className="p-4">
            <h3 className="whitespace-nowrap tracking-tight text-lg font-semibold text-light">
              {dish.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-light">
              {dish.descript}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
