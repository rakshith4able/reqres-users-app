import { Navigate } from "react-router";
import { useSelector } from "react-redux";


function RequireAuth({ children, redirectTo }) {
    const isAuthenticated=useSelector(state=>state.auth.isLoggedIn);
    return isAuthenticated ? children : <Navigate to={redirectTo} />;
  }

export default RequireAuth;