import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ProductUpdate = () => {

    let [select, setSelect] = useState('')

    let data = useLoaderData()
    // console.log(data);

    let {brandName, name,imageValue,price,producttype,shrotDescription,rating,_id} = data
    let [bb,setBB] = useState(brandName)
    const handleSubmit = event => {
        event.preventDefault()
        let form = event.target
        let name = form.name.value
        let brandName = bb
        let imageValue = form.imageValue.value
        let price = form.price.value
        let producttype = form.producttype.value
        let shrotDescription = form.shrotDescription.value
        let rating = form.rating.value

        let productObj = { name, brandName, imageValue, price, producttype, shrotDescription, rating }


        console.log(productObj);

        fetch(`http://localhost:5000/updateproduct/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productObj)
        })
            .then(res => res.json())
            .then(data => {

                if(data.modifiedCount > 0){
                    Swal.fire({
                        title: 'success',
                        text: 'Product Update Successfull',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                    }
            })
        form.reset()

    }
    return (
        <div className="max-w-7xl md:mx-auto my-5 mx-5">
            <form onSubmit={handleSubmit}>
                <div className="bg-gray-200 rounded-lg p-10 ">
                    <div className=" md:flex gap-5 mb-4">
                        <div className="md:w-1/2">
                            <h1 className="font-semibold text-2xl mb-2">Name</h1>
                            <input type="text" name="name" defaultValue={name} className="py-2 px-4 rounded-md w-full " placeholder="Name" />
                        </div>
                        <div className="md:w-1/2">
                            <h1 className="font-semibold text-2xl mb-2">Brand Name</h1>
                            <select onChange={e => setSelect(e.target.value)} className="select w-full ">
                                <option>Pick Brand Name</option>
                                <option>Apple</option>
                                <option>Sumsung</option>
                                <option>Sony</option>
                                <option>OnePlus</option>
                                <option>Google</option>
                                <option>Realme</option>
                            </select>
                        </div>
                    </div>
                    <div className="md:flex gap-5 mb-4">
                        <div className="md:w-1/2">
                            <h1 className="font-semibold text-2xl mb-2">Product Image</h1>
                            <input type="text" defaultValue={imageValue} className="py-2  px-4 rounded-md w-full " name="imageValue" placeholder="Image ULR" />
                        </div>
                        <div className="md:w-1/2">
                            <h1 className="font-semibold text-2xl mb-2">Price</h1>
                            <input type="text" className="py-2 px-4 rounded-md w-full" name="price" defaultValue={price} placeholder="Price" />
                        </div>
                    </div>
                    <div className="md:flex gap-5 mb-4">
                        <div className="md:w-1/2">
                            <h1 className="font-semibold text-2xl mb-2">Product Type</h1>
                            <input type="text" className="py-2 px-4 rounded-md w-full " name="producttype" defaultValue={producttype} placeholder="Product Type" />
                        </div>
                        <div className="md:w-1/2">
                            <h1 className="font-semibold text-2xl mb-2">Short Description</h1>
                            <input type="text" className="py-2 px-4 rounded-md w-full" name="shrotDescription" defaultValue={shrotDescription} placeholder="Short Description" />
                        </div>
                    </div>
                    <div className="md:flex gap-5 mb-4">
                        <div className="md:w-1/2">
                            <h1 className="font-semibold text-2xl mb-2">Rating</h1>
                            <input type="text" className="py-2 px-4 rounded-md w-full " defaultValue={rating} name="rating" placeholder="Rating" />
                        </div>
                    </div>
                    <div className="w-full">
                        <input type="submit" className="cursor-pointer py-2 rounded-lg btn-block bg-slate-600 text-white" value="Update" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProductUpdate;