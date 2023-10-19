import { useContext } from "react";
import { ContextApi } from "../AuthProvider/AuthProvider";
import PropTypes from 'prop-types';

const PriventRoute = ({ children }) => {
    let { user } = useContext(ContextApi)
    if (!user) {
        return <div className="h-screen w-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
    </div>
    }

    return children
};

export default PriventRoute;

PriventRoute.propTypes = {
    children: PropTypes.object
}