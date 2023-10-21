import { useContext } from "react";
import { ContextApi } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const BrandProductDetailsCard = ({ data }) => {
    let {user} = useContext(ContextApi) 
    console.log(user.email);
    let userEmail = user.email
    console.log(data);
    let { brandName, imageValue, name, price, producttype, rating, shrotDescription,_id } = data
    let obj = {
        brandName, imageValue, name, price, producttype, rating, shrotDescription,userEmail,_id
    }
// acknowledged
    const handleClickAddCart = e =>{
        fetch(`https://product-brand-di2oquojb-anik-hassans-projects.vercel.app/addCart`,{
            method:"POST",
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify(obj)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                Swal.fire({
                    title: 'success',
                    text: 'Add Product Successfull',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                }
        })
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