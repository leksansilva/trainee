import { useNavigate } from "react-router-dom";

function Login({ setAuth }) {
  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setAuth(true);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input type="text" />
      <input type="password" />
      <button type="submit">login</button>
    </form>
  );
}

export default Login;
