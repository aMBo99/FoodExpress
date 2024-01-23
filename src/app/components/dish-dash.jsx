export function DishDash({ dishes, setDishes }) {
  console.log(dishes);
  return (
    <div>
      <h1 style={{ color: "black" }}>Welcome to FoodExpress</h1>
      {dishes.map((dish, key) => (
        <>
          <span key={key}>{dish.title}</span>
          <br />
        </>
      ))}
    </div>
  );
}
