import { useEffect, useState } from "react";
import BrandDataCard from "./BrandDataCard";
import Footer from "../Footer/Footer";
import image from '../../public/image/marvin-meyer-SYTO3xs06fU-unsplash.jpg'

const Home = () => {

    let [brandData, setBrandData] = useState([])

    // console.log(brandData);
    useEffect(() => {
        fetch('http://localhost:5000/brandName')
            .then(res => res.json())
            .then(data => setBrandData(data))
    }, [])

    return (
        <div>

            <div className="h-96 bg-black overflow-hidden my-5">
                <img src={image} className=" w-full" alt="" />
            </div>
            <div className="max-w-7xl lg:mx-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 my-12 mx-5">
            {
                brandData.map(brand => <BrandDataCard key={brand._id} data={brand}></BrandDataCard>)
            }
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Home;