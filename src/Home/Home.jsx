import {  useEffect, useState } from "react";
import BrandDataCard from "./BrandDataCard";
import Footer from "../Footer/Footer";
import image from '../../public/image/marvin-meyer-SYTO3xs06fU-unsplash.jpg'

const Home = () => {

    let [brandData, setBrandData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/brandName')
            .then(res => res.json())
            .then(data => setBrandData(data))
    }, [])

    return (
        <div>

            <div className="h-96 bg-black overflow-hidden my-5 relative">
                <img src={image} className=" w-full h-96 md:h-auto opacity-40" alt="" />
                <div className="absolute lg:top-40 top-20 md:top-32 text-white text-center lg:left-96 ">
                    <h1 className="text-5xl font-semibold">Most Popular Brand</h1>
                    <p className="text-xl mt-3 text-gray-200">Discover the essence of luxury and sophistication with the Elysian brand. Elysian is synonymous with elegance, quality, and timeless style</p>
                </div>
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