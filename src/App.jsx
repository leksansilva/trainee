import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./MainRoutes";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <BrowserRouter>
      <MainRoutes auth={auth} setAuth={setAuth} />
    </BrowserRouter>
  );
}

export default App;
