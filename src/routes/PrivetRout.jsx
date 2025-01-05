import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";

// eslint-disable-next-line react/prop-types
const PrivetRout = ({children}) => {
    const {user,loding} = useContext(AuthContext)

    const location = useLocation()
    console.log(location);


    if(loding){
        return <LoadingPage></LoadingPage>
    }
    if(user){
        return children
    }
    return (
        <Navigate state={location.pathname} to="/auth/login"></Navigate>
    );
};

export default PrivetRout;