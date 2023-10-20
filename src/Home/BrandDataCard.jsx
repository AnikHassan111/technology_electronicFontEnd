import { Link } from "react-router-dom";

const BrandDataCard = ({ data }) => {
    let { name, img, _id } = data


    

    return (
        <div>
            <Link to={`/${name}`}>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src={img} className="h-40" alt="Shoes" /></figure>
                    <div className="card-body items-center">
                        <h2 className="card-title ">{name}</h2>

                    </div>
                </div>
                </Link>
        </div>
    );
};

export default BrandDataCard;