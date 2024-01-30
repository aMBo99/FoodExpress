import Link from "next/link";
import Image from "next/image";

export function DishComp({ dishes, setDishes }) {
  // console.log(dishes);
  // actually using this comp.
  return (
    <div>
      <div className="menu-row">
        <h2 style={{ color: "orange" }}>Our Food Menu</h2>
        <Link href="/dish-dash/create">
          <button className="btn btn-success">+</button>
        </Link>
      </div>
      <div className="menu-grid">
        {dishes.map((dish, key) => (
          <div key={key} className="menu-item border">
            <Image
              src={dish.imgUrl}
              alt=""
              className=""
              width="200"
              height="200"
              style={{
                aspectRatio: "200 / 200",
                objectFit: "cover",
                margin: "20px",
                borderRadius: "50%",
              }}
            />
            <div className="menu-item-actions">
              <button className="btn btn-warning"><i class="bi bi-pencil-square"></i></button>
              <button className="btn btn-danger">X</button>
            </div>
            <div className="p-3">
              <h3 className="text-light">{dish.title}</h3>
              <p className="text-light">{dish.descript}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
