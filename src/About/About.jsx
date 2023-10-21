import { useEffect, useState } from "react";
import AboutCard from "./AboutCard";

const About = () => {
    let [brandData, setBrandData] = useState([])

    useEffect(() => {
        fetch('https://product-brand-di2oquojb-anik-hassans-projects.vercel.app/brandName')
            .then(res => res.json())
            .then(data => setBrandData(data))
    }, [])
    return (
        <div className="max-w-7xl mx-auto mt-12">
            
            {
                brandData.map(brand => <AboutCard key={brand._id} data={brand}></AboutCard>)
            }
        </div>
    );
};

export default About;