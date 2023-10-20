import { Link } from "react-router-dom";

const BrandPrductCard = ({data}) => {

    let {imageValue,name,_id} = data
    return (
        <div className="">
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={imageValue} className="h-60 w-64" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="flex justify-between">
                    <Link  to={`/productDetaisl/${_id}`} className="py-2 px-4 text-white bg-gray-700 rounded-lg text-center">Show Details</Link>
                    <Link  to={`/productUpdate/${_id}`} className="px-4 py-2 text-white bg-gray-700 rounded-lg text-center">Update</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandPrductCard;