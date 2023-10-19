import { useEffect, useState } from "react";
import BrandDataCard from "./BrandDataCard";
import Footer from "../Footer/Footer";

const Home = () => {

    let [brandData, setBrandData] = useState([])

    console.log(brandData);
    useEffect(() => {
        fetch('brandName.json')
            .then(res => res.json())
            .then(data => setBrandData(data))
    }, [])

    return (
        <div>
            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-5 my-12">
            {
                brandData.map(brand => <BrandDataCard key={brand.id} data={brand}></BrandDataCard>)
            }
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Home;