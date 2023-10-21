import { useLoaderData, useParams } from "react-router-dom";
import BrandPrductCard from "./BrandPrductCard";

const BrandProduct = () => {
    let data = useLoaderData()
    let pramsData = useParams()

    let brandData = data.filter(name => name.brandName == pramsData.brandName)

    return (
        <div>
            <div>

            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 mx-4 max-w-5xl md:mx-auto gap-10 mt-10">

                {
                    brandData.length > 0 ? brandData.map(product => <BrandPrductCard key={product._id} data={product}></BrandPrductCard>)
                        : <p className="text-5xl font-semibold">Product Not Available</p>
                }
            </div>
        </div>
    );
};

export default BrandProduct;