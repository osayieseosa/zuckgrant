import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import { jwtDecode } from "jwt-decode";

const RequireAuth = ({allowedRoles}) => {
    const {auth} = useContext(AuthContext)
    const location = useLocation()
    const decoded = auth?.length? jwtDecode(auth): undefined
    const roles = decoded?.UserInfo?.roles || []
    return roles.find((role) => allowedRoles?.includes(role)) ? (
        <Outlet />
      ) : auth?.user ? (
        <Navigate to="/" state={{ from: location }} replace />
      ) : (
        <Navigate to="/private/page/admin/login" state={{ from: location }} replace />
      );
}

export default RequireAuth