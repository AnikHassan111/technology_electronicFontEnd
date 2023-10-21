import { useLoaderData, useParams } from "react-router-dom";
import BrandPrductCard from "./BrandPrductCard";

const BrandProduct = () => {
    let data = useLoaderData()
    let pramsData = useParams()

    let brandData = data.filter(name => name.brandName == pramsData.brandName)

    return (
        <div>
            <div>
                <div className="carousel w-full mb-10">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/n8GN4VT/download-9.jpg" className="w-full h-96" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/rZWXSKQ/images-5.jpg" className="w-full h-96" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/7pL7r0n/images-6.jpg" className="w-full h-96" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 mx-4 max-w-5xl md:mx-auto gap-10 mt-10">

                {
                    brandData.length > 0 ? brandData.map(product => <BrandPrductCard key={product._id} data={product}></BrandPrductCard>)
                        : <p className="text-5xl font-semibold">Product Not Available</p>
                }
            </div>
        </div>
    );
};

export default BrandProduct;