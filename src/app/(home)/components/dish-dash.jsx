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
            <div className="img-actions">
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
                <button className="m-1 btn btn-outline-warning">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                    />
                  </svg>
                </button>
                <button className="m-1 btn btn-outline-danger">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-x-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                  </svg>
                </button>
              </div>
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
