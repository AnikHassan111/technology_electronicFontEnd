import { useLoaderData, useParams } from "react-router-dom";
import BrandPrductCard from "./BrandPrductCard";

const BrandProduct = () => {
    let data = useLoaderData()
    let pramsData = useParams()

    let brandData = data.filter(name => name.brandName == pramsData.brandName)
    console.log('sdfjsdf', brandData);

    return (
        <div className="grid md:grid-cols-2 grid-cols-1 mx-5 max-w-5xl md:mx-auto gap-10 mt-10">
            {
                brandData.map(product => <BrandPrductCard key={product._id} data={product}></BrandPrductCard>)
            }
        </div>
    );
};

export default BrandProduct;