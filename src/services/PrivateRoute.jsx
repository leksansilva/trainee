import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function PrivateRoute(props) {
  const navigate = useNavigate();
  const auth = props.auth;
  const children = props.children;

  useEffect(() => {
    console.log(auth);
    if (!auth) {
      navigate("/login");
    }
  }, [navigate, auth]);

  if (auth) {
    return children;
  }
}
