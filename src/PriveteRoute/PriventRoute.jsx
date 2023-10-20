import { useContext } from "react";
import { ContextApi } from "../AuthProvider/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";

const PriventRoute = ({ children }) => {
    let { user,loading } = useContext(ContextApi)

    if (loading) {
        return <div className="h-screen w-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
    </div>
    }

    if(!user){
        return <Navigate to={'/login'}></Navigate>
    }
    return children
};

export default PriventRoute;

PriventRoute.propTypes = {
    children: PropTypes.node
}