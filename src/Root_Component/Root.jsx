import { Outlet } from "react-router-dom";
import Navvar from "../Navvar/Navvar";

const Root = () => {
    return (
        <div className="mt-3">
            <Navvar></Navvar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;