import { useContext } from "react";
import { ContextApi } from "../AuthProvider/AuthProvider";


const BrandProductDetailsCard = ({ data }) => {
    let {user} = useContext(ContextApi) 
    console.log(user);
    console.log(data);
    let { brandName, imageValue, name, price, producttype, rating, shrotDescription } = data
    let obj = {
        brandName, imageValue, name, price, producttype, rating, shrotDescription,
    }

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={data.imageValue} className="h-60" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> Brand-Name: {data.brandName}</h2>
                    <h2 className="card-title"> Product: {data.producttype}</h2>
                    <h2 className="card-title"> Phone-Name: {data.name}</h2>
                    <h2 className="card-title"> Phone-Rating: {data.rating}</h2>
                    <h2 className="card-title"> Phone-Rating: {data.shrotDescription}</h2>
                    <button onClick={handleClickAddCart} className="py-2 px-4 w-fit rounded-lg bg-slate-900 text-white">Add to Cart</button>
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default BrandProductDetailsCard;