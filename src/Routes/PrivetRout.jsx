import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivetRout = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    if(loading){
        return <div>Loading...</div>
    }
    if(user){
        return children ;
    }
    return <Navigate to="/myaccount" state={{from: location}} replace></Navigate>

};

export default PrivetRout;