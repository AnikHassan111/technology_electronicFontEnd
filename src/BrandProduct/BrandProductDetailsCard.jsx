

const BrandProductDetailsCard = ({data}) => {
    console.log(data);
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
                    <p></p>
                </div>
            </div>
        </div>
    );
};

export default BrandProductDetailsCard;