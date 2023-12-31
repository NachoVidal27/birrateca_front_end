import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function AuthRequire() {
  const user = useSelector((state) => state.user);

  if (!user) {
    return <Navigate to="/signup" />;
  } else {
    return <Outlet />;
  }
}

export default AuthRequire;
