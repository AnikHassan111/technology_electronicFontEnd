import { useLoaderData, useParams } from "react-router-dom";
import BrandProductDetailsCard from "./BrandProductDetailsCard";

const BrandProductDetails = () => {
    let data = useLoaderData()
    let pramsData = useParams()
    let brandData = data.filter(name => name._id == pramsData.id)
    
    return (
        <div className="max-w-7xl mx-auto">
            {
                brandData.map(data => <BrandProductDetailsCard key={data._id} data={data}></BrandProductDetailsCard>)
            }
        </div>
    );
};

export default BrandProductDetails;