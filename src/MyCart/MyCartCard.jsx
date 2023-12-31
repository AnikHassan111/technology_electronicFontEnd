import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCartCard = ({ data, setAllCart, allCard }) => {
    let { imageValue, name, _id } = data



    const handleDeleteCard = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://product-brand-di2oquojb-anik-hassans-projects.vercel.app/cartitem/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            let remaining = allCard.filter(cartData => cartData._id !== _id)
                            setAllCart(remaining)
                        }

                    })
                    console.log('sdhsljhf');
            }
        })
    }
    return (
        <div className="">
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={imageValue} className="h-60 w-64" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="flex justify-between">
                    <Link  to={`/productUpdate/${_id}`} className="px-4 py-2 text-white bg-gray-700 rounded-lg text-center">Update</Link>
                        <Link onClick={handleDeleteCard} className="px-4 py-2 text-white bg-gray-700 rounded-lg text-center">Delete Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCartCard;