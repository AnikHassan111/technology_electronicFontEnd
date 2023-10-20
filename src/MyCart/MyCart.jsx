import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ContextApi } from "../AuthProvider/AuthProvider";
import MyCartCard from "./MyCartCard";

const MyCart = () => {

    let { user } = useContext(ContextApi)
    // console.log(user);

    let userEmail = user.email

    let data = useLoaderData()


    let cartData = data?.filter(cartData => cartData.userEmail === userEmail)
    // console.log(cartData);

    let [allCard, setAllCart] = useState(cartData)
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 mx-5 max-w-5xl md:mx-auto gap-10 mt-10">
            {
                allCard.map(singleData => <MyCartCard key={singleData._id} setAllCart={setAllCart} allCard={allCard} data={singleData}></MyCartCard>)
            }
        </div>

    );
};

export default MyCart;