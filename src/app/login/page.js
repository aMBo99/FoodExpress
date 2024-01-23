import "./login.css"

export default function Login() {
  return (
    <>
      <div>
        <div className="login-container">
          <h3 className="login-title">Welcome!</h3>
          <form action="/" method="GET" id="form">
            <div className="input-group">
              <label for="email">Email</label>
              <input
                type="email"
                required
                id="email"
                name="email"
                placeholder="Enter email..."
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                required
                id="password"
                name="password"
                placeholder="Enter password..."
              />
            </div>
            <button type="submit" className="login-button">
              Sign In
            </button>
          </form>
          <p style={{color: "white", fontWeight: "lighter", marginTop: "20px"}}>
            Don't have any account yet? Register{" "}
            <a href="/register.html" style={{color: "lightskyblue"}}>
              here
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
